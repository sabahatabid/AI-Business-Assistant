import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        "bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm",
        hover &&
          "transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-100 dark:hover:border-blue-800",
        className
      )}
    >
      {children}
    </div>
  );
}
