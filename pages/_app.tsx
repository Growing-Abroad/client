import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { AppProps } from "next/app";
import { MyThemeProvider } from "@styles/MyThemeProvider";
import ContextProvider from "@/context/ContextProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.css";
import Script from "next/script";
import { Head } from "next/document";

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<
  P,
  IP
> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow" key="robots" />
        <meta name="author" content="Manuel Feneberg and Uanderson Silva" />
        <meta name="keywords" content="Jobs in Germany, German Job Market, English speaking jobs in Germany , jobs in Germany for English speakers, English jobs in Germany" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <ContextProvider>
        <MyThemeProvider>
          {getLayout(<Component {...pageProps} />)}
        </MyThemeProvider>
      </ContextProvider>
    </>
  );
}
