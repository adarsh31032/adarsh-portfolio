import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adarsh Krishna M — Software Engineer",
  description: "Aspiring Software Engineer | Python Developer | MCA Student",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
