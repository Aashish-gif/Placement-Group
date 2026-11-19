'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote:
      'The Fast Forward 15-Day program completely transformed my career. I went from zero coding knowledge to landing a job at Google in just 3 months!',
    name: 'Sarah Johnson',
    role: 'Full Stack Developer at Google',
    course: 'Full Stack Web Development',
    gradient: 'from-orange-400 to-rose-400',
  },
  {
    quote:
      'Amazing instructors and practical curriculum. The hands-on projects helped me build a portfolio that impressed recruiters.',
    name: 'Michael Chen',
    role: 'Data Scientist at Microsoft',
    course: 'Data Analytics with Python',
    gradient: 'from-teal-400 to-emerald-400',
  },
  {
    quote:
      "Best investment I ever made! The course was intensive but incredibly rewarding. Now I'm working in my dream field.",
    name: 'Emily Rodriguez',
    role: 'Cybersecurity Analyst at IBM',
    course: 'Cybersecurity Fundamentals',
    gradient: 'from-sky-400 to-indigo-400',
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const t = TESTIMONIALS[idx];
  const go = (dir: number) =>
    setIdx((i) => (i + dir + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="relative overflow-hidden bg-amber-100/60 py-24">
      <div className="pointer-events-none absolute -left-10 bottom-10 rotate-[-8deg] text-7xl opacity-40">💬</div>
      <div className="pointer-events-none absolute right-8 top-10 rotate-[10deg] text-6xl opacity-40">✏️</div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <span className="inline-flex rotate-1 items-center gap-2 rounded-full border-2 border-ink bg-white px-4 py-1.5 text-sm font-bold shadow-[3px_3px_0_0_var(--ink)]">
          <Star className="h-4 w-4 fill-amber-400 text-amber-400" /> Student Stories
        </span>
        <h2 className="mt-6 font-display text-4xl font-black tracking-tight sm:text-5xl">
          What Our <span className="doodle-underline text-secondary">Students Say</span>
        </h2>
        <p className="mt-4 text-ink/70">
          Join thousands of professionals who have transformed their careers with our programs
        </p>

        <div
          key={idx}
          style={{ animation: 'pop-in 0.5s cubic-bezier(0.22,1,0.36,1)' }}
          className="relative mt-12 rounded-[28px] border-2 border-ink bg-white p-8 text-left shadow-[8px_8px_0_0_var(--ink)] sm:p-12"
        >
          <span className="absolute -top-6 left-8 grid h-12 w-12 place-items-center rounded-2xl border-2 border-ink bg-primary shadow-[3px_3px_0_0_var(--ink)]">
            <Quote className="h-6 w-6 text-white" />
          </span>

          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
            ))}
          </div>

          <blockquote className="mt-5 font-display text-xl font-medium leading-relaxed sm:text-2xl">
            “{t.quote}”
          </blockquote>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t-2 border-dashed border-ink/15 pt-6">
            <div className="flex items-center gap-4">
              <span
                className={`grid h-14 w-14 place-items-center rounded-full border-2 border-ink bg-gradient-to-br ${t.gradient} font-display text-xl font-black text-white`}
              >
                {t.name.charAt(0)}
              </span>
              <div>
                <p className="font-bold">{t.name}</p>
                <p className="text-sm text-ink/60">{t.role}</p>
                <p className="mt-0.5 text-xs font-semibold text-primary">Course: {t.course}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                aria-label="Previous testimonial"
                onClick={() => go(-1)}
                className="grid h-11 w-11 place-items-center rounded-full border-2 border-ink bg-white shadow-[3px_3px_0_0_var(--ink)] transition-all hover:-translate-y-0.5 hover:bg-amber-50 active:translate-y-0 active:shadow-[1px_1px_0_0_var(--ink)]"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                aria-label="Next testimonial"
                onClick={() => go(1)}
                className="grid h-11 w-11 place-items-center rounded-full border-2 border-ink bg-white shadow-[3px_3px_0_0_var(--ink)] transition-all hover:-translate-y-0.5 hover:bg-amber-50 active:translate-y-0 active:shadow-[1px_1px_0_0_var(--ink)]"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setIdx(i)}
              className={`h-2.5 rounded-full border border-ink transition-all ${
                i === idx ? 'w-8 bg-primary' : 'w-2.5 bg-white hover:bg-ink/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
