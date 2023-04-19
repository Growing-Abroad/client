import styled from 'styled-components';
import { variables } from '@styles/global-variables';
import { theme } from '@styles/theme';

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
  padding: 87px 0 230px 0;
  @media (max-width: ${mediaQuery}) {
    padding: 87px 23px 71px;
  }
`;
export const BigCardWrapper = styled.div`
  width: 705px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
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
    font-size: 60px;
    padding-bottom: 40px;
    padding-top: 18px;
  }
  h2 {
    font-size: 32px;
    padding: 0 70px 36px;
  }
  p {
    font-size: 24px;
    span {
      text-decoration: line-through;
    }
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 26px;
    padding: 24px 56px 55px 91px;
  }
  @media (max-width: ${mediaQuery}) {
    width: 383px;
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
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 26px;
      padding: 40px 33px 55px 33px;
    }
  }
`;
export const PriceSpan = styled.span`
  font-size: 60px;
  text-align: center;
  width: 100%;
  @media (max-width: ${mediaQuery}) {
    font-size: 40px;
  }
`;

export const CardText = styled.li`
  padding: 0px;
  margin: 0px;
  display: flex;
  align-items: center;
  justify-content: start;
  text-align: left;
  font-weight: 400;
  max-height: 64px;
  line-height: 26px;
  font-size: 16px;
  letter-spacing: 0.04em;
  gap: 26px;
  @media (max-width: ${mediaQuery}) {
    width:320px;

  }
`;