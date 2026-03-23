import type { Metadata } from 'next';
import { Signika } from 'next/font/google';
import './globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'TharulAgro',
  icons: {
    icon: '/favicon.ico', // This looks into the /public folder by default
  },
  description: 'Pure coco with perfect growth',
}

const signika = Signika({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // Choose the weights you need
  variable: '--font-signika', // This allows you to use it with Tailwind
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${signika.variable} antialiased`}>
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
