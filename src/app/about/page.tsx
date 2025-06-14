import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About – Ethan Frost",
  description:
    "Timeline résumé, bio, and career highlights for Ethan Frost – analyst at the intersection of finance, defense, and technology.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-screen-md px-6 py-12 space-y-14">
      {/* ---------------- Bio ---------------- */}
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight">About</h1>
        <p className="text-lg leading-relaxed">
          I'm a Vermont‑raised analyst living in New York City, working at the
          intersection of finance, defense, and technology. By day, I cover
          aerospace and cybersecurity companies, helping translate complex
          systems and market signals into sharp, actionable analysis. I've
          always been drawn to tools, ideas, and technologies that change how
          things get built — especially when the stakes are high.
        </p>
        <p className="text-lg leading-relaxed">
          My background blends financial rigor with technical fluency, and I
          gravitate toward problems that don't come with a playbook. Whether
          it's modeling, writing, or building systems behind the scenes, I'm
          focused on clarity, speed, and impact.
        </p>
      </section>
      {/* ---------------- Timeline ---------------- */}
      <section>
        <h2 className="sr-only">Career & Education Timeline</h2>
        <ol className="relative border-l border-gray-700 dark:border-gray-600">
          {/* Associate */}
          <li className="mb-10 ml-6">
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 ring-8 ring-gray-900" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-500">May 2024 to Present</time>
            <h3 className="text-lg font-medium text-gray-100">
              Equity Research Associate – Citizens Capital Markets
            </h3>
            <p className="text-sm text-gray-400 italic">New York, NY</p>
            <p className="text-sm text-gray-400">Aerospace & Defense and Cybersecurity Team under former FBI special agent Trevor J. Walsh</p>
            <p className="text-sm text-gray-400">See resume for more details</p>
          </li>
         {/* Intern */}
         <li className="mb-10 ml-6">
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 ring-8 ring-gray-900" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-500">December 2023</time>
            <h3 className="text-lg font-medium text-gray-100">
              Graduated University of Vermont
            </h3>
            <p className="text-sm text-gray-400 italic">Burlington, VT</p>
            <p className="text-sm text-gray-400">B.S. Business Administration with a concentration in Finance and Entrepreneurship</p>
            <p className="text-sm text-gray-400">Minor in Economics, Venture Advisor for <a href="https://www.uvmfoundation.org/s/1690/19/interior.aspx?sid=1690&gid=2&pgid=1582" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">Catamount Innovation Fund</a></p>
          </li>
          <li className="mb-10 ml-6">
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 ring-8 ring-gray-900" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-500">November 2023 to May 2024</time>
            <h3 className="text-lg font-medium text-gray-100">
              Equity Research Intern – Citizens Capital Markets
            </h3>
            <p className="text-sm text-gray-400 italic">Remote</p>
            <p className="text-sm text-gray-400">Aerospace & Defense and Cybersecurity Team under former FBI special agent Trevor J. Walsh</p>
            <p className="text-sm text-gray-400">See resume for more details</p>
          </li>
          <li className="mb-10 ml-6">
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 ring-8 ring-gray-900" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-500">August 2023</time>
            <h3 className="text-lg font-medium text-gray-100">
              Passed Level 1 CFA Exam
            </h3>
            <p className="text-sm text-gray-400 italic">Remote</p>
            <p className="text-sm text-gray-400">xyz</p>
          </li>

          {/* Study Abroad */}
          <li className="mb-10 ml-6">
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 ring-8 ring-gray-900" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-500">Aug 2022 to Dec 2022</time>
            <h3 className="text-lg font-medium text-gray-100">
              Venture Analyst Intern – Silicon Allee (Berlin ISEP Program)
            </h3>
            <p className="text-sm text-gray-400 italic">Berlin, Germany</p>
            <p className="text-sm text-gray-400">xyz</p>
          </li>

          {/* Superplastic Internship */}
          <li className="mb-10 ml-6">
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 ring-8 ring-gray-900" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-500">Feb 2022 to August 2022</time>
            <h3 className="text-lg font-medium text-gray-100">
              Generalist Intern – Superplastic
            </h3>
            <p className="text-sm text-gray-400 italic">Burlington, VT</p>
            <p className="text-sm text-gray-400">xyz</p>
          </li>

          {/* Education */}
          <li className="mb-10 ml-6">
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 ring-8 ring-gray-900" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-500">Sep 2019</time>
            <h3 className="text-lg font-medium text-gray-100">
              Started B.S. Business Administration – University of Vermont
            </h3>
            <p className="text-sm text-gray-400 italic">Burlington, VT</p>
            <p className="text-sm text-gray-400">xyz</p>
          </li>
          <li className="ml-6">
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 ring-8 ring-gray-900" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-500">Dec 2023</time>
            <h3 className="text-lg font-medium text-gray-100">
              Graduated B.S. Business Administration – University of Vermont
            </h3>
            <p className="text-sm text-gray-400 italic">Burlington, VT</p>
            <p className="text-sm text-gray-400">xyz</p>
          </li>
        </ol>
      </section>

      {/* ---------------- Resume link (optional) ---------------- */}
      {/*
      <section className="pt-8 text-center">
        <a
          href="/Ethan_Frost_Resume.pdf"
          className="text-sm underline decoration-gray-600 hover:text-gray-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          View full résumé →
        </a>
      </section>
      */}
    </main>
  );
}