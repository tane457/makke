import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Love Messages",
  description: "Love messages for Mualla",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
