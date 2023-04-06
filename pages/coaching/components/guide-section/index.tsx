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

const { colors: {blue700} } = theme; 

export const CardsWrapper = styled.div`
    display: flex;
    gap: 55px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 36px 0 176px;
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

    return <CenteredSection containerStyles={{marginTop: '24px'}}>
    <TwoColorTitle 
    as="h2"
    text1="We guide you to get your dream job in" 
    text2="Germany or Europe as" 
    hasSpaceBtw 
    wrapperStyles={{flexDirection: `column`, maxWidth: '100%'}} 
    styles={{fontSize: '3.65rem'}}
    />
    <CardsWrapper>
        {cardsContent1.map((content,i) => 
            <Card>
                <Image src={content.icon} alt={content.text + " icon"} height={isMobile ? 32 : 70} width={isMobile ? 32 : 70} key={content.text + i} />
                {content.text}
            </Card>
        )}
        {cardsContent2.map((content, i) => 
            <Card>
                <Image src={content.icon} alt={content.text + " icon"} height={isMobile ? 32 : 70} width={isMobile ? 36 : 80} key={content.text + i}/>
                {content.text}
            </Card>
        )}
    </CardsWrapper>
</CenteredSection>
}