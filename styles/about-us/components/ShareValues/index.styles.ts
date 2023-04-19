import { variables } from "@styles/global-variables";
import { theme } from "@styles/theme";
import styled from "styled-components";

const {
  colors: { blue700 },
} = theme;

export const Container = styled.section`
  width: min(100%, ${variables.sizes.maxWidthAll});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  gap: 50px;
  padding: 80px ${variables.sizes.globalHorizontalPadding};
  color: ${theme.colors.blue700};

  @media (max-width: 1280px) {
    padding: 0;
  }

  @media (max-width: 580px) {
    padding: 72px 42px 2px;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  /* padding: 10px; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;

  @media (max-width: 1280px) {
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: center;
  align-items: center;

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
    transform: scale(1.02);
  }

  @media (min-width: ${variables.sizes.mediaQuery}) and (max-width: 1200px) {
    min-width: 376px;
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
    font-size: 16px;
    font-weight: 400;
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
