import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "River Observation App",
  description: "Bidwell Brook Partnership Water/River Observation Survey",
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
