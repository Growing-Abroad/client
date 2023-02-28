import { variables } from "@styles/global-variables";
import { theme } from "@styles/theme";
import styled from "styled-components";

const {
  colors: { primaryBlue, secondaryBlue },
} = theme;
const {
  sizes: { mediaQuery },
} = variables;

export const FlexboxSlider = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  gap: 36px;
  width: 100%;
  height: 571px;
  visibility: hidden;
  align-items: baseline;

  @media (min-width: 200px) and (max-width: 1280px) {
    gap: calc(0.4375rem + ((1vw - 3.5px) * 3.1183));
    height: calc(12.5rem + ((1vw - 2px) * 18.5185));
    min-height: 0;
  }

  .short {
    height: 90%;
  }

  .selected-slide {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    flex-grow: 1;
    height: 100%;
    cursor: default;

    .text-block {
      /* -webkit-transition-property: all;
      transition-property: all;
      -webkit-transition-duration: 0.2s;
      transition-duration: 0.2s;
      -webkit-transition-timing-function: linear;
      transition-timing-function: linear;
      -webkit-transition-delay: 0.5s; */
      /* transition-delay: 0.5s; */
      bottom: 0;
      top: 0;
      left: 0;
      visibility: visible;
      cursor: default;

      @media (max-width: ${mediaQuery}) {
        bottom: 12px;
        left: 12px;
      }
    }
  }

  .dontShow {
    display: none;
  }
`;

export const FlexboxSlide = styled.div`
  -webkit-transition-property: all;
  transition-property: all;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: linear;
  transition-timing-function: linear;
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
  width: 50px;
  min-width: 50px;
  height: 100%;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  visibility: visible;

  @media (min-width: 200px) and (max-width: 1280px) {
    width: calc(0.625rem + ((1vw - 2px) * 3.7037));
    min-width: calc(0.625rem + ((1vw - 2px) * 3.7037));
    min-height: 0;
  }

  &:after {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-color: ${primaryBlue};
    z-index: 2;
    opacity: 0;
  }

  img {
    position: absolute;
    top: 50%;
    left: 75%;
    height: 100%;
    width: auto;
    min-width: 50%;
    min-height: 100%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    z-index: 1;
  }
`;

export const TextBlock = styled.div`
  position: absolute;
  left: 0;
  bottom: 30px;
  max-width: 500px;
  width: 500px;
  padding: 44px 30px;
  background-color: ${secondaryBlue};
  color: #fff;
  z-index: 4;
  visibility: hidden;
  display: flex;
  flex-direction: column;

  @media (max-width: ${mediaQuery}) {
    font-size: 0.875rem;
    padding: 12px;
    left: 0;
    bottom: 12px;
    background-color: rgb(74, 154, 253, 0.5);
    max-width: 180px;
  }
  
  p {
    font-size: 1.125rem;
    line-height: 1.125rem;
    font-weight: 600;
  }
`;

export const TextBlockH3 = styled.h3`
  font-size: 2rem;
  line-height: 2.438rem;
  letter-spacing: 1.3px;
  font-weight: 700;
  margin-bottom: 32px;
  max-width: 386px;
  display: flex;
  gap: 8px;

  @media (max-width: ${mediaQuery}) {
    font-size: 16px;
    margin-bottom: 4px;
  }
`;

export const WatchVideoBtn = styled.button`
  all: unset;
  background-color: ${primaryBlue};
  color: white;
  font-weight: 600;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 0.8rem;
  margin-top: 16px;

  @media (max-width: ${mediaQuery}) {
    font-size: 0.65rem;
    padding: 8px 16px;
    margin-top: 8px;
  }
`;
