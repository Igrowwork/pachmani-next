import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./style.css";
import Offer from "@/components/Offer/page";
import Navbar from "@/components/Navbar/page";
import Navbar2 from "@/components/navbar2/page";
import Footer from "@/components/footer/page";
import { Providers } from "@/redux/provider";
import GetCurrentUser from "./_components/GetCurrentUser";
import Head from "next/head";
import { Suspense } from "react";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pachmani Ayurveda",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <Head>
          <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
        </Head>
        <Providers>
          <body className={inter.className}>
            <GetCurrentUser />
            <div>
              <Offer />
              <Navbar />
              <Navbar2 />
              <main>{children}</main>
              <Footer />
            </div>
          </body>
        </Providers>
    </html>
  );
}
