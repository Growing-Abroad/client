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
import { EWaveType } from "@/components/Wave";
import useAppContext from "@/hooks/useAppContext";
import PageBodyLayout from "@/components/generics/PageBody";
import styled from "styled-components";


export const CandidatesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  #page-candidates {
    @media screen and (min-width: 1024px) {
      margin-top: calc( 665px + -2rem );
    }

    @media screen and (min-width: 1440px) {
      margin-top: calc( 620px + 2rem );
    }
  }
`;


const Candidates: NextPageWithLayout = () => {
  const { windowSize: { width }} = useAppContext();

  function getDistanceFromTop(): string {
    if (width >= 1513) {
      return '700px';
    }

    return '680px';
    }

  return (
    <CandidatesWrapper>
      <CallToAction />
      <PageBodyLayout
        id="page-candidates"
        distanceFromTop={getDistanceFromTop()}
        waveType={EWaveType.curly}>
        <WorkIn />
        <DiscoverGA />
        <OurServicesSection />
        <SuccessStories />
        <CommunitySection />
        <BlogSection />
      </PageBodyLayout>
    </CandidatesWrapper>
  );
};

Candidates.getLayout = function getLayout(page: ReactElement) {
  const { locale, messages } = _useLocale();

  return (
    <IntlProvider locale={locale!} messages={messages}>
      <PageLayout chosenHeader={ChosenHeader.FOR_CANDIDATES} usePageBody={true} >{page}</PageLayout>
    </IntlProvider>
  );
};

export default Candidates;
