import { variables } from "@styles/global-variables";
import { theme } from "@styles/theme";
import styled from "styled-components";

const { colors: { blue700 } } = theme;

export const Container = styled.section`
  width: min(100%, ${variables.sizes.maxWidthAll});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  gap: 50px;
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
  max-width: 376px;
  display: flex;
  flex-direction: column;
  border: 1px solid #ececec;
  transition: all 0.5s ease;

  &:hover {
    box-shadow: 0 2px 10px #e2dfdf;
    transform: scale(1.02)
  }

  @media (max-width: 992px) {
    max-width: 100%;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  padding: 30px;
  height: 100%;
  position: relative;
  text-align: justify;
  color: ${blue700};

  h3 {
    font-size: 2rem;
    font-weight: 600;
    z-index: 10;
  }

  > p {
    color: ${theme.colors.blue700};
    font-weight: 500;
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
