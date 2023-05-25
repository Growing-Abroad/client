import { variables } from "@styles/global-variables";
import styled, { css } from "styled-components";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
});
const {
  sizes: { mediaQuery },
} = variables;

export const TwoColorTitleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: max-content;

  @media (max-width: ${mediaQuery}) {
    justify-content: center;
  }
`;

export interface IText {
  color?: string;
  as?: keyof JSX.IntrinsicElements;
}

export const Text: any = styled.h1<IText>`
  ${(props) => {
    const { color } = props;
    return css`
      display: inline-block;
      color: ${color};
      font-family: ${montserrat.style.fontFamily};
      font-weight: 600;
      text-align: center;
      letter-spacing: 1.3px;
      max-width: 100%;
    `;
  }}

  ${(props) => {
    switch (props.as) {
      case "h1":
        return css`
          font-size: 52px;
          line-height: 5.625rem;
        `;
      case "h2":
        return css`
          font-size: 3.25rem;
          line-height: 4.625rem;
        `;
      case "h3":
        return css`
          font-size: 2rem;
          line-height: 2.5rem;
        `;
      case "h4":
        return css`
          font-size: 1.5rem;
          line-height: 1.875rem;
        `;
      case "h5":
        return css`
          font-size: 1.25rem;
          line-height: 1.5rem;
        `;

      default:
        return css`
          font-size: 4.625rem;
          line-height: 5.625rem;
        `;
    }
  }}

  @media(max-width: ${mediaQuery}) {
    font-size: 2.75rem;
    line-height: 3.353rem;
  }

  @media (max-width: 768px) {
    font-size: 44px;
    line-height: 53.64px;
  }

  @media (max-width: 580px) {
    font-size: 36px;
    line-height: 53.64px;
  }
`;

export const ColoredSpan = styled.span<IText>`
  ${(props) => {
    const { color } = props;
    return css`
      color: ${color};
    `;
  }}
`;
