import styled from "styled-components";
import manuUanHappy from "@/../public/assets/Photos-Main-Page/uan-manu-happy.webp";
import { variables } from "@styles/global-variables";
import { theme } from "@styles/theme";

const {
  sizes: { globalHorizontalPadding, mediaQuery, globalHorizontalPaddingMobile },
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
    padding-top: 1.5rem;
    h1 {
      max-width: 17.4375rem;
      color: #fff;
      font-size: 2.75rem;
      font-weight: 600;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

      span {
        color: #ffdb5c;
      }
    }
  }

  .right-side {
    img {
      width: 100%;
      height: 100%;
      margin-top: 2.0625rem;
    }
  }

  @media screen and (min-width: ${mediaQuery}) {
    padding: 1.875rem;
    display: flex;

    .left-side {
      max-width: 31.4375rem;
      h1 {
        max-width: 100%;
      }
    }

    .right-side {
      width: 70%;
      display: flex;
      margin-left: auto;
      margin-top: 13%;

      img {
        margin-top: unset;
      }
    }
  }

  @media screen and (min-width: 1366px) {
    display: flex;
    padding: 5.3125rem;
    padding-left: 8.4375rem;
    padding-right: 0;

    .left-side {
      max-width: 42.375rem;
      gap: 5.8125rem;
      h1 {
        font-size: 4.625rem;
      }
    }

    .right-side {
      width: 100%;
      margin-top: 0;

      img {
        max-width: 41.0625rem;
        max-height: 36.0625rem;
      }
    }
  }

  @media screen and (min-width: 1441px) {

    .right-side {
      width: 100%;
      margin-top: 0;
      margin-top: 6%;
    }
  }
`;

// export const BannerMainContainer = styled.section`
//   width: 100%;
//   height: 100%;
//   max-width: ${variables.sizes.maxWidthAll};

//   background-color: ${blue500};

//   position: relative;

//   .left-side {
//     display: flex;
//     align-items: flex-start;
//     flex-direction: column;
//     gap: 60px;
//     width: 70%;
//     padding: 120px 102px 80px 0;
//     position: absolute;
//     padding-left: 140px;

//     @media (min-width: 520px) and (max-width: 820px) {
//       padding: 6rem 2rem 2rem;
//     }

//     h1 {
//       color: #fff;
//       font-size: 72px;
//       line-height: 5rem;
//       font-weight: 500;
//       max-width: 662px;
//       z-index: 5;
//       span {
//         color: #ffdb5c;
//       }

//       @media (min-width: 520px) and (max-width: 820px) {
//         font-size: 3rem;
//         line-height: 3rem;
//       }
//     }
//   }

//   .right-side {
//     position: absolute;
//     bottom: 0;
//     left: 50%;
//     height: min-content;
//     width: 50%;
//     flex-direction: row;
//     justify-content: space-between;
//     flex-wrap: nowrap;

//     .right-side-img-container {
//       position: absolute;
//       bottom: 80px;
//       left: 40px;

//       img {
//         bottom: -40px;
//         position: absolute;
//         z-index: 3;

//         @media (min-width: 520px) and (max-width: 820px) {
//           left: -12rem;
//           height: 28rem;
//         }
//       }
//     }
//   }

//   @media (max-width: ${mediaQuery}) {
//     .left-side {
//       width: auto;
//     }

//     .right-side {
//       right: 0;
//       left: 0;
//       margin: 0 auto;

//       .right-side-img-container {
//         position: unset;

//         img {
//           position: unset;
//         }
//       }
//     }
//   }

//   @media (max-width: 767px) {
//     /* background-image: url(${manuUanHappy.src}); */
//     background-size: 130%;
//     background-repeat: no-repeat;
//     background-position: bottom;

//     .left-side {
//       width: 100%;
//       padding: 46px ${globalHorizontalPaddingMobile};
//       gap: 7px !important;

//       h1 {
//         font-size: 40px;
//         line-height: 1.2;
//         width: 279px;
//       }
//       button {
//         font-size: 1rem;
//       }
//     }

//     .right-side {
//       left: -20px;
//       transform: scale(0.63);
//       bottom: 0;

//       .right-side-img-container {
//         left: 0;
//         bottom: 0;

//         img {
//           position: unset;
//         }
//       }
//     }
//   }
// `;
