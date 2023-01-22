import { theme } from "@styles/theme";
import { variables } from "@styles/global-variables";
import styled from "styled-components";

const { colors: {primaryBlue, secondaryBlue} } = theme;

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

export const VideoPlayButtonWrapper = styled.div`
  position: absolute;
  left: calc(50% - 75px/2) ;
  top: 35%;
  z-index: 2;

  span {
    background-color: white;
    color: white;
    min-width: 20px;
    min-height: 20px;
    position: absolute;
    left: 35%;
    top: 35%;
    z-index: -1;
  }
`

export const Paragraph = styled.p`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: ${primaryBlue};
  font: 400 0.8rem;

  @media (min-width: ${variables.sizes.mediaQuery}) {
    font-size: 1rem;
  }
`;
