import React, { useState, useMemo } from 'react';
import { Search, Star, Briefcase, FolderOpen, Target, ShoppingBag, BarChart3, Users, Brain, Settings } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { DashboardPage, TemplatePreset } from '@/types/dashboard';
import { dashboardPages, categories, templatePresets, getCategoryIcon } from '@/lib/dashboard-templates';
import * as LucideIcons from 'lucide-react';

interface PageSelectionSidebarProps {
  selectedPages: DashboardPage[];
  onPageToggle: (page: DashboardPage) => void;
  onPresetSelect: (preset: TemplatePreset) => void;
}

const categoryIcons: Record<string, React.ComponentType<any>> = {
  'Essential Modules': Star,
  'Business Tools': Briefcase,
  'Project Management': FolderOpen,
  'Sales CRM': Target,
  'E-commerce': ShoppingBag,
  'Marketing Analytics': BarChart3,
  'HR Management': Users,
  'AI-Powered': Brain,
  'Specialized': Settings,
};

export const PageSelectionSidebar: React.FC<PageSelectionSidebarProps> = ({
  selectedPages,
  onPageToggle,
  onPresetSelect,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [activePreset, setActivePreset] = useState<string | null>(null);

  const filteredPages = useMemo(() => {
    return dashboardPages.filter(page => {
      const matchesSearch = page.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           page.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All Categories' || page.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const groupedPages = useMemo(() => {
    const grouped: Record<string, DashboardPage[]> = {};
    filteredPages.forEach(page => {
      if (!grouped[page.category]) {
        grouped[page.category] = [];
      }
      grouped[page.category].push(page);
    });
    return grouped;
  }, [filteredPages]);

  const isPageSelected = (page: DashboardPage) => {
    return selectedPages.some(selected => selected.id === page.id);
  };

  const handlePresetClick = (preset: TemplatePreset) => {
    setActivePreset(preset.id);
    onPresetSelect(preset);
    setTimeout(() => setActivePreset(null), 1000); // Remove active state after animation
  };

  const getIconComponent = (iconName: string) => {
    return (LucideIcons as any)[iconName] || LucideIcons.Folder;
  };

  return (
    <div className="w-96 bg-white border-r border-slate-200 flex flex-col">
      {/* Search and Filters */}
      <div className="p-6 border-b border-slate-200">
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
          <Input
            type="text"
            placeholder="Search dashboard pages..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        
        {/* Template Presets */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Quick Presets
          </label>
          <div className="grid grid-cols-3 gap-2">
            {templatePresets.map((preset) => (
              <Button
                key={preset.id}
                variant={activePreset === preset.id ? "default" : "outline"}
                size="sm"
                onClick={() => handlePresetClick(preset)}
                className={cn(
                  "text-xs font-medium transition-all duration-300",
                  activePreset === preset.id && "scale-105"
                )}
              >
                {preset.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Categories
          </label>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All Categories">All Categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Page Categories */}
      <div className="flex-1 overflow-y-auto p-6">
        {Object.entries(groupedPages).map(([category, pages]) => {
          const CategoryIcon = categoryIcons[category] || Settings;
          
          return (
            <div key={category} className="mb-6">
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-3 flex items-center">
                <CategoryIcon className="w-4 h-4 mr-2 text-primary" />
                {category}
                {category === 'AI-Powered' && (
                  <Badge variant="secondary" className="ml-2 text-xs">
                    New
                  </Badge>
                )}
              </h3>
              <div className="space-y-2">
                {pages.map((page) => {
                  const IconComponent = getIconComponent(page.icon);
                  const isSelected = isPageSelected(page);
                  
                  return (
                    <div
                      key={page.id}
                      onClick={() => onPageToggle(page)}
                      className={cn(
                        "flex items-center justify-between p-3 border rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md",
                        isSelected
                          ? "bg-primary/10 border-primary/30 dark:bg-primary/20"
                          : "bg-slate-50 border-slate-200 hover:bg-slate-100 dark:bg-slate-800 dark:border-slate-700 dark:hover:bg-slate-700"
                      )}
                    >
                      <div className="flex items-center space-x-3">
                        <IconComponent 
                          className={cn(
                            "w-4 h-4",
                            isSelected ? "text-primary" : "text-slate-600 dark:text-slate-400"
                          )} 
                        />
                        <div>
                          <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                            {page.name}
                          </span>
                          {page.isNew && (
                            <Badge variant="secondary" className="ml-2 text-xs">
                              New
                            </Badge>
                          )}
                        </div>
                      </div>
                      {isSelected && (
                        <div className="w-2 h-2 bg-primary rounded-full" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

