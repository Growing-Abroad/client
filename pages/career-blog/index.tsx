import React, { ReactElement } from 'react';
import PageLayout from '../../src/components/PageLayout';
import CareerHeroSection from './components/CareerHeroSection';
import BlogCardSection from './components/BlogCardSection';
import { Wrapper } from '@/components/Wrapper';

export default function CareerBlog() {
  return (
    <Wrapper>
      <CareerHeroSection />
      <BlogCardSection />

    </Wrapper>
  );
}

CareerBlog.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>;
};
