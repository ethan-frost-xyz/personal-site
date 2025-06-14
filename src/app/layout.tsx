import './globals.css'
import type { ReactNode } from 'react'
import Link from 'next/link'
import LinkedIn from '../components/LinkedIn'   // ⬅️ path is correct for src/components

export const metadata = {
  title: 'Ethan Frost',
  description: 'Execution-focused strategist for frontier-tech teams',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-neutral-100 font-sans antialiased">
        {/* --- top nav ------------------------------------------------------ */}
        <header className="border-b border-neutral-800 px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-lg font-bold text-white">
            Ethan Frost
          </Link>
          <nav className="space-x-6 text-sm font-medium">
            <Link href="/about"   className="hover:text-white text-neutral-300">About</Link>
            <Link href="/work"    className="hover:text-white text-neutral-300">Work</Link>
            <Link href="/contact" className="hover:text-white text-neutral-300">Contact</Link>
          </nav>
        </header>

        {/* --- page content ------------------------------------------------- */}
        <main className="max-w-3xl mx-auto px-6 py-12">
          {children}
        </main>

        {/* --- fixed social icon ------------------------------------------- */}
        <LinkedIn />
      </body>
    </html>
  )
}
