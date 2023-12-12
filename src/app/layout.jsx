import { Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "@/components/Footer";
import { currentYear, githubLink, name } from "@/libs/api";

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
        <Footer currentYear={currentYear} name={name} link={githubLink} />
        <SpeedInsights />
      </body>
    </html>
  );
}
