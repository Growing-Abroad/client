import {NextPage} from "next";
import {ReactElement, ReactNode} from "react";
import {AppProps} from "next/app";
import {MyThemeProvider} from "@styles/MyThemeProvider";
import ContextProvider from "@/context/ContextProvider";
import 'bootstrap/dist/css/bootstrap.min.css';
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
      <MyThemeProvider>
      {getLayout(
        <>
          <style jsx global>{`
            @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap');
            body {
              font-family: 'Montserrat', sans-serif;
            }
          `}</style>
            <Component {...pageProps} />
        </>,
      )}
      </MyThemeProvider>
    </ContextProvider>
  );
}
