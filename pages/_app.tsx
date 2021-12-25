import "styles/globals.scss";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { DefaultSeo } from "next-seo";
import SEO from '../next-seo.config';
import * as gtag from 'lib/gtag'
import { useRouter } from 'next/router'
import { useEffect } from "react";

declare global {
  interface Window {
    TallyConfig?: any;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  // per gtag
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url:string) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)

    // tally conf
    window.TallyConfig = {
      "formId": "3Nd7bn",
      "popup": {
        "width": 400,
        "emoji": {
          "text": "👋",
          "animation": "wave"
        },
        "open": {
          "trigger": "scroll",
          "scrollPercent": 2
        }
      }
    };
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    // per transizione tema senza effetti
    <ThemeProvider disableTransitionOnChange attribute="class" >
    {/* <ThemeProvider  attribute="class" > */}
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
