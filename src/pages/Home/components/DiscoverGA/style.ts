import styled from 'styled-components';
import { theme } from '@styles/theme';
import { variables } from '@/styles/global-variables';
import { ComponentPropsWithoutRef } from 'react';

const {
  colors: { primaryBlue, secondaryBlue },
} = theme;
const {
  sizes: { globalHorizontalPadding, maxWidthAll, mediaQuery, globalHoriznalPaddingMobile },
} = variables;

export const DiscoverWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  padding: 60px ${globalHorizontalPadding};
  gap: 48px;
  width: 100%;
  max-width: ${maxWidthAll};

  @media (max-width: ${mediaQuery}) {
    padding: 60px ${globalHoriznalPaddingMobile};
  }
`;

export const DiscoverContent = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;

  @media (max-width: ${mediaQuery}) {
    flex-direction: column;
  }
`;

export const DiscoverReadMoreWrapper = styled.div`
  background-color: ${secondaryBlue};
  display: flex;
  flex-direction: column;
  padding: 32px;
  gap: 32px;
  align-items: flex-start;
  max-width: 60%;

  
  @media (max-width: ${mediaQuery}) {
    width: 100%;
    min-width: 100%;
  }
`;

export const DiscoverReadMoreText = styled.p`
  color: white;
`;

export const DiscoverReadMoreButton = styled.button`
  color: ${primaryBlue};
  background-color: white;
  font-weight: 600;
  font-size: 1.125rem;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    color: white;
    background-color: ${primaryBlue};
  }
`;

export const DiscoverImagesWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
  height: 300px;
  width: 100%;
`;

export interface IDiscoverImgProps extends ComponentPropsWithoutRef<"div"> {
  url: string
}
export const DiscoverGaImg = styled.div<IDiscoverImgProps>`
  background-image: url(${props => props.url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 50%;
  height: 100%;
`