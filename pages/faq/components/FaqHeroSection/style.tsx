import styled from 'styled-components';

import { theme } from '@styles/theme';
import { variables } from '@/styles/global-variables';
import Link from 'next/link';
const {
  colors: { blue400, blue700, white },
} = theme;
const {
  sizes: { mediaQuery },
} = variables;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-items: center;
  min-width: 100%;
  @media (max-width: ${mediaQuery}) {
    max-width: 430px;
  }
`;
export const ContentHero = styled.div`
  min-width: 1240px;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: start;
  gap: 33px;
  .title{
    display: flex;
    flex-direction: column;
    text-align:left;
  }

  @media (max-width: ${mediaQuery}) {
    padding: 25px 20px 0 25px;;
    min-width: 430px;
    height: 100%;
    justify-content:start;
    align-items: start;
    position: relative;
    div {
      display: flex;
      flex-direction: column;
      max-width: 100%;
      text-align: start;
      align-items: start;
      position:absolute;
      top:26;
    }
    div > h1 {
      font-size: 44px;
      margin: 0;
      &:nth-child(2n) {
        padding-left: 0;
        text-align:start;
      }
    }
  }
`;
export const SubheadingHero = styled.p`
  font-size: 24px;
  font-weight: 400;
  line-height: 38px;
  width: 522px;
  font-style: normal;
  a{
    text-decoration:none;
  }
  @media (max-width: ${mediaQuery}) {
    max-width: 430px;
    justify-content: center;
    text-align: center;
    align-items: center;
    font-size: 1rem;
    line-height: 27px;
    z-index: 2;
    margin-bottom: 86px;
    text-align: start;
    padding: 0 42px;
  }
`;
