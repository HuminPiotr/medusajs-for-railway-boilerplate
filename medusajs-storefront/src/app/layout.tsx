import { Metadata } from "next"
import "styles/globals.css"
import '@/styles/app.scss';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"

import { Cormorant, Lato } from 'next/font/google'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'EcoHollandstyle',
  description: 'Meble i dodatki wystroju wnętrz. Stylowe i nowoczesne importowane z Holandii i Belgii. Dobre ceny.'
}

const lato = Lato({
  subsets: ['latin'],
  variable: '--lato',
  display: 'swap',
  weight: ['400', '700']
});

const cormorant = Cormorant({
  subsets: ['latin'],
  variable: '--cormorant',
  display: 'swap',
})

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light" className={`${lato.variable} ${cormorant.variable}`}>
      <body className={cormorant.className}>
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
