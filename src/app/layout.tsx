import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Iham Vivanco',
  description: 'Portafolio web',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='min-h-screen w-full bg-primary-light'>
          <Navbar/>
        {children}
        </main>
      </body>
    </html>
  )
}
