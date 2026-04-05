import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Full body Intro Orgasm Course | Brock Somatic Education',
  description: 'A somatic, breath-led course guiding women from tension to full-body sensation through awareness, presence, and nervous system regulation.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
