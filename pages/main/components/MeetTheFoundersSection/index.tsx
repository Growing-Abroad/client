import React from 'react';

import MeetFounders from '@/utils/mock-ups/meet-founders-carousel';

import FancyCarousel from '@/components/Fancy-carousel';
import TwoColorTitle from '@/components/two-color-title';

import { Container, Content, TitlesContainer, Subtitle } from './styles';

export function MeetTheFoundersSection() {
  return (
    <Container>
      <TitlesContainer>
        <TwoColorTitle text1="Meet the" text2="Founders" hasSpaceBtw />
        <Subtitle>
          We bring all necessary skills and experience need to help you in the
          recruiting journey
        </Subtitle>
      </TitlesContainer>
      <Content>
        <FancyCarousel
          dataArray={MeetFounders}
          haveSmallsSlides
          isIntroducingAPerson
        />
      </Content>
    </Container>
  );
}
