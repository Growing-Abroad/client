import React, { ReactElement } from "react";
import { PageLayout } from "@/components";
import CTAction from "./components/CTAction";
import WhyBuyCourse from "./components/WhyBuyCourse";
import { Chapter } from "@/components/Chapter";
import SuccessStoriesSection from "./components/SuccessStoriesSection";
import uan from "@/../public/assets/pages/sales/uan.png";
import manu from "@/../public/assets/pages/sales/manu.webp";
import styled from "styled-components";
import TwoCards from "./components/TwoCards";
import FaqSection from "@pages/faq/components/FaqSection";
import TwoColorTitle from "@/components/two-color-title";
import useAppContext from "@/hooks/useAppContext";
import { ChosenHeader } from "@/components/PageLayout/PageLayout";
import { OnlineCourseFaqMockUp } from "@/components/reused-faq/faq-mock-ups";
import Wave from "@/components/Wave";
import { PageBody } from "styles/coaching";
import Motivation from "./components/Motivation";
import FollowDreams from "./components/FollowDream";
import WhatYouGet from "./components/WhatYouGet";
import Investiment from "./components/Investiment";
import CareerExperts from "./components/CareerExperts";
import { TextMockup } from "../../src/utils/mock-ups/mockup-texts";
import BigCard from "@pages/online-course/components/BigCard";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function OnlineCourse() {
  const { isMobile } = useAppContext();

  return (
    <Wrapper>
      <CTAction />
      <PageBody style={{ marginTop: `${isMobile ? "850px" : "830px"}` }}>
        <Wave
          type={1}
          height={isMobile ? "100%" : "100%"}
          className="border-image"
          styles={
            isMobile
              ? {
                  height: "154px",
                  justifyContent: "flex-start",
                  top:'-100px'
                }
              : {
                  width: "100%",
                  height: "150px",
                  justifyContent: "flex-start",
                  position: "absolute",
                  top: "-100px",
                }
          }
        ></Wave>

        <WhyBuyCourse />
        <Motivation />
        <FollowDreams />
        <CareerExperts activeImage={uan.src} smallImage={manu.src} />
        <WhatYouGet />
        <Chapter  />
        <BigCard />
        <SuccessStoriesSection />
        <TwoCards />
        <Investiment />
        <TwoColorTitle
          text1="Frequently "
          text2="Asked Questions"
          styles={{ width: `${isMobile ? "387px" : ""}` }}
        />
        <FaqSection accordeons={OnlineCourseFaqMockUp} />
      </PageBody>
    </Wrapper>
  );
}

OnlineCourse.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout chosenHeader={ChosenHeader.FOR_CANDIDATES}>{page}</PageLayout>
  );
};
