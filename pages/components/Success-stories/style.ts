import { variables } from '@/styles/global-variables';
import { theme } from '@/styles/theme';
import styled from 'styled-components';

const {
  colors: { primaryBlue },
} = theme;
const {
  sizes: { mediaQuery, globalHorizontalPadding, maxWidthAll, globalHorizontalPaddingMobile },
} = variables;

export const SucessStoriesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 80px ${globalHorizontalPadding};
  align-items: center;
  max-width: ${maxWidthAll};
  width: 100%;

  @media (max-width: ${mediaQuery}) {
  padding: 80px ${globalHorizontalPaddingMobile};
    
  }
`;

export const SuccessSubtitle = styled.p`
  color: ${primaryBlue};
  max-width: 800px;
  font-size: 1.25rem;
  line-height: 2rem;
  text-align: center;

  @media (min-width: 200px) and (max-width: 1280px) {
    font-size: calc(0.875rem + ((1vw - 2px) * 0.5556));
    line-height: calc(1rem + ((1vw - 2px) * 0.7407));
    min-height: 0vw;
  }
`;
