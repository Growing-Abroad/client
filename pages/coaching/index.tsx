import { PageLayout } from "@/components";
import { ReactElement } from "react";
import CoachingHeroSection from "./components/hero-section";
import DreamJobSection from "./components/dream-job-section";
import VisionAndMissionNew, { IText } from "@pages/about-us/components/VisionAndMissionNew";
import CoachingPackageOnlineCourseSection from "./components/coaching-package-online-course";
import WhatOurClientsSay from "./components/what-our-clients-say";
import ReusedFaq from "@/components/reused-faq";
import { ChosenHeader } from "@/components/PageLayout/PageLayout";
import VisionAndMissionBackground from "../../public/assets/pages/coaching/career-coaches.webp"

export default function Coaching() {
    const text1: IText = {
        heading: 'Goal',
        description: 'Our coaching sessions give you the confidence and skills to present yourself in the best light and convince during a job interview. Our personalized coaching approach will help you to identify and showcase your unique strengths and overcome any weaknesses to land your dream job in Germany or Europe.'
    }
    const text2: IText = {
        heading: 'Experts',
        description: 'Our coaching team consists of experts with extensive knowledge of the German job market and culture. We will provide you with insider tips and tricks, teach you how to ace job interviews and assessments, and guide you through the entire application process.'
    }

    return <>
        <CoachingHeroSection />
        <DreamJobSection />
        <VisionAndMissionNew backgroundSrc={VisionAndMissionBackground.src} text1={text1} text2={text2}/>
        <CoachingPackageOnlineCourseSection />
        <WhatOurClientsSay />
        <ReusedFaq />
    </>
}

Coaching.getLayout = function getLayout(page: ReactElement) {
    return <PageLayout chosenHeader={ChosenHeader.FOR_CANDIDATES}>{page}</PageLayout>;
  };