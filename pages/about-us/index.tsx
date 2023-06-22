import React, { ReactElement } from "react";
import HeroSection from "./components/HeroSection";
import WhoWeAre from "./components/WhoWeAre";
import VisionAndMissionNew from "./components/VisionAndMissionNew";
import ShareValues from "./components/ShareValues";
import PageLayout from "../../src/components/PageLayout";
import { ChosenHeader } from "@/components/PageLayout/PageLayout";
import visionAndMissionMock from "@/utils/mock-ups/vision-and-mission.mock";
import { Founders } from "./components/Founders/index ";

export default function AboutUs() {
  return (
    <>
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
