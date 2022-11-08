import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppRoutes } from '@/routes';
import { MyThemeProvider } from '@styles/MyThemeProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MyThemeProvider>
      <AppRoutes />
    </MyThemeProvider>
  </React.StrictMode>,
);
