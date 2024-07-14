import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import MainContainer from "@/components/containers/MainContainer";

const rc = Roboto_Condensed({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brat link-in-bio template - Inspired by Charli xcx",
  description: `A link in bio template inspired by Charli xcx's 2024 'brat' album. Made by Vidit Khandelwal for Snippetopia`,
  generator: "Next.js",
  keywords: [
    "Vidit",
    "Khandelwal",
    "Vidit Khandelwal",
    "DePauw University",
    "software engineer",
    "swe",
    "sde",
    "engineer",
    "cs",
    "react",
    "ui",
    "ux",
    "ui/ux",
    "designer",
    "ui designer",
    "design",
    "android engineer",
    "developer",
    "web developer",
    "links",
    "list",
    "link-in-bio",
    "linktree",
    "template",
    "charli xcx",
    "brat",
    "von dutch",
    "lime",
    "neon",
    "gen z",
    "club",
    "rave",
    "uk"
  ],
  authors: [{ name: "Vidit Khandelwal", url: "https://viditkhandelwal.com" }],
  creator: "Vidit Khandelwal",
  publisher: "Vidit Khandelwal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rc.className}>
        <MainContainer>{children}</MainContainer>
      </body>
    </html>
  );
}
