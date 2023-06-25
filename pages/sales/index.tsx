import React, { ReactElement, useState } from "react";
import { PageLayout } from "@/components";
import CTAction from "./components/CTAction";
import WhyBuyCourse from "./components/WhyBuyCourse";
import { Chapter } from "@/components/Chapter";
import styled from "styled-components";
import FaqSection from "@pages/faq/components/FaqSection";
import TwoColorTitle from "@/components/two-color-title";
import useAppContext from "@/hooks/useAppContext";
import { ChosenHeader } from "@/components/PageLayout/PageLayout";
import { OnlineCourseFaqMockUp } from "@/components/reused-faq/faq-mock-ups";
import { EWaveType } from "@/components/Wave";
import Motivation from "./components/Motivation";
import FollowDreams from "./components/FollowDream";
import WhatYouGet from "./components/WhatYouGet";
import Investiment from "./components/Investiment";
import BigCard from "@pages/online-course/components/BigCard";
import PageBodyLayout from "@/components/generics/PageBody";
import { SuccessStoriesSection } from "@/components/SuccessStoriesSection";
import OriginalFancyCarousel from "@/components/OriginalFancyCarousel";
import { successStoriesData } from "@/components/SuccessStoriesSection/mock";
import { ModalLayout } from "@/components/ModalLayout";
import useModal, { ModalHook } from "@/hooks/useModal";
import _useLocale from "@/hooks/useLocale";
import { IntlProvider } from "react-intl";
import DiscoverGA from "./components/DiscoverGA";
import StoriesPageCandidates from "@pages/candidates/components/StoriesPageCandidates";
import TwoCards from "@pages/online-course/components/TwoCards";

export const SalesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  zoom: 95%;
  z-index: 1;

  #page-sales {
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

export default function Sales() {
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
      <SalesWrapper>
        <CTAction 
          pageName="sales"
          buttonIntl="page.sales.buttonCallToAction"
          subTitleIntl="page.sales.subtitle"
          titleIntl="page.sales.title"
        />
        <PageBodyLayout
          id="page-sales"
          distanceFromTop={isMobile ? "850px" : "780px"}
          waveType={EWaveType.linear}
        >
          <WhyBuyCourse />
          <Motivation />
          <FollowDreams />
          <DiscoverGA />
          <WhatYouGet isSales={true} />
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
      </SalesWrapper>
    </>
  );
}

Sales.getLayout = function getLayout(page: ReactElement) {
  const { locale, messages } = _useLocale();
  return (
    <IntlProvider locale={locale!} messages={messages}>
      <PageLayout chosenHeader={ChosenHeader.FOR_CANDIDATES}>{page}</PageLayout>
    </IntlProvider>
  );
};
