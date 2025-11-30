import { type Metadata } from 'next'
import { Inter, Lexend } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import clsx from 'clsx'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - ThicNThin',
    default: 'ThicNThin - Lose weight together',
  },
  description:
    'Get matched with others who share your weight loss goals. Track your progress side by side and stay accountable together.',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <body className="flex h-full flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
