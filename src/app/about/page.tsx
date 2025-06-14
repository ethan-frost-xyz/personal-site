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
              <li>Aerospace & Defense and Cybersecurity Team under former FBI Special Agent Trevor J. Walsh.</li>
              <li>Primarily operating on the A&D coverage where our coverage is focused on next generation disruptive companies.</li>
              <li>Currently writing an exhaustive industry report on everything drones (UAS, UGS, UUS/USV, c-UAS, etc.) spanning public and private companies.</li>
              <li>See [SECTION] for more details.</li>
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
              <li>Developed AI advisor for non-target business students seeking finance careers.</li>
              <li>Conducted user research with students and career advisors to validate concept.</li>
              <li>add why it failed.</li>
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
              <li>B.S. Business Administration with a concentration in Finance and Entrepreneurship.</li>
              <li>Minor in Economics, Venture Advisor for <a href="https://www.uvmfoundation.org/s/1690/19/interior.aspx?sid=1690&gid=2&pgid=1582" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">Catamount Innovation Fund</a>, a student-led VC fund.</li>
              <li>Awarded Grossman School of Business Dean's Cup award for Best Speaker (2023).</li>
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
              <li>The day after passing CFA L1, I was pointed towards a part-time remote internship supporting the A&D and Cybersecurity team.</li>
              <li>Laid the foundation for my current role and reputation for automation.</li>
              <li>Worked well beyond the allocated hours, eventually it paid off being called up full time.</li>
            </ul>
          </li>
          <li className="mb-10 ml-6">
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 ring-8 ring-gray-900" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-500">Summer 2023</time>
            <h3 className="text-lg font-medium text-gray-100">
              Passed Level 1 CFA Exam
            </h3>
            <p className="text-sm text-gray-400 italic">Burlington, VT</p>
            <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
              <li>Decided to take a traditionally post graduate exam in order to differentiate myself.</li>
              <li>Passed in <a href="https://www.linkedin.com/posts/ethan-frost-_after-hundreds-of-hours-of-studying-im-activity-7115331297354338304-mK75?utm_source=share&utm_medium=member_desktop&rcm=ACoAADXde_8Bbeuid7YLEreK_3NsZK8R7D4gvgw" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">95th percentile</a>, 37% overall pass rate on August 2023 Level I Exam.</li>
              <li>Fun fact: I was also working at Jersey Mike's at the time.</li>
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
              <li>Right-hand-man to the CEO of a Berlin-based <a href="https://www.siliconallee.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">deep tech accelerator</a> during my time abroad.</li>
              <li>Primary project was various investment and operations tasks related to raising an SVP for a drone startup angel round.</li>
              <li>Met countless founders across startup verticals, sparking my passion for hard tech.</li>
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
              <li>Was hired to support the company's Web3 efforts, expanded into a generalist role serving across multiple departments including marketing, sales, partnerships, and Web3 initiatives.</li>
              <li><a href="https://superplastic.co/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">Superplastic</a> is a entertainment based startup that intertwines physical and digital experiences through digital celebrities.</li>
              <li>The experiences below were essential for getting this role.</li>
            </ul>
          </li>
          {/* Defi Exploration */}
          <li className="mb-10 ml-6">
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 ring-8 ring-gray-900" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-500">2021 to 2022</time>
            <h3 className="text-lg font-medium text-gray-100">
              Defi Exploration
            </h3>
            <p className="text-sm text-gray-400 italic">Burlington, VT</p>
            <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
              <li>Had been following the space since 2017, with my free time I dove in head first.</li>
              <li>Created an NFT collection with some friends, personally coded the smart contract (ERC-721).</li>
              <li>Also got certifications from INSEAD and Duke University in Blockchain and DeFi, respectively.</li>
            </ul>
          </li>
          {/* Real Estate License */}
          <li className="mb-10 ml-6">
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 ring-8 ring-gray-900" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-500">Winter Break 2020</time>
            <h3 className="text-lg font-medium text-gray-100">
              Passed National and State Real Estate License (VT)
            </h3>
            <p className="text-sm text-gray-400 italic">Burlington, VT</p>
            <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
              <li>Planted the seeds to the idea of leveraging unconventional exams to differentiate myself without internship experience.</li>
              <li>I also picked up Photoshop, and created posters of my favorite musicians as Pokemon cards to sell to my friends.</li>
            </ul>
          </li>
          {/* Starting of college / beginning of timeline */}
          <li className="mb-10 ml-6">
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 ring-8 ring-gray-900" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-500">Sep 2019</time>
            <h3 className="text-lg font-medium text-gray-100">
              Enrolled at the University of Vermont
            </h3>
            <p className="text-sm text-gray-400 italic">Burlington, VT</p>
            <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
              <li>Wanted to do something in business, but was not sure what.</li>
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

      {/* ---------------- Footer ---------------- */}
      <footer className="pt-12 text-sm text-neutral-500">
        © Ethan Frost — Last updated June 2025 - Built from scratch with Next.js and Tailwind CSS via Cursor
      </footer>
    </main>
  );
}