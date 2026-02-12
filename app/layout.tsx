import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CustomCursor from '@/components/CustomCursor'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Puspita | Senior Backend Developer & ML Engineer',
  description: 'Portfolio of Puspita - Senior Backend Developer, Machine Learning Engineer, and Cybersecurity Specialist targeting FAANG and high-frequency trading firms.',
  keywords: ['Backend Developer', 'Machine Learning', 'Cybersecurity', 'FAANG', 'Portfolio', 'Software Engineer'],
  authors: [{ name: 'Puspita' }],
  openGraph: {
    title: 'Puspita | Engineering Excellence at Scale',
    description: 'Building scalable systems for FAANG & fintech',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
