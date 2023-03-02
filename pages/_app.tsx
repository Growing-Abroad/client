import { NextPage } from 'next';
import { ReactElement, ReactNode, useEffect } from 'react';
import { AppProps } from 'next/app';
import { MyThemeProvider } from '@styles/MyThemeProvider';
import ContextProvider from '@/context/ContextProvider';



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
      {getLayout(
        <>
          <style jsx global>{`
            @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
            body {
              font-family: 'Montserrat', sans-serif;
            }
          `}</style>
          <MyThemeProvider>
            <Component {...pageProps} />
          </MyThemeProvider>
        </>,
      )}
    </ContextProvider>
  );
}
