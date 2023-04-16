import styled from "styled-components";
import manuUanHappy from "@/../public/assets/Photos-Main-Page/uan-manu-happy.webp";
import {variables} from "@styles/global-variables";
import {theme} from "@styles/theme";

const { sizes: { globalHorizontalPadding, mediaQuery, globalHorizontalPaddingMobile } } = variables;
const { colors: { blue400, blue500, blue700, yellow400 } } = theme;

export const BackgroudCTA = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${blue500};
  padding: 0 ${globalHorizontalPadding};
  height: 90vh;
  min-height: 650px;
  max-height: 800px;
  overflow: hidden;
  position: relative;

  .cta-mask {
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
    z-index: 100;
    width: 100%;

    img {
      bottom: 0;
      left: 0;
      right: 0;
      position: absolute;

    }
  }
  .white-line {
    height: 5px;
    width: 100%;
    background-color: white;
    position: absolute;
    bottom: -1px;
  }
  @media (max-width: ${mediaQuery}) {
    padding: 0;
    height:700px;
    .cta-mask{
      border:none;
      background-color:#fff;
      img{
        bottom:0px;
      }
    }
  }
`

export const CtaButton = styled.button`
  padding: 18px 46px;
  font-size: 1rem;
  font-weight: 700;
  background-color: ${yellow400};
  color: ${blue700};
  transition: 300ms;
  height: 54px;
  letter-spacing: 1.3px;
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  display: flex;
  gap: 10px;
  align-items: center;

  &:hover {
      cursor: pointer;
      background-color: ${blue700};
      color: ${yellow400};
  }

  @media (max-width: ${mediaQuery}) {
    padding: 16px 40px;
    font-size: 1.125rem;
  }
`

export const Container = styled.section`
  width: 100%;
  height: 100%;
  max-width: ${variables.sizes.maxWidthAll};

  background-color: ${blue500};

  position: relative;

  .left-side {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 90px;
    width: 800px;
    padding: 80px 32px 80px 0;

    h1 {
      color: #fff;
      font-size: 74px;
      line-height: 6.25rem;
      font-weight: 500;
      max-width:662px;
      span{
        color:#FFDB5C;
      }

    }
  }

  .right-side {
    position: absolute;
    bottom: 0;
    left: 50%;
    height: min-content;
    width: 50%;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: nowrap;

    .right-side-img-container {
      position: absolute;
      bottom: 70px;
      left: 40px;

      img {
        bottom: 10px;
        position: absolute;
        z-index: 3;
      }
    }
  }

  @media (max-width: ${mediaQuery}) {
    /* background-image: url(${manuUanHappy.src}); */
    background-size: 130%;
    background-repeat: no-repeat;
    background-position: bottom;


    .left-side {
      width: 100%;
      padding: 46px ${globalHorizontalPaddingMobile};
      gap: 24px;

      h1 {
        font-size: 44px;
        line-height: 54px;
      }
      button {
        font-size: 1rem;
      }
    }

    .right-side {
      left: -25px;
      transform: scale(.63);

      .right-side-img-container {
        left: 0;
        bottom: 0;
      }
    }
  }
`
