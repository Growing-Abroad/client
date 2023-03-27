import React from 'react';

export interface IContext {
  windowSize: {
    width: number;
    height: number;
  };
  isMobile: boolean;
  smallDesktopSize: number;
}

const defaultContext = {
  windowSize: {
    width: 0,
    height: 0,
  },
  isMobile: false,
  smallDesktopSize: 1395,
};

const AppContext = React.createContext<IContext>(defaultContext);

export default AppContext;
