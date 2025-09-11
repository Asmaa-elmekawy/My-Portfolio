import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Asmaa Elmekawy",
  description:
    "Asmaa Elmekawy - Front-End Developer skilled in React.js, Next.js, and Tailwind CSS. Explore my projects, skills, and experience in web development.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="vNaPFN_Mxk19tkqR0By3GAdx1fUEyBivGKopDr-fZaU"
        />
        <meta
          name="description"
          content="Asmaa Elmekawy - Frontend Developer skilled in React, Next.js, Tailwind CSS. Explore my portfolio and projects."
        />
        <meta
          name="keywords"
          content="Asmaa Elmekawy, Frontend Developer, React, Next.js, Portfolio"
        />
        <meta name="author" content="Asmaa Elmekawy" />
        {/* social preview */}
        <meta
          property="og:title"
          content="Asmaa Elmekawy | Frontend Developer"
        />
        <meta
          property="og:description"
          content="Portfolio website showcasing my frontend projects."
        />
        <meta property="og:url" content="https://asmaa-portfolio.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://asmaa-portfolio.vercel.app/preview.png"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
