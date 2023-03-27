import React from 'react';

import TwoColorTitle from '@/components/two-color-title';
import Company from '@/../public/assets/Photos-Main-Page/building.webp';
import Interview from '@/../public/assets/Photos-Main-Page/meeting.webp';

import {
  CardsContainer,
  CardSeparator,
  Container,
  Subtitle,
  TitlesContainer,
  SubtitleContainer,
} from './styles';
import { CardWithImage } from '@/components';
import useAppContext from '@/hooks/useAppContext';

function RecruitingAndCareerServicesSection() {
  const {
    windowSize: { width },
    isMobile,
    smallDesktopSize,
  } = useAppContext();

  const shouldBreakLine: boolean = width <= 1395;

  return (
    <Container>
      <TitlesContainer>
        <TwoColorTitle
          text1="Recruiting and"
          text2="Career Services "
          hasSpaceBtw={!shouldBreakLine}
          breakingLine={shouldBreakLine}
        />
        {!isMobile ? (
          <SubtitleContainer>
            <Subtitle>
              Are you a candidate and want to land your dream job in Germany?
            </Subtitle>
            <Subtitle>
              Are you not finding the right candidates and struggling to attract
              talents to your company?
            </Subtitle>
          </SubtitleContainer>
        ) : (
          <Subtitle>Recruiting, Career Coach & Development Services</Subtitle>
        )}
      </TitlesContainer>
      <CardsContainer>
        <CardWithImage
          title="For Companies"
          description="We will find the best international talents for you and help you to attract qualified professionals from around the world"
          imageSrc={Company.src}
          buttonTitle="Find Experts Now"
          onClick={() => null}
        />
        <CardSeparator />
        <CardWithImage
          title="For Candidates"
          description="We help you to land your dream job in Germany or Europe and build a successful career abroad"
          imageSrc={Interview.src}
          buttonTitle="Find a job now"
          onClick={() => null}
        />
      </CardsContainer>
    </Container>
  );
}

export default RecruitingAndCareerServicesSection;
