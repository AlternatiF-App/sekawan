import type { Metadata } from 'next'
import '@/app/globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { Nunito } from 'next/font/google'
import { dark } from '@clerk/themes'
import Navbar from '@/components/Navbar/page'


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
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body className={nunito.className}>
          <Navbar />
          <main className='container mx-auto'>
            <div className='flex items-start justify-center min-h-screen'>
              <div className='mt-20'>{children}</div>
            </div>
          </main>
        </body>
      </html>
    </ClerkProvider>
  )
}
