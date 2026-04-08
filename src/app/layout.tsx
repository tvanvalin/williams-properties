import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Williams Properties | Character Apartments in Historic Tacoma, WA",
    template: "%s | Williams Properties",
  },
  description:
    "Family-owned since 1902. Discover unique, character-rich apartments in Tacoma's historic buildings. Each home personally designed by the owners. Schedule a tour today.",
  keywords: [
    "apartments for rent tacoma",
    "tacoma apartments",
    "historic apartments tacoma",
    "character apartments tacoma wa",
    "williams properties tacoma",
  ],
  authors: [{ name: "Williams Properties LLC" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.williamsproperties.com",
    siteName: "Williams Properties",
    title: "Williams Properties | Character Apartments in Historic Tacoma, WA",
    description:
      "Family-owned since 1902. Discover unique, character-rich apartments in Tacoma's historic buildings.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Williams Properties - Historic Tacoma Apartments",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Williams Properties | Character Apartments in Historic Tacoma, WA",
    description:
      "Family-owned since 1902. Discover unique, character-rich apartments in Tacoma's historic buildings.",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://www.williamsproperties.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[family-name:var(--font-dm-sans)]">
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
