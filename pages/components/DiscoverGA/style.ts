import styled from 'styled-components';
import { ComponentPropsWithoutRef } from 'react';
import { theme } from '@styles/theme';
import { variables } from '@styles/global-variables';

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
    padding: 80px ${globalHorizontalPaddingMobile};
    gap: 32px;
  }
`;

export const DiscoverContent = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
  min-height: 450px;

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

  @media (max-width: ${mediaQuery}) {
    width: 100%;
    min-width: 100%;
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

export interface IDiscoverImgProps extends ComponentPropsWithoutRef<'div'> {
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
