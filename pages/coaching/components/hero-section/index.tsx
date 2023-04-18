import ContainerHero from "@/components/ContainerHero";
import StdButton from "@/components/generics/StdButton/StdButton";
import TwoColorTitle from "@/components/two-color-title";
import useAppContext from "@/hooks/useAppContext";
import CoachingHeroBg from "@assets/pages/coaching/coaching-hero.webp";
import styled from "styled-components";
import { ContainerWrapper, HeroTitleWrapper } from "../../../../styles/coaching/components/hero-section/index.styles";



export default function CoachingHeroSection() {
  const { isMobile } = useAppContext();

  return (
    <ContainerWrapper>
      <ContainerHero
        backgroundImageDesktop={CoachingHeroBg.src}
        backgroundImageMobile={CoachingHeroBg.src}
        styles={
          isMobile
            ? {
                height: "100%",
                justifyContent: "flex-start",
                backgroundPosition: "-155px",
              }
            : {
                height: "100%",
                justifyContent: "flex-start",
              }
        }
      >
        <HeroTitleWrapper>
          <TwoColorTitle
            text1="Personal"
            text2="Coaching"
            hasSpaceBtw
            wrapperClassName="coaching-title-wrapper"
            className="coaching-title"
            color1="white"
          />
          <StdButton
            className="coaching-hero-cta"
          >
            {isMobile ? 'Book Now' : 'Book a Coaching Now'}
          </StdButton>
        </HeroTitleWrapper>
      </ContainerHero>
    </ContainerWrapper>
  );
}
