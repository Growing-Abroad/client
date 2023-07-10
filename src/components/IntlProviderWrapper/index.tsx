import React, {PropsWithChildren} from "react";
// import { IntlProvider } from "react-intl";
import { useRouter } from "next/router";
// import _useLocale from "@/hooks/useLocale";

const IntlProviderWrapper = ({ children }: PropsWithChildren ) => {
    // const { locale, messages } = _useLocale();

  return (
    // <IntlProvider
    //   locale={locale || 'en'}
    //   defaultLocale="en" // Set your default locale
    //   messages={messages}
    // >
      {children}
    // </IntlProvider>
  );
};

export default IntlProviderWrapper;
