import CallToAction from "./components/CallToAction/CallToAction";
import WorkIn from "./components/WorkIn/WorkIn";
import OurServicesSection from "./components/OurServices";
import SuccessStories from "./components/Success-stories";
import CommunitySection from "./components/Community";
import BlogSection from "./components/Blog/BlogSection";
import { ReactElement } from "react";
import { NextPageWithLayout } from "@pages/_app";
import PageLayout from "@components/PageLayout";
import DiscoverGA from "./components/DiscoverGA";
import { IntlProvider } from "react-intl";
import { ChosenHeader } from "@/components/PageLayout/PageLayout";
import _useLocale from "@/hooks/useLocale";
import { PageBody } from "styles/coaching";
import Wave from "@/components/Wave";
import useAppContext from "@/hooks/useAppContext";
import { bottomNavigationActionClasses } from "@mui/material";

const Page: NextPageWithLayout = () => {
  const {isMobile} = useAppContext();

  return (
    <>
      <CallToAction />
      <PageBody style={{marginTop: `${isMobile ? '570px':'720px'}`}}>
        <Wave type={2} height={'720px'}
        className="candidates-img" styles={
                isMobile
                ? {
                    height: "210px",
                    justifyContent: "flex-start",
                    backgroundPosition: "-155px",
                }
                : {
                    justifyContent: "flex-start",
                    position: "absolute",
                    top: '-150px',

                }
            }></Wave>
      <WorkIn />
      <DiscoverGA />
      <OurServicesSection />
      <SuccessStories />
      <CommunitySection />
      <BlogSection />
      </PageBody>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  const { locale, messages } = _useLocale();

  return (
    <IntlProvider locale={locale!} messages={messages}>
      <PageLayout chosenHeader={ChosenHeader.FOR_CANDIDATES}>{page}</PageLayout>
    </IntlProvider>
  );
};

export default Page;
