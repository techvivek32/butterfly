import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Axnix — Automate workflows, boost conversions",
  description:
    "Axnix makes it simple to run email campaigns, trigger workflows, and optimize conversions — all in one smart platform.",
  keywords: [
    "marketing automation",
    "email campaigns",
    "multi-channel marketing",
    "conversion optimization",
    "Axnix",
  ],
  openGraph: {
    title: "Axnix — Automate workflows, boost conversions",
    description:
      "Run email campaigns, trigger workflows, and optimize conversions — all in one smart platform.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#5bbf3f",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
