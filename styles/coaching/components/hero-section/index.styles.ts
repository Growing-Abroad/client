import styled, { css } from "styled-components";
import { variables } from "@/styles/global-variables";
import { IStyledPageBody } from "@/components/generics/PageBody";

const {
  sizes: { globalHorizontalPadding, maxWidthAll, mediaQuery },
} = variables;

interface IContainerProps extends IStyledPageBody {
  backgroundImage: string;
}

export const ContainerWrapper = styled.div<IContainerProps>`
  /* height: 340px; */
  height: ${({distanceFromTop}) => distanceFromTop};
  margin-top: 60px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;

  display: flex;
  justify-content: center;

  background-image: url('${({backgroundImage})=> backgroundImage}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right;

  @media (min-width: 430px) {
    /* height: calc(21.25rem + ((1vw - 4.3px) * 22.1607)); */
    height: ${({distanceFromTop}) => distanceFromTop};
    margin-top: 60px;
  }
  @media (min-width: 1513px) {
    /* height: 580px; */
    height: ${({distanceFromTop}) => distanceFromTop};
    margin-top: 90px;
  }
`;

export const HeroTitleWrapper = styled.div`
  padding: 80px 0px 0px ${globalHorizontalPadding};
  max-width: ${maxWidthAll};
  width: 100%;

  .coaching-title-wrapper {
    padding: 0 0 16px;
    justify-content: flex-start;

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
  margin-bottom: 6%;

  ${({ theme }) => css`
    @media (max-width: ${theme.sizes.mediaQuery}) {
      margin: 0;
    }
  `}
`;

export const Subtitle = styled.p`
  font-weight: 400;
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
