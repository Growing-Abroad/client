import React from 'react';

import { Container, Title } from './styles';
import HeroSection from './components/HeroSection';
import { ReactElement } from 'react';
import { PageLayout } from '@/components';
import ConsultingGmbHSection from './components/ConsultingGmbHSection/index';
import RecruitingAndCareerServicesSection from './components/RecrutingAndCareerServicesSection';

export default function Main() {
  return (
    <>
      <HeroSection />
      <ConsultingGmbHSection />
      <RecruitingAndCareerServicesSection />
    </>
  );
}

Main.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>;
};
