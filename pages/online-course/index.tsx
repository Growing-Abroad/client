import React, { ReactElement, useState } from "react";
import { PageLayout } from "@/components";
import CTAction from "./components/CTAction";
import WhyBuyCourse from "./components/WhyBuyCourse";
import { Chapter } from "@/components/Chapter";
import BigCard from "./components/BigCard";
import styled from "styled-components";
import TwoCards from "./components/TwoCards";
import FaqSection from "@pages/faq/components/FaqSection";
import TwoColorTitle from "@/components/two-color-title";
import useAppContext from "@/hooks/useAppContext";
import { ChosenHeader } from "@/components/PageLayout/PageLayout";
import { OnlineCourseFaqMockUp } from "@/components/reused-faq/faq-mock-ups";
import { EWaveType } from "@/components/Wave";
import PageBodyLayout from "@/components/generics/PageBody";
import { ModalLayout } from "@/components/ModalLayout";
import OriginalFancyCarousel from "@/components/OriginalFancyCarousel";
import { successStoriesData } from "@/components/SuccessStoriesSection/mock";
import { SuccessStoriesSection } from "@/components/SuccessStoriesSection";
import useModal, { ModalHook } from "@/hooks/useModal";
import { IntlProvider } from "react-intl";
import _useLocale from "@/hooks/useLocale";

export const OnlineCourseWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  zoom: 90%;
  z-index: 1;


  div#page-onlie-course {

    margin-top: calc( 720px + 60px );

    @media screen and (min-width: 1513px)  {
      margin-top: calc( 800px + 4rem );
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
      <PageBodyLayout id="page-onlie-course"
        distanceFromTop={isMobile ? "770px" : "800px"}
        waveType={EWaveType.linear}
      >
        <WhyBuyCourse />
        <Chapter />
        <BigCard />
        <SuccessStoriesSection>
          <TwoColorTitle
            as="h2"
            text1="Success"
            text2="Stories"
            hasSpaceBtw
            wrapperStyles={{ maxWidth: "100%" }}
            styles={isMobile ? { lineHeight: "2.75rem" } : {}}
          />
          <OriginalFancyCarousel
            dataArray={successStoriesData}
            openModal={handleModal}
            visibleModal={isModalVisible}
            getDataVideo={setDataVideo}
          />
        </SuccessStoriesSection>
        <TwoCards />
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
