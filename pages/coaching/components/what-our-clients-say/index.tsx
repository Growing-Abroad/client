import { ModalLayout } from "@/components/ModalLayout";
import OriginalFancyCarousel from "@/components/OriginalFancyCarousel";
import { successStoriesData } from "@/components/SuccessStoriesSection/mock";
import TwoColorTitle from "@/components/two-color-title";
import useAppContext from "@/hooks/useAppContext";
import { variables } from "@/styles/global-variables";
import { useState } from "react";
import styled from "styled-components";
import useModal, { ModalHook } from "@/hooks/useModal";

const {
  sizes: {
    globalHorizontalPadding,
    maxWidthAll,
    mediaQuery,
    globalHorizontalPaddingMobile,
  },
} = variables;

const WrapperSection = styled.section`
  padding: 0px ${globalHorizontalPadding} 184px;
  max-width: ${maxWidthAll};
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 73px;

  @media (max-width: ${mediaQuery}) {
    padding: 0px ${globalHorizontalPaddingMobile} 133px;
    gap: 30px;
  }
`;

export default function WhatOurClientsSay() {
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
      <WrapperSection>
        <TwoColorTitle
          as="h2"
          text1="What"
          text2="our Clients Say"
          hasSpaceBtw
          wrapperStyles={{ maxWidth: "100%" }}
          styles={isMobile ? { lineHeight: "2.75rem" } : {}}
        />
        <OriginalFancyCarousel
          columnGap={8}
          dataArray={successStoriesData}
          openModal={handleModal}
          visibleModal={isModalVisible}
          getDataVideo={setDataVideo}
        />
      </WrapperSection>
    </>
  );
}
