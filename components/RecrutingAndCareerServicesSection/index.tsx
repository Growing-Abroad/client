import React from "react";

import TwoColorTitle from "@/components/two-color-title";
import Company from "@/../public/assets/Photos-Main-Page/building.jpg";
import Interview from "@/../public/assets/Photos-Main-Page/meeting.jpg";

import {
  CardsContainer,
  CardSeparator,
  Container,
  TitlesContainer,
} from "@/../styles/components/RecrutingAndCareerServicesSection/index.styles";
import { CardWithImage } from "@/components";
import useAppContext from "@/hooks/useAppContext";
import { useRouter } from "next/router"

function RecruitingAndCareerServicesSection() {
  const {
    windowSize: { width },
    smallDesktopSize,
  } = useAppContext();

  const shouldBreakLine: boolean = width <= smallDesktopSize;
  const router = useRouter()

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
          onClick={() => router.push("/candidates")}
        />
        <CardSeparator />
        <CardWithImage
          title="For Candidates"
          description="We help you to land your dream job in Germany or Europe and build a successful career abroad"
          imageSrc={Interview.src}
          buttonTitle="Find a job now"
          onClick={() => router.push("/candidates")}
        />
      </CardsContainer>
    </Container>
  );
}

export default RecruitingAndCareerServicesSection;
