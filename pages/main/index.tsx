import React from 'react';

import { Container, Title } from './styles';
import HeroSection from './components/HeroSection';
import { ReactElement } from 'react';
import { PageLayout } from '@/components';

interface Props {
  title: string;
}

export default function Main({ title }: Props) {
  return <HeroSection />;
}

Main.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>;
};
