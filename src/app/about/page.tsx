import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About – Ethan Frost",
  description:
    "Timeline resume, bio, and career highlights for Ethan Frost – analyst at the intersection of finance, defense, and technology.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-screen-md px-6 py-12 space-y-14">
      {/* ---------------- Bio ---------------- */}
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight">About</h1>
        <p className="text-lg leading-relaxed">
          I'm a Vermont‑raised equity research analyst living in New York City, working at the
          intersection of finance, defense, and technology. By day, I cover
          next generation aerospace & defense companies, as well as cybersecurity. I've
          always been drawn to tools, ideas, and technologies that change how
          things get built. I pride myself as a life long independent learner.
        </p>
        <p className="text-lg leading-relaxed">
          I spent my youth obsessed with getting more with less, particularly
          in school where I would rather be learning outside than inside the
          classroom. My background blends financial rigor with technical fluency,
          and I gravitate toward problems that don't come with a playbook.
          Whether it's modeling, writing, or building systems behind the scenes,
          I'm focused on clarity, speed, and impact.
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
            <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
              <li>Aerospace & Defense and Cybersecurity Team under former FBI Special Agent Trevor J. Walsh</li>
              <li>See resume for more details</li>
            </ul>
          </li>
          <li className="mb-10 ml-6">
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 ring-8 ring-gray-900" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-500">Early 2024</time>
            <h3 className="text-lg font-medium text-gray-100">
              GPT Wrapper Project
            </h3>
            <p className="text-sm text-gray-400 italic">Burlington, VT</p>
            <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
              <li>Developed AI advisor for non-target business students seeking finance careers</li>
              <li>Conducted user research with students and career advisors to validate concept</li>
              <li>add why it failed</li>
            </ul>
          </li>
         {/* Intern */}
         <li className="mb-10 ml-6">
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 ring-8 ring-gray-900" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-500">December 2023</time>
            <h3 className="text-lg font-medium text-gray-100">
              Graduated University of Vermont
            </h3>
            <p className="text-sm text-gray-400 italic">Burlington, VT</p>
            <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
              <li>B.S. Business Administration with a concentration in Finance and Entrepreneurship</li>
              <li>Minor in Economics, Venture Advisor for <a href="https://www.uvmfoundation.org/s/1690/19/interior.aspx?sid=1690&gid=2&pgid=1582" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">Catamount Innovation Fund</a></li>
              <li>Won Grossman School of Business Dean's Cup award for Best Speaker (2023)</li>
            </ul>
          </li>
          <li className="mb-10 ml-6">
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 ring-8 ring-gray-900" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-500">November 2023 to May 2024</time>
            <h3 className="text-lg font-medium text-gray-100">
              Equity Research Intern – Citizens Capital Markets
            </h3>
            <p className="text-sm text-gray-400 italic">Remote</p>
            <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
              <li>Aerospace & Defense and Cybersecurity Team under former FBI special agent Trevor J. Walsh</li>
              <li>See resume for more details</li>
            </ul>
          </li>
          <li className="mb-10 ml-6">
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 ring-8 ring-gray-900" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-500">Summer 2023</time>
            <h3 className="text-lg font-medium text-gray-100">
              Passed Level 1 CFA Exam
            </h3>
            <p className="text-sm text-gray-400 italic">Remote</p>
            <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
              <li>Decided to take a traditionally post graduate exam in order to differentiate myself</li>
              <li>Passed in 95th percentile[LINK], 38% overall pass rate on August 2023 exam Level I Exam</li>
            </ul>
          </li>

          {/* Study Abroad */}
          <li className="mb-10 ml-6">
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 ring-8 ring-gray-900" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-500">Aug 2022 to Dec 2022</time>
            <h3 className="text-lg font-medium text-gray-100">
              Venture Analyst – Silicon Allee
            </h3>
            <p className="text-sm text-gray-400 italic">Berlin, Germany</p>
            <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
              <li>Supported investment team at a Berlin-based <a href="https://www.siliconallee.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">deep tech accelerator</a> during my time abroad</li>
              <li>Widened aperture across startup verticals and sparked my interest in hard tech</li>
            </ul>
          </li>

          {/* Superplastic Internship */}
          <li className="mb-10 ml-6">
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 ring-8 ring-gray-900" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-500">Feb 2022 to August 2022</time>
            <h3 className="text-lg font-medium text-gray-100">
              Generalist – Superplastic
            </h3>
            <p className="text-sm text-gray-400 italic">Burlington, VT</p>
            <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
              <li>Interned across multiple departments including marketing, sales, partnerships, and Web3 initiatives</li>
              <li><a href="https://superplastic.co/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">Superplastic</a> is a entertainment based startup that intertwines physical and digital experiences through digital celebrities</li>
            </ul>
          </li>
          <li className="mb-10 ml-6">
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 ring-8 ring-gray-900" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-500">Winter 2020</time>
            <h3 className="text-lg font-medium text-gray-100">
              Passed National and State Real Estate License (VT)
            </h3>
            <p className="text-sm text-gray-400 italic">Burlington, VT</p>
            <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
              <li>Was looking for a challenge during my winter break</li>
              <li>Maybe add how i got into photoshop</li>
            </ul>
          </li>
          {/* Education */}
          <li className="mb-10 ml-6">
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 ring-8 ring-gray-900" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-500">Sep 2019</time>
            <h3 className="text-lg font-medium text-gray-100">
              Enrolled at the University of Vermont
            </h3>
            <p className="text-sm text-gray-400 italic">Burlington, VT</p>
            <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
              <li>Wanted to do something in business, but was not sure what</li>
            </ul>
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