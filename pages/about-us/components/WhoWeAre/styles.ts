import { theme } from "@/src/styles/theme";
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

export const Paragraph = styled.p`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: ${theme.colors.primaryBlue};
  font: 400 0.8rem "Montserrat";

  @media (min-width: ${variables.sizes.mediaQuery}) {
    font-size: 1rem;
  }
`;
