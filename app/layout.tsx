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
  title: "Butterfly — The AI-powered business operating system",
  description:
    "All the tools you need to capture, nurture and close new leads into bookings, sales, reviews and repeat customers. Powered by AI.",
  keywords: [
    "AI CRM",
    "business operating system",
    "marketing automation",
    "all-in-one platform",
    "Butterfly",
  ],
  openGraph: {
    title: "Butterfly — The AI-powered business operating system",
    description:
      "Capture, nurture and close new leads into bookings, sales and repeat customers.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#10b981",
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
