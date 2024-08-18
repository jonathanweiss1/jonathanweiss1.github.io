import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout";
import { GoogleTagManager, sendGTMEvent } from "@next/third-parties/google"
import { CookieBanner } from "@/components/cookieBanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jonathan Weiß",
  description: "Personal website of Jonathan Weiß",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId={`${process.env.GTM_ID}`}  />
      <body className={inter.className}>
        <CookieBanner />
        <Layout>
          {children}
        </Layout>
        </body>
    </html>
  );
}
