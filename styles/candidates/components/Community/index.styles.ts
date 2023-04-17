import styled, { css } from "styled-components";
import { variables } from "@styles/global-variables";
import { theme } from "@styles/theme";
import Image from "next/image";
import PropTypes from "prop-types";

const {
  colors: { blue500 },
} = theme;

export const ContainerWrapper = styled.div`
  background-color: ${blue500};
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

export const Container = styled.section`
  width: min(100%, ${variables.sizes.maxWidthAll});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  padding: 94px ${variables.sizes.globalHorizontalPadding} 124px;
  text-align: center;

  @media (max-width: ${variables.sizes.mediaQuery}) {
    padding: 58px ${variables.sizes.globalHorizontalPaddingMobile} 70px;
  }
`;

export const Socials = styled.div`
  display: flex;
  gap: 100px;

  ::-webkit-scrollbar {
    opacity: 0;
  }

  @media (max-width: ${variables.sizes.mediaQuery}) {
    gap: 42px;
    flex-direction: column;
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;
  color: ${theme.colors.blue700};
  overflow-x: auto;
  overflow-y: hidden;
  flex-shrink: 0;

  @media (min-width: ${variables.sizes.mediaQuery}) and (max-width: 1280px) {
    gap: calc(1rem + ((1vw - 4.3px) * 7.7491));
  }

  @media (max-width: ${variables.sizes.mediaQuery}) {
    gap: 16px;
  }
`;
