import React, { useState } from 'react';
import { ArrowLeft, Palette, Sun, Moon, Type, ArrowRight } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent } from '@/components/ui/card';
import { ThemeConfig } from '@/types/dashboard';
import { useTheme } from '@/lib/theme-provider';

interface ThemeCustomizationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBack: () => void;
  onContinue: () => void;
  themeConfig: ThemeConfig;
  onThemeChange: (config: ThemeConfig) => void;
}

const predefinedColors = [
  '#6D28D9', // Purple (default)
  '#004aad', // Blue
  '#059669', // Green
  '#DC2626', // Red
  '#D97706', // Orange
  '#EC4899', // Pink
  '#0EA5E9', // Sky
  '#8B5CF6', // Violet
];

const fontOptions = [
  'Inter',
  'Roboto',
  'Poppins',
  'Open Sans',
  'Montserrat',
  'Lato',
  'Nunito',
  'Raleway',
];

export const ThemeCustomizationModal: React.FC<ThemeCustomizationModalProps> = ({
  isOpen,
  onClose,
  onBack,
  onContinue,
  themeConfig,
  onThemeChange,
}) => {
  const { updateTheme } = useTheme();
  const [localConfig, setLocalConfig] = useState<ThemeConfig>(themeConfig);

  const handleConfigChange = (updates: Partial<ThemeConfig>) => {
    const newConfig = { ...localConfig, ...updates };
    setLocalConfig(newConfig);
    onThemeChange(newConfig);
    updateTheme(newConfig);
  };

  const handleColorChange = (color: string) => {
    handleConfigChange({ primaryColor: color });
  };

  const handleDarkModeToggle = (darkMode: boolean) => {
    handleConfigChange({ darkMode });
  };

  const handleFontChange = (fontFamily: string) => {
    handleConfigChange({ fontFamily });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl h-[90vh] flex flex-col p-0 overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white p-6">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-3">
              <Palette className="w-8 h-8" />
              Theme Customization
            </DialogTitle>
            <p className="text-indigo-200 mt-2">
              Customize colors, fonts, and appearance
            </p>
          </DialogHeader>
        </div>
        
        <div className="flex-1 flex flex-col md:flex-row min-h-0">
          {/* Theme Settings Panel */}
          <div className="w-full md:w-2/5 bg-slate-50 dark:bg-slate-900 flex flex-col border-r border-slate-200 dark:border-slate-800">
            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              {/* Color Customization */}
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="bg-indigo-600 p-2 rounded-lg">
                    <Palette className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    Color Scheme
                  </h3>
                </div>
                
                {/* Primary Color */}
                <div className="mb-4">
                  <Label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 block">
                    Primary Color
                  </Label>
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-12 h-12 rounded-lg border-2 border-slate-300 dark:border-slate-700 shadow-md"
                      style={{ backgroundColor: localConfig.primaryColor }}
                    />
                    <Input
                      type="color"
                      value={localConfig.primaryColor}
                      onChange={(e) => handleColorChange(e.target.value)}
                      className="w-12 h-12 p-0 border-2 border-slate-300 dark:border-slate-700 cursor-pointer rounded-lg"
                    />
                    <Input
                      type="text"
                      value={localConfig.primaryColor}
                      onChange={(e) => handleColorChange(e.target.value)}
                      className="flex-1 font-mono text-sm bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 rounded-lg"
                    />
                  </div>
                </div>

                {/* Color Palette */}
                <div className="mb-4">
                  <Label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 block">
                    Quick Colors
                  </Label>
                  <div className="grid grid-cols-8 gap-2">
                    {predefinedColors.map((color) => (
                      <button
                        key={color}
                        onClick={() => handleColorChange(color)}
                        className={`w-6 h-6 rounded-lg transition-all shadow ${
                          localConfig.primaryColor === color
                            ? 'ring-2 ring-white scale-110'
                            : 'hover:ring-1 hover:ring-slate-400'
                        }`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Dark/Light Mode */}
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="bg-indigo-600 p-2 rounded-lg">
                    {localConfig.darkMode ? (
                      <Moon className="w-4 h-4 text-white" />
                    ) : (
                      <Sun className="w-4 h-4 text-white" />
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    Appearance
                  </h3>
                </div>
                
                <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-slate-900 dark:text-slate-100">Dark Mode</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Toggle dark appearance
                        </p>
                      </div>
                      <Switch
                        checked={localConfig.darkMode}
                        onCheckedChange={handleDarkModeToggle}
                        className="data-[state=checked]:bg-indigo-600"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Typography */}
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="bg-indigo-600 p-2 rounded-lg">
                    <Type className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    Typography
                  </h3>
                </div>
                
                <div className="mb-4">
                  <Label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 block">
                    Font Family
                  </Label>
                  <Select value={localConfig.fontFamily} onValueChange={handleFontChange}>
                    <SelectTrigger className="bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                      {fontOptions.map((font) => (
                        <SelectItem 
                          key={font} 
                          value={font}
                          className="hover:bg-slate-100 dark:hover:bg-slate-700"
                        >
                          <span style={{ fontFamily: font }}>{font}</span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          {/* Live Preview */}
          <div className="w-full md:w-3/5 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800 flex flex-col">
            <div className="flex-1 overflow-y-auto p-6 flex items-center justify-center">
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg w-full max-w-md border border-slate-200 dark:border-slate-700">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${localConfig.primaryColor}20` }}
                      >
                        <Palette 
                          className="w-5 h-5"
                          style={{ color: localConfig.primaryColor }}
                        />
                      </div>
                      <h2 
                        className="text-xl font-bold"
                        style={{ 
                          fontFamily: localConfig.fontFamily,
                          color: 'inherit'
                        }}
                      >
                        Theme Preview
                      </h2>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="text-center">
                      <div 
                        className="mx-auto mb-4 flex items-center justify-center"
                      >
                        <div 
                          className="w-20 h-20 rounded-full flex items-center justify-center"
                        >
                          <Palette 
                            className="w-10 h-10"
                            style={{ color: localConfig.primaryColor }}
                          />
                        </div>
                      </div>
                      <h3 
                        className="text-2xl font-bold mb-4"
                        style={{ 
                          fontFamily: localConfig.fontFamily,
                          color: 'inherit'
                        }}
                      >
                        Live Preview
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 mb-6">
                        See your theme customizations applied in real-time
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <Button 
                        style={{ 
                          backgroundColor: localConfig.primaryColor,
                          fontFamily: localConfig.fontFamily
                        }}
                        className="text-white w-full py-4 rounded-xl text-lg font-bold shadow-lg"
                      >
                        Primary Button
                      </Button>
                      
                      <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-xl border border-slate-200 dark:border-slate-600">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <div 
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: localConfig.primaryColor }}
                            ></div>
                            <span style={{ fontFamily: localConfig.fontFamily }}>
                              Card Title
                            </span>
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">Info</div>
                        </div>
                        <p className="text-slate-600 dark:text-slate-300 text-sm">
                          This card demonstrates how text and UI elements will look with your selected theme.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer with Navigation */}
        <div className="flex justify-between p-6 border-t border-slate-200 dark:border-slate-800">
          <Button 
            variant="outline" 
            onClick={onBack}
            className="bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 py-3 px-6 rounded-lg font-medium flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Design
          </Button>
          <Button 
            onClick={onContinue}
            className="bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 text-white py-3 px-6 rounded-lg font-medium flex items-center gap-2"
          >
            Continue to Download
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
