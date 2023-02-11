import { variables } from "@styles/global-variables";
import { theme } from "@styles/theme";
import styled from "styled-components";

export const Container = styled.section`
  width: min(100%, ${variables.sizes.maxWidthAll});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  gap: 2rem;
  padding: 80px ${variables.sizes.globalHorizontalPadding};
  color: ${theme.colors.primaryBlue};

  @media (max-width: ${variables.sizes.mediaQuery}) {
    padding-inline: ${variables.sizes.globalHorizontalPaddingMobile};
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (min-width: ${variables.sizes.mediaQuery}) {
    flex-direction: row;
    gap: 2rem;
  }
`;
export const Card = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  padding: 1rem;
  height: 100%;
  position: relative;

  h3 {
    font-size: 1.75rem;
    font-weight: 500;
    z-index: 10;
  }

  > p {
    text-align: justify;
    letter-spacing: 1px;
    z-index: 10;
    color: ${theme.colors.blue700};
  }

  @media (min-width: ${variables.sizes.mediaQuery}) {
    z-index: 10;
  }
`;

export const WhiteTriangle = styled.div`
  position: absolute;
  border-radius: 0.2rem;
  background-color: white;
  transform: rotate(15deg);
  top: -2.4rem;
  left: 0;
  width: 100%;
  height: 80px;
  z-index: 0;
`;
