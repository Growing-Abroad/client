import styled from 'styled-components';
import { theme } from '@styles/theme';

const {
  colors: { primaryBlue, secondaryBlue, gray1 },
} = theme;

export const Input = styled.input`
  padding: 12px 16px;
  border: 1.5px solid ${primaryBlue};
  border-radius: 4px;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;

  ::placeholder {
    font-weight: 500;
    color: ${gray1}
  }
`;

interface ButtonProps {
  width?: string;
  fontSize?: string;
  square?: boolean;
}
export const Button = styled.button<ButtonProps>`
  background-color: ${secondaryBlue};
  color: white;
  border-radius: ${(props) => (props.square ? '4px' : '50px')};
  padding: 8px 28px;
  font-weight: 500;
  cursor: pointer;
  width: ${(props) => props.width || 'min-content'};
  font-size: ${(props) => props.fontSize || '1rem'};
`;
