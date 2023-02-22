import { variables } from "@styles/global-variables";
import { theme } from "@styles/theme";
import styled, { CSSProperties } from "styled-components";

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
}

export const Text = styled.span<IText>`
  color: ${({ color }) => theme.colors[color]};
  font-size: ${({ styles: s}) => s?.fontSize || "4.625rem"};
  line-height: ${({ styles: s }) => s?.lineHeight || "5.625rem"};
  font-weight: 600;
  text-align: center;
  letter-spacing: 1.3px;
`;
