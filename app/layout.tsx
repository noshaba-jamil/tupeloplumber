import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { StickyMobileCall } from "@/components/Common";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { SITE } from "@/lib/site";
import { rootSchemaGraph } from "@/lib/schema";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-display", weight: ["600", "700", "800"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `Plumber in Tupelo, MS | ${SITE.name}`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Residential and commercial plumbing services in Tupelo, MS and the surrounding area.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="font-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(rootSchemaGraph()) }}
        />
        <AnnouncementBar />
        <Header />
        <main className="pb-16 md:pb-0">{children}</main>
        <Footer />
        <StickyMobileCall />
      </body>
    </html>
  );
}
