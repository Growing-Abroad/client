import { variables } from "@styles/global-variables";
import { theme } from "@styles/theme";
import styled, { css, CSSProperties } from "styled-components";
import {Montserrat} from "@next/font/google";

const montserrat = Montserrat({
  subsets: ['latin']
})
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

interface IText {
  color: string;
  styles?: CSSProperties;
  as?: keyof JSX.IntrinsicElements;
}

export const Text = styled.h1<IText>`
  ${(props) => {
    const { styles, color } = props;
    return css`
    display: ${styles?.display || 'contents'};
    color: ${() => styles?.color || theme.colors[color]};
    font-size: ${ styles?.fontSize ||"4.625rem"};
    line-height: ${ styles?.lineHeight || "5.625rem"};
    font-weight: ${styles?.fontWeight || 600};
    text-align: ${styles?.textAlign || 'inherit'};
    letter-spacing: ${ styles?.letterSpacing || '1.3px'};
  `}}

  ${(props) => {
    switch (props.as) {
      case "h1":
        return css`
          font-size: 4.625rem;
          line-height: 5.625rem;
        `;
      case "h2":
        return css`
          font-size: 3.75rem;
          line-height: 4.625rem;
        `;
      case "h3":
        return css`
        display: ${props.styles?.display || 'contents'};
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
        return null;
    }
  }}

  ${(props) => {
    const { styles } = props;
    if (styles?.fontSize) {
      return css`
        font-size: styles?.fontSize;
      `
    }
  }}

  ${(props) => {
    const { styles } = props;
    if (styles?.lineHeight) {
      return css`
        line-height: styles?.lineHeight;
      `
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
