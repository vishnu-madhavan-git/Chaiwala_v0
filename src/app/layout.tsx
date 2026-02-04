import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Chaiwala",
    template: "%s | Chaiwala",
  },
  description: "Chaiwala cafe website.",
  metadataBase: new URL("https://chaiwala.local"),
  openGraph: {
    title: "Chaiwala",
    description: "Chaiwala cafe website.",
    url: "https://chaiwala.local",
    siteName: "Chaiwala",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <div>Header placeholder</div>
        </header>
        <main>{children}</main>
        <footer>
          <div>Footer placeholder</div>
        </footer>
      </body>
    </html>
  );
}
