import Header from "@/components/Header";
import "./globals.css";
import GoTopButton from "@/components/GoTopButton";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import LoadingProgress from "@/components/LoadingProgress";
import tabaarakBG from "@/public/assets/tabaarak-ict.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tabaarak ICT Solutions",
  description:
    "Tabaarak ICT Solutions is a privately owned organization that was established in 2011 in horn of Africa, The Company provides advanced Technology to its customers. Since its establishment, the company has achieved a leading role in the ICT Industry in east Africa, having the potential clients.",

  // open graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tabaarakict.com",
    // site_name: "Tabaarak ICT Solutions",
    images: [
      {
        url: tabaarakBG.src,
        width: 512,
        height: 512,
        alt: "Tabaarak ICT Solutions",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LoadingProgress />
        <Header />
        {children}
        <Footer />
        <GoTopButton />
      </body>
    </html>
  );
}
