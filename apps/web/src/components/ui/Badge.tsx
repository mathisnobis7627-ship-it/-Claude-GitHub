import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type BadgeVariant = "default" | "geographie" | "histoire" | "geologie" | "sciences" | "culture" | "guerre" | "politique";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-neutral-100 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-300",
  geographie: "bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200",
  histoire: "bg-accent-100 text-accent-800 dark:bg-accent-900 dark:text-accent-200",
  geologie: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
  sciences: "bg-secondary-100 text-secondary-800 dark:bg-secondary-900 dark:text-secondary-200",
  culture: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  guerre: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  politique: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
