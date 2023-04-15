import { PageLayout } from "@/components";
import { ReactElement } from "react";
import CoachingHeroSection from "./components/hero-section";
import GuideSection from "./components/guide-section";
import DreamJobSection from "./components/dream-job-section";
import VisionAndMissionNew from "@pages/about-us/components/VisionAndMissionNew";
import CoachingPackageOnlineCourseSection from "./components/coaching-package-online-course";
import WhatOurClientsSay from "./components/what-our-clients-say";
import ReusedFaq from "@/components/reused-faq";
import { ChosenHeader } from "@/components/PageLayout/PageLayout";

export default function Coaching() {
    return <>
        <CoachingHeroSection />
        <GuideSection />
        <VisionAndMissionNew />
        <DreamJobSection />
        <CoachingPackageOnlineCourseSection />
        <WhatOurClientsSay />
        <ReusedFaq />
    </>
}

Coaching.getLayout = function getLayout(page: ReactElement) {
    return <PageLayout chosenHeader={ChosenHeader.FOR_CANDIDATES}>{page}</PageLayout>;
  };