"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { LogoIcon } from "@/components/logo";

const links = [
  { href: "/", label: "Acasă" },
  { href: "/cine-suntem", label: "Cine suntem" },
  { href: "/echipa", label: "Echipa" },
  { href: "/servicii", label: "Servicii" },
  { href: "/intrebari-frecvente", label: "Întrebări frecvente" },
  { href: "/proiecte", label: "Proiecte" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-border">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <LogoIcon size={36} />
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-navy leading-tight">
                Centrul Național de Mediere
              </p>
              <p className="text-xs text-muted leading-tight">
                și Conflict Management
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  pathname === link.href
                    ? "text-navy font-semibold bg-warm"
                    : "text-muted hover:text-navy hover:bg-warm/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center px-5 py-2.5 bg-navy text-white text-sm font-medium rounded-md hover:bg-navy-light transition-colors"
            >
              Contactează-ne
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-navy"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="lg:hidden pb-6 border-t border-border mt-2 pt-4">
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 text-sm rounded-md transition-colors ${
                    pathname === link.href
                      ? "text-navy font-semibold bg-warm"
                      : "text-muted hover:text-navy hover:bg-warm/50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 mx-4 text-center px-5 py-3 bg-navy text-white text-sm font-medium rounded-md hover:bg-navy-light transition-colors"
              >
                Contactează-ne
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
