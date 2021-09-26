import "styles/globals.scss";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <ThemeProvider disableTransitionOnChange attribute="class" >
    <ThemeProvider  attribute="class" >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
