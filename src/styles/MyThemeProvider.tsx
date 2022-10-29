import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { GlobalStyles } from './global-styles';
import React from 'react';

export const MyThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
