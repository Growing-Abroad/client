import ContainerHero from "@/components/ContainerHero";
import StdButton from "@/components/generics/StdButton/StdButton";
import TwoColorTitle from "@/components/two-color-title";
import useAppContext from "@/hooks/useAppContext";
import CoachingHeroBg from "@assets/pages/coaching/coaching-hero.webp"
import styled from "styled-components";
import { HeroTitleWrapper } from "./style";

const ContainerWrapper = styled.div`
    height: 233px;
    width: 100%;

    @media (min-width: 430px) {
        height: calc(14.5625rem + ((1vw - 4.3px) * 32.0406));
    }
    @media (min-width: 1513px) {
        height: 580px;
    }

`


export default function CoachingHeroSection() {
    const { isMobile } = useAppContext();

    return (
        <ContainerWrapper>
            <ContainerHero 
            backgroundImageDesktop={CoachingHeroBg.src}  
            backgroundImageMobile={CoachingHeroBg.src}
            styles={isMobile ? {
                height: '100%', 
                justifyContent: 'flex-start', 
                backgroundPosition: '-155px', 
            } 
            : {
                height: '100%', 
                justifyContent: 'flex-start',
            }}
            >
                <HeroTitleWrapper>
                    <TwoColorTitle 
                    text1="1:1" 
                    text2="Coaching" 
                    hasSpaceBtw 
                    wrapperStyles={isMobile ? {padding: `0 0 14px`} : {padding: `0 0 35px`}} 
                    styles={isMobile 
                        ? {marginBottom: '0', fontSize: '44px', flexDirection: 'column', display: 'flex'} 
                        : {marginBottom: '0'}
                    }
                    />
                    <StdButton style={isMobile ? {padding: '8px 15px', textTransform: 'uppercase', fontWeight: '800'} : {textTransform: 'uppercase', fontWeight: '800'}}>Book a Coaching Now</StdButton>
                </HeroTitleWrapper>
            </ContainerHero>
        </ContainerWrapper>
    )
}