import styled from "styled-components";
import { variables } from "@/styles/global-variables";

const {
  sizes: { globalHorizontalPadding, maxWidthAll, mediaQuery },
} = variables;


export const ContainerWrapper = styled.div`
  height: 250px;
  width: 100%;

  

  @media (min-width: 430px) {
    height: calc(15.625rem + ((1vw - 4.3px) * 30.4709));
  }
  @media (min-width: 1513px) {
    height: 580px;
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
        padding: "8px 24px",
      }
    }
  }
`;
