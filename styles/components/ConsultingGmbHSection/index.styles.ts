import { variables } from "@/styles/global-variables";
import styled, { css } from "styled-components";

const { sizes: { maxWidthAll, mediaQuery, globalHorizontalPadding }} = variables;



export const Container = styled.div`
  max-width: ${maxWidthAll};
  margin: 163px 0;
  padding: 0 ${globalHorizontalPadding}; 
  width: 100%;

  @media (max-width: ${mediaQuery}) {
    max-width: 100%;
    margin: 50px 0;
    padding: 0 24px; 

  }
`;

export const TitlesContainer = styled.div`
  width: 100%;
  padding: 0 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;

  @media (max-width: ${mediaQuery}) {
    margin-bottom: 24px;

  }
`;

export const Subtitle = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  letter-spacing: 1.3px;
  color: ${({ theme }) => theme.colors.blue700};
  padding: 0 163px;

  ${({ theme }) => css`
    @media (max-width: ${theme.sizes.mediaQuery}) {
      font-size: 16px;
      padding: 0 24px;
      text-align: center;
      margin-top: 30px;
    }
  `}
`;

export const Content = styled.div`
  max-height: 460px;
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  justify-content: space-between;
  align-items: center;
  min-height: 100%;

  @media (max-width: 1395px) {
    flex-direction: column;
    margin-top: 0;
    padding-bottom: 120%;
    align-items: center;
  }
`;

export const ParagraphsContainer = styled.div`
  padding-top: 32px;
  max-width: 473px;

  ${({ theme }) => css`
    @media (max-width: ${theme.sizes.mediaQuery}) {
      padding: 23px 0px 0;
      width: 100%;
    }
  `}
`;

export const Paragraph = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: left;

  color: ${({ theme }) => theme.colors.blue700};
`;

export const CarouselContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  /* margin-left: 19px; */

  ${({ theme }) => css`
    @media (max-width: ${theme.sizes.mediaQuery}) {
      margin: 30px 0 0 0;
    }
  `}
`;
