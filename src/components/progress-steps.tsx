import React from 'react';
import { BuilderStep } from '@/types/dashboard';

interface ProgressStepsProps {
  currentStep: BuilderStep;
}

const steps = [
  { id: 'pages', label: 'Select Pages' },
  { id: 'design', label: 'Design' },
  { id: 'theme', label: 'Theme' },
  { id: 'download', label: 'Download' },
];

export const ProgressSteps: React.FC<ProgressStepsProps> = ({ currentStep }) => {
  const currentStepIndex = steps.findIndex(step => step.id === currentStep);
  
  return (
    <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-700">
      <div className="flex justify-between relative">
        {steps.map((step, index) => (
          <div 
            key={step.id} 
            className="flex flex-col items-center z-10 bg-slate-50 dark:bg-slate-900 px-2"
          >
            <div className={`
              w-8 h-8 rounded-full flex items-center justify-center mb-2
              ${index <= currentStepIndex 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-slate-200 text-slate-500 dark:bg-slate-700 dark:text-slate-400'}
            `}>
              {index + 1}
            </div>
            <span className={`
              text-sm font-medium
              ${index <= currentStepIndex 
                ? 'text-slate-900 dark:text-slate-100' 
                : 'text-slate-500 dark:text-slate-400'}
            `}>
              {step.label}
            </span>
          </div>
        ))}
        <div className="absolute top-4 left-10 right-10 h-0.5 bg-slate-200 dark:bg-slate-700 z-0">
          <div 
            className="bg-primary h-full transition-all duration-500"
            style={{ width: `${(currentStepIndex / (steps.length - 1)) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};
