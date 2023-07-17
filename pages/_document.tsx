import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components'
import Script from 'next/script';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
          originalRenderPage({
            enhanceApp: (App) => (props) =>
                sheet.collectStyles(<App {...props} />),
          })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html>
        <Head>
          <Script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="6ed28db6-2b30-4a16-8326-d479955f1de2" data-blockingmode="auto" type="text/javascript" />
          <Script id="CookieDeclaration" src="https://consent.cookiebot.com/6ed28db6-2b30-4a16-8326-d479955f1de2/cd.js" type="text/javascript" async />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}