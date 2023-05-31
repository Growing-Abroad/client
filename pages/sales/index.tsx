import React, { ReactElement, useState } from "react";
import { PageLayout } from "@/components";
import CTAction from "./components/CTAction";
import WhyBuyCourse from "./components/WhyBuyCourse";
import { Chapter } from "@/components/Chapter";
import uan from "@/../public/assets/pages/sales/uan.png";
import manu from "@/../public/assets/pages/sales/manu.webp";
import styled from "styled-components";
import TwoCards from "./components/TwoCards";
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
import CareerExperts from "./components/CareerExperts";
import BigCard from "@pages/online-course/components/BigCard";
import PageBodyLayout from "@/components/generics/PageBody";
import { SuccessStoriesSection } from "@/components/SuccessStoriesSection";
import OriginalFancyCarousel from "@/components/OriginalFancyCarousel";
import { successStoriesData } from "@/components/SuccessStoriesSection/mock";
import { ModalLayout } from "@/components/ModalLayout";
import useModal, { ModalHook } from "@/hooks/useModal";
import _useLocale from "@/hooks/useLocale";
import { IntlProvider } from "react-intl";

export const SalesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  zoom: 95%;
  z-index: 1;

  #page-sales {
    @media screen and (min-width: 1024px) {
      margin-top: calc(780px + -2rem);
    }

    @media screen and (min-width: 1440px) {
      margin-top: calc(780px + 4rem);
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
        <CTAction />
        <PageBodyLayout
          id="page-sales"
          distanceFromTop={isMobile ? "850px" : "780px"}
          waveType={EWaveType.linear}
        >
          <WhyBuyCourse />
          <Motivation />
          <FollowDreams />
          <CareerExperts activeImage={uan.src} smallImage={manu.src} />
          <WhatYouGet />
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
