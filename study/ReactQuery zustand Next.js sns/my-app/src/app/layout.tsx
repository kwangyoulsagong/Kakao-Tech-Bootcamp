import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

type Props={children:ReactNode}
export const metadata: Metadata = {
  title: "my-sns",
  description: "sns using reactquery & zustand",
};
//루트 레이아웃
export default function RootLayout({
  children,
}: Props) {
  return (
    <html lang="en">
      <body className="bg-[var(--primary-bg-color)]">{children}</body>
    </html>
  );
}
