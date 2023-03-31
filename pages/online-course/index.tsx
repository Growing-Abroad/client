
import React, { ReactElement } from 'react';
import { PageLayout } from '@/components';
import CTAction from './components/CTAction'
import WhyBuyCourse from './components/WhyBuyCourse';
import { Chapter } from '@/components/Chapter';
import BigCard from './components/BigCard';
import SuccessStoriesSection from './components/SuccessStoriesSection';
import styled
 from 'styled-components';

 export const Wrapper = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
`


export default function OnlineCourse() {
  return (
    <Wrapper>
     <CTAction />
    <WhyBuyCourse />
    <Chapter/>
    <BigCard />
    <SuccessStoriesSection />
    </Wrapper>
  );
}

OnlineCourse.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>;
};
