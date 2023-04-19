import React from "react";

import TwoColorTitle from "@/components/two-color-title";
import Company from "@/../public/assets/Photos-Main-Page/building.webp";
import Interview from "@/../public/assets/Photos-Main-Page/meeting.webp";

import {
  CardsContainer,
  CardSeparator,
  Container,
  Subtitle,
  TitlesContainer,
  SubtitleContainer,
} from "@/../styles/components/RecrutingAndCareerServicesSection/index.styles";
import { CardWithImage } from "@/components";
import useAppContext from "@/hooks/useAppContext";

function RecruitingAndCareerServicesSection() {
  const {
    windowSize: { width },
    isMobile,
    smallDesktopSize,
  } = useAppContext();

  const shouldBreakLine: boolean = width <= smallDesktopSize;

  return (
    <Container>
      <TitlesContainer>
        <TwoColorTitle
          text1="Learn more about"
          text2="Our Services"
          hasSpaceBtw={!shouldBreakLine}
          breakingLine={shouldBreakLine}
        />
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
