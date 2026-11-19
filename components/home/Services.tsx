'use client';

import { FileText, Linkedin, Compass, Check } from 'lucide-react';

const SERVICES = [
  {
    icon: FileText,
    emoji: '📄',
    title: 'Resume Writing',
    desc: 'Get a professionally written resume optimized according to market needs and ATS compliant',
    points: ['ATS Optimized Format', 'Market-Focused Content', 'Professional Writing'],
    color: 'bg-primary',
    rotate: '-rotate-1',
  },
  {
    icon: Linkedin,
    emoji: '🔗',
    title: 'LinkedIn Grooming',
    desc: 'Optimize your LinkedIn profile according to job market needs to get noticed by recruiters',
    points: ['Profile Optimization', 'Keyword Strategy', 'Recruiter Visibility'],
    color: 'bg-secondary',
    rotate: 'rotate-1',
  },
  {
    icon: Compass,
    emoji: '🧭',
    title: 'Career Coaching',
    desc: 'Get personalized career guidance and mentorship to accelerate your professional growth',
    points: ['Career Planning', 'Interview Preparation', 'Skill Development'],
    color: 'bg-amber-400',
    rotate: '-rotate-1',
  },
];

export default function Services() {
  return (
    <section id="services" className="paper-bg relative overflow-hidden py-24">
      <svg className="pointer-events-none absolute -left-8 top-16 h-40 w-40 text-amber-300/60" viewBox="0 0 100 100" fill="none">
        <path d="M20 80 Q 30 20 50 50 T 85 25" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      </svg>
      <p className="pointer-events-none absolute right-[12%] top-10 hidden rotate-3 font-hand text-2xl text-secondary lg:block">
        recruiters will notice you 👀
      </p>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex -rotate-1 items-center gap-2 rounded-full border-2 border-ink bg-white px-4 py-1.5 text-sm font-bold shadow-[3px_3px_0_0_var(--ink)]">
            ✨ Professional Services
          </span>
          <h2 className="mt-6 font-display text-4xl font-black tracking-tight sm:text-5xl">
            Get expert help to{' '}
            <span className="doodle-underline">stand out</span>
          </h2>
          <p className="mt-4 text-ink/70">
            Enhance your professional presence and land your dream job
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className={`group relative rounded-[26px] border-2 border-ink bg-white p-8 shadow-[6px_6px_0_0_var(--ink)] transition-all duration-300 hover:-translate-y-2 hover:rotate-0 hover:shadow-[9px_9px_0_0_var(--ink)] ${s.rotate}`}
            >
              <span className="pointer-events-none absolute -top-5 right-6 text-4xl transition-transform duration-300 group-hover:scale-125">
                {s.emoji}
              </span>
              <span
                className={`grid h-14 w-14 place-items-center rounded-2xl border-2 border-ink ${s.color} shadow-[3px_3px_0_0_var(--ink)] transition-transform duration-300 group-hover:-rotate-6`}
              >
                <s.icon className="h-7 w-7 text-white" strokeWidth={2} />
              </span>
              <h3 className="mt-6 font-display text-2xl font-bold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">{s.desc}</p>
              <ul className="mt-5 space-y-2.5 border-t-2 border-dashed border-ink/15 pt-5">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-sm font-semibold">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-emerald-100">
                      <Check className="h-3 w-3 text-emerald-700" strokeWidth={3} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
