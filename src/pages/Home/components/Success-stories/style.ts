import { variables } from '@/styles/global-variables';
import { theme } from '@/styles/theme';
import styled from 'styled-components';

const {
  colors: { primaryBlue },
} = theme;
const {
  sizes: { globalHorizontalPadding, maxWidthAll },
} = variables;

export const SucessStoriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 60px ${globalHorizontalPadding};
  align-items: center;
  max-width: ${maxWidthAll};
  width: ${maxWidthAll};
`;

export const SuccessSubtitle = styled.p`
  color: ${primaryBlue};
  width: 670px;
  font-size: 1.25rem;
  line-height: 2rem;
`;
