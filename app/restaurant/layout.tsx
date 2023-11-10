import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import '@/app/globals.css'
import Header from '@/components/header'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Restaurants',
  description: 'Sekawan Test',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        {children}
      </body>
    </html>
  )
}
