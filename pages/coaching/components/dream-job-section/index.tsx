import TwoColorTitle from "@/components/two-color-title";
import CenteredSection from "../centeredSection";
import styled from "styled-components";
import { variables } from "@/styles/global-variables";
import { theme } from "@/styles/theme";
import coverLetter from '@assets/pages/coaching/cover-letter-optimization.png';
import jobSearch from '@assets/pages/coaching/job-search-strategy.png';
import jobInterview from '@assets/pages/coaching/job-interview-preparation.png';
import cvOptimization from '@assets/pages/coaching/cv-optimization.png';
import linkedInOptimization from '@assets/pages/coaching/linkedIn-optimization.png';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";
import checkIcon from '@assets/icons/check-icon.svg';
import StdParagraqh from "@/components/generics/StdParagraqh/StdParagraqh";
import StdButton from "@/components/generics/StdButton/StdButton";

const { sizes: { globalHorizontalPadding, maxWidthAll}} = variables;
const { colors: {blue700} } = theme; 


const DreamJobSubtitle = styled.p`
    color: ${blue700};
    font-size: 1.5rem;
    line-height: 38px;
    font-weight: 600;
    max-width: 708px;
    text-align: center;
    margin-top: 44px;
    margin-bottom: 90px;
`

const Service = styled.div`
    height: 600px;
    width: 100%;
    max-width: ${maxWidthAll};
    padding-left: ${globalHorizontalPadding};
    display: flex;
`

const ServiceData = styled.div`
    flex-grow: 1;
    padding: 80px 0 70px;
`


export default function DreamJobSection() {
    return (
        <>
            <CenteredSection>
                <TwoColorTitle text1="Ready for your" text2="Dream Job?" as="h2" hasSpaceBtw />
                <DreamJobSubtitle>
                    Choose one of our individual Coaching Services to prepare you for your journey to Germany and Europe
                </DreamJobSubtitle>
            </CenteredSection>
            <Service>
                <ServiceData>
                    <TwoColorTitle text1="CV Optimization" text2="" as="h3" styles={{fontWeight: '700'}}/>
                    <TwoColorTitle wrapperStyles={{width: '100%', margin: '20px 0 42px'}} styles={{textAlign: 'justify'}} text1="Your CV is your Business Card. Without an optimized Resume into German standards, you won't be considered." text2="" as="h4" />
                    <ul style={{display: 'flex', flexDirection: "column", gap: '30px'}}>
                        <li style={{display: 'felx', alignItems: "center"}}>
                            <Image src={checkIcon} height={18} width={22.20} alt={'check icon'}/>
                            <StdParagraqh style={{display: 'inline-block', margin: '0 0 0 32px', fontWeight: '400', lineHeight: '1.25rem', letterSpacing: '0.04rem;'}}>
                                Guideline and Workbook how to effectively optimize your CV for the German market
                            </StdParagraqh>
                        </li>
                        <li style={{display: 'felx', alignItems: "center"}}>
                            <Image src={checkIcon} height={18} width={22.20} alt={'check icon'}/>
                            <StdParagraqh style={{display: 'inline-block', margin: '0 0 0 32px', fontWeight: '400', lineHeight: '1.25rem', letterSpacing: '0.04rem;'}}>
                                Personal Feedback rounds and insider tips to elevate your CV from all the others
                            </StdParagraqh>
                        </li>
                        <li style={{display: 'felx', alignItems: "center"}}>
                            <Image src={checkIcon} height={18} width={22.20} alt={'check icon'}/>
                            <StdParagraqh style={{display: 'inline-block', margin: '0 0 0 32px', fontWeight: '400', lineHeight: '1.25rem', letterSpacing: '0.04rem;'}}>
                                Final corrections to have a perfectly optimized CV to get every job interview
                            </StdParagraqh>
                        </li>
                    </ul>
                    
                    <div style={{display: 'flex', gap: '40px', alignItems: 'center', marginTop: '56px'}} >
                        <StdButton>Book Now</StdButton>
                        <span>297 €</span>
                        <span>177 €</span>
                    </div>

        
                </ServiceData>
                <Image src={cvOptimization} alt="cv-optimization" />
            </Service>
        </>
    )
}