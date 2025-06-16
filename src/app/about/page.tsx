import type { Metadata } from "next";
import { Section, H2, P} from "@/components/primitives";
import { Timeline } from "@/components/ui/timeline";

export const metadata: Metadata = {
  title: "About – Ethan Frost",
  description:
    "Timeline resume, bio, and career highlights for Ethan Frost – analyst at the intersection of finance, defense, and technology.",
};

const timelineData = [
  {
    title: "Equity Research Associate",
    date: "May 2024 to Present",
    location: "New York, NY",
    content: (
      <ul className="list-disc list-inside text-sm text-neutral-400 space-y-1">
        <li>Aerospace & Defense and Cybersecurity Team under former FBI Special Agent Trevor J. Walsh.</li>
        <li>Primarily operating on the A&D coverage where our coverage is focused on next generation disruptive companies.</li>
        <li>Currently writing an exhaustive industry report on everything drones (UAS, UGS, UUS/USV, c-UAS, etc.) spanning public and private companies.</li>
        <li>See [SECTION] for more details.</li>
      </ul>
    ),
  },
  {
    title: "GPT Wrapper Project",
    date: "Early 2024",
    location: "Burlington, VT",
    content: (
      <ul className="list-disc list-inside text-sm text-neutral-400 space-y-1">
        <li>Developed AI advisor for non-target business students seeking finance careers.</li>
        <li>Conducted user research with students and career advisors to validate concept.</li>
        <li>add why it failed.</li>
      </ul>
    ),
  },
  {
    title: "Graduated University of Vermont",
    date: "December 2023",
    location: "Burlington, VT",
    content: (
      <ul className="list-disc list-inside text-sm text-neutral-400 space-y-1">
        <li>B.S. Business Administration with a concentration in Finance and Entrepreneurship.</li>
        <li>Minor in Economics, Venture Advisor for <a href="https://www.uvmfoundation.org/s/1690/19/interior.aspx?sid=1690&gid=2&pgid=1582" target="_blank" rel="noopener noreferrer" className="underline hover:text-neutral-300">Catamount Innovation Fund</a>, a student-led VC fund.</li>
        <li>Awarded Grossman School of Business Dean&apos;s Cup award for Best Speaker (2023).</li>
      </ul>
    ),
  },
  {
    title: "Equity Research Intern",
    date: "November 2023 to May 2024",
    location: "Remote",
    content: (
      <ul className="list-disc list-inside text-sm text-neutral-400 space-y-1">
        <li>The day after passing CFA L1, I was pointed towards this part-time role.</li>
        <li>Laid the foundation for my current role and reputation for automation on the team.</li>
        <li>Worked well beyond the allocated hours, eventually it paid off being called up full time.</li>
      </ul>
    ),
  },
  {
    title: "Passed Level 1 CFA Exam",
    date: "Summer 2023",
    location: "Burlington, VT",
    content: (
      <ul className="list-disc list-inside text-sm text-neutral-400 space-y-1">
        <li>Decided to take a traditionally post graduate exam in order to differentiate myself.</li>
        <li>Passed in <a href="https://www.linkedin.com/posts/ethan-frost-_after-hundreds-of-hours-of-studying-im-activity-7115331297354338304-mK75?utm_source=share&utm_medium=member_desktop&rcm=ACoAADXde_8Bbeuid7YLEreK_3NsZK8R7D4gvgw" target="_blank" rel="noopener noreferrer" className="underline hover:text-neutral-300">95th percentile</a>, 37% overall pass rate on August 2023 Level I Exam.</li>
        <li>Fun fact: I was also working at Jersey Mike&apos;s at the time.</li>
      </ul>
    ),
  },
  {
    title: "Venture Analyst",
    date: "Aug 2022 to Dec 2022",
    location: "Berlin, Germany",
    content: (
      <ul className="list-disc list-inside text-sm text-neutral-400 space-y-1">
        <li>Right-hand-man to the CEO of a Berlin-based <a href="https://www.siliconallee.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-neutral-300">deep tech accelerator</a> during my time abroad.</li>
        <li>Primary project was various investment and operations tasks related to raising an SVP for a drone startup angel round.</li>
        <li>Met countless founders across startup verticals, sparking my passion for hard tech.</li>
      </ul>
    ),
  },
  {
    title: "Generalist",
    date: "Feb 2022 to August 2022",
    location: "Burlington, VT",
    content: (
      <ul className="list-disc list-inside text-sm text-neutral-400 space-y-1">
        <li>Was hired to support the company&apos;s Web3 efforts, expanded into a generalist role serving across multiple departments including marketing, sales, partnerships, and Web3 initiatives.</li>
        <li><a href="https://superplastic.co/" target="_blank" rel="noopener noreferrer" className="underline hover:text-neutral-300">Superplastic</a> is a entertainment based startup that intertwines physical and digital experiences through digital celebrities.</li>
        <li>The experiences below were essential for getting this role.</li>
      </ul>
    ),
  },
  {
    title: "Defi Exploration",
    date: "2021 to 2022",
    location: "Burlington, VT",
    content: (
      <ul className="list-disc list-inside text-sm text-neutral-400 space-y-1">
        <li>Had been following the space since 2017, with my free time I dove in head first.</li>
        <li>Created an NFT collection with some friends, personally coded the smart contract (ERC-721).</li>
        <li>Also got certifications from INSEAD and Duke University in Blockchain and DeFi, respectively.</li>
      </ul>
    ),
  },
  {
    title: "Passed National and State Real Estate License (VT)",
    date: "Winter Break 2020",
    location: "Burlington, VT",
    content: (
      <ul className="list-disc list-inside text-sm text-neutral-400 space-y-1">
        <li>Planted the seeds to the idea of leveraging unconventional exams to differentiate myself without internship experience.</li>
        <li>I also picked up Photoshop, and created posters of my favorite musicians as Pokemon cards to sell to my friends.</li>
      </ul>
    ),
  },
  {
    title: "Enrolled at the University of Vermont",
    date: "Sep 2019",
    location: "Burlington, VT",
    content: (
      <ul className="list-disc list-inside text-sm text-neutral-400 space-y-1">
        <li>Wanted to do something in business, but was not sure what.</li>
      </ul>
    ),
  },
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-screen-md px-6 py-12 space-y-6">
      {/* ---------------- Bio ---------------- */}
      <Section className="space-y-4 py-4">
        <H2>About</H2>
        <P className="text-lg">
          I&apos;m a Vermont‑raised equity research analyst living in New York City, working at the
          intersection of finance, defense, and technology. By day, I cover
          next generation aerospace & defense companies, as well as cybersecurity. I&apos;ve
          always been drawn to tools, ideas, and technologies that change how
          things get built. I pride myself as a life long independent learner.
        </P>
        <P className="text-lg">
          I spent my youth obsessed with getting more with less, particularly
          in school where I would rather be learning outside than inside the
          classroom. My background blends financial rigor with technical fluency,
          and I gravitate toward problems that don&apos;t come with a playbook.
          Whether it&apos;s modeling, writing, or building systems behind the scenes,
          I&apos;m focused on clarity, speed, and impact.
        </P>
      </Section>

      {/* ---------------- Timeline ---------------- */}
      <Section className="pt-0 pb-44">
        <div className="bg-neutral-900/70 rounded-2xl p-6 backdrop-blur-sm">
          <h2 className="sr-only">Career & Education Timeline</h2>
          <Timeline data={timelineData} />
        </div>
      </Section>

      {/* ---------------- Footer ---------------- */}
      <footer className="pt-12 text-sm text-neutral-500">
        © Ethan Frost — Last updated June 2025 - Built from scratch with Next.js and Tailwind CSS via Cursor
      </footer>
    </main>
  );
}