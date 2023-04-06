import { theme } from '@/styles/theme';
import styled from 'styled-components';
import { variables } from '@/styles/global-variables';

const {
  colors: { blue700, blue700, white },
} = theme;
const {
  sizes: { mediaQuery },
} = variables;

export const ContentPagination = styled.div`
  min-width: 1280px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 143px;
  gap: 20px;
  @media (max-width: ${mediaQuery}) {
    gap: 12px;
    margin-bottom: 73px;
  }
`;
export const Button = styled.button`
  width: 64px;
  height: 64px;
  border-radius: 6px;
  font-weight: 800;
  background-color: ${white};
  border: 1px solid #bdbdbd;
  text-align: center;
  font-size: 18px;
  color: #bdbdbd;
  &:hover {
    background-color: ${blue700};
    color: ${white};
  }
  @media (max-width: ${mediaQuery}) {
    width: 40px;
    height: 40px;
  }
`;
