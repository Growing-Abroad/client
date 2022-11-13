import { variables } from '@/styles/global-variables';
import { theme } from '@/styles/theme';
import styled from 'styled-components';

const {
  colors: { primaryBlue },
} = theme;
const {
  sizes: { mediaQuery, globalHorizontalPadding, maxWidthAll, globalHoriznalPaddingMobile },
} = variables;

export const SucessStoriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 60px ${globalHorizontalPadding};
  align-items: center;
  max-width: ${maxWidthAll};
  width: 100vw;

  @media (max-width: ${mediaQuery}) {
  padding: 48px ${globalHoriznalPaddingMobile};
    
  }
`;

export const SuccessSubtitle = styled.p`
  color: ${primaryBlue};
  max-width: 670px;
  font-size: 1.25rem;
  line-height: 2rem;
  text-align: center;

  @media (min-width: 200px) and (max-width: 1280px) {
    font-size: calc(0.625rem + ((1vw - 2px) * 0.9259));
    line-height: calc(0.75rem + ((1vw - 2px) * 1.8519));
    min-height: 0vw;
  }
`;