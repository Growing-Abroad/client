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
  margin-bottom: 4rem;

  padding: 47px 0 0px;


  transform-box: view-box;
  transform: scale(.85);
  gap: 1rem;
  padding-top: 0;
  margin-top: 8px;

  @media (max-width: ${mediaQuery}) {

    gap:12px;
    min-width: 430px;
    margin-top: -50px;
    padding-top: 0;
  }
`;

export const ContentWhyBuyCourse = styled.div`
  width: 100%;
  min-width: 1280px;
  display: flex;
  gap: 100px;
  align-items: center;
  /* padding-right:40px; */
  justify-content: space-between;

  @media screen and (max-width: 1440px) {
    transform-box: view-box;
    transform: scale(.9);
    transform-origin: top;
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
  min-width: 613px;
  gap: 20px;

  padding: 0 30px;

  @media (max-width: ${mediaQuery}) {
    min-width:420px;
    padding: 0;
    margin-right:0px;
    padding-top:49px;

    p {
      font-size:16px;
    }
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
  font-size: 18px;
  color: ${blue700};
`;

export const IconWhyBuyCourse = styled.span`
  width: 24px;
  height: 24px;
`;
