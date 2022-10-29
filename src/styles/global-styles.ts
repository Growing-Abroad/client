import { createGlobalStyle } from 'styled-components';

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
