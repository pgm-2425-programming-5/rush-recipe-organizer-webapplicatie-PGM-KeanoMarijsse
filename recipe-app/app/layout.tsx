import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/layout/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Recipe app</title>
        <meta name="description" content="A simple recipe app with NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-gray-100">
        <Header />
        {children}
      </body>
    </html>
  );
}
