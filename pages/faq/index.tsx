import React, { ReactElement } from 'react';
import PageLayout from '../../src/components/PageLayout';
import { Wrapper } from '@/components/Wrapper';
import FaqHeroSection from './components/FaqHeroSection';
import FaqSection from './components/FaqSection';
import { ChosenHeader } from '@/components/PageLayout/PageLayout';
import { GeneralFaqMockUp } from '@/components/reused-faq/faq-mock-ups';

export default function FAQ() {
  return (
    <Wrapper>
      <FaqHeroSection />
      <FaqSection  accordeons={GeneralFaqMockUp}/>
    </Wrapper>
  );
}

FAQ.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout chosenHeader={ChosenHeader.FOR_CANDIDATES}>{page}</PageLayout>;
};
