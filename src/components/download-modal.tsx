import React, { useState } from 'react';
import { Download, ArrowLeft, FileText, Folder, Package, Check, Loader2, Save, ArrowRight } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { DashboardProject } from '@/types/dashboard';
import { generateProjectZip } from '@/lib/zip-generator';
import { supabase } from '@/lib/supabaseClient';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBack: () => void;
  project: DashboardProject;
  onSaveProject: () => Promise<string>;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({
  isOpen,
  onClose,
  onBack,
  project,
  onSaveProject,
}) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleDownload = async () => {
    try {
      setIsGenerating(true);
      setProgress(0);

      // Record download event in Supabase
      if (project.id) {
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
          await supabase
            .from('downloads')
            .insert({
              project_id: project.id,
              user_id: user.id,
              downloaded_at: new Date().toISOString()
            });
        }
      }

      // Simulate progress for better UX
      const progressSteps = [
        { message: 'Generating components...', progress: 20 },
        { message: 'Configuring theme...', progress: 40 },
        { message: 'Creating project structure...', progress: 60 },
        { message: 'Packaging files...', progress: 80 },
        { message: 'Finalizing download...', progress: 100 },
      ];

      for (const step of progressSteps) {
        setProgress(step.progress);
        await new Promise(resolve => setTimeout(resolve, 300));
      }

      const blob = await generateProjectZip(project);
      
      // Create download link
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${project.projectName.toLowerCase().replace(/\s+/g, '-')}-dashboard.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

    } catch (error) {
      console.error('Error generating project:', error);
    } finally {
      setIsGenerating(false);
      setProgress(0);
    }
  };

  const handleSaveProject = async () => {
    try {
      setIsSaving(true);
      await onSaveProject();
    } catch (error) {
      console.error('Error saving project:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const projectFeatures = [
    'React Router Setup',
    'Tailwind CSS Config',
    'Custom Theme Variables',
    'Responsive Design',
    'Component Library',
    'Dark Mode Support',
    'TypeScript Support',
    'SVG Icon System',
  ];

  const fileStructure = [
    { 
      name: 'src/', 
      type: 'folder', 
      children: [
        { name: 'App.js', type: 'file' },
        { name: 'index.js', type: 'file' },
        { name: 'index.css', type: 'file' },
        { 
          name: 'components/', 
          type: 'folder', 
          children: [
            { name: 'Layout.jsx', type: 'file' },
            { name: 'Sidebar.jsx', type: 'file' },
          ]
        },
        { 
          name: 'pages/', 
          type: 'folder', 
          children: project.selectedPages.map(page => ({ 
            name: `${page.id}.jsx`, 
            type: 'file' 
          }))
        },
      ]
    },
    { 
      name: 'public/', 
      type: 'folder', 
      children: [
        { name: 'index.html', type: 'file' },
      ]
    },
    { name: 'package.json', type: 'file' },
    { name: 'tailwind.config.js', type: 'file' },
    { name: 'README.md', type: 'file' },
  ];

  const renderFileTree = (items: any[], depth = 0) => {
    return items.map((item, index) => (
      <div key={index}>
        <div className={`flex items-center space-x-2 py-1 text-sm font-mono text-slate-700 dark:text-slate-300`} style={{ paddingLeft: `${depth * 16}px` }}>
          {item.type === 'folder' ? (
            <Folder className="w-4 h-4 text-blue-500" />
          ) : (
            <FileText className="w-4 h-4 text-slate-500" />
          )}
          <span>{item.name}</span>
        </div>
        {item.children && renderFileTree(item.children, depth + 1)}
      </div>
    ));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl h-[90vh] flex flex-col p-0 overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white p-6">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-3">
              <Package className="w-8 h-8" />
              Generate Your Dashboard
            </DialogTitle>
            <p className="text-indigo-200 mt-2">
              Ready to download your custom React project
            </p>
          </DialogHeader>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Project Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-0 shadow-lg rounded-xl overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    Project Summary
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg border border-slate-200">
                      <p className="text-sm text-slate-600">Selected Pages</p>
                      <p className="text-xl font-bold text-slate-900">
                        {project.selectedPages.length}
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-slate-200">
                      <p className="text-sm text-slate-600">Theme Color</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <div 
                          className="w-4 h-4 rounded"
                          style={{ backgroundColor: project.themeConfig.primaryColor }}
                        />
                        <p className="text-sm font-mono text-slate-900">
                          {project.themeConfig.primaryColor}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Selected Pages */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    Selected Pages
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.selectedPages.map((page) => (
                      <Badge 
                        key={page.id} 
                        variant="secondary"
                        className="bg-indigo-100 text-indigo-800 border-indigo-200"
                      >
                        {page.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg rounded-xl overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    Project Structure
                  </h3>
                </div>
                
                <div className="p-6">
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 max-h-48 overflow-y-auto">
                    {renderFileTree(fileStructure)}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Project Features */}
          <Card className="border-0 shadow-lg rounded-xl">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  Features Included
                </h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {projectFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-slate-700">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Progress Bar (shown during generation) */}
        {isGenerating && (
          <div className="p-6 border-t border-slate-200">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600">Generating project...</span>
                <span className="text-slate-900 font-medium">{progress}%</span>
              </div>
              <Progress value={progress} className="h-2 bg-slate-200" />
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="p-6 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              variant="outline" 
              onClick={onBack}
              className="flex-1 py-3 border-slate-300 text-slate-800 hover:bg-slate-50 rounded-lg font-medium flex items-center justify-center gap-2"
              disabled={isGenerating || isSaving}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Theme
            </Button>
            <Button 
              onClick={handleSaveProject} 
              className="flex-1 py-3 bg-gradient-to-r from-slate-800 to-slate-900 text-white hover:from-slate-900 hover:to-slate-950 rounded-lg font-medium flex items-center justify-center gap-2"
              disabled={isGenerating || isSaving}
            >
              {isSaving ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  Save Project
                </>
              )}
            </Button>
            <Button 
              onClick={handleDownload} 
              className="flex-1 py-3 bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 text-white rounded-lg font-medium flex items-center justify-center gap-2"
              disabled={isGenerating || isSaving}
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  Download Project
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
