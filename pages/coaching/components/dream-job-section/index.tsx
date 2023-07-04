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
import linkedinOpt from '@assets/pages/coaching/linkedIn-optimization.png';
import useAppContext from "@/hooks/useAppContext";


const { sizes: { mediaQuery }} = variables;
const { colors: {blue700} } = theme; 


const DreamJobSubtitle = styled.p`
    color: ${blue700};
    font-size: 1.5rem;
    line-height: 38px;
    font-weight: 400;
    max-width: 708px;
    margin-top: 32px;
    text-align: center;

    @media (max-width: ${mediaQuery}) {
        font-size: 1rem;
        line-height: 1.625rem;
        margin-bottom: 0;
        margin-top: 14px;
    }
`

const CardsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 56px;
    width: 100%;
    margin-bottom: 130px;

    @media (max-width: ${mediaQuery}) {
        margin-bottom: 80px;
        
    }
`

const mockupDreamJobCard: IDramJobCardProps[] = [
    {
        slug: 'CV-Optimization',
        title: 'CV Optimization',
        description: "Your CV is your Business Card. Without an optimized Resume into German standards, you won't even be considered in the process." ,
        info: [
            'Video lessons and interactive Workbook with key insights on how to effectively optimize your CV for the German market',
            'Content strategy to capture your main strengths, key tasks, achievements and impress recruiters and pass ATS systems',
            'Personal Coaching Call and final corrections to have a perfectly optimized CV to get every job interview'
        ],
        deprecatedPrice: '300 €',
        actualPrice: '147 €',
        img: cvOptimization
    },
    {
        slug: 'Cover-Letter-Optimization',
        title: 'Cover Letter Optimization',
        description: "Your Cover Letter shows your motivation and strengths. This is next to the CV one of the most important documents for recruiters.",
        info: [
            'Video lessons and Workbook on how to effectively optimize your Cover Letter for the German market',
            'Personal Coaching Call and insider tips on Storytelling to elevate your Cover Letters content and get recruiter’s attention',
            'Final corrections to have a perfectly optimized Cover Letter to get every job interview with meaningful and exciting content'
        ],
        deprecatedPrice: '300 €',
        actualPrice: '147 €',
        img: coverLetter
    },
    {
        slug: 'LinkedIn-Optimization',
        title: 'LinkedIn Optimization',
        description: "With an optimized LinkedIn Profile you don't even have to apply for jobs. Recruiters will contact You for jobs.",
        info: [
            'Guideline and Workbook on how to effectively optimize your LinkedIn Profile for the German market',
            'Coaching Call and insider tips to elevate your Profile, build a personal brand and get more visualization from recruiters and LinkedIn users',
            'Final corrections to have a perfectly optimized LinkedIn Profile to get  5 times more job requests and interviews from recruiters'
        ],
        deprecatedPrice: '300 €',
        actualPrice: '147 €',
        img: linkedinOpt
    },
    {
        slug: 'Job-Search-Strategy',
        title: 'Job Search Strategy',
        description: "With our Job Search Strategy you will focus on your strengths and know exactly where to find the right jobs for you",
        info: [
            'Video lessons and interactive Workbook on how to effectively search for jobs on the German market',
            'Personal Coaching Call to develop your individual Job Search Strategy based on your strengths, background and goals',
            'Templates with the most used Job Platforms, Companies which hire English speakers and your personal Application tracker'
        ],
        deprecatedPrice: '300 €',
        actualPrice: '147 €',
        img: jobSearchStrategy
    },
    {
        slug: 'Job-Interview-Preparation',
        title: 'Job Interview Preparation',
        description: "When you know how to convince in job interviews and present yourself with all your strengths you will be unstoppable",
        info: [
            'Video lessons and interactive Workbook to learn step by step how to convince in job interviews',
            'Personal Coaching Call with individual tips on your performance, Mock interview and Video analysis ',
            'Learn how to pitch yourself and how to use Storytelling to elevate your answers and impress hiring managers'
        ],
        deprecatedPrice: '500 €',
        actualPrice: '247 €',
        img: jobInterviewPrep
    }
]


export default function DreamJobSection() {
    const { isMobile } = useAppContext();
    return (
        <>
            <CenteredSection contentStyles={isMobile ? {paddingTop: '40px', paddingBottom: '40px'} : {}}>
                <TwoColorTitle 
                    as="h2"
                    text1="Ready for your" 
                    text2="Dream Job in Germany?" 
                    hasSpaceBtw 
                    wrapperStyles={isMobile 
                        ? {flexDirection: 'column', width: '100%'} 
                        : {width: '100%'}
                    } 
                    styles={isMobile 
                        ? {lineHeight: '44px' } 
                        : {display: 'flex', flexDirection: 'column'}
                    } 
                />
                <DreamJobSubtitle>
                    Choose one of our individual Coaching Services
                </DreamJobSubtitle>
            </CenteredSection>
            <CardsWrapper>
                {mockupDreamJobCard.map((c: IDramJobCardProps, i) => (
                    <DreamJobCard 
                        slug={c.slug}
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