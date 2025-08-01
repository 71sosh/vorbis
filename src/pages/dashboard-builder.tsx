import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Box } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageSelectionSidebar } from '@/components/page-selection-sidebar';
import { SelectedPagesPanel } from '@/components/selected-pages-panel';
import { ThemeCustomizationModal } from '@/components/theme-customization-modal';
import { DownloadModal } from '@/components/download-modal';
import { DesignSelectionModal } from '@/components/design-selection-modal';
import { ProgressSteps } from '@/components/progress-steps';
import ViewSidebar from '@/components/view-sidebar';
import { 
  DashboardPage, 
  ThemeConfig, 
  BuilderStep, 
  TemplatePreset, 
  DashboardProject,
  PageDesign 
} from '@/types/dashboard';
import { dashboardPages } from '@/lib/dashboard-templates';
import { getDesignsForPage } from '@/lib/design-templates';
import { supabase } from '@/lib/supabaseClient';

export default function DashboardBuilder() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const projectId = searchParams.get('projectId');
  const [currentStep, setCurrentStep] = useState<BuilderStep>('pages');
  const [selectedPages, setSelectedPages] = useState<DashboardPage[]>([]);
  const [pageDesigns, setPageDesigns] = useState<PageDesign[]>([]);
  const [themeConfig, setThemeConfig] = useState<ThemeConfig>({
    primaryColor: '#6D28D9',
    darkMode: false,
    fontFamily: 'Inter',
  });
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [projectName, setProjectName] = useState('My Dashboard');
  const [loading, setLoading] = useState(true);
  const [currentProjectId, setCurrentProjectId] = useState<string | null>(projectId);

  const project: DashboardProject = {
    id: currentProjectId || '',
    selectedPages,
    themeConfig,
    projectName,
    pageDesigns,
  };

  // Load project if editing
  useEffect(() => {
    const loadProject = async () => {
      if (!projectId) {
        setLoading(false);
        return;
      }

      try {
        // Fetch project
        const { data: projectData, error: projectError } = await supabase
          .from('dashboard_projects')
          .select('*')
          .eq('id', projectId)
          .single();

        if (projectError) throw projectError;

        // Set project name
        setProjectName(projectData.name || 'My Dashboard');
        setCurrentProjectId(projectId);

        // Fetch theme config
        const { data: themeData, error: themeError } = await supabase
          .from('theme_configs')
          .select('*')
          .eq('project_id', projectId)
          .single();

        if (themeError) throw themeError;
        
        // Set theme config
        if (themeData) {
          setThemeConfig({
            primaryColor: themeData.primary_color,
            darkMode: themeData.dark_mode,
            fontFamily: themeData.font_family,
          });
        }

        // Fetch project pages
        const { data: pagesData, error: pagesError } = await supabase
          .from('project_pages')
          .select('id, template_id, design_id, sort_order, name, description, icon')
          .eq('project_id', projectId)
          .order('sort_order', { ascending: true });

        if (pagesError) throw pagesError;

        // Map to selected pages
        const loadedPages: DashboardPage[] = [];
        pagesData.forEach(page => {
          const template = dashboardPages.find(p => p.id === page.template_id);
          if (template) {
            // Create enhanced page with saved metadata
            loadedPages.push({
              ...template,
              name: page.name || template.name,
              description: page.description || template.description,
              icon: page.icon || template.icon
            });
          }
        });

        // Map to page designs
        const loadedDesigns: PageDesign[] = pagesData.map(page => ({
          pageId: page.template_id,
          designId: page.design_id
        }));

        setSelectedPages(loadedPages);
        setPageDesigns(loadedDesigns);
      } catch (error) {
        console.error('Error loading project:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProject();
  }, [projectId]);

  // Save project to Supabase
  const saveProject = async (): Promise<string> => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('User not authenticated');

    try {
      // Save/update project
      let projectIdToReturn = currentProjectId;
      
      if (currentProjectId) {
        // Update existing project
        const { error } = await supabase
          .from('dashboard_projects')
          .update({
            name: projectName,
            updated_at: new Date().toISOString()
          })
          .eq('id', currentProjectId);

        if (error) throw error;
      } else {
        // Create new project
        const { data, error } = await supabase
          .from('dashboard_projects')
          .insert({
            name: projectName,
            user_id: user.id
          })
          .select('id')
          .single();

        if (error) throw error;
        projectIdToReturn = data.id;
        setCurrentProjectId(data.id);
      }

      // Save theme config
      await supabase
        .from('theme_configs')
        .upsert({
          project_id: projectIdToReturn,
          primary_color: themeConfig.primaryColor,
          dark_mode: themeConfig.darkMode,
          font_family: themeConfig.fontFamily
        }, { onConflict: 'project_id' });

      // Delete existing pages
      await supabase
        .from('project_pages')
        .delete()
        .eq('project_id', projectIdToReturn);

      // Save new pages with additional metadata
      const pageInserts = selectedPages.map((page, index) => ({
        project_id: projectIdToReturn,
        template_id: page.id,
        design_id: pageDesigns.find(pd => pd.pageId === page.id)?.designId || 'default',
        sort_order: index,
        name: page.name,
        description: page.description || null,
        icon: page.icon || null
      }));

      await supabase
        .from('project_pages')
        .insert(pageInserts);

      return projectIdToReturn;
    } catch (error) {
      console.error('Error saving project:', error);
      throw error;
    }
  };

  const handlePageToggle = (page: DashboardPage) => {
    setSelectedPages(prev => {
      const isSelected = prev.some(p => p.id === page.id);
      if (isSelected) {
        return prev.filter(p => p.id !== page.id);
      } else {
        return [...prev, page];
      }
    });
  };

  const handleRemovePage = (pageId: string) => {
    setSelectedPages(prev => prev.filter(p => p.id !== pageId));
  };

  const handleReorderPages = (pages: DashboardPage[]) => {
    setSelectedPages(pages);
  };

  const handlePresetSelect = (preset: TemplatePreset) => {
    const presetPages = dashboardPages.filter(page => preset.pageIds.includes(page.id));
    setSelectedPages(presetPages);
  };

  const handleContinueToDesign = () => {
    const defaultDesigns = selectedPages.map(page => {
      const designs = getDesignsForPage(page.id);
      return {
        pageId: page.id,
        designId: designs.length > 0 ? designs[0].id : 'default'
      };
    });
    setPageDesigns(defaultDesigns);
    setCurrentStep('design');
  };

  const handleBackToPages = () => {
    setCurrentStep('pages');
  };

  const handleContinueToTheme = () => {
    setCurrentStep('theme');
  };

  const handleBackToDesign = () => {
    setCurrentStep('design');
  };

  const handleContinueToDownload = async () => {
    try {
      await saveProject();
    } catch (error) {
      console.error('Failed to save project:', error);
    } finally {
      setCurrentStep('download');
    }
  };

  const handleBackToTheme = () => {
    setCurrentStep('theme');
  };

  const handleThemeChange = (config: ThemeConfig) => {
    setThemeConfig(config);
  };

  const handleCloseModal = () => {
    setCurrentStep('pages');
  };

  const handleDesignSelect = (pageId: string, designId: string) => {
    setPageDesigns(prev => {
      const existing = prev.filter(pd => pd.pageId !== pageId);
      return [...existing, { pageId, designId }];
    });
  };

  const toggleSidebarCollapse = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
        <p>Loading your dashboard project...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <header className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-primary rounded-lg p-2">
              <Box className="text-primary-foreground w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                Vorbis Dashboard Builder
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Create custom React dashboards in minutes
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Help
            </Button>
            <Button 
              size="sm"
              onClick={() => navigate('/account')}
            >
              Account
            </Button>
          </div>
        </div>
      </header>

      <ProgressSteps currentStep={currentStep} />

      <div className="flex h-[calc(100vh-140px)]">
        <PageSelectionSidebar
          selectedPages={selectedPages}
          onPageToggle={handlePageToggle}
          onPresetSelect={handlePresetSelect}
        />
        
        <SelectedPagesPanel
          selectedPages={selectedPages}
          onRemovePage={handleRemovePage}
          onReorderPages={handleReorderPages}
          onContinueToTheme={handleContinueToDesign}
        />
        
        {selectedPages.length > 0 && (
          <ViewSidebar 
            selectedPages={selectedPages}
            isCollapsed={isSidebarCollapsed}
            onToggleCollapse={toggleSidebarCollapse}
          />
        )}
      </div>

      <DesignSelectionModal
        isOpen={currentStep === 'design'}
        onClose={handleCloseModal}
        onBack={handleBackToPages}
        onContinue={handleContinueToTheme}
        selectedPages={selectedPages}
        pageDesigns={pageDesigns}
        onDesignSelect={handleDesignSelect}
      />

      <ThemeCustomizationModal
        isOpen={currentStep === 'theme'}
        onClose={handleCloseModal}
        onBack={handleBackToDesign}
        onContinue={handleContinueToDownload}
        themeConfig={themeConfig}
        onThemeChange={handleThemeChange}
      />

      <DownloadModal
        isOpen={currentStep === 'download'}
        onClose={handleCloseModal}
        onBack={handleBackToTheme}
        project={project}
        onSaveProject={saveProject}
      />
    </div>
  );
}
