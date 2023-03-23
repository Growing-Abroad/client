import React from 'react';

import { Container, Title } from './styles';
import HeroSection from './components/HeroSection';
import { ReactElement } from 'react';
import { PageLayout } from '@/components';
import ConsultingGmbHSection from './components/ConsultingGmbHSection/index';

interface Props {
  title: string;
}

export default function Main({ title }: Props) {
  return (
    <>
      <HeroSection />
      <ConsultingGmbHSection />
    </>
  );
}

Main.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>;
};
