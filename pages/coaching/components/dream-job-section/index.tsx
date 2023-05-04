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
    margin-bottom: 190px;

    @media (max-width: ${mediaQuery}) {
        margin-bottom: 160px;
        
    }
`

const mockupDreamJobCard: IDramJobCardProps[] = [
    {
        title: 'CV Optimization',
        description: "Your CV is your Business Card. Without an optimized Resume into German or European standards, you won't be considered.",
        info: [
            'Guideline, Workbook and Videos on how to effectively optimize your CV for the German and European Job market.', 
            'Personal Feedback rounds on the content strategy to capture your main strengths, key tasks, achievements and impress recruiters.', 
            'Final corrections to have a perfectly optimized CV (ATS friendly, German & European standards) to get every job interview.'
        ],
        deprecatedPrice: '260 €',
        actualPrice: '130 €',
        img: cvOptimization
    },
    {
        title: 'Cover Letter Optimization',
        description: "Your Cover Letter shows your motivation and strengths. Next to your resume, this is one of the most important documents for recruiters.",
        info: [
            "Guideline, Workbook and Videos on how to effectively optimize your Cover Letter for the German and European Job market.", 
            "Personal Feedback rounds and insider tips on Storytelling to elevate the content of your Cover Letter and catch recruiter's attention.", 
            "Final corrections to have a perfectly optimized Cover Letter (ATS friendly, German & European standards) with meaningful and exciting content."    
        ],
        deprecatedPrice: '260 €',
        actualPrice: '130 €',
        img: coverLetter
    },
    {
        title: 'LinkedIn Optimization',
        description: "With an optimized LinkedIn Profile you don’t have to apply for jobs any more. Recruiters will contact you for their open positions.",
        info: [
            'Guideline and Videos on how to effectively optimize your LinkedIn Profile for the German and European Job market.', 
            'Personal Feedback rounds and insider tips to elevate your LinkedIn Profile, build a personal brand and get more visualization from recruiters and LinkedIn users.', 
            'Final corrections to have a perfectly optimized LinkedIn Profile to to get 5 times more job requests and interviews from recruiters.'
        ],
        deprecatedPrice: '220 €',
        actualPrice: '110 €',
        img: linkedinOpt
    },
    {
        title: 'Job Search Strategy',
        description: "With our Job Search Strategy you will focus on your strengths and skilly and know exactly where to find the right jobs for you.",
        info: [
            'Guideline and Workbook on how to effectively search for jobs in the German Job market.', 
            'Individual Coaching Session to develop your individual Job Search Strategy based on your strenghts and goals.', 
            'Templates with the most used Job Platforms, Companies which hire English speakers and your personal Application tracker'
        ],
        deprecatedPrice: '220 €',
        actualPrice: '97 €',
        img: jobSearchStrategy
    },
    {
        title: 'Job Interview Preparation',
        description: "The most important part is the job interview. When you know how to convince German and European recruiters and present yourself with all your strengths you will be unstoppable.",
        info: [
            'Guideline, Workbook and Videos on how to effectively prepare for your job interview.', 
            'Individual Coaching Session with Mock up interview and Video Analysis to improve your overall appearance.', 
            'Templates with the most asked interview questions and how to answer them.'
        ],
        deprecatedPrice: '400 €',
        actualPrice: '100 €',
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