import styled from "styled-components";
import { theme } from "@styles/theme";
import { variables } from "@styles/global-variables";
import Link from "next/link";


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

  &.home {
    margin-top: 40px;
    @media screen and (min-width: 1020px) {
      margin-top: 75px;
    }
  }

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
  &.cadidates {
    padding-bottom: 0;
  }

  &.sales {
    height: 100%;
    .discover-text {
      font-weight: 400 !important;
    }
    @media screen and (min-width: 1026px) {
      height: 461px;
      padding: 25px;
      &.cadidates {
        height: 461px;
      }
      .discover-text {
        margin-bottom: 0 !important;
        font-size: 16px;
      }
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



export const UILink = styled(Link)`
  text-decoration: none;
  font-weight: 700;
  font-size: 13px;
  display: flex;
  letter-spacing: 1.3px;
  text-transform: uppercase;
  color: #FFFFFF;
  margin-top: 43px;
  &:hover {
    color: #FFFFFF;
  }
  &::after {
    content: url("data:image/svg+xml,%3Csvg width='15' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.14616 2.39062L10.1774 1.35938C10.6462 0.9375 11.3493 0.9375 11.7712 1.35938L20.9118 10.4531C21.3337 10.9219 21.3337 11.625 20.9118 12.0469L11.7712 21.1875C11.3493 21.6094 10.6462 21.6094 10.1774 21.1875L9.14616 20.1562C8.72428 19.6875 8.72428 18.9844 9.14616 18.5156L14.818 13.125H1.36491C0.708656 13.125 0.239906 12.6562 0.239906 12V10.5C0.239906 9.89062 0.708656 9.375 1.36491 9.375H14.818L9.14616 4.03125C8.72428 3.5625 8.67741 2.85938 9.14616 2.39062Z' fill='white'/%3E%3C/svg%3E%0A");
    margin-left: 7px;
  }
`

export const Subtitle = styled.p`
  color: #05335B;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.3px;
  max-width: 868px;
`