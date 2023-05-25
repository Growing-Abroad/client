import React, { ReactElement } from "react";
import { PageLayout } from "@/components";
import CTAction from "./components/CTAction";
import WhyBuyCourse from "./components/WhyBuyCourse";
import { Chapter } from "@/components/Chapter";
import BigCard from "./components/BigCard";
import SuccessStoriesSection from "../../src/components/SuccessStoriesSection";
import styled from "styled-components";
import TwoCards from "./components/TwoCards";
import FaqSection from "@pages/faq/components/FaqSection";
import TwoColorTitle from "@/components/two-color-title";
import useAppContext from "@/hooks/useAppContext";
import { ChosenHeader } from "@/components/PageLayout/PageLayout";
import { OnlineCourseFaqMockUp } from "@/components/reused-faq/faq-mock-ups";
import { EWaveType } from "@/components/Wave";
import PageBodyLayout from "@/components/generics/PageBody";

export const OnlineCourseWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  zoom: 90%;
  z-index: 1;


  @media screen and (min-width: 1513px)  {
    div#page-onlie-course {
      margin-top: calc( 800px + 4rem );
    }
  }
`;

export default function OnlineCourse() {
  const { isMobile } = useAppContext();
  return (
    <OnlineCourseWrapper>
      <CTAction />
      <PageBodyLayout id="page-onlie-course"
        distanceFromTop={isMobile ? "770px" : "800px"}
        waveType={EWaveType.linear}
      >
        <WhyBuyCourse />
        <Chapter />
        <BigCard />
        <SuccessStoriesSection />
        <TwoCards />
        <TwoColorTitle
          text1="Frequently "
          text2="Asked Questions"
          styles={{ width: `${isMobile ? "387px" : ""}` }}
        />
        <FaqSection accordeons={OnlineCourseFaqMockUp} />
      </PageBodyLayout>
    </OnlineCourseWrapper>
  );
}

OnlineCourse.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout chosenHeader={ChosenHeader.FOR_CANDIDATES}>{page}</PageLayout>
  );
};
