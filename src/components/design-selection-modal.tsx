import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { DashboardPage, PageDesign } from '@/types/dashboard';
import { getDesignsForPage } from '@/lib/design-templates';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Palette, ArrowLeft, ArrowRight } from 'lucide-react';

interface DesignSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBack: () => void;
  onContinue: () => void;
  selectedPages: DashboardPage[];
  pageDesigns: PageDesign[];
  onDesignSelect: (pageId: string, designId: string) => void;
}

export const DesignSelectionModal: React.FC<DesignSelectionModalProps> = ({
  isOpen,
  onClose,
  onBack,
  onContinue,
  selectedPages,
  pageDesigns,
  onDesignSelect,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl h-[90vh] flex flex-col p-0 overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white p-6">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-3">
              <Palette className="w-8 h-8" />
              Select Page Designs
            </DialogTitle>
            <p className="text-indigo-200 mt-2">
              Choose a design template for each page in your dashboard
            </p>
          </DialogHeader>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {selectedPages.map((page) => {
            const designs = getDesignsForPage(page.id);
            const selectedDesign = pageDesigns.find(pd => pd.pageId === page.id)?.designId;
            
            return (
              <Card key={page.id} className="border-0 shadow-lg rounded-xl overflow-hidden">
                <CardHeader className="bg-slate-50 border-b p-4">
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-3 rounded-lg mr-3">
                      <span className="text-white font-semibold">{page.name}</span>
                    </div>
                    <p className="text-slate-600">{page.description}</p>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {designs.map((design) => (
                      <div
                        key={design.id}
                        className={`border rounded-xl overflow-hidden cursor-pointer transition-all transform hover:scale-[1.02] relative ${
                          selectedDesign === design.id
                            ? 'ring-2 ring-indigo-500 border-indigo-500 bg-indigo-50 shadow-md'
                            : 'hover:border-indigo-300'
                        }`}
                        onClick={() => onDesignSelect(page.id, design.id)}
                      >
                        {selectedDesign === design.id && (
                          <div className="absolute top-2 right-2 bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                            SELECTED
                          </div>
                        )}
                        <div className="bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 h-40 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-slate-700 dark:text-slate-300 font-medium mb-1">{design.name}</div>
                            <div className="text-xs text-slate-500 dark:text-slate-400">Preview</div>
                          </div>
                        </div>
                        <div className="p-4">
                          <h4 className="font-bold text-slate-800 dark:text-white">{design.name}</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{design.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="flex justify-between p-6 border-t">
          <Button 
            variant="outline" 
            onClick={onBack}
            className="bg-white border-slate-300 hover:bg-slate-50 text-slate-800 py-3 px-6 rounded-lg font-medium flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Pages
          </Button>
          <Button 
            onClick={onContinue}
            className="bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 text-white py-3 px-6 rounded-lg font-medium flex items-center gap-2"
          >
            Continue to Theme
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
