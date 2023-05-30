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
    }
  }
`;

export const DiscoverReadMoreWrapper = styled.div`
  background-color: ${blue500};
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 32px;
  align-items: center;
  max-width: 100%;
  width: 40%;
  height: 35rem;

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


