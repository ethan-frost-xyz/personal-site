import './globals.css'
import type { ReactNode } from 'react'
import LinkedIn from '../components/linkedin'
import { Navbar } from '../components/ui/navbar'

export const metadata = {
  title: 'Ethan Frost',
  description: 'Execution-focused strategist for frontier-tech teams',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-neutral-100 font-sans antialiased">
        {/* --- top nav ------------------------------------------------------ */}
        <Navbar />

        {/* --- page content ------------------------------------------------- */}
        <main className="max-w-3xl mx-auto px-6 py-12">{children}</main>

        {/* --- fixed social icon ------------------------------------------- */}
        <LinkedIn />
      </body>
    </html>
  )
}
