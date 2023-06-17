import styled from "styled-components";
import { theme } from "@styles/theme";
import { variables } from "@styles/global-variables";


const {
  colors: { blue500 },
} = theme;
const {
  sizes: {
    globalHorizontalPadding,
    maxWidthAll,
    mediaQuery,
  },
} = variables;

export const DiscoverGrowingAbroadSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 20px;
  gap: 48px;
  width: 100%;
  max-width: ${maxWidthAll};

  &.sales {
    padding: 0;
    .discover-content {
      @media screen and (min-width: 1026px) {
        max-width: calc(1366px - 44px);
        padding: 0 22px;        
        zoom: unset;
        transform: unset;
      }
    }
  }

  @media (max-width: ${mediaQuery}) {
    padding: 40px 0;
    gap: 0px;
    max-width: 100%;

    .discover-wrapper {
      max-width: 100%;
      padding-inline: 36px;
    }

    .discover-title {
      flex-wrap: wrap;
      display: flex;
      justify-content: center;
      font-size: 32px;
      @media screen and (min-width: 768px) {
        font-size: 52px;
      }
    }
  }
`;

export const DiscoverReadMoreWrapper = styled.div`
  background-color: ${blue500};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  gap: 32px;
  align-items: center;
  max-width: 100%;
  width: 100%;
  height: 35rem;
  &.sales {
    height: 100%;
    @media screen and (min-width: 1026px) {
      height: 510px
    }
  }

  .discover-text {
    color: white;
    text-align: justify;
    font-weight: 500;
  }
  .read-more-btn {
    padding-inline: 40px;
    font-weight: 600;
  }

  @media (max-width: ${mediaQuery}) {
    min-width: 100%;
    padding: 36px 24px;

    .read-more-btn {
      padding-inline: 26px;
    }
  }
`;


