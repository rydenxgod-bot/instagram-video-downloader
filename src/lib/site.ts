import { Metadata } from "next";

export const siteConfig = {
  name: "IG web ",
  domain: "ig-ryden-web.vercel.com",
  shortName: "IG Ryden Web",
  creator: "RydenXGod",
  description:
    "Fast, free, and no login required. Just paste the URL and download.",
  ogDescription:
    "Fast, free, and no login required. Just paste the URL and download.",
  url: "https://ig-ryden-web.vercel.app",
};

export const siteMetadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  creator: siteConfig.creator,
  openGraph: {
    type: "website",
    locale: "en_US",
    title: siteConfig.name,
    description: siteConfig.ogDescription,
    url: siteConfig.url,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.ogDescription,
    creator: siteConfig.creator,
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/webmanifest.json",
};
