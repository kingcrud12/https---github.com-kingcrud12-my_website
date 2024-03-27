import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Yann DIPITA",
  description: " this is Yann DIPITA portfolio",
  openGraph: {
    images:
      "https://letcreateanapp.com/wp-content/uploads/2022/03/Quiz-App-in-Swift.jpg",
  },
  twitter: {
    card: "summary_large_image",
    site: "@eMartiiin94",
    title: "Title webtsite",
    description: "this is the desciption",
    images: "url/image.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
