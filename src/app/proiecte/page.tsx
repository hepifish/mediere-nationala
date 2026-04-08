import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/animate";
import { DotPattern, BalanceDecoration } from "@/components/patterns";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Proiecte",
  description:
    "Proiectele și inițiativele Centrului Național de Mediere și Conflict Management.",
};

export default function ProiectePage() {
  return (
    <>
      <section className="relative bg-navy py-20 lg:py-28 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <FadeIn>
            <p className="text-accent-light text-sm font-medium uppercase tracking-widest mb-4">
              Proiecte
            </p>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-white leading-tight max-w-2xl">
              Inițiative pentru viitorul medierii
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="py-32 lg:py-44">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
              În curând
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-navy leading-tight">
              Proiecte în curs de dezvoltare
            </h2>
            <p className="mt-5 text-muted leading-relaxed max-w-xl mx-auto">
              Lucrăm la inițiative care vor modela viitorul medierii în România.
              Reveniți în curând pentru detalii.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-10 px-7 py-3.5 bg-navy text-white font-semibold text-sm rounded-md hover:bg-navy-light transition-colors"
            >
              Contactează-ne
              <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
