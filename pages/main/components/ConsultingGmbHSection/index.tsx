import React from 'react';

import FancyCarousel from '@/components/Fancy-carousel';
import TwoColorTitle from '@/components/two-color-title';
import consultingGmbhMock from '@/utils/mock-ups/consulting-gmbh-mock-texts';
import useAppContext from '@/hooks/useAppContext';

import {
  CarouselContainer,
  SupraContainer,
  Content,
  Paragraph,
  ParagraphsContainer,
  Subtitle,
  TitlesContainer,
  Container,
} from './styles';

function ConsultingGmbHSection() {
  const { isMobile } = useAppContext();

  return (
    <SupraContainer>
      <Container>
        <TitlesContainer>
          <TwoColorTitle
            text1="Growing Abroad"
            text2="Consulting GmbH"
            fontSize={!isMobile ? '60px' : '36px'}
            hasSpaceBtw={!isMobile}
            breakingLine={isMobile}
          />
          {!isMobile ? (
            <Subtitle>
              Your Recruiting agency offering Career Coach & Development
              Services in the Europen and German job Market
            </Subtitle>
          ) : (
            <Subtitle>Recruiting, Career Coach & Development Services</Subtitle>
          )}
        </TitlesContainer>
        <Content>
          <ParagraphsContainer>
            <Paragraph>
              We founded Growing Abroad Consulting to match international
              talents with companies with the fast growing demand of jobs in
              Germany and Europe.
            </Paragraph>
            <Paragraph>
              We offer Career development and Consulting for anbitional students
              and professionals looking to settle in Germany as well as HR
              services to match the best talents for German Companies.
            </Paragraph>
            <Paragraph>
              <strong>We have experience in different industries:</strong>
              <br />
              Financial Service, Management and Consulting, Tech, Automotive and
              Industry 4.0
            </Paragraph>
            <Paragraph>
              <strong>
                We have a pool of talents in different areas of business:
              </strong>
              <br />
              IT, Engineers, Web, Data and Analytics, Business and Project
              Management
            </Paragraph>
          </ParagraphsContainer>
          <CarouselContainer>
            <FancyCarousel haveSmallsSlides dataArray={consultingGmbhMock} />
          </CarouselContainer>
        </Content>
      </Container>
    </SupraContainer>
  );
}

export default ConsultingGmbHSection;
