import React from 'react';

import { Container, Title } from './styles';
import HeroSection from './components/HeroSection';
import { ReactElement } from 'react';
import { PageLayout } from '@/components';
import ConsultingGmbHSection from './components/ConsultingGmbHSection/index';
import RecruitingAndCareerServicesSection from './components/RecrutingAndCareerServicesSection';
import PartnersSection from './components/PartnersSection';

export default function Main() {
  return (
    <>
      <HeroSection />
      <ConsultingGmbHSection />
      <RecruitingAndCareerServicesSection />
      <PartnersSection />
    </>
  );
}

Main.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>;
};
