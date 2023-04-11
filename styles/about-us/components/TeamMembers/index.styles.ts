import { variables } from "@styles/global-variables";
import styled from "styled-components";

export const Container = styled.section`
  width: min(100%, ${variables.sizes.maxWidthAll});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  gap: 2rem;
  padding: 40px ${variables.sizes.globalHorizontalPadding} 149px;

  @media (max-width: ${variables.sizes.mediaQuery}) {
    padding-inline: ${variables.sizes.globalHorizontalPaddingMobile};
  }

  @media (max-width: 580px) {
    padding-bottom: 73px;
  }
`;
