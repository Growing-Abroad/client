import StdButton from "@/components/generics/StdButton/StdButton";
import TwoColorTitle from "@/components/two-color-title";
import Image from "next/image";
import styled, { css } from "styled-components";

interface ItemContainerProps {
  indexOrder: number;
}

export const ContainerProgressBar = styled.div`
max-width: 1519px;
    margin: auto;
  padding: 0 16px;
  width: 100%;
  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;

export const CardTitle = styled.h3`
  margin-bottom: 20px;
  color: #05335b;
  font-size: 32px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  line-height: 45px;
  letter-spacing: 1.3px;
  text-transform: capitalize;
  max-width: 529px;
  &.last-Item {
    margin-top: -16px;
  }
  @media screen and (min-width: 768px) {
    &.last-Item {
      margin-top: 0;
    }
  }
`;

export const Circle = styled.div`
  width: 40px;
  min-width: 40px;
  height: 40px;
  border-radius: 100%;
  color: #fff;
  font-size: 24px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 1.3px;
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    margin: auto;
    width: 80px;
    min-width: 80px;
    height: 80px;
    font-size: 48px;
    &#lastItem {
      margin-top: 0;
    }
  }
  @media screen and (max-width: 767px) {
    background: rgb(0, 115, 207) !important;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  gap: 28px;
`;

export const Timeline = styled.div`
  min-width: 10px;
  margin-left: 15px;
  margin-top: -2px;
  @media screen and (min-width: 768px) {
    margin-left: 0;
    .img-content {
      margin-top: 36px;
    }
  }
  @media screen and (max-width: 767px) {
    background: rgb(0, 115, 207) !important;
  }
`;

export const UIImage = styled(Image)`
  width: 100%;
  height: auto;
  @media screen and (min-width: 768px) {
    min-height: 372px;
    object-position: top;
    margin: auto;
  }
`;

export const ItemContent = styled.div<ItemContainerProps>`
  &.timeline1 {
    margin-top: -20px;
  }
  @media screen and (min-width: 768px) {
    &.timeline1 {
      margin-top: 0;
    }
    display: grid;
    grid-template-columns: 1fr 10px 1fr;
    gap: 55px;
    .items-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      max-width: 505px;
      margin: 41px auto 22px 0;
    }
    ${({ indexOrder }) =>
      indexOrder % 2 == 0
        ? css`
            .img-content {
              order: 3;
            }
            .items-content {
              order: -1;
              margin: 41px 0 22px auto;
            }
          `
        : ``};
  }
`;

export const ItemCheck = styled.div`
  color: #05335b;
  font-size: 16px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0.64px;
  gap: 18px;
  display: flex;
`;

export const LastContent = styled.div`
  display: flex;
  width: 100%;
  gap: 29px;
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 80px 1fr;
  }
`;

export const CardTexts = styled.div`
  margin-bottom: 49px;
  gap: 37px;
  display: flex;
  flex-direction: column;
`;

export const ChapterTitle = styled.h5`
  font-size: 24px;
  font-weight: 600;
  color: #000;
  margin-bottom: 36px;
  top: 0;
  color: #4a9afd;
  text-align: center;
`;

export const UIStdButton = styled(StdButton)`
  margin: 38px auto 93px;
`;

export const Line = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: initial;
  }
`;


export const UITwoColorTitle = styled(TwoColorTitle)`
  margin: auto;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

export const UITwoColorTitleContainer = styled.div`
  div {
    margin: auto;
  }
`