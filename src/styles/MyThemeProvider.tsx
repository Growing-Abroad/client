import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { GlobalStyles } from './global-styles';
import React from 'react';
import styled from 'styled-components';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  width: 100%;
`

export const MyThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainWrapper>
        {children}
      </MainWrapper>
    </ThemeProvider>
  );
};
