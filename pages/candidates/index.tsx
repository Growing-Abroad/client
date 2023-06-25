import React, { ReactElement, useState } from "react";
import { PageLayout } from "@/components";
import useAppContext from "@/hooks/useAppContext";
import { ChosenHeader } from "@/components/PageLayout/PageLayout";
import { EWaveType } from "@/components/Wave";
import PageBodyLayout from "@/components/generics/PageBody";
import { ModalLayout } from "@/components/ModalLayout";
import useModal, { ModalHook } from "@/hooks/useModal";
import { IntlProvider } from "react-intl";
import _useLocale from "@/hooks/useLocale";
import StoriesPageCandidates from "@pages/candidates/components/StoriesPageCandidates";
import styled from "styled-components";
import CTAction from "@pages/sales/components/CTAction";
import WorkIn from "./components/WorkIn/WorkIn";
import DiscoverGA from "@pages/sales/components/DiscoverGA";
import OurServicesSection from "./components/OurServices";
import CommunitySection from "./components/Community";
import BlogSection from "./components/Blog/BlogSection";

const OnlineCourseWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  zoom: 95%;
  z-index: 1;


  div#page-candidates {

    margin-top: 100vh;

    /* @media screen and (max-width: 360px) {
      margin-top: calc(720px - 15%)
    }

    @media screen and (min-width: 1000px) {
      margin-top: calc( 800px - 2% );
    }

    @media screen and (min-width: 1280px)  {
      margin-top: calc( 800px  - 0.7rem );
    }

    @media screen and (min-width: 1366px)  {
      margin-top: calc( 800px + 1rem );
    } */
  }
`;

export default function OnlineCourse() {
  const { isMobile } = useAppContext();
  const [isModalVisible, handleModal]: ModalHook = useModal();
  const [dataVideo, setDataVideo] = useState();

  return (
   <>
    <ModalLayout
      visible={isModalVisible}
      onClose={handleModal}
      dataVideo={dataVideo}
    />
    <OnlineCourseWrapper>
      <CTAction 
        pageName="candidates"
        titleIntl="page.candidates.title"
        subTitleIntl="page.candidates.subtitle"
        buttonIntl="page.candidates.buttonCallToAction"
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
        <BlogSection />
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
