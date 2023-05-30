import styled from "styled-components";
import { variables } from "@styles/global-variables";
import { theme } from "@styles/theme";

const {
  colors: { blue700, blue400 },
} = theme;
const {
  sizes: {  mediaQuery },
} = variables;

export const ChapterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media screen and (max-width: 768px) {
    margin-top: -6rem;
  }

  :nth-child(1n) {
    h1 {
      text-align: center;
      display: flex;
      flex-direction: column;
      padding-bottom: 30px;
    }

  }

  @media (max-width: ${mediaQuery}) {
    padding-bottom: 20px;
    /* padding-top: 115px; */

    :nth-child(1n) {
      h1 {
        width: 361px;
        padding-bottom: 33px;
      }
    }

  }
`;

export const ChapterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  max-width: 1513px;
  background-color: white;
  padding-bottom: 40px;
  margin-bottom: 2rem;

  @media (max-width: ${mediaQuery}) {
    min-width: 430px;
    padding-bottom: 20px;
  }

`;

export const ChapterTitle = styled.h5`
  font-size: 24px;
  font-weight: 600;
  color: #000;
  margin-bottom: 36px;
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -56px;
  color: ${blue400};
`;

export const ChapterContainerCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 100px;
  width: 100%;
  height: 100%;
  background-color: white;
  padding-top: 152px;

  .bonus {
    padding-left: 100px;
    width: 100%;
    display: flex;
    justify-content: center;

    h3 {
      width: 529px;
      text-align: left;
      margin-left: 550px;
      margin-top: -50px;
    }

  }
  @media (max-width: 768px) {
    padding-left: 60px;
    padding-top: 95px;
    gap: 90px;

    .bonus {
      margin-top: -60px;
      padding: 0;
      padding-left: 20px;
      justify-content: flex-start;

      h3 {
        margin: 0;
        font-size: 32px;
        width: 273px;
      }

    }
  }
`;

interface ContentCardProps {
  reverse: boolean;
}

export const ChapterContentCard = styled.div<ContentCardProps>`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  padding-left: ${(props) => (props.reverse ? "191px" : "0px")};
  padding-right: ${(props) => (props.reverse ? "0" : "191px")};
  justify-content: space-between;
  .side {
    transform: scaleX(-1);
  }
  @media (min-width: 769px) and (max-width: 1513px) {
    .image {
      width: 600px;
      height: auto;
      max-height: 400px;
      object-fit: contain;
    }
    justify-content: space-between;
    padding-left: ${(props) => (props.reverse ? "100px" : "0px")};
    padding-right: ${(props) => (props.reverse ? "0" : "100px")};
  }
  @media (max-width: ${mediaQuery}) {
    flex-direction: column;
    gap: 18px;
    height: auto;
    align-items: center;
    padding: 0;
    .image {
      transform: ${(props) => (props.reverse ? "" : "scaleX(-1)")};
    }
  }
  @media (min-width: 1600px) and (max-width: 1800px) {
    gap: 300px;
  }
  @media (min-width: 1801px) {
    justify-content: space-between;
    padding-left: ${(props) => (props.reverse ? "100px" : "0px")};
    padding-right: ${(props) => (props.reverse ? "0" : "100px")};
  }
`;
export const CardInfo = styled.div`
  width: 500px;
  height: 373px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 51px;
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 29px;
  }

  @media (max-width: ${mediaQuery}) {
    gap: 20px;
    width: 372px;
    height: auto;
    justify-content: flex-start;
    padding-left: 20px;
  }
`;
export const CardTitle = styled.h3`
  width: 100%;
  font-size: 1.5rem;
  width: 506px;
  letter-spacing: 1.3px;
  font-weight: 600;
  color: ${blue700};
  @media (max-width: ${mediaQuery}) {
    white-space: normal;
    width: 327px;
  }
`;
export const CardText = styled.p`
  padding: 0px;
  margin: 0px;
  display: flex;
  align-items: center;
  justify-content: start;
  height: 36px;
  font-size: .875rem;
  letter-spacing: 0.04em;
  gap: 26px;
  color: ${blue700};
  @media (max-width: ${mediaQuery}) {
    height: auto;
    width: 300px;
    line-height: 28px;
    gap: 20px;
  }
`;
