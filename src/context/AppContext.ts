import React from 'react';

export interface IContext {
  windowSize: {
    width: number;
    height: number;
  };
  isMobile: boolean;
  smallDesktopSize: number;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultContext = {
  windowSize: {
    width: 0,
    height: 0,
  },
  isMobile: false,
  smallDesktopSize: 0,
  loading: false,
  setLoading: () => {},
};

const AppContext = React.createContext<IContext>(defaultContext);

export default AppContext;
