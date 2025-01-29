import "./globals.css";
import type { Metadata } from "next";
import { Footer, Header } from "./components/layout";
import localFont from "next/font/local";
import Head from "next/head";


export const metadata: Metadata = {
  title: "Bar Lambda",
  description: "Bar Lambda, comidas, bebidas, ciencia y más",
};

const albert = localFont({
  src:"./fonts/AlbertSans-Regular.ttf"
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {;
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/lambda.svg" type="image/svg+xml" />
      </Head>
      <body
        className={`${albert.className} antialiased print:w-full bg-neutral-900 `}
      >
      <Header/>
      <div className="sm:w-1/2 mx-auto sm:my-20 my-4 px-4">
        {children}
      </div>
      <Footer/>
      </body>
    </html>
  );
}
