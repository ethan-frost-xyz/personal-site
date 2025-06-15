import Image from 'next/image';
import Link from 'next/link';
import { GlowingEffect } from '../components/GlowingEffect';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home – Ethan Frost',
  description: 'Turning frontier-tech insight into shipped outcomes.',
};

export default function Home() {
  return (
    <>
      <main className="mx-auto max-w-screen-xl px-6 py-16 space-y-24">
        {/* ---------------- Hero Section ---------------- */}
        <section id="hero" className="flex flex-col items-center text-center space-y-6">
          <div className="relative">
            {/* Placeholder for headshot */}
            <div className="absolute -inset-2 rounded-full bg-neutral-700/50" />
            <Image
              src="/me-headshot.jpg"
              alt="Ethan Frost"
              width={200}
              height={200}
              className="rounded-full"
            />
          </div>
          <h1 className="text-5xl font-semibold tracking-tight">Ethan Frost</h1>
          <p className="max-w-2xl text-lg text-neutral-400">
            Artificial Intelligence, Equity Research, and Defense Technology.
            Project underconstruction. Please excuse the AI slop.
          </p>
          {/* ---------------- Navigation Buttons ---------------- */}
          <div className="flex gap-4">
            <Link
              href="/work"
              className="px-4 py-2 bg-neutral-200 text-black font-medium rounded hover:bg-black hover:text-white transition"
            >
              View Work
            </Link>
            <Link
              href="/about"
              className="px-4 py-2 bg-neutral-200 text-black font-medium rounded hover:bg-black hover:text-white transition"
            >
              About Me
            </Link>
          </div>
        </section>
        {/* ---------------- Introduction ---------------- */}
        <section className="space-y-2">
        <p className="text-lg leading-relaxed">
          I'm a Vermont‑raised equity research analyst living in New York City, working at the
          intersection of finance, defense, and technology. By day, I cover
          next generation aerospace & defense companies, as well as cybersecurity. I've
          always been drawn to tools, ideas, and technologies that change how
          things get built. I pride myself as a life long independent learner.
        </p>
      </section>

        {/* ---------------- Project Teasers ---------------- */}
        <section id="projects" className="space-y-4">
          <h2 className="text-2xl font-semibold">Selected Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Replace with your <ProjectCard /> */}
            <div className="group relative rounded-2xl border border-neutral-700 p-6 transition-shadow hover:shadow-xl">
              <h3 className="text-xl font-medium">Launch Efficiency Model</h3>
              <p className="mt-2 text-sm text-neutral-400">
                High-fidelity launch efficiency analysis of Rocket Lab using Python.
              </p>
              <Link href="/work/rocket-lab-model" className="mt-4 inline-block text-sm underline">
                Read More →
              </Link>
            </div>

            <div className="group relative rounded-2xl border border-neutral-700 p-6 transition-shadow hover:shadow-xl">
              <h3 className="text-xl font-medium">CCA Opportunity Analysis</h3>
              <p className="mt-2 text-sm text-neutral-400">
                Data-driven analysis of the Collaborative Combat Aircraft (CCA) program.
              </p>
              <Link href="/work/cca-opportunity-analysis" className="mt-4 inline-block text-sm underline">
                Read More →
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* ---------------- Footer ---------------- */}
      <footer className="py-8 text-center text-sm text-neutral-500">
        © Ethan Frost — Last updated June 2025 — Built with Next.js & Tailwind via Cursor
      </footer>
    </>
  );
}
