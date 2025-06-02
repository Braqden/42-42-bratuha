import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
})

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: '42 Братухи - Официальный сайт',
  description: 'Официальный сайт движения 42 Братухи - объединение творческих людей, которые не боятся быть собой',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} ${montserrat.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
} 