import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { LogoIcon } from "@/components/logo";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <LogoIcon size={36} />
              <div>
                <p className="text-sm font-semibold leading-tight">
                  Centrul Național de Mediere
                </p>
                <p className="text-xs text-white/60 leading-tight">
                  și Conflict Management
                </p>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mt-4">
              Transformăm conflictele în soluții prin tehnici inovatoare de mediere,
              oferind un nou standard de profesionalism.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Navigare
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/cine-suntem", label: "Cine suntem" },
                { href: "/echipa", label: "Echipa" },
                { href: "/servicii", label: "Servicii" },
                { href: "/intrebari-frecvente", label: "Întrebări frecvente" },
                { href: "/proiecte", label: "Proiecte" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Servicii
            </h3>
            <ul className="space-y-3">
              {[
                "Medierea comercială",
                "Medierea civilă",
                "Medierea de familie",
                "Medierea penală",
                "Dialog social",
                "Consultanță și formare",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/servicii"
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-white/40 mt-0.5 shrink-0" />
                <span className="text-sm text-white/70">
                  Str. Erou Iancu Nicolae, Nr. 29,
                  <br />
                  David Business Center,
                  <br />
                  Voluntari, Ilfov
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-white/40 shrink-0" />
                <a
                  href="tel:0742056906"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  0742 056 906
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-white/40 shrink-0" />
                <a
                  href="mailto:office@mediere-nationala.com"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  office@mediere-nationala.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Centrul Național de Mediere și Conflict
            Management. Toate drepturile rezervate.
          </p>
          <p className="text-xs text-white/40">
            Fondat în 2014 &middot; București, România
          </p>
        </div>
      </div>
    </footer>
  );
}
