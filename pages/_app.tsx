import {NextPage} from "next";
import {ReactElement, ReactNode} from "react";
import {AppProps} from "next/app";
import {Montserrat} from "@next/font/google";
import {MyThemeProvider} from "@styles/MyThemeProvider";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import de from "../lang/de.json"
import en from "../lang/en.json";
import pt from "../lang/pt.json";

const montserrat = Montserrat({
  subsets: ['latin']
})

const messages = {
  de,
  en,
  pt,
};

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)
  const { locale } = useRouter();
  return getLayout(
      <>
        <style jsx global>{`
          html {
            font-family: ${montserrat.style.fontFamily};
            font-display: swap;
          }
      `}</style>
        <IntlProvider locale={locale} messages={messages[locale]}>
        <MyThemeProvider >
          <Component {...pageProps} />
        </MyThemeProvider>
        </IntlProvider>
      </>
  )
}