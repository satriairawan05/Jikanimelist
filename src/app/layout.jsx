import { Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "@/components/Footer";

const font = Lato({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Jikanimelist",
  description: "Anime List use Jikan API",
};

export default function RootLayout({ children }) {
  const currentYear = new Date().getFullYear();
  return (
    <html lang="en">
      <body className={`${font.className} bg-anime-dark`}>
        <Navbar />
        {children}
        <Footer currentYear={currentYear} name="Deuwi Satriya Irawan" link={`https://github.com/satriairawan05`} />
        <SpeedInsights />
      </body>
    </html>
  );
}
