'use client';

import Image from 'next/image';
import { Users, Star, Zap, ArrowRight } from 'lucide-react';

const COURSES = [
  {
    title: 'Data Engineer - 90 Days Complete',
    category: 'Data Engineering',
    level: 'Beginner',
    students: '1018 students',
    rating: '4.8',
    img: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=700&h=440&fit=crop',
    desc: 'The most comprehensive 90-day Data Engineer program. Go from fundamentals to advanced topics with extensive hands-on projects, mentorship, and guaranteed interview preparation for top tech companies.',
  },
  {
    title: 'Data Engineer - 60 Days Intensive',
    category: 'Data Engineering',
    level: 'Advanced',
    students: '1271 students',
    rating: '4.9',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=700&h=440&fit=crop',
    desc: 'Comprehensive 60-day program to become a skilled Data Engineer. Master data pipelines, ETL processes, big data technologies, and cloud data platforms to build scalable data solutions.',
  },
  {
    title: 'Cloud Engineer Certification',
    category: 'Cloud Computing',
    level: 'Intermediate',
    students: '731 students',
    rating: '4.1',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=700&h=440&fit=crop',
    desc: 'Master cloud computing with AWS, Azure, and Google Cloud Platform. Learn to design, deploy, and manage scalable cloud infrastructure and become a certified cloud engineer.',
  },
  {
    title: 'Full Stack Developer',
    category: 'Web Development',
    level: 'Intermediate',
    students: '395 students',
    rating: '4.9',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&h=440&fit=crop',
    desc: 'Master both frontend and backend development. Build complete web applications using modern JavaScript frameworks and technologies.',
  },
  {
    title: 'Data Analyst',
    category: 'Data Analysis',
    level: 'Beginner',
    students: '1017 students',
    rating: '4.3',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&h=440&fit=crop',
    desc: 'Transform raw data into actionable insights using SQL, Python, and visualization tools. Master statistical analysis and reporting.',
  },
  {
    title: 'Big Data Engineering',
    category: 'Data Engineering',
    level: 'Advanced',
    students: '1443 students',
    rating: '4.1',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&h=440&fit=crop',
    desc: 'Master the tools and technologies to process, store, and analyze massive datasets. Learn Hadoop, Spark, and cloud-based big data solutions.',
  },
];

const LEVEL_STYLES: Record<string, string> = {
  Beginner: 'bg-emerald-100 text-emerald-800 border-emerald-600',
  Intermediate: 'bg-amber-100 text-amber-800 border-amber-600',
  Advanced: 'bg-rose-100 text-rose-800 border-rose-600',
};

export default function Courses() {
  return (
    <section id="courses" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rotate-1 items-center gap-2 rounded-full border-2 border-ink bg-secondary px-4 py-1.5 text-sm font-bold text-white shadow-[3px_3px_0_0_var(--ink)]">
            <Zap className="h-4 w-4" /> Featured Training Programs
          </span>
          <h2 className="mt-6 font-display text-4xl font-black tracking-tight sm:text-5xl">
            Level up with our{' '}
            <span className="text-primary">most popular</span> courses
          </h2>
          <p className="mt-4 text-ink/70">
            Jumpstart your career with our most popular Fast Forward 15-Day courses.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((c, i) => (
            <article
              key={c.title}
              style={{ animationDelay: `${i * 70}ms` }}
              className="reveal group relative flex flex-col overflow-hidden rounded-3xl border-2 border-ink bg-white shadow-[6px_6px_0_0_var(--ink)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[9px_9px_0_0_var(--ink)]"
            >
              <div className="relative h-48 overflow-hidden border-b-2 border-ink">
                <Image
                  src={c.img}
                  alt={c.title}
                  width={700}
                  height={440}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 -rotate-3 rounded-full border-2 border-ink bg-amber-300 px-3 py-1 text-xs font-bold shadow-[2px_2px_0_0_var(--ink)]">
                  Featured
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-ink/5 px-3 py-1 text-xs font-semibold text-ink/70">
                    {c.category}
                  </span>
                  <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${LEVEL_STYLES[c.level]}`}>
                    {c.level}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-xl font-bold leading-snug">
                  {c.title}
                </h3>
                <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-ink/60">
                  {c.desc}
                </p>

                <div className="mt-5 flex items-center justify-between border-t-2 border-dashed border-ink/15 pt-4">
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-ink/60">
                    <Users className="h-4 w-4 text-secondary" /> {c.students}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-bold">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" /> {c.rating}
                  </span>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-bold text-primary">
                    <Zap className="h-3.5 w-3.5" /> Fast Forward 15 Days
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm font-bold text-ink transition-all group-hover:gap-2 group-hover:text-primary">
                    Explore <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
