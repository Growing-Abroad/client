import { theme } from "@styles/theme";
import { variables } from "@styles/global-variables";
import styled from "styled-components";
import Image from "next/image";
import StdButton from "@/components/generics/StdButton/StdButton";

const {
  colors: { blue700 },
} = theme;

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 0 ${variables.sizes.globalHorizontalPadding} 0
    ${variables.sizes.globalHorizontalPadding};
  max-width: 1280px;

  @media (max-width: ${variables.sizes.mediaQuery}) {
    padding: 20px 40px 0 40px;
    gap: 1.5rem;
  }
  &.about-us {
    padding: 0;
    margin: 90px 0 50px;
    gap: 50px;
    @media screen and (min-width: 768px) {
      margin: 90px 0 0;
    }
  }

  &.sales {
    gap: 14px;
    padding: 0 6px 0;
    button {
      margin: 31px 0 100px;
    }
  }
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const VideoPlayButtonWrapper = styled.div`
  position: absolute;
  left: calc(50% - 20px / 2);
  top: 43%;
  z-index: 2;

  span {
    background-color: white;
    color: white;
    min-width: 20px;
    min-height: 20px;
    position: absolute;
    left: 35%;
    top: 35%;
    z-index: -1;
  }
`;

export const Paragraph = styled.div`
  display: flex;
  flex-direction: column;
  width: 918px;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: ${blue700};
  max-width: 100%;
  font: 400 0.8rem;
  @media (min-width: ${variables.sizes.mediaQuery}) {
    font-size: 1rem;
  padding: 0 35px;

  }

  @media (max-width: ${variables.sizes.mediaQuery}) {
    text-align: justify;
  }

  &.sales {
    width: 100%;
  }

  .subtitle {
    max-width: 787px;
    width: 100%;
    font-size: 17px;
  }
`;

export const p = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0px;
  color: ${({ theme }) => theme.colors.blue700};
  width: 100%;
  margin: 0;

  display: flex;
  text-align: center;
  align-items: center;

  @media (max-width: 768px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media (max-width: ${variables.sizes.mediaQuery}) {
    font-size: 16px;
  }
`;

export const ul = styled.ul`
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 2rem;

  @media (max-width: 580px) {
    font-size: 16px;
    line-height: 30px;
    padding-right: 2rem;
  }
`;
export const ImageContainer = styled.div`
  border-radius: 5px;
  overflow: hidden;
  width: 80%;
  max-width: ${variables.sizes.maxWidthAll};
  height: auto;
  position: relative;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  &.sales {
    margin-bottom: 20px;
    max-width: 804px;
  }

  div {
    width: 100%;
    height: 100%;
    background-color: transparent;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${variables.sizes.mediaQuery}) {
    width: 100%;
  }

  @media (max-width: 580px) {
    padding: 0 10px;
  }
`;

export const Player = styled(Image).attrs({
  alt: "youtube play button",
})`
  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  @media (max-width: ${variables.sizes.mediaQuery}) {
    width: 25%;
    height: auto;
  }
`;


export const ParagraphCustom = styled(Paragraph)`
  font-size: 32px;
  text-align: center;
  font-weight: 600;
  margin-top: 0;
  gap: 0;
  display: block;
  @media screen and (min-width: 768px) {
    line-height: 73px;
    width: 1500px;
    font-size: 52px;
  }
`

export const StdButtonCustom = styled(StdButton)`
  margin: calc(70px - 3rem) 0 0;
`

export const UIIframeYoutube = styled.iframe`
    width: 100%;
    max-width: 824px;
    height: auto;
    min-height: 280px;
    padding: 0 10px;
    @media screen and (min-width: 768px) {
    height: 438px;
    }
`