import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning" | "error" | "info";
  className?: string;
}

export default function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold",
        {
          "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400": variant === "default",
          "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400": variant === "success",
          "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400": variant === "warning",
          "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400": variant === "error",
          "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400": variant === "info",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
