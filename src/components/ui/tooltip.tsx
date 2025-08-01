import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

const TooltipProvider = TooltipPrimitive.Provider;
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;
const TooltipContent = TooltipPrimitive.Content;

const TooltipComponent = ({ 
  children, 
  content,
  delayDuration = 300,
  side = "top"
}: { 
  children: React.ReactNode;
  content: React.ReactNode;
  delayDuration?: number;
  side?: "top" | "right" | "bottom" | "left";
}) => {
  return (
    <Tooltip delayDuration={delayDuration}>
      <TooltipTrigger asChild>
        {children}
      </TooltipTrigger>
      <TooltipContent 
        side={side}
        className="bg-background text-foreground p-2 rounded-md shadow-lg border border-border text-sm max-w-xs"
      >
        {content}
      </TooltipContent>
    </Tooltip>
  );
};

export { TooltipProvider, TooltipComponent as Tooltip };
