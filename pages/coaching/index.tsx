import { PageLayout } from "@/components";
import { ReactElement } from "react";
import CoachingHeroSection from "./components/hero-section";
import DreamJobSection from "./components/dream-job-section";
import VisionAndMissionNew, {
  IText,
} from "@pages/about-us/components/VisionAndMissionNew";
import CoachingPackageOnlineCourseSection from "./components/coaching-package-online-course";
import WhatOurClientsSay from "./components/what-our-clients-say";
import ReusedFaq from "@/components/reused-faq";
import { ChosenHeader } from "@/components/PageLayout/PageLayout";
import VisionAndMissionBackground from "../../public/assets/pages/coaching/career-coaches.webp";
import ContainerHero from "@/components/ContainerHero";
import CoachingHeroBg from "@assets/pages/coaching/coaching-hero.webp";
import useAppContext from "@/hooks/useAppContext";
import Wave from "@/components/Wave";
import PageBody from "@/components/generics/PageBody";
import PageBodyLayout from "@/components/generics/PageBody";

export default function Coaching() {
  const { isMobile, windowSize: {width} } = useAppContext();

  const text1: IText = {
    heading: "Goal",
    description:
      "Our coaching sessions give you the confidence and skills to present yourself in the best light and convince during a job interview. Our personalized coaching approach will help you to identify and showcase your unique strengths and overcome any weaknesses to land your dream job in Germany or Europe.",
  };
  const text2: IText = {
    heading: "Experts",
    description:
      "Our coaching team consists of experts with extensive knowledge of the German job market and culture. We will provide you with insider tips and tricks, teach you how to ace job interviews and assessments, and guide you through the entire application process.",
  };

  function getDistanceFromTop(): string {
    if (width <= 430) {
      return '340px';
    }
    if (width > 430 && width <= 1513) {
      return 'calc(21.25rem + ((1vw - 2.3px) * 22.1607))';
    }
    if (width > 1513) {
      return '580px';
    }
    return '';
  }

  return (
    <>
      <CoachingHeroSection distanceFromTop={getDistanceFromTop()} />
      <PageBodyLayout
        id="page-coaching"
        distanceFromTop={getDistanceFromTop()}
      >

        <DreamJobSection />
        <CoachingPackageOnlineCourseSection />
        <VisionAndMissionNew
          backgroundSrc={{
            desktop: VisionAndMissionBackground.src,
            mobile: VisionAndMissionBackground.src,
          }}
          text1={text1}
          text2={text2}
        />
        <WhatOurClientsSay />
        <ReusedFaq />
      </PageBodyLayout>
    </>
  );
}

Coaching.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout chosenHeader={ChosenHeader.FOR_CANDIDATES}>{page}</PageLayout>
  );
};
