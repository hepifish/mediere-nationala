import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/section";
import { FadeIn } from "@/components/animate";
import { DotPattern, BalanceDecoration, GridPattern } from "@/components/patterns";
import {
  Shield,
  Lightbulb,
  Heart,
  Handshake,
  Award,
  Users,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cine suntem",
  description:
    "Fondat în 2014, Centrul Național de Mediere și Conflict Management funcționează ca un nucleu de competență dedicat excelenței în rezolvarea alternativă a disputelor.",
};

const values = [
  {
    icon: Shield,
    title: "Integritate",
    description:
      "Activitățile centrului se fundează pe transparență deplină și onestitate. Credem că aderarea riguroasă la principii etice este singura cale de a oferi servicii predictibile și de încredere.",
  },
  {
    icon: Lightbulb,
    title: "Inovație",
    description:
      "Explorăm direcții noi în mediere și managementul conflictelor. Privim dincolo de metodele tradiționale, integrând perspective noi și soluții flexibile pentru a rămâne ancorați în realitățile actuale.",
  },
  {
    icon: Heart,
    title: "Empatie",
    description:
      "La baza intervențiilor noastre stă capacitatea de a înțelege dincolo de cuvinte. Abordăm fiecare caz cu deschidere și empatie, oferind fiecărei părți spațiu de exprimare cu recunoaștere și respect.",
  },
  {
    icon: Handshake,
    title: "Colaborare",
    description:
      "Credem în potențialul soluțiilor construite împreună. Lucrăm alături de cei care caută ajutor, nu în locul lor, construind parteneriat activ cu toate părțile implicate, facilitând cooperarea și respectul reciproc.",
  },
  {
    icon: Award,
    title: "Excelență",
    description:
      "Excelența este un proces continuu, nu o destinație. Investim resurse în îmbunătățirea constantă a metodelor și evoluția profesională a echipei, asigurându-ne că fiecare persoană beneficiază de cel mai bun parcurs posibil de rezolvare a disputelor.",
  },
  {
    icon: Users,
    title: "Comunitate",
    description:
      "Construim o comunitate vibrantă de specialiști uniți de valori comune și dorința de a schimba cultura conflictului. De la București la parteneri internaționali, dezvoltăm o rețea de elită a mediatorilor care partajează resurse, inovează constant și ridică standardele profesionale.",
  },
];

export default function CineSuntemPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy py-20 lg:py-28 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <FadeIn>
            <p className="text-accent-light text-sm font-medium uppercase tracking-widest mb-4">
              Despre noi
            </p>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-white leading-tight max-w-2xl">
              Expertiză și viziune în managementul conflictelor
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-3xl">
              Fondat în 2014 și consolidat de-a lungul unui deceniu de practică,
              Centrul Național de Mediere și Conflict Management funcționează ca un
              nucleu de competență dedicat excelenței în rezolvarea alternativă a
              disputelor.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* About content */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
                Cine suntem
              </p>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-navy leading-tight mb-6">
                Un deceniu de excelență în dialog
              </h2>
              <p className="text-muted leading-relaxed mb-6">
                Organizația funcționează ca o asociație definită de rigoarea
                juridică a unei echipe compuse din avocați și profesioniști
                juridici care și-au unit expertiza pentru a promova dialogul
                constructiv.
              </p>
              <p className="text-muted leading-relaxed">
                Misiunea implică furnizarea unui cadru de siguranță și
                integritate, transformând managementul conflictelor într-un
                instrument de echilibru aplicabil la toate nivelurile societății.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="bg-warm rounded-lg p-8 lg:p-10">
              <h3 className="font-serif text-xl font-bold text-navy mb-4">
                Viziunea noastră
              </h3>
              <p className="text-muted leading-relaxed">
                Viziunea noastră transformă Centrul Național de Mediere și Conflict
                Management într-un standard de excelență recunoscut la nivel
                național, unde inovația tehnică și rigoarea profesională se unesc
                pentru a reda oamenilor controlul asupra propriilor decizii.
              </p>
              <p className="mt-4 text-muted leading-relaxed">
                Imaginăm o societate în care medierea devine alegerea naturală
                pentru cei care caută claritate, eficiență și eleganță în
                rezolvarea disputelor.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Mission */}
      <Section className="bg-white">
        <SectionHeader
          label="Misiunea noastră"
          title="Ce ne propunem"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Redefinim modul în care societatea abordează neînțelegerile",
              description:
                "Promovăm medierea nu doar ca procedură legală, ci ca alegere conștientă și eficientă, adaptată realităților contemporane.",
            },
            {
              title: "Transformăm cultura confruntării în cultura dialogului",
              description:
                "Înlocuim rigiditatea litigiului cu flexibilitatea negocierii, oferind un cadru în care opoziția devine colaborare și barierele devin punți.",
            },
            {
              title: "Construim puncte de comunicare dincolo de conflict",
              description:
                "Refacem conexiunile întrerupte și facilităm un spațiu neutru în care fiecare voce este ascultată, asigurând soluții asumate și sustenabile.",
            },
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="relative pl-6 border-l-2 border-accent/30">
                <h3 className="font-serif text-lg font-bold text-navy mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section>
        <SectionHeader
          label="Valorile noastre"
          title="Angajament față de integritate și inovație"
          description="Definim standardele medierii de mâine prin valorile de astăzi."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, i) => (
            <FadeIn key={value.title} delay={i * 0.08}>
              <div className="group p-8 rounded-lg border border-border hover:border-accent/30 hover:shadow-sm transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-md bg-navy/5 flex items-center justify-center mb-6 group-hover:bg-navy/10 transition-colors">
                  <value.icon size={22} className="text-navy" />
                </div>
                <h3 className="font-serif text-lg font-bold text-navy mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {value.description}
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
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-navy leading-tight">
              Transformă conflictul în oportunitate
            </h2>
            <p className="mt-5 text-muted leading-relaxed">
              Activitatea centrului se concentrează pe aplicarea unor metode de
              lucru care permit rezolvarea echilibrată a disputelor, punând accentul
              pe abordări analitice și adaptarea procedurii la contextul specific
              fiecărui caz.
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
      </Section>
    </>
  );
}
