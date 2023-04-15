import styled from "styled-components";
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

export const DiscoverWrapper = styled.div`
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

export const DiscoverReadMoreWrapper = styled.div`
  background-color: ${blue500};
  display: flex;
  flex-direction: column;
  padding: 50px;
  gap: 32px;
  align-items: flex-start;
  max-width: 50%;

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
    padding: 36px;

    .read-more-btn {
      padding-inline: 26px;
    }
  }
`;

export const DiscoverImagesWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
  height: 505px;
  min-height: 450px;
  width: 100%;
`;

export interface IDiscoverImgProps extends ComponentPropsWithoutRef<"div"> {
  url: string;
}
export const DiscoverGaImg = styled.div<IDiscoverImgProps>`
  background-image: url(${(props) => props.url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 50%;
  height: 100%;

  :first-child {
    height: 90%;
  }
  :nth-child(2) {
    height: 80%;
  }
  :nth-child(3) {
    height: 70%;
  }
`;

export const RIContainer = styled.div``;

export const RIImage = styled.div<BgImageProps>`
  width: 205px;
  height: 465px;
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const CarouselContainer = styled.div`
  width: 100%;
`;
