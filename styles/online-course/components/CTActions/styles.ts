import styled from "styled-components";
import { variables } from "@styles/global-variables";
import { theme } from "@styles/theme";

const {
  sizes: { mediaQuery },
} = variables;
const {
  colors: { blue500, blue700, yellow400 },
} = theme;

export const BackgroudCTA = styled.section`
  margin-top: 60px;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
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
    max-height: 700px;
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

export const BannerMainContainer = styled.section`
  width: 100%;
  max-width: ${variables.sizes.maxWidthAll};
  padding: 0 1.75rem;
  background-color: ${blue500};

  .left-side {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    padding-top: 2.3125rem;
    flex: 1;
    h1 {
      max-width: 17.4375rem;
      color: #fff;
      font-size: 2.75rem;
      font-weight: 600;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

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
    margin-top: 15%;
    img {
      width: 100%;
      height: 100%;
    }
  }

  @media screen and (max-width: 374px) {
    .right-side {
      margin-top: 34%;
    }
  }

  @media screen and (min-width: ${mediaQuery}) {
    padding: 1.875rem;
    display: flex;
    height: 100%;

    .left-side {
      max-width: 26.4375rem;
      h1 {
        max-width: 100%;
      }
    }

    .right-side {
      width: 60%;
      display: flex;
      flex-direction: column;
      justify-content: end;
      margin-left: auto;
      margin-bottom: -1.625rem;

      img {
        margin-top: unset;
      }
    }
  }

  @media screen and (min-width: 1366px) {
    display: flex;
    padding: 5.3125rem;
    padding-left: 4.4375rem;
    padding-right: 0;

    .left-side {
      max-width: 42.375rem;
      gap: 5.8125rem;
      h1 {
        font-size: 4.625rem;
      }
    }

    .right-side {
      width: auto;
      margin-top: 0;

      img {
        max-width: 41.0625rem;
        max-height: 36.0625rem;
      }
    }
  }
`;
