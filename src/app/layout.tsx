import type { Metadata } from "next";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "./globals.css";
import { NavBar } from "@/components/nav-bar";

export const metadata: Metadata = {
  title: "ClickHouse Next.js hypequery Dashboard Starter",
  description: "Modern, animated dashboard for ClickHouse using Next.js, shadcn/ui, tremor, and hypequery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
