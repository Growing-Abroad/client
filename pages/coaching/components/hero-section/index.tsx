import ContainerHero from "@/components/ContainerHero";
import StdButton from "@/components/generics/StdButton/StdButton";
import TwoColorTitle from "@/components/two-color-title";
import CoachingHeroBg from "@assets/pages/coaching/coaching-hero.webp"
import { HeroTitleWrapper } from "./style";

export default function CoachingHeroSection() {
    return <ContainerHero 
    backgroundImageDesktop={CoachingHeroBg.src}  
    backgroundImageMobile={CoachingHeroBg.src}
    styles={{maxHeight: '580px'}}
    >
            <HeroTitleWrapper>
                <TwoColorTitle 
                text1="1:1" 
                text2="Coaching" 
                hasSpaceBtw 
                wrapperStyles={{padding: `0 0 35px`}} 
                />
                <StdButton>Book a Coaching Now</StdButton>
            </HeroTitleWrapper>
    </ContainerHero>
}