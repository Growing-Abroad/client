import styled from 'styled-components';
import { variables } from '@styles/global-variables';
import { theme } from '@styles/theme';

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
  transform: scale(.85);
  gap: 1rem;
  padding-top: 0;
  margin-top: 8px;

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
    transform: scale(.9);
    transform-origin: top;
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

`;

export const RightContentWhyBuyCourse = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-width: calc(90% - 570px);
  gap: 3rem;
  margin-top: 3.125rem;

  padding: 0 30px;


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
  font-size: 22px !important;
  color: ${blue700};
  margin-bottom: 0;

  @media screen and (min-width: 64rem) {
    font-size: 1.375rem;
  }
`;

export const IconWhyBuyCourse = styled.span`
  width: 24px;
  height: 24px;
`;
