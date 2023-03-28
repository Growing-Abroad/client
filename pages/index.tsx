import CallToAction from "./components/CallToAction/CallToAction"
import WorkIn from "@pages/components/WorkIn/WorkIn";
import OurServicesSection from "@pages/components/OurServices";
import SuccessStories from "@pages/components/Success-stories";
import CommunitySection from "@pages/components/Community";
import BlogSection from "@pages/components/Blog/BlogSection";
import {ReactElement} from "react";

import { NextPageWithLayout} from "@pages/_app";
import PageLayout from "@components/PageLayout";
import DiscoverGA from "@pages/components/DiscoverGA";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import de from "../lang/de.json"
import en from "../lang/en.json";
import pt from "../lang/pt.json";
import { EHeaderType } from "@/components/PageLayout/PageLayout";

const Page: NextPageWithLayout = () => {
  return <>
    <CallToAction />
    <WorkIn />
    <DiscoverGA />
    <OurServicesSection />
    <SuccessStories />
    <CommunitySection />
    <BlogSection />
  </>
}

export const languages = {
  de,
  en,
  pt,
};

Page.getLayout = function getLayout(page: ReactElement) {
  const { locale } = useRouter();

  return (
    <IntlProvider locale={locale!} messages={languages[locale]}>
      <PageLayout>
        {page}
      </PageLayout>
    </IntlProvider>
  )
}

export default Page
