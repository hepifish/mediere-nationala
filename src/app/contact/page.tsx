"use client";

import { useState } from "react";
import { Section } from "@/components/section";
import { FadeIn } from "@/components/animate";
import { DotPattern, BalanceDecoration } from "@/components/patterns";
import { MapPin, Phone, Mail, Send, Clock, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy py-20 lg:py-28 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <FadeIn>
            <p className="text-accent-light text-sm font-medium uppercase tracking-widest mb-4">
              Contact
            </p>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-white leading-tight max-w-2xl">
              Suntem aici să ajutăm
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-3xl">
              Încredințați-ne problema dumneavoastră. Un mediator vă va contacta
              în cel mai scurt timp posibil.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact content */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Contact info */}
          <div className="lg:col-span-2">
            <FadeIn>
              <h2 className="font-serif text-2xl font-bold text-navy mb-8">
                Informații de contact
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-md bg-navy/5 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-navy" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy mb-1">Adresă</p>
                    <p className="text-sm text-muted leading-relaxed">
                      Str. Erou Iancu Nicolae, Nr. 29,
                      <br />
                      David Business Center,
                      <br />
                      Voluntari, Ilfov
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-md bg-navy/5 flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-navy" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy mb-1">Telefon</p>
                    <a
                      href="tel:0742056906"
                      className="text-sm text-muted hover:text-navy transition-colors"
                    >
                      0742 056 906
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-md bg-navy/5 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-navy" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy mb-1">Email</p>
                    <a
                      href="mailto:office@mediere-nationala.com"
                      className="text-sm text-muted hover:text-navy transition-colors"
                    >
                      office@mediere-nationala.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-md bg-navy/5 flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-navy" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy mb-1">
                      Timp de răspuns
                    </p>
                    <p className="text-sm text-muted">
                      De regulă, în maxim 24 de ore
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <FadeIn delay={0.15}>
              {submitted ? (
                <div className="bg-warm rounded-lg p-12 text-center">
                  <CheckCircle size={48} className="text-accent mx-auto mb-4" />
                  <h3 className="font-serif text-xl font-bold text-navy mb-3">
                    Vă mulțumim pentru mesaj!
                  </h3>
                  <p className="text-muted leading-relaxed">
                    Solicitarea dumneavoastră a fost înregistrată iar un mediator
                    vă va contacta în cel mai scurt timp posibil (de regulă, în
                    maxim 24 de ore).
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="bg-white rounded-lg border border-border p-8 lg:p-10"
                >
                  <h2 className="font-serif text-2xl font-bold text-navy mb-6">
                    Trimiteți un mesaj
                  </h2>
                  <div className="space-y-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-navy mb-2"
                      >
                        Nume
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
                        placeholder="Numele dumneavoastră"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-navy mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
                        placeholder="adresa@email.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-navy mb-2"
                      >
                        Mesaj
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors resize-none"
                        placeholder="Descrieți situația dumneavoastră..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-7 py-3.5 bg-navy text-white font-semibold text-sm rounded-md hover:bg-navy-light transition-colors w-full justify-center"
                    >
                      Trimite
                      <Send size={16} />
                    </button>
                  </div>
                </form>
              )}
            </FadeIn>
          </div>
        </div>
      </Section>
    </>
  );
}
