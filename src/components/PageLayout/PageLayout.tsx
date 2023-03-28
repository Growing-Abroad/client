import { theme } from '@/styles/theme';
import { ComponentPropsWithoutRef } from 'react';
import { ThemeProvider } from 'styled-components';
import Footer from '../Footer';
import Header from '../Header';
import HeaderForCandidates from '../HeaderForCandidates';

function PageLayout(props: ComponentPropsWithoutRef<'body'>) {
  const { children } = props;
  return (
    <>
      <ThemeProvider theme={theme}>
        <HeaderForCandidates />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default PageLayout;
