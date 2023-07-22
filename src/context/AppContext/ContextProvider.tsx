import { useWindowSize } from '@/hooks/useWindowSize';
import { variables } from '@/styles/global-variables';
import { removePxFromCssValue } from '@/utils/scripts/general-utility';
import { PropsWithChildren, useState } from 'react';
import AppContext, { IContext } from './AppContext';

export default function ContextProvider(props: PropsWithChildren) {
  const [loading, setLoading] = useState<boolean>(false);
  const {
    sizes: { mediaQuery },
  } = variables;
  const [width, height] = useWindowSize();

  const contextValue: IContext = {
    windowSize: {
      width,
      height,
    },
    smallDesktopSize: 1395,
    isMobile: width < removePxFromCssValue(mediaQuery),
    loading,
    setLoading,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
}
