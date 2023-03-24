import React from 'react';

import TwoColorTitle from '@/components/two-color-title';

import { Container, Subtitle, TitlesContainer } from './styles';

function RecruitingAndCareerServicesSection() {
  return (
    <Container>
      <TitlesContainer>
        <TwoColorTitle
          text1="Recruiting and"
          text2="Career Services "
          hasSpaceBtw
        />
        <Subtitle>
          Are you a candidate and want to land your dream job in Germany? Are
          you not finding the right candidates and struggling to attract talents
          to your company?
        </Subtitle>
      </TitlesContainer>
    </Container>
  );
}

export default RecruitingAndCareerServicesSection;
