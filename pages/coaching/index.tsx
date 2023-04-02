import { PageLayout } from "@/components";
import ContainerHero from "@/components/ContainerHero";
import StdButton from "@/components/generics/StdButton/StdButton";
import TwoColorTitle from "@/components/two-color-title";
import CoachingHeroBg from "@assets/pages/coaching/coaching-hero.webp"
import { ReactElement } from "react";
import CenteredSection from "./components/centeredSection";
import VisionAndMission from "@pages/coaching/components/VisionAndMissionCoaching";
import CoachingHeroSection from "./components/hero-section";
import GuideSection from "./components/guide-section";
import DreamJobSection from "./components/dream-job-section";
import VisionAndMissionNew from "@pages/about-us/components/VisionAndMissionNew";

export default function Coaching() {
    return <>
        <CoachingHeroSection />
        <GuideSection />
        <VisionAndMission />
        <DreamJobSection />
    </>
}

Coaching.getLayout = function getLayout(page: ReactElement) {
    return <PageLayout>{page}</PageLayout>;
  };