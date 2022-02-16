import { NextSeoProps } from "next-seo";

const conf: NextSeoProps = {
  title:'Nicola Toledo | Webflow Developer',
  description:"I’ll turn your Figma, XD or Sketch file into a pixel-perfect Webflow Project ready to publish! 🚀",
  openGraph: {
    type: "website",
    locale: "it",
    url: "https://www.nicolatoledo.dev",
    site_name: "Nicola Toledo | Webflow Developer",
    title: "Nicola Toledo | Webflow Developer",
    images:[
      {
        url: 'https://www.nicolatoledo.dev/open-image.png',
        width: 1200,
        height: 630,
        alt: 'Og Image Alt',
        type: 'image/png',
      },
    ],
    description:"I’ll turn your Figma, XD or Sketch file into a pixel-perfect Webflow Project ready to publish! 🚀"
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
