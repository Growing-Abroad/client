import TwoColorTitle from '@/components/two-color-title';
import React from 'react';
import { Container, Subtitle, TitlesContainer } from './styles';

function OurServicesSection() {
  return (
    <Container>
      <TitlesContainer>
        <TwoColorTitle text1="Our" text2="Services" hasSpaceBtw />
        <Subtitle>
          With our +10 years proven experience in IT and Engineering projects
          and agile environment, we offer recruiting services{' '}
        </Subtitle>
      </TitlesContainer>
    </Container>
  );
}

export default OurServicesSection;
