import {NextPage} from "next";
import {ReactElement, ReactNode} from "react";
import {AppProps} from "next/app";
import {Montserrat} from "@next/font/google";
import {MyThemeProvider} from "@styles/MyThemeProvider";

const montserrat = Montserrat({
  subsets: ['latin']
})

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)
  
  return getLayout(
      <>
        <style jsx global>{`
          html {
            font-family: ${montserrat.style.fontFamily};
            font-display: swap;
          }
        `}</style>
        <MyThemeProvider >
          <Component {...pageProps} />
        </MyThemeProvider>
      </>
  )
}