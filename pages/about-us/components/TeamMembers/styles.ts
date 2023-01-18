import { variables } from "@/src/styles/global-variables";
import styled from "styled-components";

export const Container = styled.section`
  width: min(100%, ${variables.sizes.maxWidthAll});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  gap: 2rem;
  padding: 80px ${variables.sizes.globalHorizontalPadding};

  @media (max-width: ${variables.sizes.mediaQuery}) {
    padding-inline: ${variables.sizes.globalHorizontalPaddingMobile};
  }
`;
