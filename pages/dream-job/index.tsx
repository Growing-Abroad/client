import React, { ReactElement } from "react";
import { PageLayout } from "@/components";
import CTAction from "./components/CTAction";
import WhyBuyCourse from "./components/WhyBuyCourse";
import styled from "styled-components";
import FaqSection from "@pages/faq/components/FaqSection";
import TwoColorTitle from "@/components/two-color-title";
import useAppContext from "@/hooks/useAppContext";
import { ChosenHeader } from "@/components/PageLayout/PageLayout";
import { EWaveType } from "@components/Wave";
import Motivation from "./components/Motivation";
import FollowDreams from "./components/FollowDream";
import WhatYouGet from "./components/WhatYouGet";
import Investiment from "./components/Investiment";
import BigCard from "@pages/online-course/components/BigCard";
import PageBodyLayout from "@components/generics/PageBody";
import DiscoverGA from "./components/DiscoverGA";
import StoriesPageCandidates from "../candidates/components/StoriesPageCandidates";
import TwoCards from "@pages/online-course/components/TwoCards";
import VerticalProgressBarCustom from "components/VerticalProgressBarCustom";
import { OnlineCourseFaqMockUp } from "@pages/online-course";
import SEO from "@/components/seo";

export const SalesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;

  #page-sales {
    margin-top: 100vh;
    @media screen and (min-width: 768px) {
      margin-top: 103vh;
    }
  }
`;

export default function Sales() {
  const { isMobile } = useAppContext();

  return (
    <>
      <SEO
        description="Do you want to work in Germany with a well-paid job, career perspective and still have work life balance? Our amazing Online Course is the perfect start for you"
        title="Dream Job | Growing Abroad"
        url="https://growingabroad.de/dream-job"
      />
      <SalesWrapper>
        <CTAction
          pageName="sales"
          buttonIntl="Buy Online Course Now"
          subTitleIntl="Build a successful career abroad with this amazing ONLINE COURSE"
          titleIntl="Land your Dream job in"
        />
        <PageBodyLayout
          id="page-sales"
          distanceFromTop={isMobile ? "850px" : "780px"}
          waveType={EWaveType.linear}
        >
          <WhyBuyCourse justifyContent="unset" />
          <Motivation />
          <FollowDreams />
          <DiscoverGA text1={isMobile ? "Uan & Manu" : "We are Uan & Manu"} />
          <WhatYouGet isSales={true} />
          <VerticalProgressBarCustom />
          <BigCard />
          <StoriesPageCandidates hasSubTitle={false} />
          <TwoCards />
          <Investiment />
          <TwoColorTitle
            text1="Frequently "
            text2="Asked Questions"
            styles={{ width: `${isMobile ? "387px" : ""}` }}
          />
          <FaqSection accordeons={OnlineCourseFaqMockUp} />
        </PageBodyLayout>
      </SalesWrapper>
    </>
  );
}

Sales.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout chosenHeader={ChosenHeader.FOR_SALES} hideBlueSection={true}>
      {page}
    </PageLayout>
  );
};
