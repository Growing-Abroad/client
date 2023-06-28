import React, { ReactElement, useEffect } from "react";
import { PageLayout } from "@/components";
import WhyBuyCourse from "./components/WhyBuyCourse";
import { Chapter } from "@/components/Chapter";
import BigCard from "./components/BigCard";
import TwoCards from "./components/TwoCards";
import FaqSection from "@pages/faq/components/FaqSection";
import TwoColorTitle from "@/components/two-color-title";
import useAppContext from "@/hooks/useAppContext";
import { ChosenHeader } from "@/components/PageLayout/PageLayout";
import { OnlineCourseFaqMockUp } from "@/components/reused-faq/faq-mock-ups";
import { EWaveType } from "@/components/Wave";
import PageBodyLayout from "@/components/generics/PageBody";
import { IntlProvider } from "react-intl";
import _useLocale from "@/hooks/useLocale";
import Investiment from "@pages/sales/components/Investiment";
import StoriesPageCandidates from "@pages/candidates/components/StoriesPageCandidates";
import styled from "styled-components";
import CTAction from "@pages/sales/components/CTAction";

export const OnlineCourseWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;

  #page-onlie-course {
    margin-top: 100vh;
    @media screen and (min-width: 768px) {
      margin-top: 103vh;
    }
  }
`;


export default function OnlineCourse() {
  const { isMobile } = useAppContext();

  useEffect(() => {
    window.addEventListener('resize', () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  },[])

  return (
    <>
      <OnlineCourseWrapper>
        <CTAction
          pageName="onlineCourses"
          titleIntl="page.onlineCourse.title"
          subTitleIntl="page.onlineCourse.subtitle"
          buttonIntl="page.onlineCourse.buttonCallToAction"
        />
        <PageBodyLayout
          id="page-onlie-course"
          distanceFromTop={isMobile ? "770px" : "800px"}
          waveType={EWaveType.linear}
        >
          <WhyBuyCourse />
          <Chapter />
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
      </OnlineCourseWrapper>
    </>
  );
}

OnlineCourse.getLayout = function getLayout(page: ReactElement) {
  const { locale, messages } = _useLocale();
  return (
    <IntlProvider locale={locale!} messages={messages}>
      <PageLayout chosenHeader={ChosenHeader.FOR_CANDIDATES}>{page}</PageLayout>
    </IntlProvider>
  );
};
