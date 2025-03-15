
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

const CustomButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = "primary", 
    size = "md", 
    fullWidth = false,
    children, 
    ...props 
  }, ref) => {
    return (
      <button
        className={cn(
          // Base styles
          "inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          
          // Size variations
          {
            "text-sm px-3 py-1.5": size === "sm",
            "text-base px-4 py-2.5": size === "md",
            "text-lg px-6 py-3": size === "lg",
          },
          
          // Variant styles
          {
            // Primary - Red train color
            "bg-train-red text-white hover:bg-train-red/90 active:bg-train-red/80 focus:ring-train-red/40": 
              variant === "primary",
            
            // Secondary - Blue train color
            "bg-train-blue text-white hover:bg-train-blue/90 active:bg-train-blue/80 focus:ring-train-blue/40": 
              variant === "secondary",
            
            // Accent - Green train color
            "bg-train-green text-white hover:bg-train-green/90 active:bg-train-green/80 focus:ring-train-green/40": 
              variant === "accent",
            
            // Outline - Transparent with border
            "bg-transparent border-2 border-train-red text-train-red hover:bg-train-red/10 active:bg-train-red/20 focus:ring-train-red/40": 
              variant === "outline",
            
            // Ghost - Minimal styling
            "bg-transparent text-train-black hover:bg-black/5 active:bg-black/10 focus:ring-black/40": 
              variant === "ghost",
          },
          
          // Width
          {
            "w-full": fullWidth,
          },
          
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

CustomButton.displayName = "CustomButton";

export { CustomButton };
