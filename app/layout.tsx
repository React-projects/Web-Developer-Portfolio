import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import StarsCanvas from "./Components/Main/StarsBackground";
import Navbar from "./Components/Main/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "portfolio-web",
  description: "This is my portfolio ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas/>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
