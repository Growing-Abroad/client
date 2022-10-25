import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.h1`
  background: ${({ theme }) => theme.colors.primary};
`;

export const Input = styled.input`
  padding: 12px 24px;
  border: 1.5px solid ${theme.colors.primaryBlue};
  border-radius: 4px;
`;
