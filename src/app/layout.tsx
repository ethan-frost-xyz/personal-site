// src/app/layout.tsx

import './globals.css'
import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ethan Frost',
  description: 'Personal site of Ethan Frost',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-950 text-neutral-100`}>
        <nav className="flex items-center justify-between px-6 py-4 border-b border-neutral-800">
          <Link href="/" className="text-lg font-bold text-white">Ethan Frost</Link>
          <div className="space-x-6 text-sm font-medium">
            <Link href="/work">Work</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </nav>
        <main className="p-6">{children}</main>
      </body>
    </html>
  )
}
