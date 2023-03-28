import { theme } from '@/styles/theme';
import { ComponentPropsWithoutRef, lazy } from 'react';
import { ThemeProvider } from 'styled-components';
import Footer from '../Footer';
import HeaderForCandidates from '../HeaderForCandidates';
import HeaderForCompanies from '../HeaderForCompanies';
import HeaderForPublicRoutes from '../HeaderForPublicRoutes';

enum ChosenHeader {
  DEFAULT = 'DEFAULT',
  FOR_CANDIDATES = 'FOR_CANDIDATES',
  FOR_COMPANIES = 'FOR_COMPANIES',
}

interface Props extends ComponentPropsWithoutRef<'body'> {
  chosenHeader?: ChosenHeader;
}

const HeaderComponentMapping = {
  DEFAULT: lazy(() => import('../HeaderForPublicRoutes')),
  FOR_CANDIDATES: lazy(() => import('../HeaderForCandidates')),
  FOR_COMPANIES: lazy(() => import('../HeaderForCompanies')),
};

function PageLayout(props: Props) {
  const { children } = props;

  const Header = HeaderComponentMapping[ChosenHeader.DEFAULT];

  return (
    <>
      <HeaderForPublicRoutes />
      {children}
      <Footer />
    </>
  );
}

export default PageLayout;
