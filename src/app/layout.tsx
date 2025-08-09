import type { Metadata } from "next";
import { Inter, Roboto } from 'next/font/google';
import Header from "../components/header/header";
import "./globals.scss";

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Натяжные потолки в Ростове-на-Дону",
  description: "Профессиональная установка натяжных потолков",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${roboto.variable}`}>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
