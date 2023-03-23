import TwoColorTitle from '@/components/two-color-title';
import React from 'react';

import { Container, Subtitle, TitlesContainer } from './styles';

function ConsultingGmbHSection() {
  return (
    <Container>
      <TitlesContainer>
        <TwoColorTitle
          text1="Growing Abroad"
          text2="Consulting GmbH"
          hasSpaceBtw
          fontSize="60px"
        />
        <Subtitle>
          Your Recruiting agency offering Career Coach & Development Services in
          the Europen and German job Market
        </Subtitle>
      </TitlesContainer>
    </Container>
  );
}

export default ConsultingGmbHSection;
