import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Lato } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { currentYear, name } from "@/libs/api";

const font = Lato({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Jikanimelist",
  description: "Anime List use Jikan API",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-anime-dark`}>
        <Navbar />
        {children}
        <Footer currentYear={currentYear} name={name} link={process.env.NEXT_GITHUB_URL} />
        <SpeedInsights />
      </body>
    </html>
  );
}
