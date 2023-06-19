import ContainerHero from "@/components/ContainerHero";
import StdButton from "@/components/generics/StdButton/StdButton";
import TwoColorTitle from "@/components/two-color-title";
import useAppContext from "@/hooks/useAppContext";
import CoachingHeroBg from "@assets/pages/coaching/coaching-hero.jpg";
import CoachingHeroBgMobile from "@assets/pages/coaching/cutted-coaching-mobile.jpg";

import styled from "styled-components";
import {
  ContainerWrapper,
  HeroTitleWrapper,
  Subtitle,
  TitlesContainer,
} from "../../../../styles/coaching/components/hero-section/index.styles";
import { IStyledPageBody } from "@/components/generics/PageBody";

export default function CoachingHeroSection(props: IStyledPageBody) {
  const { isMobile } = useAppContext();

  return (
    <ContainerWrapper
      backgroundImage={isMobile ? CoachingHeroBgMobile.src : CoachingHeroBg.src}
      distanceFromTop={props.distanceFromTop}
    >
      <HeroTitleWrapper>
        <TitlesContainer>
          <TwoColorTitle
            text1="Personal"
            text2="Coaching"
            hasSpaceBtw
            wrapperClassName="coaching-title-wrapper"
            className="coaching-title"
            color1="white"
          />
          <Subtitle>
            Let us coach you towards a successful career in Germany
          </Subtitle>
        </TitlesContainer>
        <StdButton className="coaching-hero-cta">
          {isMobile ? "Book Now" : "Book a Coaching Now"}
        </StdButton>
      </HeroTitleWrapper>
    </ContainerWrapper>
  );
}
