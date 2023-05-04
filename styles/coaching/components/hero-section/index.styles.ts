import styled, { css } from "styled-components";
import { variables } from "@/styles/global-variables";

const {
  sizes: { globalHorizontalPadding, maxWidthAll, mediaQuery },
} = variables;

export const ContainerWrapper = styled.div`
  height: 250px;
  margin-top: 65px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;

  @media (max-width: 758px) {
    height: calc(15.625rem + ((1vw - 4.3px) * 30.4709));
  }
  @media (min-width: 800px) {
    height: 580px;
    margin-top: 60px;
  }
`;

export const HeroTitleWrapper = styled.div`
  padding: 108px 0px 0px ${globalHorizontalPadding};
  max-width: ${maxWidthAll};
  width: 100%;

  .coaching-title-wrapper {
    padding: 0 0 35px;

    .coaching-title {
      margin-bottom: 0;
    }

    .coaching-hero-cta {
      font-weight: 600;
    }
  }

  @media (max-width: ${mediaQuery}) {
    padding: 16px 0 0 24px;

    .coaching-title-wrapper {
      padding: 0 0 14px;

      .coaching-title {
        margin-bottom: 0;
        font-size: 44px;
        flex-direction: column;
        display: flex;
      }

      .coaching-hero-cta {
        padding: "8px 24px";
      }
    }
  }
`;

export const TitlesContainer = styled.div`
  margin-bottom: 7.5%;

  ${({ theme }) => css`
    @media (max-width: ${theme.sizes.mediaQuery}) {
      margin: 0;
    }
  `}
`;

export const Subtitle = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 38px;
  ${({ theme }) => css`
    color: ${theme.colors.blue700};

    @media (max-width: ${theme.sizes.mediaQuery}) {
      font-size: 12px;
      line-height: 24px;
      max-width: 50vw;
    }
  `}
`;
