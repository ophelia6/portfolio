import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ophelia Trelawney – Frontend Developer",
  description:
    "Frontend Developer with 6+ years of experience in React.js, Vue.js, and TypeScript. Specialising in clean code, UI/UX, accessibility, and performance optimisation.",
  keywords: [
    "Frontend Developer",
    "React.js",
    "Vue.js",
    "JavaScript",
    "TypeScript",
    "UI Engineer",
    "Lead Frontend",
  ],
  openGraph: {
    title: "Ophelia Trelawney – Frontend Developer",
    description:
      "Frontend Developer with 6+ years experience. React.js, Vue.js, TypeScript.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans bg-slate-900 text-slate-50 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
