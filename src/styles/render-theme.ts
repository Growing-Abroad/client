import { render } from '@testing-library/react';
import React from 'react';
import { MyThemeProvider } from './MyThemeProvider';

export const renderTheme = (children: React.ReactNode) => {
  return render(<MyThemeProvider>{children}</MyThemeProvider>);
};
