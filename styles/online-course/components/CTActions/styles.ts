import styled, { css } from "styled-components";
import { variables } from "@styles/global-variables";
import { theme } from "@styles/theme";
import StdButton from "@/components/generics/StdButton/StdButton";
import Image from "next/image";
import backgroundJobsUltra from "@assets/pages/jobs/jobs-hero-bg-ultra-wide.png";

const {
  sizes: { mediaQuery },
} = variables;
const {
  colors: { blue500, blue700, yellow400 },
} = theme;


interface IBannerMainContainerProps {
  pageName: Pages;
}

type Pages = "jobs" | "sales" | "onlineCourses" | "candidates";

type BackgroundCTAProps = {
  pageName: Pages;
};

// variants functions

const variantBackgroudCTA = (variant: Pages) => {
  return {
    jobs: css`
      @media screen and (min-width: 768px) {
        background-color: transparent;
        background-image: url(${backgroundJobsUltra.src});
      }
    `,
    sales: css``,
    onlineCourses: css``,
    candidates: css``,
  }[variant];
};

const variantBannerMainContainer = (variant: Pages) => {
  return {
    jobs: css`
      background-color: transparent;
    `,
    sales: css``,
    onlineCourses: css``,
    candidates: css`
      height: 100%;
      justify-content: space-between;
      padding-bottom: 0;
      .left-side h1 {
        max-width: 642px;
      }
    `,
  }[variant];
};

// styles

export const BackgroudCTA = styled.section<Pick<BackgroundCTAProps, "pageName">>`
  padding-top: 66px;
  width: 100%;
  // resolve o awkward jump do VH em aplicoes IOS - tela 100vh
  height: calc(var(--vh, 1vh) * 100);
  position: fixed;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  background-color: ${blue500};

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media screen and (min-width: 768px) {
    padding-top: 90px;
  }

  @media (max-width: ${mediaQuery}) {
    background-size: cover;
    background-position: left;
  }

  ${({ pageName }) => variantBackgroudCTA(pageName)}
`;

export const CtaButton = styled.button`
  padding: 18px 46px;
  font-size: 1rem;
  font-weight: 700;
  background-color: ${yellow400};
  color: ${blue700};
  transition: 300ms;
  height: 54px;
  letter-spacing: 1.3px;
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  display: flex;
  gap: 10px;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: ${blue700};
    color: ${yellow400};
  }

  @media (max-width: ${mediaQuery}) {
    padding: 16px 40px;
    font-size: 1.125rem;
  }
`;

export const BannerMainContainer = styled.section<IBannerMainContainerProps>`
  max-width: ${variables.sizes.maxWidthAll};
  width: 100%;
  height: 100%;
  padding: 1.5rem 1.125rem 0;
  background-color: ${blue500};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.0625rem;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    margin: 0 auto;
    padding-top: 5.3125rem;
    padding-left: 7rem;
    align-items: start;
  }

  ${({ pageName }) => variantBannerMainContainer(pageName)}
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4425rem;
  width: 100%;
  align-items: flex-start;
`;

export const UIMainTitle = styled.h1<Pick<BackgroundCTAProps, "pageName">>`
  max-width: 17.4375rem;
  color: #fff;
  font-size: 2.75rem;
  font-weight: 600;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 0;
  @media screen and (min-width: 1024px) {
    font-size: 4.625rem;
    max-width: 100%;
  }
  @media screen and (min-width: 768px) {
    ${({ pageName }) =>
    pageName === "jobs" &&
    css`
      color: #05335b;
    `};
  }
`;

export const RightSide = styled.div<Pick<BackgroundCTAProps, "pageName">>`
  margin-top: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  ${({ pageName }) =>
    pageName === "jobs" &&
    css`
      visibility: hidden;
    `};

    ${({ pageName }) =>
    pageName === "candidates" &&
    css``
  };
`;

export const MainImage = styled(Image)`
  max-width: 375px;
  width: 100%;
  height: 100%;
  object-fit: contain; 
  border: 1px solid transparent;
  @media screen and (min-width: 1024px) {
    max-width: 657px;
  }


`;

export const SubTitle = styled.span`
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  max-width: 323px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 38px;
    max-width: 30rem;
  }
`;

export const StdButtonCustom = styled(StdButton)<Pick<BackgroundCTAProps, "pageName">>`
  margin: 0;
  max-width: 17.4375rem;
  @media screen and (min-width: 1024px) {
    margin-top: 25px;
    max-width: 21.9375rem;
  }
  ${({ pageName }) =>
    pageName === "candidates" &&
    css`
      margin: 20px 0 81px;
    `};
`;

export const UIImage = styled(Image)`
  position: absolute;
  width: 200%;
  right: 0;
  top: 0;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;
