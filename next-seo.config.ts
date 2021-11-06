import { NextSeoProps } from "next-seo";

const conf: NextSeoProps = {
  openGraph: {
    type: "website",
    locale: "it",
    url: "https://www.nicolatoledo.dev",
    site_name: "nicola toledo | dev & Trainer",
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
  ],
};

export default conf;
