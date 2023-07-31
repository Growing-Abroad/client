import {NextPage} from "next";
import {ReactElement, ReactNode} from "react";
import {AppProps} from "next/app";
import {MyThemeProvider} from "@styles/MyThemeProvider";
import 'bootstrap/dist/css/bootstrap.min.css';
// import useWithAuth from "@/components/DevAuth";
import './custom.css';
import Head from "next/head";
import ContextProvider from "@/context/AppContext/ContextProvider";
import { AuthProvider } from "@/context/AuthContext/AuthProvider";
// import _useLocale from "@/hooks/useLocale";
// import IntlProviderWrapper from "@/components/IntlProviderWrapper";



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
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="author" content="Manuel Feneberg and Uanderson Silva" />
        <meta name="google-site-verification" content="e91Ujp8EDtLZbad6gOtFcIWDqAgHaTrQLQGAIhqFqL4" />
      </Head> 
      <AuthProvider>
        <ContextProvider>
          {/* <IntlProviderWrapper> */}
              <MyThemeProvider>
                {getLayout(
                    <Component {...pageProps} />
                )}
              </MyThemeProvider>
          {/* </IntlProviderWrapper> */}
        </ContextProvider>
      </AuthProvider>
    </>
  );
}