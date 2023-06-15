import styled from 'styled-components';
import { variables } from '@styles/global-variables';
import { theme } from '@styles/theme';
import StdButton from '@/components/generics/StdButton/StdButton';
import TwoColorTitle from '@/components/two-color-title';
import Image from 'next/image';


const {
  colors: { blue700, blue500, white },
} = theme;
const {
  sizes: { maxWidthAll, mediaQuery },
} = variables;

export const Container = styled.div`
  width: 100%;
  display: flex;
  height: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
`;

export const BigCardWrapper = styled.div`
  position: relative;
  max-width: 705px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding-bottom:26px;
  h1,
  h2,
  span,
  p {
    letter-spacing: 1.3px;
    text-align: center;
    margin: 0;
    color: ${blue700};
  }
  h1 {
    font-size: 52px;
    padding-bottom: 20px;
    padding-top: 18px;
  }
  h2 {
    font-size: 20px;
    padding: 0 70px 16px;
  }
  p {
    font-size: 24px;
    span {
      text-decoration: line-through;
    }
  }
  div {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 26px;
    padding: 24px 56px 55px 91px;
  }
  @media (max-width: ${mediaQuery}) {
    max-width: 383px;
    justify-content: flex-start;
    h1,
    h2,
    span,
    p {
      letter-spacing: 1.3px;
      text-align: center;
      margin: 0;
      color: ${blue700};
    }
    h1 {
      font-size: 32px;
      padding-bottom: 14px;
      padding-top: 18px;
    }
    h2 {
      font-size: 20px;
      padding: 0 37px 23px;
    }
    p {
      font-size: 16px;
      span {
        text-decoration: line-through;
      }
    }
    div {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 26px;
      padding: 40px 33px 40px 33px;
    }
  }
`;
export const PriceSpan = styled.span`
  font-size: 52px;
  text-align: center;
  width: 100%;
  font-weight: 700;
  @media (max-width: ${mediaQuery}) {
    font-size: 40px;
  }
`;

export const CardText = styled.li`
  padding: 0px;
  margin: 0px;
  display: flex;
  width:100%;
  align-items: center;
  justify-content: start;
  gap: 26px;

  @media (max-width: ${mediaQuery}) {
    width:320px;
  }

  p {
    font-weight: 400;
    line-height: 26px;
    font-size: 16px;
    text-align: left;
    color:#05335B;
    letter-spacing: 0.04em;

    strong {
      text-decoration: underline ${blue500};
    }

    @media (max-width: ${mediaQuery}) {
      font-weight: 500;
    }
  }
`;

export const StdButtonCustom = styled(StdButton)`
  text-align: center;
  width: 238px;
  padding: 8px 15px;
  margin: 20px 0 0;
  @media screen and (min-width: 768px) {
    margin: 0px 0 0;
    padding: 20px 40px;
    width: 365px;
  }
  
`

export const TwoColorTitleCustom = styled(TwoColorTitle)`
  flex-direction: column;
  display: flex;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`


export const ImageCustom = styled(Image)`
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
  @media screen and (min-width: 768px) {
    object-position: 50% 40%;
  }
`

export const ImageFlagDiscount = styled(Image)`
  position: absolute;
  top: 380px;
  right: -20px;
  transform: scale(1.5);
  @media screen and (min-width: 768px) {
    top: 450px;
    right: 70px;
  }
`