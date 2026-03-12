"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Globe,
  BookOpen,
  Users,
  Clock,
  GraduationCap,
  HelpCircle,
  Video,
  Menu,
  X,
  Sun,
  Moon,
} from "lucide-react";
import { SearchBar } from "@/components/ui/SearchBar";
import { useAppStore } from "@/store/app";
import { cn } from "@/lib/utils";

const navigation = [
  { label: "Encyclop\u00e9die", href: "/encyclopedie", icon: BookOpen },
  { label: "Pays", href: "/pays", icon: Globe },
  { label: "Personnalit\u00e9s", href: "/personnalites", icon: Users },
  { label: "Chronologie", href: "/chronologie", icon: Clock },
  { label: "Programme", href: "/programme", icon: GraduationCap },
  { label: "Quiz", href: "/quiz", icon: HelpCircle },
  { label: "Vid\u00e9os", href: "/videos", icon: Video },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useAppStore();

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/80 backdrop-blur-md dark:border-neutral-700 dark:bg-neutral-900/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Globe className="h-7 w-7 text-primary-600" />
          <span className="text-xl font-bold text-neutral-900 dark:text-white">
            Atlas
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-white"
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <SearchBar />
          </div>

          <button
            onClick={toggleTheme}
            className="rounded-lg p-2 text-neutral-500 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800"
            aria-label="Changer le th\u00e8me"
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-neutral-500 hover:bg-neutral-100 lg:hidden dark:text-neutral-400 dark:hover:bg-neutral-800"
            aria-label="Menu"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="border-t border-neutral-200 bg-white px-4 pb-4 lg:hidden dark:border-neutral-700 dark:bg-neutral-900">
          <div className="py-3">
            <SearchBar expanded />
          </div>
          <nav className="flex flex-col gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium",
                  "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900",
                  "dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-white",
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
