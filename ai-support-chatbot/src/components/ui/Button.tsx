"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "white";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // base
          "relative inline-flex items-center justify-center font-semibold rounded-xl",
          "transition-all duration-200 ease-out",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
          "select-none whitespace-nowrap",
          // variant
          variant === "primary" && [
            "bg-blue-600 text-white",
            "hover:bg-blue-500 active:bg-blue-700",
            "shadow-[0_1px_2px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.15)]",
            "hover:shadow-[0_4px_16px_rgba(37,99,235,0.35)]",
            "active:scale-[0.98]",
          ],
          variant === "secondary" && [
            "bg-white text-gray-800 border border-gray-200",
            "hover:bg-gray-50 hover:border-gray-300",
            "shadow-[0_1px_3px_rgba(0,0,0,0.08)]",
            "hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)]",
            "active:scale-[0.98]",
            "dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700",
          ],
          variant === "outline" && [
            "border-2 border-blue-600 text-blue-600 bg-transparent",
            "hover:bg-blue-600 hover:text-white",
            "active:scale-[0.98]",
          ],
          variant === "ghost" && [
            "text-gray-600 bg-transparent",
            "hover:text-gray-900 hover:bg-gray-100",
            "dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800",
          ],
          variant === "white" && [
            "bg-white text-blue-700 font-bold",
            "hover:bg-blue-50",
            "shadow-[0_2px_8px_rgba(0,0,0,0.12)]",
            "hover:shadow-[0_4px_16px_rgba(0,0,0,0.15)]",
            "active:scale-[0.98]",
          ],
          // size
          size === "xs" && "px-3 py-1.5 text-xs gap-1.5",
          size === "sm" && "px-4 py-2 text-sm gap-2",
          size === "md" && "px-5 py-2.5 text-sm gap-2",
          size === "lg" && "px-6 py-3 text-base gap-2",
          size === "xl" && "px-8 py-4 text-lg gap-2.5",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
