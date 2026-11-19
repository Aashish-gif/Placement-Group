'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowRight, PlayCircle, Star, Sparkles, Rocket, BadgeCheck } from 'lucide-react';

const STATS = [
  { value: '8.5K+', label: 'Students Enrolled', emoji: '🎓' },
  { value: '65+', label: 'Expert Courses', emoji: '📚' },
  { value: '4.8/5', label: 'Student Rating', emoji: '⭐' },
  { value: '25K+', label: 'LinkedIn Followers', emoji: '📣' },
];

const MARQUEE_ITEMS = [
  'Fast Forward 15-Day Courses',
  'Resume Writing',
  'LinkedIn Optimization',
  '5000+ Active Jobs',
  'Career Coaching',
  'Live Projects',
  '24/7 Support',
];

const DICE_ROLES = ['Data Engineer', 'Cloud Engineer', 'Full Stack Dev', 'Data Analyst', 'DevOps Engineer', 'Business Analyst'];

function TiltCard() {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setStyle({
      transform: `perspective(900px) rotateY(${px * 10}deg) rotateX(${-py * 10}deg)`,
    });
  };
  const reset = () => setStyle({ transform: 'perspective(900px) rotateY(0deg) rotateX(0deg)' });

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={style}
      className="tilt-card relative rounded-[28px] border-2 border-ink bg-white p-3 shadow-[8px_8px_0_0_var(--ink)]"
    >
      <div className="tilt-inner">
        <div className="relative overflow-hidden rounded-[20px] border-2 border-ink">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&h=640&fit=crop&crop=faces"
            alt="Professional team collaborating during a placement group session"
            width={900}
            height={640}
            className="h-auto w-full object-cover"
            priority
          />
          <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full border-2 border-ink bg-amber-300 px-3 py-1 text-xs font-bold">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            5000+ Active Job Openings
          </div>
        </div>

        {/* floating chips */}
        <div className="absolute -left-6 bottom-16 flex items-center gap-2 rounded-2xl border-2 border-ink bg-secondary px-3.5 py-2.5 shadow-[4px_4px_0_0_var(--ink)]">
          <Rocket className="h-5 w-5 text-white" />
          <div className="leading-tight">
            <p className="text-xs font-bold text-white">Live Projects</p>
            <p className="text-[11px] text-white/80">Real-world experience</p>
          </div>
        </div>
        <div className="absolute -right-5 top-1/2 flex items-center gap-2 rounded-2xl border-2 border-ink bg-white px-3.5 py-2.5 shadow-[4px_4px_0_0_var(--ink)]">
          <BadgeCheck className="h-5 w-5 text-secondary" />
          <div className="leading-tight">
            <p className="text-xs font-bold">24/7 Support</p>
            <p className="text-[11px] text-ink/60">Always here to help</p>
          </div>
        </div>
        <div className="absolute -top-5 right-10 flex animate-float items-center gap-1 rounded-full border-2 border-ink bg-white px-3 py-1.5 shadow-[3px_3px_0_0_var(--ink)]" style={{ ['--rot' as string]: '4deg' }}>
          <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
          <span className="text-xs font-bold">4.8/5 Rated</span>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const [diceIdx, setDiceIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setDiceIdx((i) => (i + 1) % DICE_ROLES.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="paper-bg noise relative overflow-hidden pb-20 pt-32 md:pt-40">
      {/* blob backdrop */}
      <div className="pointer-events-none absolute -left-40 top-24 h-[480px] w-[480px] rounded-full bg-amber-200/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-64 h-[520px] w-[520px] rounded-full bg-orange-200/50 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-[360px] w-[360px] rounded-full bg-teal-200/40 blur-3xl" />

      {/* hand-drawn doodles */}
      <svg className="pointer-events-none absolute left-[6%] top-40 hidden h-24 w-24 text-primary lg:block" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="3" strokeDasharray="6 8" className="animate-spin-slow" />
      </svg>
      <svg className="pointer-events-none absolute right-[8%] top-36 hidden h-16 w-32 text-secondary lg:block" viewBox="0 0 140 60" fill="none">
        <path d="M5 50 Q 40 5 70 30 T 135 15" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="300" strokeDashoffset="300" style={{ animation: 'dash-draw 2s ease forwards 0.6s' }} />
        <path d="M120 8 l16 6 -13 11" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
      <p className="pointer-events-none absolute right-[10%] top-28 hidden -rotate-6 font-hand text-2xl text-primary lg:block">
        your dream job awaits!
      </p>
      <p className="pointer-events-none absolute left-[4%] bottom-24 hidden -rotate-3 font-hand text-2xl text-secondary lg:block">
        no coding needed, promise 🙌
      </p>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left */}
        <div>
          <div className="reveal is-visible inline-flex items-center gap-2 rounded-full border-2 border-ink bg-white px-4 py-1.5 text-sm font-semibold shadow-[3px_3px_0_0_var(--ink)]">
            <Sparkles className="h-4 w-4 text-primary" />
            Professional Development Platform
          </div>

          <h1 className="mt-6 font-display text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl xl:text-7xl">
            Accelerate Your
            <br />
            <span className="doodle-underline text-primary">Career Growth</span>
            <span className="ml-3 inline-block align-middle text-5xl md:text-6xl">🚀</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
            Master in-demand skills with our{' '}
            <span className="font-hand text-2xl font-bold text-secondary">Fast Forward 15-Day</span>{' '}
            courses. Get professional resume writing and LinkedIn optimization to land your dream
            job.
          </p>

          {/* role dice */}
          <div className="mt-6 inline-flex flex-wrap items-center gap-2 rounded-2xl border-2 border-dashed border-ink/40 bg-white/70 px-4 py-2.5 text-sm font-semibold">
            <span className="text-ink/60">Become a</span>
            <span key={diceIdx} className="pop-in font-bold text-primary" style={{ animation: 'pop-in 0.45s cubic-bezier(0.22,1,0.36,1)' }}>
              {DICE_ROLES[diceIdx]}
            </span>
            <span className="text-ink/60">in 15 days ⚡</span>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#courses"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-ink bg-primary px-7 py-3.5 text-base font-bold text-white shadow-[4px_4px_0_0_var(--ink)] transition-all hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_var(--ink)] active:translate-y-0 active:shadow-[2px_2px_0_0_var(--ink)]"
            >
              Start Learning
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#jobs"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-ink bg-white px-7 py-3.5 text-base font-bold shadow-[4px_4px_0_0_var(--ink)] transition-all hover:-translate-y-0.5 hover:bg-amber-50 hover:shadow-[6px_6px_0_0_var(--ink)] active:translate-y-0 active:shadow-[2px_2px_0_0_var(--ink)]"
            >
              <PlayCircle className="h-5 w-5 text-secondary" />
              Browse 5000+ Jobs
            </a>
          </div>

          {/* stats */}
          <dl className="mt-12 grid max-w-xl grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="flex items-center gap-1 text-xs font-medium uppercase tracking-wide text-ink/50">
                  <span className="text-sm">{s.emoji}</span> {s.label}
                </dt>
                <dd className="font-display text-3xl font-black tracking-tight">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right */}
        <div className="relative px-4 pb-6 lg:px-8">
          <TiltCard />
        </div>
      </div>

      {/* marquee */}
      <div className="relative mt-16 -rotate-1 border-y-2 border-ink bg-ink py-3 text-paper">
        <div className="flex overflow-hidden">
          <div className="flex min-w-max animate-marquee items-center gap-8 pr-8">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span key={i} className="flex items-center gap-8 whitespace-nowrap font-display text-lg font-semibold">
                {item}
                <span className="text-amber-300">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
