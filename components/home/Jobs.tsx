'use client';

import { useState } from 'react';
import { Briefcase, MapPin, ArrowUpRight, Search } from 'lucide-react';

const CATEGORIES: Record<string, string[]> = {
  Engineering: ['Data Engineer', 'Cloud Engineer', 'DevOps Engineer', 'Full Stack Developer'],
  'Business & Finance': ['Business Analyst', 'Financial Analyst', 'Accounts Manager', 'Bookkeeper'],
  'Healthcare & Admin': ['Medical Coder', 'Medical Biller', 'Patient Care Coordinator', 'HR Admin'],
  'IT & Cloud': ['AWS Solutions Architect', 'Azure Administrator', 'Cybersecurity Analyst', 'Database Administrator'],
};

const QUICK_STATS = [
  { value: '5000+', label: 'Active Jobs' },
  { value: '40+', label: 'Job Roles' },
  { value: '5', label: 'Countries' },
];

const PLATFORMS = ['LinkedIn', 'Indeed', 'ZipRecruiter', 'Glassdoor', 'Google Jobs', 'Monster', 'Dice', '+20 more'];

export default function Jobs() {
  const cats = Object.keys(CATEGORIES);
  const [active, setActive] = useState(cats[0]);

  return (
    <section id="jobs" className="relative bg-ink py-24 text-paper">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="inline-flex -rotate-2 items-center gap-2 rounded-full bg-amber-300 px-4 py-1.5 text-sm font-bold text-ink">
              <Briefcase className="h-4 w-4" /> Find Job
            </span>
            <h2 className="mt-5 font-display text-4xl font-black tracking-tight sm:text-5xl">
              Browse <span className="doodle-underline text-amber-300">5000+ Jobs</span>
            </h2>
            <p className="mt-4 max-w-2xl text-paper/70">
              Jobs aggregated from LinkedIn, Indeed, ZipRecruiter, Glassdoor, Google Jobs, Monster,
              Dice, and 20+ more platforms. Apply directly through Placement Group with your resume.
            </p>
          </div>
          <div className="flex gap-8">
            {QUICK_STATS.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-3xl font-black text-amber-300">{s.value}</p>
                <p className="text-xs uppercase tracking-widest text-paper/60">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* platform pills */}
        <div className="mt-8 flex flex-wrap gap-2">
          {PLATFORMS.map((p) => (
            <span key={p} className="rounded-full border border-paper/25 px-3.5 py-1.5 text-xs font-semibold text-paper/70">
              {p}
            </span>
          ))}
        </div>

        {/* search bar */}
        <div className="mt-8 flex max-w-2xl items-center gap-3 rounded-full border-2 border-paper/30 bg-paper/5 py-2 pl-5 pr-2 backdrop-blur">
          <Search className="h-5 w-5 text-paper/50" />
          <input
            type="text"
            placeholder="Search job title, keyword or company..."
            className="w-full bg-transparent py-2 text-sm text-paper placeholder:text-paper/40 focus:outline-none"
          />
          <button className="rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-orange-600">
            Search
          </button>
        </div>

        {/* tabs + roles */}
        <div className="mt-12">
          <div className="flex flex-wrap gap-2.5">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full border-2 px-5 py-2.5 text-sm font-bold transition-all ${
                  active === c
                    ? 'border-amber-300 bg-amber-300 text-ink shadow-[3px_3px_0_0_rgba(252,211,77,0.4)]'
                    : 'border-paper/25 text-paper/70 hover:border-paper/50 hover:text-paper'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES[active].map((role, i) => (
              <a
                key={role}
                href="#cta"
                style={{ animationDelay: `${i * 60}ms` }}
                className="pop-in group flex items-center justify-between rounded-2xl border border-paper/20 bg-paper/5 p-5 transition-all hover:-translate-y-1 hover:border-amber-300/60 hover:bg-paper/10"
              >
                <div>
                  <p className="font-bold">{role}</p>
                  <p className="mt-1 flex items-center gap-1 text-xs text-paper/50">
                    <MapPin className="h-3 w-3" /> USA · Canada · Remote
                  </p>
                </div>
                <span className="grid h-9 w-9 place-items-center rounded-full border border-paper/25 transition-all group-hover:border-amber-300 group-hover:bg-amber-300">
                  <ArrowUpRight className="h-4 w-4 transition-colors group-hover:text-ink" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
