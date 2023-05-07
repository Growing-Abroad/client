import styled from "styled-components";
import manuUanHappy from "@/../public/assets/Photos-Main-Page/uan-manu-happy.webp";
import { variables } from "@styles/global-variables";
import { theme } from "@styles/theme";

const {
  sizes: { globalHorizontalPadding, mediaQuery, globalHorizontalPaddingMobile },
} = variables;
const {
  colors: { blue400, blue500, blue700, yellow400 },
} = theme;

export const BackgroudCTA = styled.section`
  margin-top: 60px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  height: 800px;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 650px;
  max-height: 800px;
  overflow: hidden;

  @media (max-width: ${mediaQuery}) {
    background-position: -155px;
    justify-content: flex-start;
    max-height:700px;
  }
  background-color: ${blue500};

`;

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
`;

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
    width: 900px;
    padding: 120px 102px 80px 0;

    h1 {
      color: #fff;
      font-size: 74px;
      line-height: 6.25rem;
      font-weight: 500;
      max-width: 662px;
      z-index: 5;
      span {
        color: #ffdb5c;
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
      bottom: 80px;
      left: 40px;

      img {
        bottom: -30px;
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
        width: 279px;
      }
      button {
        font-size: 1rem;
      }
    }

    .right-side {
      left: -20px;
      transform: scale(0.63);
      bottom: 20px;

      .right-side-img-container {
        left: 0;
        bottom: 0;
      }
    }
  }
`;
