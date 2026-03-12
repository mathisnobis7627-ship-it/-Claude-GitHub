import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AppState {
  /** Dark mode toggle */
  theme: "light" | "dark";
  toggleTheme: () => void;

  /** Sidebar open/close on desktop */
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  toggleSidebar: () => void;

  /** Mobile menu open/close */
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;

  /** Preferred school level for curriculum filtering */
  niveauPrefere: string | null;
  setNiveauPrefere: (niveau: string | null) => void;

  /** Recent search queries */
  recherchesRecentes: string[];
  addRecherche: (query: string) => void;
  clearRecherches: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      // Theme
      theme: "light",
      toggleTheme: () =>
        set((s) => ({ theme: s.theme === "light" ? "dark" : "light" })),

      // Sidebar
      sidebarOpen: true,
      setSidebarOpen: (open) => set({ sidebarOpen: open }),
      toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),

      // Mobile menu
      mobileMenuOpen: false,
      setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),

      // School level
      niveauPrefere: null,
      setNiveauPrefere: (niveau) => set({ niveauPrefere: niveau }),

      // Recent searches
      recherchesRecentes: [],
      addRecherche: (query) =>
        set((s) => ({
          recherchesRecentes: [
            query,
            ...s.recherchesRecentes.filter((q) => q !== query),
          ].slice(0, 10),
        })),
      clearRecherches: () => set({ recherchesRecentes: [] }),
    }),
    {
      name: "atlas-app-storage",
      partialize: (state) => ({
        theme: state.theme,
        niveauPrefere: state.niveauPrefere,
        recherchesRecentes: state.recherchesRecentes,
      }),
    },
  ),
);
