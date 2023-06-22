import TwoColorTitle from "@/components/two-color-title";
import Image from "next/image";
import styled, { css } from "styled-components";

interface IImageFoundersProps {
  sideImg: "left" | "right";
}

export const ContainerFounders = styled.div`
  padding: 0 16px;
  max-width: 1373px;
  @media screen and (min-width: 768px){
    padding: 0;
  }
`;

export const Text = styled.p<IImageFoundersProps>`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  color: #05335b;
  padding: 20px;
  margin: 0;
  @media screen and (min-width: 768px) {
    gap: 35px;
    >span {
      max-width: 717px;
      ${({ sideImg }) =>
      sideImg == "left"
        ? css`
            margin-left: 25px;
          `
        : css`
            margin-right: 25px;
          `} 
    }
  }
  @media screen and (min-width: 1026px) {
    ${({ sideImg }) =>
      sideImg == "left"
        ? css`
            padding-left: 0;
          `
        : css`
            padding-right: 0;
          `} 
    display: flex;
    flex-direction: ${({ sideImg }) =>
      sideImg == "left" ? "row" : "row-reverse"};
  }
`;

export const Span = styled.span`
  font-size: 19px;
`;

export const ImageFounders = styled(Image)<IImageFoundersProps>`
  float: ${({ sideImg }) => (sideImg == "left" ? "left" : "right")};
  width: 100%;
  height: auto;
  border-radius: 10px 10px 0 0;
  margin-bottom: 25px;
  @media screen and (min-width: 768px) {
    width: calc(50% - 5px);
    max-width: 756px;
    max-height: 422px;
    ${({ sideImg }) =>
      sideImg == "left"
        ? css`
            border-radius: 0 10px 10px 0;
            margin-right: 25px;
          `
        : css`
            margin-left: 25px;
            border-radius: 10px 0 0 10px;
          `} 
  }
  @media screen and (min-width: 1026px) {
    margin: 0;
    padding: 0;
    max-height: 100%;
    object-fit: cover;
  }

`;

export const ImageCenter = styled(Image)`
  width: 100%;
  height: auto;
  margin: 50px 0;
  @media screen and (min-width: 768px) {
    width: 756px;
    height: 444px;
  }
`;

export const ContainerImgCenter = styled.div`
  display: flex;
  justify-content: center;
`

export const ContentFounder = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;


export const ContentFounderItem = styled.div`
  max-width: 1373px;
`

export const UITwoColorTitle = styled(TwoColorTitle)`
  margin-bottom: 40px;
`