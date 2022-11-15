import { theme } from "@/styles/theme";
import styled from "styled-components";

import { variables } from "@/styles/global-variables";

const { sizes: { globalHorizontalPadding, mediaQuery, globalHoriznalPaddingMobile } } = variables;

export const BackgroudCTA = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.secondaryBlue};
  padding: 0 ${globalHorizontalPadding};

  @media (max-width: ${mediaQuery}) {
  padding: 0 ${globalHoriznalPaddingMobile};
  }
`

export const CtaButton = styled.button`
  margin-top: 2rem;
  padding: 0px 24px;
  height: 50px;

  border-radius: 50px;

  font-size: 1rem;
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
`

export const Container = styled.section`
    width: 100%;
    max-width: ${variables.sizes.maxWidthAll};

    display: flex;
    align-items: center;

    background-color: ${theme.colors.secondaryBlue};
    
    position: relative;

    .left-side {
        flex-direction: column;

        width: 50%;

        padding: 80px 32px 80px 0;

        h1 {
            color: #fff;
            font-size: 5rem;
            text-shadow: 5px 5px 15px rgba(255, 255, 255, .6);
            height: 70%;
                
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
    
    @media (max-width: ${variables.sizes.mediaQuery}) {
        .left-side {
            width: 100%;

            h1 {
                font-size: 3rem;
            }
        }

        .right-side {
            display: none;
        }
    }
`