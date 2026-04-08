import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { OrganizationSchema } from "@/components/structured-data";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin", "latin-ext"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: {
    default: "Centrul Național de Mediere și Conflict Management",
    template: "%s | Centrul Național de Mediere",
  },
  description:
    "Transformăm conflictele prin tehnici inovatoare de mediere, oferind un nou standard de profesionalism în România.",
  keywords: [
    "mediere",
    "conflict management",
    "mediere comercială",
    "mediere civilă",
    "mediere de familie",
    "mediere penală",
    "România",
    "București",
  ],
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: "https://mediere-nationala.com",
    siteName: "Centrul Național de Mediere și Conflict Management",
    title: "Centrul Național de Mediere și Conflict Management",
    description:
      "Transformăm conflictele prin tehnici inovatoare de mediere, oferind un nou standard de profesionalism în România.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ro"
      className={`${geist.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <OrganizationSchema />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
