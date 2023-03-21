import TwoColorTitle from "@/components/two-color-title";
import CenteredSection from "../centeredSection";
import styled from "styled-components";
import yourPersonalCoach from "@assets/pages/coaching/yourPersonalCoach.svg";
import yourFriend from "@assets/pages/coaching/yourFriend.svg";
import yourMotivator from "@assets/pages/coaching/yourMotivator.svg";
import yourMentor from "@assets/pages/coaching/yourMentor.svg";
import yourCareerAdvisor from "@assets/pages/coaching/yourCareerAdvisor.svg";
import Image from "next/image";
import { theme } from "@/styles/theme";
import useAppContext from "@/hooks/useAppContext";
import { variables } from "@/styles/global-variables";

const { colors: {blue700} } = theme; 
const {sizes: { mediaQuery }} = variables;

export const CardsWrapper = styled.div`
    display: flex;
    gap: 55px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 36px 0 83px;

    @media (max-width: ${mediaQuery}) {
        gap: 14px;
        margin-bottom: 45px;
    }
`

export const Card = styled.div`
    box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.25);
    width: 157px;
    min-height: 176px;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 1.3px;
    color: ${blue700};
    padding: 16px 8px;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    @media (max-width: ${mediaQuery}) {
        min-height: 134px;
        width: 102px;
        font-size: 16px;
        line-height: 20px;
        box-shadow: 0px 10px 18px rgba(0,0,0,0.15)

    }
`

export default function GuideSection() {
    const { isMobile } = useAppContext();

    const cardsContent1 = [
        {text: '+ Your Mentor', icon: yourMentor},
        {text: '+ Your Career Advisor', icon: yourCareerAdvisor},
        {text: '+ Your Motivator', icon: yourMotivator}
    ]
    const cardsContent2 = [
        {text: '+ Your Friend', icon: yourFriend},
        {text: '+ Your Personal Coach', icon: yourPersonalCoach}
    ]

    return <CenteredSection contentStyles={isMobile ? {padding: '16px 36px 0', paddingInline: '36px'} : {paddingTop: '24px', paddingBottom: '0'}}>
    <TwoColorTitle 
    as="h2"
    text1="We guide you to get your dream job in" 
    text2="Germany or Europe as" 
    hasSpaceBtw 
    wrapperStyles={{flexDirection: `column`, maxWidth: '100%', width: '100%'}} 
    styles={isMobile ? {fontSize: '1.5rem', lineHeight: '1.875rem'} : {fontSize: '3.65rem'}}
    />
    <CardsWrapper>
        {cardsContent1.map(content => 
            <Card>
                <Image src={content.icon} alt={content.text + " icon"} height={isMobile ? 32 : 70} width={isMobile ? 32 : 70} />
                {content.text}
            </Card>
        )}
        {cardsContent2.map(content => 
            <Card>
                <Image src={content.icon} alt={content.text + " icon"} height={isMobile ? 32 : 70} width={isMobile ? 36 : 80} />
                {content.text}
            </Card>
        )}
    </CardsWrapper>
</CenteredSection>
}