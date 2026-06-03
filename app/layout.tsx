import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://siva-kumar.vercel.app"),
  title: "Siva Kumar — Platform & Full-Stack Engineer",
  description:
    "Platform & Full-Stack Engineer with 4+ years building production AWS infrastructure, full-stack Rails/React systems, and AI workflow pipelines. AWS SA Professional. Based in Hyderabad, India. Open to remote contracts & full-time.",
  keywords: [
    "Platform Engineer", "Full-Stack Engineer", "AWS Solutions Architect",
    "Ruby on Rails", "Go", "Python", "React", "Next.js",
    "Hyderabad", "Remote Engineer", "Infrastructure as Code", "Terraform",
  ],
  authors: [{ name: "Siva Kumar Kurnool Veera Sai" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Siva Kumar — Platform & Full-Stack Engineer",
    description: "Platform & Full-Stack Engineer with 4+ years building production AWS infrastructure and full-stack systems. Open to remote contracts & full-time.",
    siteName: "Siva Kumar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Siva Kumar — Platform & Full-Stack Engineer",
    description: "Platform & Full-Stack Engineer. AWS SA Professional. Rails, Go, Python. Open to remote.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="bg-[#080808] text-[#f0f0f0] antialiased">{children}</body>
    </html>
  );
}
