import styled from 'styled-components';
import { variables } from '@styles/global-variables';
import { theme } from '@styles/theme';
import StdButton from "@/components/generics/StdButton/StdButton";
import Image from 'next/image';
import TwoColorTitle from "@/components/two-color-title";


const {
  colors: { blue700 },
} = theme;
const {
  sizes: { mediaQuery },
} = variables;

export const WrapperWhyBuyCourse = styled.div`
  width: 100%;
  display: flex;
  height: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 89px 0px 146px 0px;
  gap: 81px;
  min-width: 1280px;
  margin-bottom: 1rem;
  padding: 47px 0 0px;
  transform-box: view-box;
  gap: 1rem;
  padding-top: 0;
  margin-top: 8px;

  &.sales {
    padding-top: 25px;
    padding-bottom: 20px;
    min-width: unset;
  }

  &.motivacion {
    margin-top: 55px;
    margin-bottom: 0;
    @media screen and (min-width: 768px) {
      gap: 0px;
    }
  }
  
  &.what-you-get {
    margin-top: 85px;
    padding-bottom: 0;
    padding-top: 0px;
    
    @media screen and (min-width: 768px) {
      margin-top: 67px;
      gap: 0;
      margin-bottom: 16px;
    }
  }

  @media (max-width: ${mediaQuery}) {

    gap:12px;
    min-width: 430px;
    padding-top: 0;
  }
`;

export const ContentWhyBuyCourse = styled.div`
  width: 100%;
  min-width: 1366px;
  display: flex;
  gap: 50px;
  align-items: center;
  margin-top: 2rem;
  justify-content: space-between;
  @media screen and (min-width: 769px) and (max-width: 1191px){
    flex-direction: column;
  }
  @media screen and (min-width: 1191px){
      img {
        object-fit: contain;
        object-position: top;
      }
  }

  &.sales-course {
    min-width: unset;
    @media screen and (min-width: 1191px){
      display: grid;
      grid-template-columns: 1fr 1fr;
      img {
        width: 100% !important;
        order: 2;
        object-fit: cover;
        object-position: top;
      }
    }
    @media screen and (min-width: 769px) and (max-width: 1191px){
      flex-direction: column;
    }

    @media screen and (min-width: 1191px) {
      object-fit: contain;

    }

  }

  .desktop {
    @media screen and (min-width: 1191px) {
      object-fit: contain;
    }
  }

  .img-thinkinh-job-germany,
  .img-benefits {
    width: auto;
    height: 320px;

    @media screen and (min-width: 64rem) {
      width: 780px;
      height: 560px;
    }
  }

  @media screen and (max-width: 1440px) {
    transform-box: view-box;
    /* transform-origin: top; */
  }

  @media screen and (min-width: 64rem) {
    zoom: 85%;
  }

  &:first-child {
    top: 0;
    left: 0;
  }

  @media (max-width: ${mediaQuery}) {
    flex-direction: column;
    min-width: 430px;
    gap:0px;
    padding-right: 0px;
  }

  @media (min-width: 1530px) {
    max-width: 1513px;
  }

  &.sales {
    min-width: unset;
    @media screen and (min-width: 768px){
      gap: 50px;
      margin-top: 0;
      max-width: 1454px;
    }
  }

`;

export const RightContentWhyBuyCourse = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 3rem;
  margin-top: 3.125rem;

  padding: 0 30px;

  @media screen and (min-width: 769px) and (max-width: 1191px){
    width: 100vw;
  }
  @media screen and (min-width: 1191px) {
    padding: 0 70px 0 15px;
    width: 50%;
    &.sales-page {
      padding: 0 15px 0 70px;
      height: 100%;
      width: 100%;
    }
  }



  &.sales {
    gap: 37px;
    max-width: 642px;

    @media screen and (min-width: 768px){

      gap: 56px;
      margin-top: 10px;
    }
    @media screen and (min-width: 1191px) {
      gap: 88px;
      padding: 0 70px 0 15px;
    }
  }

  @media (min-width: ${mediaQuery}) and (max-width: 1080px) {
    min-width: unset;
    padding: 0;
    margin-right:0px;
    margin-top: 60px;


    p {
      font-size:16px;
    }
  }

  @media screen and (min-width: 1081px) {
    margin-top: unset;
  }

  @media screen and (min-width: 769px) and (max-width: 1023px){
    width: 54%;
  }

  @media screen and (min-width: 1191px) {
    height: 510px;
    gap: unset;
    justify-content: space-between;
  }

`;

export const TextWrapperWhyBuyCourse = styled.div`
  display: flex;
  width: 100%;
  gap: 32px;
  align-items: center;
  justify-content: flex-start;
`;

export const BoldSpanWhyBuyCourse = styled.span`
  font-weight: 600;
  color: ${blue700};
`;

export const TextWhyBuyCourse = styled.p`
  color: ${blue700};
  margin-bottom: 0;
  @media screen and (min-width: 64rem) {
    font-size: 17px;
  }
`;

export const IconWhyBuyCourse = styled.span`
  width: 24px;
  height: 24px;
`;

export const StdButtonCustom = styled(StdButton)`
  margin: 70px 0 100px;
`

export const ImageCustom = styled(Image)`
  width: 100% !important;
  max-width: 700px;
`

export const TwoColorTitleCustom = styled(TwoColorTitle)`
  width: 350px;
  @media screen and (min-width: 768px){
    width: 100%;
  }
  
`

export const MotivationTitle = styled(TwoColorTitle)`
  width: 340px;
  line-height: 53px;
  margin-top: unset !important;
  width: 100%;
  font-size: 36px;
  max-width: 100vw;

  @media screen and (min-width: 768px) {
    font-size: 52px;
    margin-top: unset !important;
    width: 100%;
    line-height: 72px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 1155px;
  }
          
`

export const DiscoverTitle = styled(TwoColorTitle)`
  width: 100%;
  white-space: normal;
  text-align: center;
  font-size: 32px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    font-size: 52px;
    margin-bottom: 0px;
    width: 70%;
    white-space: normal;
    text-align: center;
  }
`


export const ImageOnlineCourse = styled(Image)`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 50% !important;
    margin-bottom: auto;
    max-width: 693px;
    max-height: 418px;
    margin-top: 30px;
  }
`