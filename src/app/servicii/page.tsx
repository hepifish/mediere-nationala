import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/section";
import { FadeIn } from "@/components/animate";
import { DotPattern, BalanceDecoration } from "@/components/patterns";
import {
  Briefcase,
  MessageCircle,
  Heart,
  Gavel,
  Users,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Servicii",
  description:
    "Abordări structurate și soluții echilibrate, adaptate specificului fiecărui tip de conflict. Mediere comercială, civilă, de familie, penală și consultanță.",
};

const services = [
  {
    id: "medierea-comerciala",
    icon: Briefcase,
    title: "Medierea comercială",
    subtitle: "Arhitectura soluțiilor de business",
    description:
      "Disputele comerciale necesită management strategic. În loc să lăsăm deciziile pe seama procedurilor judiciare, redăm controlul partenerilor de afaceri. Intervenția se concentrează pe protejarea activelor valoroase — reputație, timp și relații de piață — oferind un cadru de negociere în care pragmatismul economic prevalează. Construim acorduri care nu doar rezolvă conflictul, ci securizează colaborarea viitoare.",
  },
  {
    id: "medierea-civila",
    icon: MessageCircle,
    title: "Medierea civilă",
    subtitle: "Spațiu pentru dialog constructiv",
    description:
      "Dincolo de specificul disputei, medierea civilă vizează restabilirea respectului și înțelegerii între oameni. Abordarea noastră caută să deschidă canale de comunicare care au fost blocate, oferind un cadru sigur pentru soluții creative și oneste. Transformăm tensiunea în acorduri naturale care aduc pace și predictibilitate în viața de zi cu zi.",
  },
  {
    id: "medierea-de-familie",
    icon: Heart,
    title: "Medierea de familie",
    subtitle: "Protejarea echilibrului și a viitorului",
    description:
      "Familia reprezintă un sistem complex care are nevoie de protecție în timpul transformării structurale. Abordarea noastră nu urmărește doar găsirea compromisului, ci creează un spațiu sigur dedicat protejării celor mai importante relații. Dialogul respectă emoțiile, iar deciziile iau în considerare stabilitatea, construind acorduri care onorează interesele tuturor membrilor familiei.",
  },
  {
    id: "medierea-penala",
    icon: Gavel,
    title: "Medierea penală",
    subtitle: "Justiție restaurativă și responsabilitate",
    description:
      "Medierea penală reprezintă o formă avansată de rezolvare a conflictelor care mută accentul de la pedepsirea trecutului spre repararea viitorului. Credem că dialogul poate restabili echilibrul social prin cadre protejate unde responsabilitatea este directă. Medierea penală facilitează rezolvarea umană și eficientă, permițând comunităților să se vindece.",
  },
  {
    id: "dialog-social",
    icon: Users,
    title: "Dialog social și coeziune",
    subtitle: "Punți între comunități",
    description:
      "Abordăm tensiunile la nivelul grupurilor și comunităților. Creăm cadre în care interesele divergente se întâlnesc pentru a genera soluții de coexistență, funcționând ca un catalizator pentru dialogul social, transformând barierele dintre cetățeni, organizații și instituții în parteneriate funcționale.",
  },
  {
    id: "consultanta-formare",
    icon: GraduationCap,
    title: "Consultanță, formare și dezvoltare profesională",
    subtitle: "Excelență în practica medierii",
    description:
      "Privind medierea ca o profesie în evoluție care necesită rigoare și viziune multidisciplinară, funcționăm ca un nucleu de excelență dedicat perfecționării mediatorilor și dezvoltării unor noi standarde de practică. Programele de formare conectează profesioniștii locali cu cele mai bune practici internaționale, construind o comunitate de lideri ai dialogului capabili să abordeze provocări sociale complexe.",
  },
];

export default function ServiciiPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy py-20 lg:py-28 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <FadeIn>
            <p className="text-accent-light text-sm font-medium uppercase tracking-widest mb-4">
              Servicii
            </p>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-white leading-tight max-w-2xl">
              Soluții de mediere adaptate nevoilor dumneavoastră
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-3xl">
              Abordări structurate și soluții echilibrate, adaptate specificului
              fiecărui tip de conflict.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services list */}
      <Section>
        <div className="space-y-12">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={0.05}>
              <div
                id={service.id}
                className={`scroll-mt-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start p-8 lg:p-10 rounded-lg border border-border hover:border-accent/20 transition-colors ${
                  i % 2 === 0 ? "" : "bg-warm/30"
                }`}
              >
                <div className="lg:col-span-4">
                  <div className="w-12 h-12 rounded-md bg-navy/5 flex items-center justify-center mb-4">
                    <service.icon size={22} className="text-navy" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-navy">
                    {service.title}
                  </h3>
                  <p className="text-accent text-sm font-medium mt-1">
                    {service.subtitle}
                  </p>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-muted leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="text-center max-w-2xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white leading-tight">
              Inovăm astăzi pentru armonia socială de mâine
            </h2>
            <p className="mt-5 text-white/70 leading-relaxed">
              Explorați abordări avansate de mediere cu Centrul Național de
              Mediere și Conflict Management. Aici, divergențele se transformă în
              rezultate constructive ancorate în conformitate juridică riguroasă și
              metodologie care combină experiența consacrată cu strategii inovatoare
              de rezolvare.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-10 px-7 py-3.5 bg-white text-navy font-semibold text-sm rounded-md hover:bg-warm transition-colors"
            >
              Solicită o consultație
              <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
