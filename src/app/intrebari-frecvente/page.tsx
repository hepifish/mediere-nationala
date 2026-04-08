"use client";

import Link from "next/link";
import { useState } from "react";
import { Section } from "@/components/section";
import { FadeIn } from "@/components/animate";
import { DotPattern, BalanceDecoration } from "@/components/patterns";
import { ChevronDown, ArrowRight } from "lucide-react";

const faqs = [
  {
    question:
      "Care este avantajul principal al medierii față de un proces în instanță?",
    answer:
      "Spre deosebire de procesele publice în instanță care durează ani și sunt decise de judecători, medierea oferă control total asupra soluției. Procesul rămâne confidențial, rentabil și mai rapid, rezultând un Acord de Mediere cu aceeași forță juridică ca o hotărâre judecătorească, dar construit pe interesele ambelor părți, nu pe un cadru câștigător-perdant.",
  },
  {
    question:
      "Ce se întâmplă dacă am deja un proces pe rol în instanță? Mai pot apela la mediere?",
    answer:
      "Da, medierea poate fi inițiată în orice etapă a conflictului, chiar și după începerea litigiului. Legea permite suspendarea cauzei pe durata negocierilor. Dacă părțile ajung la un acord, acesta este prezentat instanței pentru încheierea procedurilor. Statul încurajează adesea această abordare prin rambursarea parțială a taxelor judiciare, oferind atât o rezolvare mai rapidă, cât și un avantaj financiar.",
  },
  {
    question:
      "Ce valoare legală are acordul semnat la finalul medierii?",
    answer:
      "Acordul de Mediere este un document oficial care produce efecte juridice depline. Odată semnat și confirmat de instanță sau autentificat notarial, acesta devine titlu executoriu, având putere juridică echivalentă cu o hotărâre judecătorească definitivă, garantând executarea obligațiilor.",
  },
  {
    question:
      "Cum mă asigur că acordul final este corect din punct de vedere legal?",
    answer:
      "Echipa centrului este compusă din specialiști juridici și avocați. Fiecare acord de mediere este redactat în strictă conformitate cu normele legale în vigoare — nu acorduri informale simple, ci documente juridice riguroase concepute pentru validitate în fața oricărei instanțe sau autorități.",
  },
  {
    question:
      "Cât de protejate sunt informațiile discutate în timpul procesului de mediere?",
    answer:
      "Confidențialitatea este protejată legal și centrală pentru operațiunile noastre. Spre deosebire de procedurile publice din instanță, tot ce se discută în cadrul ședințelor rămâne strict confidențial, permițând părților să exploreze soluții oneste fără preocupări legate de imaginea publică sau secretele comerciale.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy py-20 lg:py-28 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <FadeIn>
            <p className="text-accent-light text-sm font-medium uppercase tracking-widest mb-4">
              Întrebări frecvente
            </p>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-white leading-tight max-w-2xl">
              Răspunsuri la întrebările dumneavoastră
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-3xl">
              Tot ce trebuie să știți despre procesul de mediere, validitatea
              juridică și confidențialitatea procedurilor.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FAQ accordion */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="border border-border rounded-lg overflow-hidden">
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === i ? null : i)
                    }
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-warm/30 transition-colors"
                  >
                    <span className="font-serif text-lg font-semibold text-navy pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`text-accent shrink-0 transition-transform duration-300 ${
                        openIndex === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === i
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-6">
                      <p className="text-muted leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-warm">
        <div className="text-center max-w-2xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-3xl font-bold text-navy leading-tight">
              Dincolo de divergențe
            </h2>
            <p className="mt-5 text-muted leading-relaxed">
              Din experiența noastră, orice conflict își găsește rezolvarea când
              există cadrul adecvat de dialog. Suntem pregătiți să găsim soluții
              în situații aparent imposibile.
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
