import { theme } from "@styles/theme";
import { variables } from "@styles/global-variables";
import styled from "styled-components";
import { Montserrat } from "@next/font/google";

const font = Montserrat({
  subsets: ['latin']
})

const { colors: {primaryBlue, secondaryBlue} } = theme;

export const Container = styled.section`
  width:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 80px ${variables.sizes.globalHorizontalPadding} 0 ${variables.sizes.globalHorizontalPadding};

  @media (max-width: ${variables.sizes.mediaQuery}) {
    padding:20px 40px 0 40px;
    gap:1.5rem;
  }
`;

export const VideoPlayButtonWrapper = styled.div`
  position: absolute;
  left: calc(50% - 20px/2) ;
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
`

export const Paragraph = styled.p`
  display: flex;
  flex-direction: column;
  width:918px;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: ${primaryBlue};
  font: 400 0.8rem;

  @media (min-width: ${variables.sizes.mediaQuery}) {
    font-size: 1rem;
  }
  @media (max-width: 580px) {
    width:100%;
  }
`;

export const p = styled.p `
  font-family: ${font.style.fontFamily};
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media (max-width: 580px) {
    font-size: 16px;
    line-height: 30px;
    text-align: justify;
    padding: 0 15px;
    letter-spacing: 1.3px;
  }
`;

export const ul = styled.ul`
  font-family: ${font.style.fontFamily};
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
    width:100%;
    max-width: ${variables.sizes.maxWidthAll};
    height: auto;
    position: relative;
    @media (max-width: 580px) {
      padding:0 10px;
    }
`
