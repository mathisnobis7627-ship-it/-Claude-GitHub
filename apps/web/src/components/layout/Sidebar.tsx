"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Globe,
  BookOpen,
  Users,
  Clock,
  GraduationCap,
  HelpCircle,
  Video,
  ChevronLeft,
  Search,
} from "lucide-react";
import { useAppStore } from "@/store/app";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Encyclop\u00e9die", href: "/encyclopedie", icon: BookOpen },
  { label: "Pays", href: "/pays", icon: Globe },
  { label: "Personnalit\u00e9s", href: "/personnalites", icon: Users },
  { label: "Chronologie", href: "/chronologie", icon: Clock },
  { label: "Programme scolaire", href: "/programme", icon: GraduationCap },
  { label: "Quiz", href: "/quiz", icon: HelpCircle },
  { label: "Vid\u00e9os", href: "/videos", icon: Video },
  { label: "Recherche", href: "/recherche", icon: Search },
];

export function Sidebar() {
  const pathname = usePathname();
  const { sidebarOpen, toggleSidebar } = useAppStore();

  return (
    <aside
      className={cn(
        "hidden h-[calc(100vh-4rem)] border-r border-neutral-200 bg-white transition-all duration-300 dark:border-neutral-700 dark:bg-neutral-900 lg:block",
        sidebarOpen ? "w-60" : "w-16",
      )}
    >
      <div className="flex h-full flex-col">
        <nav className="flex-1 space-y-1 px-2 py-4">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                title={!sidebarOpen ? item.label : undefined}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400"
                    : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white",
                  !sidebarOpen && "justify-center",
                )}
              >
                <item.icon className="h-5 w-5 shrink-0" />
                {sidebarOpen && <span className="truncate">{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Collapse toggle */}
        <div className="border-t border-neutral-200 p-2 dark:border-neutral-700">
          <button
            onClick={toggleSidebar}
            className="flex w-full items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm text-neutral-500 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800"
          >
            <ChevronLeft
              className={cn(
                "h-4 w-4 transition-transform",
                !sidebarOpen && "rotate-180",
              )}
            />
            {sidebarOpen && <span>R\u00e9duire</span>}
          </button>
        </div>
      </div>
    </aside>
  );
}
