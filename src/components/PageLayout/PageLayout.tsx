import { theme } from '@/styles/theme';
import { ComponentPropsWithoutRef } from 'react';
import { ThemeProvider } from 'styled-components';
import Footer from '../Footer';
import Header from '../Header';
import HeaderForCandidates from '../HeaderForCandidates';
import HeaderForCompanies from '../HeaderForCompanies';
import HeaderForPublicRoutes from '../HeaderForPublicRoutes';

function PageLayout(props: ComponentPropsWithoutRef<'body'>) {
  const { children } = props;
  return (
    <>
      <ThemeProvider theme={theme}>
        <HeaderForPublicRoutes />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default PageLayout;
