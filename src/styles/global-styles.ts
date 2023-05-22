import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import { theme } from './theme';

const {
  colors: { yellow400, blue400, gray1, blue700 },
} = theme;

export const GlobalStyles = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
    list-style: none;
    letter-spacing: 0.025rem;
  }


  html {
    @media screen and (max-width: 720px) {
      font-size: 85.5%;
    }

    @media screen and (max-width: 1080px) {
      font-size: 92.75%;
    }

    @media screen and (max-width: 1366px) {
      font-size: 100%;
    }
  }

  body {

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

`;

export const Input = styled.input`
  padding: 12px 16px;
  outline: 1.5px solid ${blue700};
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: 2px solid ${blue400};
  }

  ::placeholder {
    font-weight: 500;
    color: ${gray1};
  }
`;

interface IButtonProps {
  width?: string;
  fontSize?: string;
  square?: boolean;
  padding?: string;
  height?: string;
}
export const Button = styled.button<IButtonProps>`
  background-color: ${yellow400};
  color: ${blue700};
  border-radius: ${(props) => (props.square ? '4px' : '50px')};
  padding: ${(props) => props.padding || '8px 28px'};
  font-weight: 600;
  cursor: pointer;
  width: ${(props) => props.width || 'min-content'};
  font-size: ${(props) => props.fontSize || '1rem'};
  height: ${(props) => props.height || '59px'};
`;
