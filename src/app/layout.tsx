import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Al Shahriar Nayeem | Full Stack Engineer",
  description:
    "Product-focused full stack engineer building web, mobile, and AI-powered systems in London.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
