import Link from "next/link";
import { Globe } from "lucide-react";

const sections = [
  {
    title: "Explorer",
    links: [
      { label: "Encyclop\u00e9die", href: "/encyclopedie" },
      { label: "Pays du monde", href: "/pays" },
      { label: "Personnalit\u00e9s", href: "/personnalites" },
      { label: "Chronologie", href: "/chronologie" },
    ],
  },
  {
    title: "Apprendre",
    links: [
      { label: "Programme scolaire", href: "/programme" },
      { label: "Quiz", href: "/quiz" },
      { label: "Vid\u00e9os", href: "/videos" },
    ],
  },
  {
    title: "\u00c0 propos",
    links: [
      { label: "Notre mission", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Mentions l\u00e9gales", href: "#" },
      { label: "Politique de confidentialit\u00e9", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Globe className="h-6 w-6 text-primary-600" />
              <span className="text-lg font-bold text-neutral-900 dark:text-white">
                Atlas
              </span>
            </Link>
            <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-400">
              La plateforme \u00e9ducative pour d\u00e9couvrir le monde, son
              histoire et ses cultures. Destin\u00e9e aux \u00e9l\u00e8ves de la
              6\u00e8me \u00e0 la Terminale.
            </p>
          </div>

          {/* Link sections */}
          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold text-neutral-900 dark:text-white">
                {section.title}
              </h4>
              <ul className="mt-3 space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-500 transition-colors hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-neutral-200 pt-6 dark:border-neutral-800">
          <p className="text-center text-xs text-neutral-400 dark:text-neutral-500">
            &copy; {new Date().getFullYear()} Atlas EdTech. Tous droits
            r\u00e9serv\u00e9s. Fait avec passion pour l&apos;\u00e9ducation.
          </p>
        </div>
      </div>
    </footer>
  );
}
