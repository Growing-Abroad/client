import styled, { css } from "styled-components";
import { ComponentPropsWithoutRef } from "react";
import { theme } from "@styles/theme";
import { variables } from "@styles/global-variables";

interface BgImageProps {
  src: string;
}

const {
  colors: { blue400, blue500 },
} = theme;
const {
  sizes: {
    globalHorizontalPadding,
    maxWidthAll,
    mediaQuery,
    globalHorizontalPaddingMobile,
  },
} = variables;

export const BlueCarouselSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px ${globalHorizontalPadding};
  gap: 48px;
  width: 100%;
  max-width: ${maxWidthAll};

  @media (max-width: ${mediaQuery}) {
    padding: 80px 0;
    gap: 32px;
    max-width: 100%;
  }
`;

export const DiscoverContent = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
  min-height: 450px;
  max-width: 100%;

  @media (max-width: ${mediaQuery}) {
    flex-direction: column-reverse;
    gap: 24px;
  }
`;

export const CarouselContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  ${({ theme }) => css`
    @media (max-width: ${theme.sizes.mediaQuery}) {
      margin: 30px 0 0 0;
    }
  `}
`;