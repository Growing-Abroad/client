import { variables } from "@styles/global-variables";
import { theme } from "@styles/theme";
import styled from "styled-components";

const {
  sizes: { mediaQuery },
} = variables;

export const TwoColorTitleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-weight: 600;
  width: max-content;

  @media (max-width: ${mediaQuery}) {
    justify-content: center;
  }
`;

interface IText {
  color: string;
  fontSize?: string;
}

export const Text = styled.span<IText>`
  color: ${({ color }) => theme.colors[color]};
  font-size: ${({ fontSize }) => fontSize || "3.5rem"};
  text-align: center;
`;
