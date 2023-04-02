import React, { ReactElement } from 'react';
import PageLayout from '../../src/components/PageLayout';
import { Wrapper } from '@/components/Wrapper';
import FaqHeroSection from './components/FaqHeroSection';
import FaqSection from './components/FaqSection';

export default function FAQ() {
  return (
    <Wrapper>
      <FaqHeroSection />
      <FaqSection />
    </Wrapper>
  );
}

FAQ.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>;
};
