
import React, { ReactElement } from 'react';
import { PageLayout } from '@/components';
import CTAction from './components/CTAction'
import WhyBuyCourse from './components/WhyBuyCourse';
import { Chapter } from '@/components/Chapter';
import BigCard from './components/BigCard';
import SuccessStoriesSection from './components/SuccessStoriesSection';
import styled
 from 'styled-components';
import TwoCards from './components/TwoCards';
import FaqSection from '@pages/faq/components/FaqSection';
import TwoColorTitle from '@/components/two-color-title';
import useAppContext from '@/hooks/useAppContext';
import { ChosenHeader } from '@/components/PageLayout/PageLayout';
import { OnlineCourseFaqMockUp } from '@/components/reused-faq/faq-mock-ups';
import Wave, { EWaveType } from '@/components/Wave';
import { PageBody } from 'styles/coaching';

 export const Wrapper = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
`


export default function OnlineCourse() {
  const {isMobile} = useAppContext();
  return (
    <Wrapper>
     <CTAction />
     <PageBody style={{marginTop: `${isMobile ? '770px':'800px'}`}}>
     <Wave
          type={EWaveType.linear}
          height={isMobile ? "100%" : "100%"}
          className="border-image"
          styles={
            isMobile
              ? {
                  height: "154px",
                  justifyContent: "flex-start",
                  top:'-100px',
                }
              : {
                  width: "100%",
                  height: "150px",
                  justifyContent: "flex-start",
                  position: "absolute",
                  top: "-100px",
                }
          }
        ></Wave>

    <WhyBuyCourse />
    <Chapter/>
    <BigCard />
    <SuccessStoriesSection />
    <TwoCards />
    <TwoColorTitle text1="Frequently " text2="Asked Questions"  styles={{ width:`${isMobile?'387px' :''}`}}/>
    <FaqSection accordeons={OnlineCourseFaqMockUp}/>
    </PageBody>
    </Wrapper>
  );
}

OnlineCourse.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout chosenHeader={ChosenHeader.FOR_CANDIDATES}>{page}</PageLayout>;
};
