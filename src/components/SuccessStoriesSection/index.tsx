
import TwoColorTitle from "@/components/two-color-title";
import useAppContext from "@/hooks/useAppContext";
import { variables } from "@/styles/global-variables";

import styled from "styled-components";
import OriginalFancyCarousel from "../OriginalFancyCarousel";
import { successStoriesData } from "./mock"

const {
  sizes: {
    globalHorizontalPaddingMobile,
  },
} = variables;

const SuccessStoriesWrapperSection = styled.section`
    padding: 120px 140px 120px;
    max-width: 1800px;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;

    zoom: 85%;
    transform: scale(.9);


    @media(max-width:430px) {
      padding: 80px ${globalHorizontalPaddingMobile} 133px;
      gap: 30px;
    }
`;

export default function SuccessStoriesSection() {
  const { isMobile } = useAppContext();

  return (
    <SuccessStoriesWrapperSection>
      <TwoColorTitle
        as="h2"
        text1="Success"
        text2="Stories"
        hasSpaceBtw
        wrapperStyles={{ maxWidth: "100%" }}
        styles={isMobile ? { lineHeight: "2.75rem" } : {}}
      />
      <OriginalFancyCarousel dataArray={successStoriesData} />
    </SuccessStoriesWrapperSection>
  );
}
