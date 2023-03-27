import React from 'react';

import MeetFounders from '@/utils/mock-ups/meet-founders-carousel';

import FancyCarousel from '@/components/Fancy-carousel';
import TwoColorTitle from '@/components/two-color-title';

import {
  Container,
  Content,
  TitlesContainer,
  Subtitle,
  ContentTitle,
  ContentDescription,
  TextsContainer,
  CallToAction,
} from './styles';
import StdButton from '@/components/generics/StdButton/StdButton';

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
        <TextsContainer>
          <ContentTitle>Business Experts</ContentTitle>
          <ContentDescription>
            <span>+ 10 years experience</span> in Tech, Engineering, Consulting
            and IT Project Management
          </ContentDescription>
          <ContentTitle>Trusted Career Coaches</ContentTitle>
          <ContentDescription>
            <span>90 % Success Rate</span> for our qualified international
            talents to get hired
          </ContentDescription>
          <ContentTitle>Social media</ContentTitle>
          <ContentDescription>
            <span>60.000+ Followers</span> on our Social Media Platforms
          </ContentDescription>
        </TextsContainer>
      </Content>
      <CallToAction>
        <StdButton>Learn more about us</StdButton>
      </CallToAction>
    </Container>
  );
}
