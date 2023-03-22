import React from 'react';

import { Container, Title } from './styles';

function HeroSection() {
  return (
    <Container>
      <Title.Container>
        <Title.GeneralColor>
          Matching the best International{'\xa0'}
          <Title.FirstColor>TALENT{'\xa0'}</Title.FirstColor>
          with your{'\xa0'}
          <Title.SecondColor>COMPANY{'\xa0'}</Title.SecondColor>
        </Title.GeneralColor>
      </Title.Container>
    </Container>
  );
}

export default HeroSection;
