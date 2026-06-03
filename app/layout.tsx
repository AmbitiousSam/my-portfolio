import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://siva-kumar.vercel.app"),
  title: "Siva Kumar — Platform & Full-Stack Engineer",
  description:
    "Platform & Full-Stack Engineer with 4+ years building production AWS infrastructure, full-stack Rails/React systems, and AI workflow pipelines. AWS SA Professional. Based in Hyderabad, India. Open to remote contracts & full-time.",
  keywords: [
    "Platform Engineer",
    "Full-Stack Engineer",
    "AWS Solutions Architect",
    "Ruby on Rails",
    "Go",
    "Python",
    "React",
    "Next.js",
    "Hyderabad",
    "Remote Engineer",
    "Infrastructure as Code",
    "Terraform",
  ],
  authors: [{ name: "Siva Kumar Kurnool Veera Sai" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Siva Kumar — Platform & Full-Stack Engineer",
    description:
      "Platform & Full-Stack Engineer with 4+ years building production AWS infrastructure and full-stack systems. Open to remote contracts & full-time.",
    siteName: "Siva Kumar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Siva Kumar — Platform & Full-Stack Engineer",
    description:
      "Platform & Full-Stack Engineer. AWS SA Professional. Rails, Go, Python. Open to remote.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#0a0a0a] text-[#f5f5f5] antialiased">{children}</body>
    </html>
  );
}
