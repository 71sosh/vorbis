import React from 'react';
import { GripVertical, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { DashboardPage } from '@/types/dashboard';
import * as LucideIcons from 'lucide-react';
import { cn } from '@/lib/utils';

interface SelectedPagesPanelProps {
  selectedPages: DashboardPage[];
  onRemovePage: (pageId: string) => void;
  onReorderPages: (pages: DashboardPage[]) => void;
  onContinueToTheme: () => void;
}

export const SelectedPagesPanel: React.FC<SelectedPagesPanelProps> = ({
  selectedPages,
  onRemovePage,
  onReorderPages,
  onContinueToTheme,
}) => {
  const getIconComponent = (iconName: string) => {
    return (LucideIcons as any)[iconName] || LucideIcons.Folder;
  };

  const handleDragStart = (e: React.DragEvent, index: number) => {
    e.dataTransfer.setData('text/plain', index.toString());
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault();
    const dragIndex = parseInt(e.dataTransfer.getData('text/plain'));
    
    if (dragIndex === dropIndex) return;

    const newPages = [...selectedPages];
    const [draggedPage] = newPages.splice(dragIndex, 1);
    
    // Adjust the drop index if dragging to a position after the original
    const adjustedDropIndex = dragIndex < dropIndex ? dropIndex - 1 : dropIndex;
    newPages.splice(adjustedDropIndex, 0, draggedPage);
    
    onReorderPages(newPages);
  };

  return (
    <div className="w-80 bg-slate-50 dark:bg-slate-900 border-r border-slate-200 dark:border-slate-700 flex flex-col">
      <div className="p-6 border-b border-slate-200 dark:border-slate-700">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
          Selected Pages
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          {selectedPages.length} page{selectedPages.length !== 1 ? 's' : ''} selected • Drag to reorder
        </p>
      </div>

      <div className="flex-1 p-6 overflow-y-auto">
        {selectedPages.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-slate-400 dark:text-slate-500 mb-4">
              <LucideIcons.Folder className="w-12 h-12 mx-auto mb-2" />
              <p className="text-sm">No pages selected</p>
              <p className="text-xs">Choose pages from the sidebar to get started</p>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            {selectedPages.map((page, index) => {
              const IconComponent = getIconComponent(page.icon);
              
              return (
                <Card
                  key={page.id}
                  className="cursor-move hover:shadow-md transition-shadow duration-200"
                  draggable
                  onDragStart={(e) => handleDragStart(e, index)}
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, index)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <GripVertical className="w-4 h-4 text-slate-400" />
                        <IconComponent className="w-4 h-4 text-primary" />
                        <span className="font-medium text-slate-800 dark:text-slate-200">
                          {page.name}
                        </span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onRemovePage(page.id)}
                        className="text-slate-400 hover:text-red-500 transition-colors p-1 h-auto"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 ml-7">
                      {page.description}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>

      <div className="p-6 border-t border-slate-200 dark:border-slate-700">
        <Button
          onClick={onContinueToTheme}
          disabled={selectedPages.length === 0}
          className="w-full"
        >
          Continue to Theme Setup
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};
