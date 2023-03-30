
import React, { ReactElement } from 'react';
import { PageLayout } from '@/components';
import { Wrapper } from '@/components/Wrapper';
import CTAction from './components/CTAction'
import WhyBuyCourse from './components/WhyBuyCourse';
import { Chapter } from '@/components/Chapter';

export default function OnlineCourse() {
  return (
    <Wrapper>
    <CTAction />
    <WhyBuyCourse />
    <Chapter/>
    </Wrapper>
  );
}

OnlineCourse.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>;
};
