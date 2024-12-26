import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MG Tepic",
  description:
    "Nos enfocamos en brindarte una experiencia inigualable, donde la innovación, el diseño sofisticado y la tecnología avanzada se unen en cada uno de nuestros modelos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=4" />
        <meta name="author" content="CoeurMkt" />
        <meta
          name="keywords"
          content="mg tepic, autos tepic, consecionario tepic"
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
