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
  padding: 65px ${globalHorizontalPadding} 0;

  @media (max-width: ${mediaQuery}) {
    padding: 0;
  }
`

export const CtaButton = styled.button`
  padding: 18px 46px;
  border-radius: 50px;
  font-size: 1.25rem;
  text-transform: uppercase;
  font-weight: 900;
  background-color: white;
  color: ${theme.colors.primaryBlue};
  transition: 300ms;

  &:hover {
      cursor: pointer; 
      background-color: ${theme.colors.primaryBlue};
      color: white;
  }

  @media (max-width: ${mediaQuery}) {
    padding: 16px 40px;
    font-size: 1.125rem;
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
            font-size: 5.4rem;
            line-height: 5.75rem;
            font-weight: 500;
                
            .verde {
                color: #FFDB5C;
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
            bottom: 0;
            position: absolute;
          }
          
          /* .to-right {
            position: absolute;
            bottom: 0;
            left: 50px;
        } */
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