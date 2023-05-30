import { variables } from "@styles/global-variables";
import { theme } from "@styles/theme";
import Image from "next/image";
import styled from "styled-components";

const {
  colors: { blue700, blue500 },
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
  height: 600px;
  visibility: hidden;
  align-items: baseline;

  @media screen and (max-width: 438px) {
    height: 260px;
  }

  @media (min-width: 440px) and (max-width: 1280px) {
    gap: 20px;
    height: 400px;
    width: 100%;
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
      bottom: 0;
      top: 0;
      left: 0;
      visibility: visible;
      cursor: default;

      @media (max-width: ${mediaQuery}) {
      }

      h3,
      p,
      .country-flag,
      .watch-video-btn {
        -webkit-transition-property: all;
        transition-property: all;
        -webkit-transition-duration: 0.2s;
        transition-duration: 0.2s;
        -webkit-transition-timing-function: linear;
        transition-timing-function: linear;
        -webkit-transition-delay: 0s;
        transition-delay: 0s;
        opacity: 1;
      }
      /* .watch-video-btn {
        -webkit-transition-delay: 0s;
        transition-delay: 0s;
      } */
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

  &:after {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-color: ${blue700};
    z-index: 2;
    opacity: 0;
  }

  .slide-img {
    position: absolute;
    top: 50%;
    left: 80%;
    height: 100%;
    object-fit: contain;
    width: auto;
    min-width: 50%;
    min-height: 100%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  @media (min-width: 200px) and (max-width: 1280px) {
    width: 50px;
    min-width: 50px;
    height: 100%;

    .slide-img {
      left: 78%;
    }
  }
`;

export const TextBlock = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  max-width: 66%;
  width: 66%;
  padding: 44px 30px;
  background-color: ${blue500};
  color: #fff;
  z-index: 4;
  visibility: hidden;
  display: flex;
  flex-direction: column;
  visibility: hidden;

  @media screen and (max-width: 375px) {
    max-width: 64%;
    width: 64%;
  }

  p {
    font-size: 1.125rem;
    line-height: 1.125rem;
    font-weight: 400;
  }

  p,
  .country-flag,
  .watch-video-btn {
    opacity: 0;
  }

  @media (min-width: 1200px) and (max-width: 1280px) {
    padding: 44px 15px;
  }

  @media (min-width: ${mediaQuery}) and (max-width: 1200px) {
    padding: 20px;
  }

  @media (max-width: ${mediaQuery}) {
    padding: 12px 0px 15px 12px;
    max-width: 75%;
    /* width: 66%; */

    p {
      font-size: 0.875rem;
      line-height: 1.063rem;
    }
  }
`;

export const TextBlockH3 = styled.h3`
  font-size: 1.4rem;
  line-height: 1.5;
  letter-spacing: 1.3px;
  font-weight: 600;
  margin-bottom: 32px;

  display: flex;
  gap: 8px;
  opacity: 0;



  @media (max-width: ${mediaQuery}) {
    font-size: 1.25rem;
    line-height: 1.625rem;
    font-weight: 500;
    margin-bottom: 12px;
    width: 92%;
    max-width: 386px;

    .watch-video-btn {
      padding: 8px 20px;
    }
  }
`;

export const FromWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  margin-bottom: auto;

  p {
    font-size: .75rem;
    letter-spacing: 1.3px;
    margin: 0;
    width: calc(100% - 64px);

    @media screen and (min-width: 64rem) {
      font-size: 1.25rem;
      width: auto;
    }
  }

  @media (max-width: ${mediaQuery}) {
    gap: 10.15px;
    margin-top: auto;
    margin-bottom: 16px;
  }
`;

export const ButtonContainer = styled.div`
  width: max-content;
  @media (min-width: ${mediaQuery}) and (max-width: 1280px) {
    width: calc(7.375rem + ((1vw - 4.3px) * 12.3616));
    height: calc(2.1875rem + ((1vw - 4.3px) * 2.214));
  }
`;

export const ImageFlag = styled(Image).attrs({
  width: 64,
  height: 45,
})`
  width: 64px;
  height: 45px;

  @media (min-width: ${mediaQuery}) and (max-width: 1280px) {
    width: calc(1.5625rem + ((1vw - 4.3px) * 3.5978));
    height: calc(1.09875rem + ((1vw - 4.3px) * 2.5295));
  }

  @media (max-width: ${mediaQuery}) {
    width: 25px;
    height: 17.58px;
  }
`;
