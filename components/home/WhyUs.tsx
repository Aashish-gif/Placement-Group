'use client';

import { Zap, Hammer, Sparkles, LifeBuoy } from 'lucide-react';

const REASONS = [
  {
    icon: Zap,
    title: 'Fast Forward 15-Day Courses',
    desc: 'Quick learning in short periods with comprehensive coverage of all topics',
    color: 'bg-primary',
  },
  {
    icon: Hammer,
    title: 'Practical Curriculum',
    desc: 'Hands-on projects and real-world scenarios to build job-ready skills',
    color: 'bg-secondary',
  },
  {
    icon: Sparkles,
    title: 'Professional Services',
    desc: 'Expert resume writing and LinkedIn optimization for career success',
    color: 'bg-amber-400',
  },
  {
    icon: LifeBuoy,
    title: 'Career Support',
    desc: 'Ongoing guidance and support throughout your career journey',
    color: 'bg-sky-500',
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="relative overflow-hidden bg-ink py-24 text-paper">
      <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
      <p className="pointer-events-none absolute left-[8%] top-12 hidden rotate-[-4deg] font-hand text-2xl text-amber-300 lg:block">
        here&apos;s why people pick us 👇
      </p>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex -rotate-1 items-center gap-2 rounded-full bg-amber-300 px-4 py-1.5 text-sm font-bold text-ink">
            Why Choose Us
          </span>
          <h2 className="mt-6 font-display text-4xl font-black tracking-tight sm:text-5xl">
            Why Choose <span className="text-amber-300">Placement Group?</span>
          </h2>
          <p className="mt-4 text-paper/70">
            We&apos;re committed to your professional success with comprehensive support
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((r, i) => (
            <div
              key={r.title}
              style={{ animationDelay: `${i * 80}ms` }}
              className="reveal group rounded-3xl border border-paper/20 bg-paper/5 p-7 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-amber-300/50 hover:bg-paper/10"
            >
              <span
                className={`grid h-14 w-14 place-items-center rounded-2xl border-2 border-paper/20 ${r.color} shadow-lg transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110`}
              >
                <r.icon className="h-7 w-7 text-white" />
              </span>
              <h3 className="mt-6 font-display text-xl font-bold leading-snug">{r.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-paper/60">{r.desc}</p>
              <div className="mt-5 text-4xl font-black text-paper/10 transition-colors group-hover:text-amber-300/30">
                0{i + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
