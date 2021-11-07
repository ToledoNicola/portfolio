import { NextSeoProps } from "next-seo";

const conf: NextSeoProps = {
  title:'Nicola Toledo | dev & Trainer',
  openGraph: {
    type: "website",
    locale: "it",
    url: "https://www.nicolatoledo.dev",
    site_name: "Nicola Toledo | dev & Trainer",
    title: "Nicola Toledo | dev & Trainer",
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
