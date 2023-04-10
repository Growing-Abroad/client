import TwoColorTitle from "@/components/two-color-title";
import CenteredSection from "../centeredSection";
import styled from "styled-components";
import { variables } from "@/styles/global-variables";
import { theme } from "@/styles/theme";
import DreamJobCard, { IDramJobCardProps } from "./dream-job-card";
import cvOptimization from '@assets/pages/coaching/cv-optimization.png';
import coverLetter from '@assets/pages/coaching/cover-letter-optimization.png';
import jobInterviewPrep from '@assets/pages/coaching/job-interview.png';
import jobSearchStrategy from '@assets/pages/coaching/job-searching-strategy.png';
import linkedinOpt from '@assets/pages/coaching/linkedin-optimization.png';
import useAppContext from "@/hooks/useAppContext";


const { sizes: { mediaQuery }} = variables;
const { colors: {blue700} } = theme; 


const DreamJobSubtitle = styled.p`
    color: ${blue700};
    font-size: 1.5rem;
    line-height: 38px;
    font-weight: 600;
    max-width: 708px;
    margin-top: 44px;
    margin-bottom: 90px;
    text-align: center;

    @media (max-width: ${mediaQuery}) {
        font-size: 1rem;
        line-height: 1.625rem;
        margin-bottom: 0;
    }
`

const CardsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 56px;
    width: 100%;
    margin-bottom: 190px;

    @media (max-width: ${mediaQuery}) {
        margin-bottom: 160px;
        
    }
`

const mockupDreamJobCard: IDramJobCardProps[] = [
    {
        title: 'CV Optimization',
        description: "Your CV is your Business Card. Without an optimized Resume into German standards, you won't be considered.",
        info: [
            'Guideline and Workbook how to effectively optimize your CV for the German market', 
            'Personal Feedback rounds and insider tips to elevate your CV from all the others', 
            'Final corrections to have a perfectly optimized CV to get every job interview'
        ],
        deprecatedPrice: '297 €',
        actualPrice: '177 €',
        img: cvOptimization
    },
    {
        title: 'Cover Letter Optimization',
        description: "Your Cover Letter shows your motivation and strengths. This is next to the CV one of the most important documents for recruiters.",
        info: [
            'Guideline and Workbook how to effectively optimize your Cover Letter for the German market', 
            'Personal Feedback rounds and insider tips to elevate your Cover Letter from all the others', 
            'Final corrections to have a perfectly optimized Cover Letter to get every job interview'
        ],
        deprecatedPrice: '297 €',
        actualPrice: '177 €',
        img: coverLetter
    },
    {
        title: 'LinkedIn Optimization',
        description: "With an optimized LinkedIn Profile you don't even have to apply for jobs. Recruiters will contact you for jobs.",
        info: [
            'Guideline and Workbook how to effectively optimize your LinkedIn Profile for the German market', 
            'Personal Feedback rounds and insider tips to elevate your LinkedIn Profile from all the others', 
            'Final corrections to have a perfectly optimized LinkedIn Profile to get every job interview'
        ],
        deprecatedPrice: '297 €',
        actualPrice: '177 €',
        img: linkedinOpt
    },
    {
        title: 'Job Search Strategy',
        description: "With our Job Search Strategy you will focus on your strengths and know exactly where to find the right jobs for you",
        info: [
            'Guideline and Workbook how to effectively search for jobs on the German market', 
            'Personal Feedback to develop your individual Job Search Strategy based on your strengths and goals', 
            'Templates with the most used Job Platforms, Companies which hire English speakers and your personal Application tracker'
        ],
        deprecatedPrice: '297 €',
        actualPrice: '177 €',
        img: jobSearchStrategy
    },
    {
        title: 'Job Interview Preparation',
        description: "When you know how to convince in job interviews and present yourself with all your strengths you will be unstoppable",
        info: [
            'Guideline and Workbook how to effectively optimize your LinkedIn Profile for the German market', 
            'Personal Feedback rounds and insider tips to elevate your LinkedIn Profile from all the others', 
            'Final corrections to have a perfectly optimized LinkedIn Profile to get every job interview'
        ],
        deprecatedPrice: '297 €',
        actualPrice: '177 €',
        img: jobInterviewPrep
    }
]


export default function DreamJobSection() {
    const { isMobile } = useAppContext();
    return (
        <>
            <CenteredSection contentStyles={{paddingTop: '160px'}}>
                <TwoColorTitle text1="Ready for your" text2="Dream Job?" as="h2" hasSpaceBtw wrapperStyles={isMobile ? {flexDirection: 'column'} : undefined} styles={isMobile ? {lineHeight: '44px', flexDirection: 'column', display: 'flex'} : undefined} />
                <DreamJobSubtitle>
                    Choose one of our individual Coaching Services to prepare you for your journey to Germany and Europe
                </DreamJobSubtitle>
            </CenteredSection>
            <CardsWrapper>
                {mockupDreamJobCard.map((c: IDramJobCardProps, i) => (
                    <DreamJobCard 
                        title={c.title} 
                        description={c.description} 
                        info={c.info} 
                        deprecatedPrice={c.deprecatedPrice} 
                        actualPrice={c.actualPrice} 
                        img={c.img}
                        key={c.title + i} 
                        classes={i % 2 ? 'reversed': ''}
                    />
                ))}
            </CardsWrapper>
        </>
    )
}