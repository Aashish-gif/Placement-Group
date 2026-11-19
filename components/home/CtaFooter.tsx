'use client';

import { ArrowRight, GraduationCap, Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';

export function CTA() {
  return (
    <section id="cta" className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="noise relative overflow-hidden rounded-[36px] border-2 border-ink bg-primary p-10 text-center text-white shadow-[10px_10px_0_0_var(--ink)] sm:p-16">
          <div className="pointer-events-none absolute -left-14 -top-14 h-48 w-48 rounded-full bg-white/10" />
          <div className="pointer-events-none absolute -bottom-16 -right-10 h-56 w-56 rounded-full bg-amber-300/25" />
          <p className="pointer-events-none absolute left-8 top-8 hidden -rotate-6 font-hand text-2xl text-amber-200 md:block">
            zero → hired, let&apos;s go!
          </p>

          <div className="relative">
            <span className="inline-block animate-wiggle text-5xl">🎓</span>
            <h2 className="mx-auto mt-5 max-w-2xl font-display text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              Ready to Transform Your Career?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/85">
              Join thousands of professionals who have accelerated their careers with our Fast
              Forward programs
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#courses"
                className="group inline-flex items-center gap-2 rounded-full border-2 border-ink bg-amber-300 px-8 py-4 text-base font-bold text-ink shadow-[4px_4px_0_0_var(--ink)] transition-all hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_var(--ink)] active:translate-y-0 active:shadow-[2px_2px_0_0_var(--ink)]"
              >
                Enroll Now
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#jobs"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/70 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/20"
              >
                Explore Jobs
              </a>
            </div>
            <p className="mt-6 font-hand text-xl text-amber-200">
              ⚡ Fast Forward 15-Day · Live Projects · 24/7 Support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t-2 border-ink bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-11 w-11 place-items-center rounded-2xl border-2 border-ink bg-primary shadow-[3px_3px_0_0_var(--ink)]">
                <GraduationCap className="h-6 w-6 text-white" strokeWidth={2.2} />
              </span>
              <div className="leading-tight">
                <p className="font-display text-lg font-bold">Placement Group</p>
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink/60">
                  Professional Development
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink/65">
              Empowering careers through comprehensive courses, professional resume crafting, and
              LinkedIn optimization services.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-white px-4 py-2 text-xs font-bold shadow-[2px_2px_0_0_var(--ink)]">
              <ShieldCheck className="h-4 w-4 text-secondary" />
              E-Verify Employment Eligibility Verified
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-ink/50">
              USA Office
            </h4>
            <p className="mt-4 flex items-start gap-2 text-sm text-ink/70">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              111 NE 1st St, Miami, FL 33132
            </p>
            <h4 className="mt-8 font-display text-sm font-bold uppercase tracking-widest text-ink/50">
              Canada Office
            </h4>
            <p className="mt-4 flex items-start gap-2 text-sm text-ink/70">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              138 Gardenvale Crescent, London, ON N6J 4B9, Canada
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-ink/50">
              Get in Touch
            </h4>
            <a
              href="tel:+18888033546"
              className="mt-4 flex items-center gap-2 text-sm font-semibold text-ink/70 transition-colors hover:text-primary"
            >
              <Phone className="h-4 w-4" /> +1 (888) 803-3546
            </a>
            <a
              href="mailto:info@placements.group"
              className="mt-3 flex items-center gap-2 text-sm font-semibold text-ink/70 transition-colors hover:text-primary"
            >
              <Mail className="h-4 w-4" /> info@placements.group
            </a>
            <a
              href="#cta"
              className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-primary px-6 py-3 text-sm font-bold text-white shadow-[3px_3px_0_0_var(--ink)] transition-all hover:-translate-y-0.5 hover:shadow-[5px_5px_0_0_var(--ink)]"
            >
              Start Your Journey <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t-2 border-dashed border-ink/15 pt-7 text-xs text-ink/50 sm:flex-row">
          <p>© 2024 Placement Group. All rights reserved.</p>
          <p className="font-hand text-base text-ink/60">
            made with care for your career 🧡
          </p>
        </div>
      </div>
    </footer>
  );
}
