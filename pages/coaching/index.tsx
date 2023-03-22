import { PageLayout } from "@/components";
import { ReactElement } from "react";
import CoachingHeroSection from "./components/hero-section";
import GuideSection from "./components/guide-section";
import DreamJobSection from "./components/dream-job-section";
import VisionAndMissionNew from "@pages/about-us/components/VisionAndMissionNew";
import CoachingPackageOnlineCourseSection from "./components/coaching-package-online-course";

export default function Coaching() {
    return <>
        <CoachingHeroSection />
        <GuideSection />
        <VisionAndMissionNew />
        <DreamJobSection />
        <CoachingPackageOnlineCourseSection/>
    </>
}

Coaching.getLayout = function getLayout(page: ReactElement) {
    return <PageLayout>{page}</PageLayout>;
  };