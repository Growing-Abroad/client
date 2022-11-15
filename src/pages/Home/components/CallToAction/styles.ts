import { theme } from "@/styles/theme";
import styled from "styled-components";

import { variables } from "@/styles/global-variables";
import manuUanHappy from "@assets/Photos-Main-Page/uan-manu-happy.webp";

const { sizes: { globalHorizontalPadding, mediaQuery, globalHoriznalPaddingMobile } } = variables;
const { colors: { secondaryBlue } } = theme;

export const BackgroudCTA = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${secondaryBlue};
  padding: 0 ${globalHorizontalPadding};

  @media (max-width: ${mediaQuery}) {
    padding: 0;
  }
`

export const CtaButton = styled.button`
  padding: 18px 46px;
  border-radius: 50px;
  font-size: 1.125rem;
  text-transform: uppercase;
  font-weight: 700;
  background-color: ${theme.colors.primaryBlue};
  color: white;
  transition: 300ms;

  &:hover {
      cursor: pointer;
      background-color: white;
      color: ${theme.colors.primaryBlue};
  }

  @media (max-width: ${mediaQuery}) {
    padding: 16px 40px;
    font-size: 1rem;
  }
`

export const Container = styled.section`
    width: 100%;
    max-width: ${variables.sizes.maxWidthAll};

    display: flex;
    align-items: center;

    background-color: ${secondaryBlue};
    
    position: relative;

    .left-side {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 2.75rem;

        width: 50%;
        padding: 80px 32px 80px 0;

        h1 {
            color: #fff;
            font-size: 5rem;
            line-height: 5.5rem;
            text-shadow: 5px 5px 15px rgba(255, 255, 255, .6);
                
            .verde {
                color: #FFDB5C;
                text-shadow: 5px 5px 15px rgba(255, 219, 92, .5);
                font-weight: 600;
            }
        }
    }

    .right-side {
        position: absolute;
        bottom: 0;
        left: 600px;
        height: min-content;

        flex-direction: row;
        justify-content: space-between;
        flex-wrap: nowrap;

        .right-side-img-container {
          position: relative
        }
        img {
            height: 400px;
            bottom: 0;
            left: -80px;
            position: absolute;
          }
          
          .to-right {
            position: absolute;
            bottom: 0;
            left: 50px;
        }
    }
    
    @media (max-width: ${mediaQuery}) {
      background-image: url(${manuUanHappy});
      background-size: 130%;
      background-repeat: no-repeat;
      background-position: bottom;
      

        .left-side {
          width: 100%;
          min-height: 85vh;
          padding: 46px ${globalHoriznalPaddingMobile};
          align-items: center;
          background-color: rgba(74, 154, 253, .7);
          justify-content: space-between;

          h1 {
              font-size: 4.5rem;
              line-height: 5rem;
          }
        }

        .right-side {
            display: none;
        }
    }
`