import type { Metadata } from 'next';
import { Sora, Fraunces, Caveat } from 'next/font/google';
import './globals.css';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700', '800'],
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
});

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-hand',
  weight: ['500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Placement Group | Career Training, Resume Writing & Job Search Platform',
  description:
    'Master in-demand skills with Fast Forward 15-Day courses, professional resume writing and LinkedIn optimization. Browse 5000+ active jobs and land your dream role.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sora.variable} ${fraunces.variable} ${caveat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
