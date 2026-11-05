import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Heres I'm Marel Gultom",
  description:
    "Personal portfolio of Marel Gultom, a Full Stack Developer specializing in modern web development.",
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