import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Bidwell monitors - Volunteer Water Monitoring",
  description: "Join volunteer monitors observing water drainage patterns in Dartington and Totnes. Help us understand flooding and protect our community.",
  keywords: "river monitoring, water observation, Bidwell Brook, Dartington, Totnes, volunteer, flooding, drainage",
  openGraph: {
    title: "Bidwell monitors - Volunteer Water Monitoring",
    description: "Join volunteer monitors observing water drainage patterns in Dartington and Totnes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
