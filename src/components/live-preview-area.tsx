import React, { useState } from 'react';
import { Monitor, Tablet, Smartphone, Expand } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { DashboardPage, ThemeConfig } from '@/types/dashboard';
import { cn } from '@/lib/utils';
import * as LucideIcons from 'lucide-react';

interface LivePreviewAreaProps {
  selectedPages: DashboardPage[];
  themeConfig: ThemeConfig;
}

type ViewportSize = 'desktop' | 'tablet' | 'mobile';

export const LivePreviewArea: React.FC<LivePreviewAreaProps> = ({
  selectedPages,
  themeConfig,
}) => {
  const [viewportSize, setViewportSize] = useState<ViewportSize>('desktop');

  const getViewportClasses = () => {
    switch (viewportSize) {
      case 'tablet':
        return 'max-w-3xl';
      case 'mobile':
        return 'max-w-sm';
      default:
        return 'w-full';
    }
  };

  const getIconComponent = (iconName: string) => {
    return (LucideIcons as any)[iconName] || LucideIcons.Folder;
  };

  const mockStats = [
    { label: 'Total Revenue', value: '$24,500', change: '+12%', icon: 'DollarSign', color: 'primary' },
    { label: 'Active Tasks', value: '47', change: '5 due today', icon: 'CheckSquare', color: 'blue' },
    { label: 'Team Members', value: '12', change: '2 new this week', icon: 'Users', color: 'green' },
    { label: 'Completion Rate', value: '94%', change: '+3% this quarter', icon: 'TrendingUp', color: 'purple' },
  ];

  const mockTasks = [
    { title: 'Update dashboard design', status: 'completed', time: '2h ago' },
    { title: 'Review expense reports', status: 'in-progress', time: '1d ago' },
    { title: 'Team meeting preparation', status: 'pending', time: '3d ago' },
  ];

  return (
    <div className="flex-1 bg-slate-900 flex flex-col">
      <div className="p-6 border-b border-slate-700">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">Live Preview</h2>
          <div className="flex items-center space-x-3">
            <div className="flex bg-slate-800 rounded-lg p-1">
              <Button
                variant={viewportSize === 'desktop' ? 'secondary' : 'ghost'}
                size="sm"
                onClick={() => setViewportSize('desktop')}
                className="px-3 py-1 text-sm"
              >
                <Monitor className="w-4 h-4 mr-1" />
                Desktop
              </Button>
              <Button
                variant={viewportSize === 'tablet' ? 'secondary' : 'ghost'}
                size="sm"
                onClick={() => setViewportSize('tablet')}
                className="px-3 py-1 text-sm"
              >
                <Tablet className="w-4 h-4 mr-1" />
                Tablet
              </Button>
              <Button
                variant={viewportSize === 'mobile' ? 'secondary' : 'ghost'}
                size="sm"
                onClick={() => setViewportSize('mobile')}
                className="px-3 py-1 text-sm"
              >
                <Smartphone className="w-4 h-4 mr-1" />
                Mobile
              </Button>
            </div>
            <Button variant="ghost" size="sm" className="text-white">
              <Expand className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Browser Mock */}
      <div className="flex-1 p-6">
        <div 
          className={cn(
            "bg-white dark:bg-slate-800 rounded-lg shadow-2xl h-full overflow-hidden mx-auto transition-all duration-300",
            getViewportClasses()
          )}
          style={{
            '--primary': themeConfig.primaryColor,
            fontFamily: themeConfig.fontFamily,
          } as React.CSSProperties}
        >
          {/* Browser Header */}
          <div className="bg-slate-100 dark:bg-slate-700 border-b border-slate-200 dark:border-slate-600 px-4 py-3 flex items-center space-x-2">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex-1 bg-white dark:bg-slate-600 rounded px-3 py-1 text-sm text-slate-500 dark:text-slate-300 ml-4">
              localhost:3000/dashboard
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="h-full bg-slate-50 dark:bg-slate-900 overflow-y-auto">
            {selectedPages.length === 0 ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center text-slate-500 dark:text-slate-400">
                  <LucideIcons.Monitor className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <h3 className="text-lg font-semibold mb-2">No Pages Selected</h3>
                  <p className="text-sm">Select pages from the sidebar to see the preview</p>
                </div>
              </div>
            ) : (
              <>
                {/* Dashboard Header */}
                <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                      {selectedPages[0]?.name || 'Dashboard'}
                    </h1>
                    <Button
                      size="sm"
                      style={{ backgroundColor: themeConfig.primaryColor }}
                      className="text-white"
                    >
                      <LucideIcons.Plus className="w-4 h-4 mr-2" />
                      New Task
                    </Button>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-6">
                  {/* Stats Cards */}
                  <div className={cn(
                    "grid gap-6 mb-6",
                    viewportSize === 'mobile' ? 'grid-cols-1' : 
                    viewportSize === 'tablet' ? 'grid-cols-2' : 'grid-cols-4'
                  )}>
                    {mockStats.map((stat, index) => {
                      const IconComponent = getIconComponent(stat.icon);
                      return (
                        <Card key={index}>
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</p>
                                <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">{stat.value}</p>
                              </div>
                              <div 
                                className="p-3 rounded-full"
                                style={{ 
                                  backgroundColor: `${themeConfig.primaryColor}20`,
                                  color: themeConfig.primaryColor 
                                }}
                              >
                                <IconComponent className="w-5 h-5" />
                              </div>
                            </div>
                            <div className="mt-2 text-xs" style={{ color: themeConfig.primaryColor }}>
                              {stat.change}
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>

                  {/* Charts Row */}
                  <div className={cn(
                    "grid gap-6",
                    viewportSize === 'mobile' ? 'grid-cols-1' : 'grid-cols-2'
                  )}>
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">
                          Revenue Trend
                        </h3>
                        <div className="h-48 bg-gradient-to-t from-primary/10 to-transparent rounded-lg flex items-end justify-center">
                          <div className="text-center text-slate-500 dark:text-slate-400">
                            <LucideIcons.BarChart3 className="w-8 h-8 mx-auto mb-2 opacity-50" />
                            <p className="text-sm">Chart Visualization</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">
                          Recent Tasks
                        </h3>
                        <div className="space-y-3">
                          {mockTasks.map((task, index) => (
                            <div key={index} className="flex items-center space-x-3 p-2 bg-slate-50 dark:bg-slate-700 rounded">
                              <div 
                                className={cn(
                                  "w-2 h-2 rounded-full",
                                  task.status === 'completed' ? 'bg-green-500' :
                                  task.status === 'in-progress' ? 'bg-yellow-500' : 'bg-blue-500'
                                )}
                              />
                              <span className="text-sm text-slate-700 dark:text-slate-300 flex-1">
                                {task.title}
                              </span>
                              <span className="text-xs text-slate-500 dark:text-slate-400">
                                {task.time}
                              </span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
