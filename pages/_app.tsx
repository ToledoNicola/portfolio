import "styles/globals.scss";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { DefaultSeo } from "next-seo";
import SEO from '../next-seo.config';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // per transizione tema senza effetti
    // <ThemeProvider disableTransitionOnChange attribute="class" >
    <ThemeProvider  attribute="class" >
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
