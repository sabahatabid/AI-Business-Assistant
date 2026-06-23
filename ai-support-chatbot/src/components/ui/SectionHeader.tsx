import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle: string;
  centered?: boolean;
  light?: boolean; // for dark backgrounds
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  centered = true,
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(centered && "text-center mx-auto max-w-3xl", className)}>
      {badge && (
        <div
          className={cn(
            "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-5",
            light
              ? "bg-white/10 text-blue-200 border border-white/20"
              : "bg-blue-50 text-blue-700 border border-blue-100 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800/50"
          )}
        >
          <span
            className={cn(
              "w-1.5 h-1.5 rounded-full",
              light ? "bg-blue-300 animate-pulse" : "bg-blue-500 animate-pulse"
            )}
          />
          {badge}
        </div>
      )}
      <h2
        className={cn(
          "font-extrabold leading-[1.1] tracking-tight mb-5 text-5xl",
          "bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500",
          light ? "text-white" : ""
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          "text-lg leading-relaxed text-slate-400",
          light ? "text-blue-200" : ""
        )}
      >
        {subtitle}
      </p>
    </div>
  );
}
