import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/section";
import { FadeIn } from "@/components/animate";
import { DotPattern, BalanceDecoration } from "@/components/patterns";
import { ArrowRight, Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "Echipa",
  description:
    "Echipa noastră de specialiști juridici și mediatori, combinând rigoarea juridică cu finețea medierii.",
};

const team = [
  {
    name: "Violeta MARIN",
    role: "Președinte",
    initials: "VM",
  },
  {
    name: "Mihaela DOCAN",
    role: "Mediator",
    initials: "MD",
  },
  {
    name: "Augustin RĂDUCANU",
    role: "Mediator",
    initials: "AR",
  },
];

const testimonials = [
  {
    quote:
      "Experiența a fost cu adevărat excepțională... problemele au fost rezolvate rapid în deplină înțelegere.",
    author: "Elena Ciucă",
  },
  {
    quote:
      "Expertiza a transformat tensiunea într-un dialog constructiv cu metode moderne.",
    author: "Andrei Ionescu",
  },
  {
    quote:
      "Parteneriatul a însemnat mai mult decât o procedură — a fost sprijinul necesar transformării tensiunii.",
    author: "Mihai Radu",
  },
];

export default function EchipaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy py-20 lg:py-28 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <FadeIn>
            <p className="text-accent-light text-sm font-medium uppercase tracking-widest mb-4">
              Echipa noastră
            </p>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-white leading-tight max-w-2xl">
              Expertiză juridică și viziune în mediere
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-3xl">
              Ne distingem prin combinarea rigorii juridice cu finețea medierii.
              Echipa de bază cuprinde profesioniști cu pregătire duală, unind
              experiența de avocat și specialist juridic cu practica continuă de
              mediere din 2014.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Team members */}
      <Section>
        <SectionHeader
          label="Cine suntem"
          title="Profesioniștii din spatele misiunii"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {team.map((member, i) => (
            <FadeIn key={member.name} delay={i * 0.1}>
              <div className="text-center group">
                <div className="w-32 h-32 mx-auto rounded-full bg-navy/5 flex items-center justify-center mb-6 group-hover:bg-navy/10 transition-colors">
                  <span className="font-serif text-3xl font-bold text-navy/40">
                    {member.initials}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-navy">
                  {member.name}
                </h3>
                <p className="text-sm text-muted mt-1">{member.role}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Expertise */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
                Competență duală
              </p>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-navy leading-tight">
                Rigoare juridică, finețe în mediere
              </h2>
              <p className="mt-6 text-muted leading-relaxed">
                Această perspectivă duală permite abordarea fiecărui caz cu
                înțelegere profundă a normelor juridice, asigurând soluții care sunt
                atât echitabile, cât și ancorate în respectarea strictă a legii.
              </p>
              <p className="mt-4 text-muted leading-relaxed">
                Expertiza juridică consolidată a echipei infuzează fiecare etapă de
                dialog cu rigoarea necesară pentru deplina valabilitate. Această
                dublă competență asigură că acordurile redactate sub autoritatea
                noastră posedă o precizie tehnică excepțională.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="space-y-6">
              {[
                "Pregătire duală — avocat și mediator",
                "Practică continuă din 2014",
                "Precizie tehnică excepțională în acorduri",
                "Soluții armonizate cu standardele juridice actuale",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-lg bg-warm/50"
                >
                  <div className="w-8 h-8 rounded-full bg-navy/10 flex items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-navy">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-navy">{item}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <SectionHeader
          label="Testimoniale"
          title="Ce spun clienții noștri"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <FadeIn key={testimonial.author} delay={i * 0.1}>
              <div className="p-8 rounded-lg border border-border h-full flex flex-col">
                <Quote size={20} className="text-accent/30 mb-4" />
                <p className="text-muted leading-relaxed italic flex-1">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="mt-6 text-sm font-semibold text-navy">
                  {testimonial.author}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-warm">
        <div className="text-center max-w-2xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-3xl font-bold text-navy leading-tight">
              Transformăm conflictele în oportunități
            </h2>
            <p className="mt-5 text-muted leading-relaxed">
              Echipă de specialiști juridici și mediatori care cred în puterea
              dialogului asistat. Oferim experiența găsirii de soluții legal
              echilibrate care pun capăt disputelor și permit înaintarea.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-10 px-7 py-3.5 bg-navy text-white font-semibold text-sm rounded-md hover:bg-navy-light transition-colors"
            >
              Contactează echipa
              <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
