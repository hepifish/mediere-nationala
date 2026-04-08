import Link from "next/link";
import { Section, SectionHeader } from "@/components/section";
import { FadeIn } from "@/components/animate";
import {
  DotPattern,
  GridPattern,
  BalanceDecoration,
  DiagonalLines,
  SectionDivider,
} from "@/components/patterns";
import {
  Scale,
  Lightbulb,
  Target,
  ArrowRight,
  Shield,
  Users,
  Handshake,
} from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* Hero — left-aligned, asymmetric split */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(139,115,85,0.15),_transparent_70%)]" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32 w-full relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <FadeIn>
                <p className="text-accent-light text-sm font-medium uppercase tracking-widest mb-6">
                  Inovație și excelență in rezolvarea conflictelor
                </p>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter leading-none">
                  Transformăm conflictul
                  <br />
                  <span className="text-accent-light">în soluție</span>
                </h1>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="mt-8 text-lg text-white/70 leading-relaxed max-w-[55ch]">
                  Prin tehnici inovatoare de mediere, oferim un nou standard de
                  profesionalism. Experimentați schimbarea alături de noi.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href="/servicii"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-navy font-semibold text-sm rounded-md hover:bg-warm active:scale-[0.98] transition-all"
                  >
                    Descoperiți soluțiile noastre
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white font-medium text-sm rounded-md hover:bg-white/5 active:scale-[0.98] transition-all"
                  >
                    Contactează-ne
                  </Link>
                </div>
              </FadeIn>
            </div>
            {/* Right column — trust stats stacked vertically */}
            <div className="hidden lg:flex lg:col-span-5 flex-col gap-8 pl-8 border-l border-white/10">
              <FadeIn delay={0.2} direction="left">
                <div>
                  <p className="text-4xl font-serif font-bold text-white tracking-tighter">10+</p>
                  <p className="text-sm text-white/50 mt-1">Ani de experiență în mediere</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.3} direction="left">
                <div>
                  <p className="text-4xl font-serif font-bold text-white tracking-tighter">6</p>
                  <p className="text-sm text-white/50 mt-1">Domenii de mediere specializată</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.4} direction="left">
                <div>
                  <p className="text-4xl font-serif font-bold text-white tracking-tighter">100%</p>
                  <p className="text-sm text-white/50 mt-1">Confidențialitate garantată legal</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      </section>

      {/* Mobile trust indicators — only visible on small screens */}
      <section className="bg-white border-b border-border lg:hidden">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            <FadeIn delay={0}>
              <div className="flex flex-col items-center gap-1">
                <p className="text-2xl font-serif font-bold text-navy tracking-tighter">10+</p>
                <p className="text-xs text-muted">Ani de experiență</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="flex flex-col items-center gap-1">
                <p className="text-2xl font-serif font-bold text-navy tracking-tighter">6</p>
                <p className="text-xs text-muted">Domenii de mediere</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex flex-col items-center gap-1">
                <p className="text-2xl font-serif font-bold text-navy tracking-tighter">100%</p>
                <p className="text-xs text-muted">Confidențialitate</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Intro — asymmetric split */}
      <section className="relative overflow-hidden">
        <GridPattern className="text-navy bottom-0 right-0" />
        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <FadeIn className="lg:col-span-5">
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
                  Despre noi
                </p>
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-navy tracking-tighter leading-none">
                  Redefinim medierea
                  <br />
                  în România
                </h2>
                <p className="mt-6 text-muted leading-relaxed max-w-[55ch]">
                  Armonizăm inovația și expertiza juridică în slujba dialogului,
                  transformând divergențele în acorduri durabile.
                </p>
                <Link
                  href="/cine-suntem"
                  className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-navy hover:text-accent active:scale-[0.98] transition-all"
                >
                  Află mai multe despre noi
                  <ArrowRight size={16} />
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="lg:col-span-7">
              <div className="bg-warm rounded-2xl p-10 lg:p-12 relative shadow-[0_20px_40px_-15px_rgba(15,43,76,0.08)]">
                <DiagonalLines className="text-navy top-0 right-0 rounded-2xl overflow-hidden" />
                <blockquote className="relative">
                  <div className="text-6xl text-accent/15 font-serif absolute -top-6 -left-2">
                    &ldquo;
                  </div>
                  <p className="text-navy/80 leading-relaxed italic pl-6 max-w-[55ch]">
                    Ne asumăm rolul de a modela medierea modernă în România,
                    armonizând noile resurse tehnologice cu profunzimea și empatia
                    dialogului uman. Ne angajăm spre inovație constantă pentru a
                    oferi soluții mai accesibile și mai rapide, dar întotdeauna
                    ancorate într-un riguros cadru juridic.
                  </p>
                  <footer className="mt-6 pl-6 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center">
                      <span className="text-xs font-bold text-navy">VM</span>
                    </div>
                    <div>
                      <p className="font-semibold text-navy text-sm">
                        Violeta MARIN
                      </p>
                      <p className="text-xs text-muted">Președinte</p>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </FadeIn>
          </div>
        </Section>
      </section>

      {/* Services overview — zig-zag layout, no 3-col cards */}
      <section className="relative bg-white overflow-hidden">
        <DotPattern className="text-navy top-0 left-0" />
        <Section>
          <SectionHeader
            label="Ce facem"
            title="Deschidem calea către inovația în mediere"
            description="Abordări structurate și soluții echilibrate, adaptate specificului fiecărui tip de conflict."
          />
          <div className="space-y-6">
            {[
              {
                icon: Scale,
                title: "Expertiză în managementul conflictelor",
                description:
                  "Mediatori specializați vă ghidează către soluții echilibrate, asigurând rezultate armonioase și durabile.",
              },
              {
                icon: Lightbulb,
                title: "Noi perspective în mediere",
                description:
                  "Oferim strategii avansate de armonizare relațională, modelate cu grijă la nevoile și contextul dumneavoastră specific.",
              },
              {
                icon: Target,
                title: "Strategii complexe de negociere",
                description:
                  "Punem la dispoziție mecanisme de analiză strategică, facilitând obținerea de acorduri avantajoase și deplin securizate juridic.",
              },
            ].map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.08}>
                <div className="flex items-start gap-6 p-6 lg:p-8 rounded-xl border border-border hover:border-accent/20 bg-white hover:shadow-[0_20px_40px_-15px_rgba(15,43,76,0.06)] transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-navy/5 flex items-center justify-center shrink-0">
                    <service.icon size={22} className="text-navy" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-navy tracking-tight mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed max-w-[55ch]">
                      {service.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <div className="text-center mt-12">
              <Link
                href="/servicii"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-navy text-white font-medium text-sm rounded-md hover:bg-navy-light active:scale-[0.98] transition-all"
              >
                Vezi toate serviciile
                <ArrowRight size={16} />
              </Link>
            </div>
          </FadeIn>
        </Section>
      </section>

      {/* Values preview — 2-col asymmetric grid */}
      <section className="relative bg-navy overflow-hidden">
        <BalanceDecoration className="text-white -left-20 -bottom-20" />
        <GridPattern className="text-white top-0 right-0" />
        <Section dark>
          <SectionHeader
            label="De ce noi"
            title="Principiile care ne ghidează"
            description="Activitatea noastră se fundează pe transparență deplină, inovație continuă și empatie reală."
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Shield,
                title: "Integritate",
                description:
                  "Aderare riguroasă la principii etice pentru servicii predictibile și de încredere.",
              },
              {
                icon: Lightbulb,
                title: "Inovație",
                description:
                  "Explorăm direcții noi, integrând perspective și soluții flexibile ancorate în realitățile actuale.",
              },
              {
                icon: Users,
                title: "Empatie",
                description:
                  "Abordăm fiecare caz cu deschidere, oferind fiecărei părți spațiu de exprimare cu recunoaștere și respect.",
              },
              {
                icon: Handshake,
                title: "Colaborare",
                description:
                  "Construim parteneriate active cu toate părțile implicate, facilitând cooperarea și respectul reciproc.",
              },
              {
                icon: Target,
                title: "Excelență",
                description:
                  "Investim în perfecționarea metodelor și evoluția profesională a echipei în mod constant.",
              },
              {
                icon: Users,
                title: "Comunitate",
                description:
                  "Dezvoltăm o rețea de elită a mediatorilor care partajează resurse și ridică standardele profesionale.",
              },
            ].map((value, i) => (
              <FadeIn key={value.title} delay={i * 0.06}>
                <div className="flex items-start gap-5 p-6 rounded-xl border border-white/[0.06] hover:border-white/15 bg-white/[0.03] backdrop-blur-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-colors h-full">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.06] flex items-center justify-center shrink-0">
                    <value.icon size={18} className="text-accent-light" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">
                      {value.title}
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Section>
      </section>

      {/* CTA */}
      <section className="relative bg-warm overflow-hidden">
        <DiagonalLines className="text-navy bottom-0 right-0" />
        <BalanceDecoration className="text-navy -right-20 top-1/2 -translate-y-1/2 hidden lg:block" />
        <Section>
          <div className="text-center max-w-2xl mx-auto relative">
            <FadeIn>
              <SectionDivider />
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-navy tracking-tighter leading-none mt-6">
                Transformă conflictul în oportunitate
              </h2>
              <p className="mt-5 text-muted leading-relaxed max-w-[55ch] mx-auto">
                Activitatea centrului se concentrează pe aplicarea unor metode de
                lucru care permit rezolvarea echilibrată a disputelor, punând accentul
                pe abordări analitice și adaptarea procedurii la contextul specific
                fiecărui caz.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-navy text-white font-semibold text-sm rounded-md hover:bg-navy-light active:scale-[0.98] transition-all"
                >
                  Începe o conversație
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/intrebari-frecvente"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-navy/20 text-navy font-medium text-sm rounded-md hover:bg-navy/5 active:scale-[0.98] transition-all"
                >
                  Întrebări frecvente
                </Link>
              </div>
            </FadeIn>
          </div>
        </Section>
      </section>
    </>
  );
}
