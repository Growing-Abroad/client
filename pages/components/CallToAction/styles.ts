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
  height: 85vh;
  overflow: hidden;

  @media (max-width: ${mediaQuery}) {
    padding: 0;
  }

  .styled-div {
    position: absolute;
    bottom: 0px;
    z-index: 100;
    width: 100vw;

    img {
      bottom: 0;
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
        gap: 170px;

        width: 800px;
        padding: 80px 32px 80px 0;

        h1 {
            color: #fff;
            font-size: 5.4rem;
            line-height: 6.25rem;
            font-weight: 500;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                
            .title-change {
                color: #FFDB5C;
                font-weight: 600;
                animation: text-enter 3000ms ease;
                animation-iteration-count: 1;
                position: relative;
                left: 0;
                animation-fill-mode: both;
                display: inline-block;

                @keyframes text-enter {
                  0% {
                    left: -200px;
                    color: ${blue500};
                    visibility: hidden;
                    opacity: 0;
                  }
                  20% {
                    left: 0;
                    visibility: visible;
                    opacity:1;
                    color: ${yellow400};


                  }
                  80% {
                    left: 0;
                    visibility: visible;
                    opacity:1;
                    color: ${yellow400};

                    
                  }
                  100% {
                    left: 200px;
                    visibility: hidden;
                    opacity: 0;
                    color: ${blue500};
                  }
                }
            }

            .leaving {
              position: relative;
              right: 0;
              color: #FFDB5C;
              font-weight: 600;
              animation: text-leave 1000ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
              
              @keyframes text-leave {
                  
                  100% {
                    right: 0;
                    visibility: hidden;
                    opacity: 0;
                    right: 200px;
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
          bottom: 0px;

          .colored-divs {
            position: relative;
            left: 114px;
            bottom: 10px;

            .blue, .yellow {
            width: 400px;
            height: 476px;
            border-radius: 219px;
            position: absolute;
            }
            .yellow {
              background: ${yellow400};
              z-index: 1;
              bottom: -19px;
              left: 0;
            }
            .blue {
              background: ${blue400};
              z-index: 2;
              bottom: 0;
              left: 0;
              left: 109px;
            }
          }
          
          img {
            bottom: -30px;
            position: absolute;
            z-index: 3;
          }
        }
    }
    
    @media (max-width: ${mediaQuery}) {
      background-image: url(${manuUanHappy.src});
      background-size: 130%;
      background-repeat: no-repeat;
      background-position: bottom;
      

        .left-side {
          width: 100%;
          min-height: 85vh;
          padding: 46px ${globalHorizontalPaddingMobile};
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