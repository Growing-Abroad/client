import styled from 'styled-components';

import { theme } from '@styles/theme';
import { variables } from '@/styles/global-variables';
import Link from 'next/link';
const {
  colors: { blue400, blue700, white },
} = theme;
const {
  sizes: { mediaQuery, maxWidthAll, globalHorizontalPadding },
} = variables;




interface IContainerProps{
  backgroundImage:string
}

export const FaqContainerHero = styled.div<IContainerProps>`
  background-image: url('${({backgroundImage}) => backgroundImage}');
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: center center;

  position: fixed;
  top: 90px;
  left: 0;
  z-index: -1;

  width: 100%;
  height: 570px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2rem;

  @media (max-width: ${mediaQuery}) {
    background-size: cover;


    height: 300px;

    top: 60px;
  }
`

export const ContentHero = styled.div`
  width: 100%;
  max-width: ${maxWidthAll};
  padding-inline: ${globalHorizontalPadding};
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: start;
  align-items: start;
  gap: 33px;

  div > h1{
    display:flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      background-color: transparent;
  }

  @media (max-width: ${mediaQuery}) {
    padding: 25px 20px 0 25px;;
    height: 300px;
    justify-content:start;
    align-items: start;
    position: relative;
    max-width: 350px;
    div {
      display: flex;
      flex-direction: column;
      max-width: 100%;
      text-align: start;
      align-items: start;
      position:absolute;
      margin-top:30px;
    }
    div > h1 {
      font-size: 44px;
      margin: 0;

      &:nth-child(2n) {
        padding-left: 0;
        text-align:start;
      }
      span{
        text-align:left;
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
    max-width: 100%;
    width: 100%;
    justify-content: center;
    text-align: left;
    align-items: center;
    font-size: 1rem;
    line-height: 27px;
    z-index: 2;
    margin-bottom: 12px;
    text-align: start;
    padding: 0 42px;
  }
`;
