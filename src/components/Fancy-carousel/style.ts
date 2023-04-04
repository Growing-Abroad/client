import { variables } from '@styles/global-variables';
import { theme } from '@styles/theme';
import Image, { ImageProps } from 'next/image';
import styled, { css } from 'styled-components';

interface FlexboxSliderProps {
  isSmall?: boolean;
  isIntroducingAPerson?: boolean;
  isCentralized?: boolean;
}

interface FlexboxSlideProps extends FlexboxSliderProps {
  isActive: boolean;
}

interface ImageBackgroundProps extends Omit<FlexboxSlideProps, 'isSmall'> {
  src: string;
}

interface ImageBackgroundContentProps
  extends Omit<FlexboxSlideProps, 'isSmall'> {}

const {
  colors: { primaryBlue, blue500 },
} = theme;
const {
  sizes: { mediaQuery },
} = variables;

export const FlexboxSlider = styled.div<FlexboxSliderProps>`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  ${({ isCentralized }) =>
    isCentralized &&
    css`
      align-items: center;
      justify-content: center;
    `}
  gap: 36px;
  visibility: hidden;

  ${({ isSmall }) =>
    !isSmall
      ? css`
          align-items: baseline;
        `
      : css`
          align-items: center;
        `}

  width: 100%;
  ${({ theme, isSmall }) =>
    !isSmall
      ? css`
          height: 571px;
        `
      : css`
          height: 461px;
          @media (max-width: ${theme.sizes.mediaQuery}) {
            width: 100%;
            height: 252px;
          }
        `}

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
      bottom: 0;
      top: 0;
      left: 0;
      visibility: visible;
      cursor: default;

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
        -webkit-transition-delay: 0.3s;
        transition-delay: 0.3s;
        opacity: 1;
      }
      /* .watch-video-btn {
        -webkit-transition-delay: 0s;
        transition-delay: 0s;
      } */
      .watch-video-btn:hover {
        -webkit-transition-delay: 0s;
        transition-delay: 0s;
      }
    }
  }

  .dontShow {
    display: none;
  }
`;

export const FlexboxSlide = styled.div<FlexboxSlideProps>`
  -webkit-transition-property: all;
  transition-property: all;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: linear;
  transition-timing-function: linear;
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
  width: 50px;
  min-width: 114px;

  ${({ isSmall }) =>
    !isSmall
      ? css`
          height: 100%;
        `
      : css`
          border: 1px solid #e9e9e9;
          filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
          height: 85%;
          max-width: 461.17px;
        `}
  position: relative;
  overflow: hidden;
  cursor: pointer;
  visibility: visible;

  &:after {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-color: ${primaryBlue};
    z-index: 2;
    opacity: 0;
  }

  .slide-img {
    position: absolute;
    top: 50%;
    left: 75%;
    height: 100%;
    width: auto;
    min-width: 50%;
    min-height: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  @media (min-width: 200px) and (max-width: 1280px) {
    width: calc(0.625rem + ((1vw - 2px) * 3.7037));
    min-width: calc(0.625rem + ((1vw - 2px) * 3.7037));
    min-height: 0;

    .slide-img {
      left: 85%;
    }
  }

  ${({ isSmall, theme }) =>
    isSmall &&
    css`
      @media (max-width: ${theme.sizes.mediaQuery}) {
        min-width: 62px;
      }
    `}

  ${({ isSmall, isActive, isIntroducingAPerson, theme }) =>
    isSmall &&
    isActive &&
    isIntroducingAPerson &&
    css`
      @media (max-width: ${theme.sizes.mediaQuery}) {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `}
`;

export const TextBlock = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  max-width: 58%;
  width: 58%;
  padding: 44px 30px;
  background-color: ${blue500};
  color: #fff;
  z-index: 4;
  visibility: hidden;
  display: flex;
  flex-direction: column;
  visibility: hidden;

  p {
    font-size: 1.125rem;
    line-height: 1.125rem;
    font-weight: 600;
  }

  p,
  .country-flag,
  .watch-video-btn {
    opacity: 0;
  }

  @media (max-width: ${mediaQuery}) {
    padding: 12px 0px 15px 12px;
    max-width: 75%;
    width: 75%;

    p {
      font-size: 0.875rem;
      line-height: 1.063rem;
    }
  }
`;

export const TextBlockH3 = styled.h3`
  font-size: 2rem;
  line-height: 2.438rem;
  letter-spacing: 1.3px;
  font-weight: 600;
  margin-bottom: 32px;
  max-width: 386px;
  display: flex;
  gap: 8px;
  opacity: 0;

  @media (max-width: ${mediaQuery}) {
    font-size: 1.125rem;
    line-height: 1.625rem;
    font-weight: 500;
    margin-bottom: 12px;
  }
`;

export const FromWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  @media (max-width: ${mediaQuery}) {
    gap: 10.15px;
  }
`;

export const ImageBackground = styled.div<ImageBackgroundProps>`
  min-width: 100%;
  min-height: 100%;
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageBackgroundContent = styled.div<ImageBackgroundContentProps>`
  display: flex;
  flex-direction: column;

  align-items: flex-start;

  position: absolute;
  /* top: 50%; */
  height: 100%;
  width: 100%;
  z-index: 1;
  padding: 152px 0px 18px 23px;

  ${({ isIntroducingAPerson, theme }) =>
    isIntroducingAPerson
      ? css`
          background-color: rgba(0, 0, 0, 0.25);

          justify-content: flex-end;

          @media (max-width: ${theme.sizes.mediaQuery}) {
            /* position: relative; */
            /* max-height: 100%; */
          }
        `
      : css`
          background-color: rgba(0, 0, 0, 0.5);
          padding: 152px 0px 152px 23px;
          justify-content: center;
        `}

  ${({ isActive }) =>
    !isActive &&
    css`
      display: none;
    `}


  h3 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    line-height: 39px;
    display: flex;
    align-items: center;
    letter-spacing: 1.3px;
    text-transform: capitalize;

    color: ${({ theme }) => theme.colors.white};
  }

  h4 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    line-height: 24.38px;
    font-size: 20px;
    display: flex;
    align-items: center;
    /* letter-spacing: 1.3px; */
    text-transform: capitalize;

    color: ${({ theme }) => theme.colors.white};
  }

  .paragraph-container {
    margin-top: 50px;
    margin-bottom: ${({ isIntroducingAPerson }) =>
      isIntroducingAPerson ? '0px' : '23px'};
  }

  p {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    display: flex;
    align-items: center;
    letter-spacing: 1.3px;
    text-transform: capitalize;
    text-align: left;

    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.colors.white};
  }

  //MEDIA QUERY
  ${({ theme, isIntroducingAPerson }) => css`
    @media (max-width: ${theme.sizes.mediaQuery}) {
      padding: 100px 8px 20px 8px;

      h3 {
        font-size: 14px;
        line-height: 17.07px;
      }

      .paragraph-container {
        margin: 0;
      }

      p {
        font-size: 12px;
        line-height: 17.07px;
      }
    }

    @media (max-width: 365px) {
      padding-bottom: 5px;
    }
  `}
`;

export const LinkedinIcon = styled(Image).attrs({
  width: 56,
  height: 54,
})`
  position: absolute;
  top: 6px;
  right: 6px;

  ${({ theme }) => css`
    @media (max-width: ${theme.sizes.mediaQuery}) {
      width: 32px;
      height: 30px;
      /* top: auto;
      bottom: 21%; */
    }
  `}
`;

export const StdButtonContainer = styled.div`
  ${({ theme }) => css`
    @media (max-width: ${theme.sizes.mediaQuery}) {
      margin: 36px 0;
    }

    @media (max-width: 405px) {
      margin-top: 30px;
      margin-bottom: 90px;
    }
  `}
`;
