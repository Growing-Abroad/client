import React, { ReactElement, useState } from "react";
import { PageLayout } from "@/components";
import { Chapter } from "@/components/Chapter";
import FaqSection from "@pages/faq/components/FaqSection";
import TwoColorTitle from "@/components/two-color-title";
import useAppContext from "@/hooks/useAppContext";
import { ChosenHeader } from "@/components/PageLayout/PageLayout";
import { OnlineCourseFaqMockUp } from "@/components/reused-faq/faq-mock-ups";
import { EWaveType } from "@/components/Wave";
import PageBodyLayout from "@/components/generics/PageBody";
import { ModalLayout } from "@/components/ModalLayout";
import useModal, { ModalHook } from "@/hooks/useModal";
import { IntlProvider } from "react-intl";
import _useLocale from "@/hooks/useLocale";
import Investiment from "@pages/sales/components/Investiment";
import StoriesPageCandidates from "@pages/candidates/components/StoriesPageCandidates";
import styled from "styled-components";
import CTAction from "@pages/sales/components/CTAction";
import WhyBuyCourse from "@pages/online-course/components/WhyBuyCourse";
import BigCard from "@pages/online-course/components/BigCard";
import TwoCards from "@pages/online-course/components/TwoCards";
import WorkIn from "./components/WorkIn/WorkIn";

const OnlineCourseWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  zoom: 95%;
  z-index: 1;


  div#page-candidates {

    margin-top: calc( 720px + 13%);

    @media screen and (max-width: 360px) {
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
    }
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
      <CTAction />
      <PageBodyLayout id="page-candidates"
        distanceFromTop={isMobile ? "770px" : "800px"}
        waveType={EWaveType.curly}
      >
        <WorkIn />



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
