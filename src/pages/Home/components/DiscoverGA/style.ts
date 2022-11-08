import styled from 'styled-components';
import { theme } from '@styles/theme';
import { variables } from '@/styles/global-variables';

const {
  colors: { primaryBlue, secondaryBlue, primaryYellow },
} = theme;
const {
  sizes: { globalHorizontalPadding },
} = variables;

export const DiscoverWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  padding: 60px ${globalHorizontalPadding};
  gap: 48px;
`;

export const DiscoverContent = styled.div`
  display: flex;
  align-items: center;
  background-color: ${secondaryBlue};
`;

export const DiscoverReadMoreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  gap: 32px;
  align-items: flex-start;
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
  gap: 24px;
`;
