import React, { ReactElement } from "react";
import HeroSection from "./components/HeroSection";
import WhoWeAre from "./components/WhoWeAre";
import VisionAndMissionNew from "./components/VisionAndMissionNew";
import ShareValues from "./components/ShareValues";
import PageLayout from "../../src/components/PageLayout";
import { ChosenHeader } from "@/components/PageLayout/PageLayout";
import visionAndMissionMock from "@utils/mock-ups/vision-and-mission.mock";
import Founders from "./components/Founders/index ";
import SEO from "@/components/seo";

export default function AboutUs() {
  return (
    <>
      <SEO
        description="Tired to get rejection during the job application process? We are Career Experts with more than 10 years of experience and will help you in this journey "
        title="About Us | Growing Abroad"
        url="https://growingabroad.de/about-us"
      />
      <HeroSection />
      <WhoWeAre pageType="about-us" />
      <VisionAndMissionNew
        backgroundSrc={visionAndMissionMock.backgroundSrc}
        text1={visionAndMissionMock.text1}
        text2={visionAndMissionMock.text2}
      />
      <ShareValues />
      <Founders />
    </>
  );
}

AboutUs.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout chosenHeader={ChosenHeader.FOR_CANDIDATES}>{page}</PageLayout>
  );
};
