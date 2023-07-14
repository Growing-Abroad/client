import React, { ReactElement } from "react";
import { PageLayout } from "@/components";
import useAppContext from "@/hooks/useAppContext";
import { ChosenHeader } from "@/components/PageLayout/PageLayout";
import { EWaveType } from "@/components/Wave";
import PageBodyLayout from "@/components/generics/PageBody";
import StoriesPageCandidates from "@pages/candidates/components/StoriesPageCandidates";
import styled from "styled-components";
import CTAction from "@pages/dream-job/components/CTAction";
import WorkIn from "./components/WorkIn/WorkIn";
import DiscoverGA from "@pages/dream-job/components/DiscoverGA";
import OurServicesSection from "./components/OurServices";
import CommunitySection from "./components/Community";


export const CandidatesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;

  #page-candidates {
    margin-top: 99vh;
    @media screen and (min-width: 768px) {
      margin-top: 100vh;
    }
  }
`;

export default function OnlineCourse() {
  const { isMobile } = useAppContext();

  return (
   <>
    <CandidatesWrapper>
      <CTAction 
        buttonURL="/online-course"
        pageName="candidates"
        titleIntl="Get your Dream Job in" // page.candidates.title
        subTitleIntl=""
        buttonIntl="Buy Online Course Now"//"page.candidates.buttonCallToAction"
      />
      <PageBodyLayout id="page-candidates"
        distanceFromTop={isMobile ? "770px" : "800px"}
        waveType={EWaveType.curly}
      >
        <WorkIn />
        <DiscoverGA text1="Discover" text2="Growing Abroad" typePages="cadidates" />
        <OurServicesSection />
        <StoriesPageCandidates hasSubTitle={true} />

        <CommunitySection />
        {/* <BlogSection /> */}
      </PageBodyLayout>
    </CandidatesWrapper> 
   </>
  );
}

OnlineCourse.getLayout = function getLayout(page: ReactElement) {
  return (
      <PageLayout chosenHeader={ChosenHeader.FOR_CANDIDATES}>{page}</PageLayout>
  );
};
