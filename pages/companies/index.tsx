import React, { ReactElement } from 'react';
import PageLayout from '@components/PageLayout';
import { ChosenHeader } from '@/components/PageLayout/PageLayout';
import HeroSection from './components/HeroSection';
import OurServicesSection from './components/OurServicesSection';

function Companies() {
  return (
    <>
      <HeroSection />
      <OurServicesSection />
    </>
  );
}

Companies.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout chosenHeader={ChosenHeader.FOR_COMPANIES}>{page}</PageLayout>
  );
};

export default Companies;
