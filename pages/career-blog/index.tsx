import React, { ReactElement } from 'react';
import PageLayout from '../../src/components/PageLayout';
import CareerHeroSection from './components/CareerHeroSection';
import BlogCardSection from './components/BlogCardSection';

export default function CareerBlog() {
  return (
    <>
      <CareerHeroSection />
      <BlogCardSection />
    </>
  );
}

CareerBlog.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>;
};
