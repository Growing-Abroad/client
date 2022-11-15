import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import { theme } from './theme';

const {
  colors: { primaryBlue, secondaryBlue, gray1 },
} = theme;

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif !important;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    list-style: none;
  }

  body {
    line-height: 1;
    
    #root {
      display: flex;
      flex-direction: column;
      align-items:center;
      width: 100%;
    }
  }

  blockquote, q {
    quotes: none;
  }

  *:before, 
  *:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  nav {
    font-family: 'Montserrat', sans-serif;
  }
`;

export const Input = styled.input`
  padding: 12px 16px;
  outline: 1.5px solid ${primaryBlue};
  border-radius: 4px;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;

  &:focus {
    outline: 2px solid ${secondaryBlue};
  }

  ::placeholder {
    font-weight: 500;
    color: ${gray1}
  }
`;

interface IButtonProps {
  width?: string;
  fontSize?: string;
  square?: boolean;
}
export const Button = styled.button<IButtonProps>`
  background-color: ${secondaryBlue};
  color: white;
  border-radius: ${(props) => (props.square ? '4px' : '50px')};
  padding: 8px 28px;
  font-weight: 500;
  cursor: pointer;
  width: ${(props) => props.width || 'min-content'};
  font-size: ${(props) => props.fontSize || '1rem'};
`;
