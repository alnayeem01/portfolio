import type { Metadata } from "next";
import Script from "next/script";
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
      <body>
        {children}
        <Script
          src="https://widget.paroot.co/widget.js"
          data-api-key="a3e0b7038c74f703e0ae62f7507d944e97b06317bd05439f4d77e53a4b5e87e6"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
