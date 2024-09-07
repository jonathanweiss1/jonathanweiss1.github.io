import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/layout";
import { GoogleTagManager, sendGTMEvent } from "@next/third-parties/google"
import { CookieBanner } from "@/components/cookieBanner";

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
      <body className={` min-h-screen h-full grid grid-col-1 items-start`}>
        <CookieBanner />
        <Layout>
          {children}
        </Layout>
        </body>
    </html>
  );
}
