import { Lato } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { SpeedInsights } from "@vercel/speed-insights/next"

const font = Lato({ subsets: ['latin'], weight: "400" })

export const metadata = {
  title: 'Jikanimelist',
  description: 'Anime List use Jikan API',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-anime-dark`}>
        <Navbar />
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
