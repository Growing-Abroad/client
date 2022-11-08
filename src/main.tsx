import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from '@/routes';
import { MyThemeProvider } from '@styles/MyThemeProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MyThemeProvider>
      <Router />
    </MyThemeProvider>
  </React.StrictMode>,
);
