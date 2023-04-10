import styled from "styled-components";
import { variables } from "@/styles/global-variables";

const {
  sizes: { globalHorizontalPadding, maxWidthAll, mediaQuery },
} = variables;

export const HeroTitleWrapper = styled.div`
  padding: 108px 0px 0px ${globalHorizontalPadding};
  max-width: ${maxWidthAll};
  width: 100%;

  @media (max-width: ${mediaQuery}) {
    padding: 16px 0 0 24px;
  }
`;
