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
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${blue500};
  height: 760px;
  top: 0;
  left: 0;
  min-height: 660px;
  overflow: hidden;
  position: fixed;
  z-index: 0;

  @media (max-width: ${mediaQuery}) {
    padding: 60px 0 0 0;
    height: 760px;

  }

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

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: ${variables.sizes.maxWidthAll};
  padding: 0 ${globalHorizontalPadding};

  background-color: ${blue500};

  position: relative;

  .left-side {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 90px;
    width: 800px;
    padding: 130px 12px 10px 0;
    z-index: 3;

    h1 {
      color: #fff;
      font-size: 5.4rem;
      line-height: 6.25rem;
      font-weight: 500;

      .title-change {
        font-weight: 600;
        animation-iteration-count: 1;
        position: relative;
        left: -200px;
        opacity: 0;
        animation-fill-mode: both;
        display: inline-block;
        color: ${blue500};
        animation: text-enter-germany 3000ms ease;

        @keyframes text-enter-germany {
          0% {
            left: -200px;
            color: ${blue500};
            visibility: hidden;
            opacity: 0;
          }
          20% {
            left: 0;
            visibility: visible;
            color: ${blue700};
          }
          40% {
            color: ${yellow400};
            opacity: 1;
          }
          80% {
            left: 0;
            visibility: visible;
            color: ${yellow400};
            opacity: 1;
          }
          100% {
            left: 200px;
            visibility: hidden;
            opacity: 0;
            color: ${blue500};
          }
        }
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
      bottom: 10px;
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
    padding: 0;

    .left-side {
      width: 100%;
      padding: 46px ${globalHorizontalPaddingMobile};

      gap: 25px;

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
      transform: scale(0.63);

      .right-side-img-container {
        left: 0;
      }
    }
  }
`;
