import React, { useState } from 'react';
import { LayoutDashboard, Settings, ChevronLeft, ChevronRight, Paintbrush } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { cn } from '@/lib/utils';
import { DashboardPage } from '@/types/dashboard';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

interface ViewSidebarProps {
  selectedPages: DashboardPage[];
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

const ViewSidebar: React.FC<ViewSidebarProps> = ({
  selectedPages,
  isCollapsed,
  onToggleCollapse
}) => {
  const [isStyleModalOpen, setIsStyleModalOpen] = useState(false);
  const [sidebarStyle, setSidebarStyle] = useState('minimalistic');
  const getIconComponent = (iconName: string) => {
    return (LucideIcons as any)[iconName] || LucideIcons.LayoutDashboard;
  };

  const styleClasses = {
    minimalistic: "bg-slate-900",
    glass: "bg-opacity-20 backdrop-blur-lg border border-slate-700",
    dark: "bg-slate-950 border-r border-slate-800",
    elegant: "bg-gradient-to-b from-slate-800 to-slate-900 border-r border-slate-700"
  };

  return (
    <>
      <div 
        className={cn(
          "text-slate-200 flex flex-col transition-all duration-300 overflow-hidden relative",
          isCollapsed ? "w-16" : "w-60",
          styleClasses[sidebarStyle as keyof typeof styleClasses]
        )}
      >
        <div className="p-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-primary rounded-lg p-2">
              <LayoutDashboard className="text-white w-5 h-5" />
            </div>
            {!isCollapsed && (
              <h2 className="ml-3 text-lg font-semibold">Vorbis</h2>
            )}
          </div>
          <button 
            onClick={onToggleCollapse}
            className="bg-slate-800 rounded-full p-1 text-slate-400 hover:text-white"
          >
            {isCollapsed ? (
              <ChevronRight className="w-4 h-4" />
            ) : (
              <ChevronLeft className="w-4 h-4" />
            )}
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          <div className="space-y-1">
            {selectedPages.map((page) => {
              const IconComponent = getIconComponent(page.icon);
              return (
                <div 
                  key={page.id} 
                  className={cn(
                    "flex items-center py-3 px-4 cursor-pointer transition-colors",
                    "hover:bg-slate-800"
                  )}
                >
                  <IconComponent className="w-5 h-5 text-slate-400" />
                  {!isCollapsed && (
                    <span className="ml-3 text-sm">{page.name}</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="p-4 border-t border-slate-800 flex flex-col space-y-2">
          <button 
            onClick={() => setIsStyleModalOpen(true)}
            className={cn(
              "flex items-center py-2 px-2 rounded-lg hover:bg-slate-800 cursor-pointer w-full",
              !isCollapsed ? "justify-start" : "justify-center"
            )}
          >
            <Paintbrush className="w-5 h-5 text-slate-400" />
            {!isCollapsed && (
              <span className="ml-3 text-sm">Sidebar Style</span>
            )}
          </button>
          <div className={cn(
            "flex items-center py-2 px-2 rounded-lg hover:bg-slate-800 cursor-pointer w-full",
            !isCollapsed ? "justify-start" : "justify-center"
          )}>
            <Settings className="w-5 h-5 text-slate-400" />
            {!isCollapsed && (
              <span className="ml-3 text-sm">Settings</span>
            )}
          </div>
        </div>
      </div>

      {/* Style Selection Modal */}
      <Dialog open={isStyleModalOpen} onOpenChange={setIsStyleModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Select Sidebar Style</DialogTitle>
            <DialogDescription>
              Choose a visual style for your sidebar
            </DialogDescription>
          </DialogHeader>
          
          <RadioGroup 
            defaultValue={sidebarStyle}
            onValueChange={(value) => setSidebarStyle(value)}
            className="space-y-4 mt-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="minimalistic" id="minimalistic" />
              <Label htmlFor="minimalistic" className="cursor-pointer">
                <div className="ml-2">
                  <h4 className="font-medium">Minimalistic</h4>
                  <p className="text-sm text-slate-500">Clean and simple design</p>
                </div>
              </Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="glass" id="glass" />
              <Label htmlFor="glass" className="cursor-pointer">
                <div className="ml-2">
                  <h4 className="font-medium">Glass Morphism</h4>
                  <p className="text-sm text-slate-500">Frosted glass effect</p>
                </div>
              </Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="dark" id="dark" />
              <Label htmlFor="dark" className="cursor-pointer">
                <div className="ml-2">
                  <h4 className="font-medium">Dark Elegance</h4>
                  <p className="text-sm text-slate-500">Rich dark theme</p>
                </div>
              </Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="elegant" id="elegant" />
              <Label htmlFor="elegant" className="cursor-pointer">
                <div className="ml-2">
                  <h4 className="font-medium">Elegant Gradient</h4>
                  <p className="text-sm text-slate-500">Smooth color transition</p>
                </div>
              </Label>
            </div>
          </RadioGroup>
          
          <div className="mt-6 flex justify-end">
            <Button onClick={() => setIsStyleModalOpen(false)}>Apply Style</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ViewSidebar;
