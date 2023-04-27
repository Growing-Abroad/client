import styled, { css } from "styled-components";
import { variables } from "../../../../src/styles/global-variables";
import { theme } from "../../../../src/styles/theme";

interface IContainer {
  backgroundImg: string;
}

const {
  sizes: { globalHorizontalPadding, globalHorizontalPaddingMobile, mediaQuery },
} = variables;

export const Container = styled.section<IContainer>`
  width: 100%;
  max-width: 1514px;
  height: 600px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
  margin: 80px ${globalHorizontalPadding};

  position: relative;

  background-image: url(${({ backgroundImg }) => backgroundImg});
  background-color: white;
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 50% 100%;

  @media (max-width: ${mediaQuery}) {
    margin-top: 50%;
    flex-direction: column-reverse;

    background-position: center;
    background-size: cover;
  }
`;

export const TextContainer = styled.div<{
  color?: string;
  left: string;
  top: string;
  bottom: string;
  bgColor?: string;
  blueArea?: boolean;
  onTheTop?: boolean;
}>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  height: 50%;
  color: ${({ color }) => (color === "primary" ? "white" : color)};
  font: 700 3rem;
  padding: 2rem 7.5rem;
  position: absolute;
  left: ${({ left }) => left};
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  right: 0;
  text-align: justify;
  background-color: ${({ bgColor }) => bgColor ?? "transparent"};

  ${({ blueArea }) =>
    blueArea &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}

  ${({ theme, onTheTop }) =>
    onTheTop &&
    css`
      @media (max-width: ${theme.sizes.mediaQuery}) {
        top: -45%;
        left: 0;
      }
    `}

  > h3 {
    font-weight: 600;
    font-size: 40px;
    line-height: 49px;
  }

  > p {
    font-size: 16px;
    line-height: 24px;
    /* or 150% */

    display: flex;
    align-items: center;
    text-align: justify;
  }

  @media (min-width: ${variables.sizes.mediaQuery}) {
    width: 50%;
    > h3 {
      text-align: left;
    }
  }
`;
