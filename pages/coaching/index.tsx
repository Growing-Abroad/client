import { PageLayout } from "@/components";
import ContainerHero from "@/components/ContainerHero";
import StdButton from "@/components/generics/StdButton/StdButton";
import TwoColorTitle from "@/components/two-color-title";
import CoachingHeroBg from "@assets/pages/coaching/coaching-hero.webp"
import { ReactElement } from "react";
import CenteredSection from "./components/centeredSection";
import { Card, CardsWrapper, HeroTitleWrapper } from "./style"
import Image from "next/image";
import yourPersonalCoach from "@assets/pages/coaching/yourPersonalCoach.svg";
import yourFriend from "@assets/pages/coaching/yourFriend.svg";
import yourMotivator from "@assets/pages/coaching/yourMotivator.svg";
import yourMentor from "@assets/pages/coaching/yourMentor.svg";
import yourCareerAdvisor from "@assets/pages/coaching/yourCareerAdvisor.svg";

export default function Coaching() {
    const cardsContent1 = [
        {text: '+ Your Mentor', icon: yourMentor},
        {text: '+ Your Career Advisor', icon: yourCareerAdvisor},
        {text: '+ Your Motivator', icon: yourMotivator}
    ]
    const cardsContent2 = [
        {text: '+ Your Friend', icon: yourFriend},
        {text: '+ Your Personal Coach', icon: yourPersonalCoach}
    ]

    return <>
        <ContainerHero 
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
        <CenteredSection containerStyles={{marginTop: '24px'}}>
            <TwoColorTitle 
            as="h2"
            text1="We guide you to get your dream job in" 
            text2="Germany or Europe as" 
            hasSpaceBtw 
            wrapperStyles={{flexDirection: `column`, maxWidth: '100%'}} 
            styles={{fontSize: '3.65rem'}}
            />
            <CardsWrapper>
                {cardsContent1.map(content => 
                    <Card>
                        <Image src={content.icon} alt={content.text + " icon"} height={70} width={70} />
                        {content.text}
                    </Card>
                )}
                {cardsContent2.map(content => 
                    <Card>
                        <Image src={content.icon} alt={content.text + " icon"} height={70} width={80} />
                        {content.text}
                    </Card>
                )}
            </CardsWrapper>
        </CenteredSection>
    </>
}

Coaching.getLayout = function getLayout(page: ReactElement) {
    return <PageLayout>{page}</PageLayout>;
  };