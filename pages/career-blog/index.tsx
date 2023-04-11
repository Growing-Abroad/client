import React, { ReactElement } from 'react';
import PageLayout from '../../src/components/PageLayout';
import { Wrapper } from '@/components/Wrapper';
import BlogCardSection from './components/BlogCardSection';
import CareerHeroSection from './components/CareerHeroSection';
import { ChosenHeader } from '@/components/PageLayout/PageLayout';

export default function CareerBlog() {
  return (
    <Wrapper>
      <CareerHeroSection />
      <BlogCardSection />
    </Wrapper>
  );
}

CareerBlog.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout chosenHeader={ChosenHeader.FOR_CANDIDATES}>{page}</PageLayout>
  );
};
