import {NextPage} from "next";
import {ReactElement, ReactNode} from "react";
import {AppProps} from "next/app";
import {MyThemeProvider} from "@styles/MyThemeProvider";
import ContextProvider from "@/context/ContextProvider";
import 'bootstrap/dist/css/bootstrap.min.css';
import useWithAuth from "@/components/DevAuth";
import './custom.css';



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
    <ContextProvider>
      {useWithAuth() && (
        <MyThemeProvider>
          {getLayout(
              <Component {...pageProps} />
          )}
        </MyThemeProvider>)
      }
        
    </ContextProvider>
  );
}
