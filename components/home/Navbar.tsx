'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { GraduationCap, Menu, X, Phone, Mail, ArrowUpRight } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Find Jobs', href: '#jobs' },
  { label: 'Courses', href: '#courses' },
  { label: 'Services', href: '#services' },
  { label: 'Careers', href: '#careers' },
  { label: 'Why Us', href: '#why' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Top strip */}
      <div
        className={`hidden bg-ink text-paper md:block transition-all duration-300 ${
          scrolled ? 'h-0 overflow-hidden opacity-0' : 'h-9 opacity-100'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs">
          <p className="font-hand text-base tracking-wide text-amber-300">
            “There is a role for everyone in IT” — jump start your career today
          </p>
          <div className="flex items-center gap-6 text-paper/80">
            <a href="tel:+18888033546" className="flex items-center gap-1.5 hover:text-white">
              <Phone className="h-3 w-3" /> +1 (888) 803-3546
            </a>
            <a href="mailto:info@placements.group" className="flex items-center gap-1.5 hover:text-white">
              <Mail className="h-3 w-3" /> info@placements.group
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-paper/90 shadow-[0_4px_24px_rgba(20,30,60,0.08)] backdrop-blur-md border-b-2 border-ink/10'
            : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
          <Link href="#home" className="group flex items-center gap-2.5">
            <span className="grid h-11 w-11 place-items-center rounded-2xl border-2 border-ink bg-primary shadow-[3px_3px_0_0_var(--ink)] transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
              <GraduationCap className="h-6 w-6 text-white" strokeWidth={2.2} />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-lg font-bold tracking-tight">
                Placement Group
              </span>
              <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-ink/60">
                Professional Development
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="rounded-full px-4 py-2 text-sm font-semibold text-ink/70 transition-colors hover:bg-ink/5 hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="#cta"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-ink bg-amber-300 px-5 py-2.5 text-sm font-bold shadow-[3px_3px_0_0_var(--ink)] transition-all hover:-translate-y-0.5 hover:shadow-[5px_5px_0_0_var(--ink)] active:translate-y-0 active:shadow-[2px_2px_0_0_var(--ink)]"
            >
              Enroll Now
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-xl border-2 border-ink bg-white shadow-[3px_3px_0_0_var(--ink)] lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {/* Mobile menu */}
        <div
          className={`overflow-hidden border-ink/10 bg-paper/95 backdrop-blur-md transition-all duration-300 lg:hidden ${
            open ? 'max-h-[420px] border-t-2' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-semibold hover:bg-ink/5"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl border-2 border-ink bg-primary px-4 py-3 text-center text-base font-bold text-white shadow-[3px_3px_0_0_var(--ink)]"
            >
              Enroll Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
