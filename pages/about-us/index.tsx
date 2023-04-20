import React, { ReactElement } from "react";
import HeroSection from "./components/HeroSection";
import WhoWeAre from "./components/WhoWeAre";
import VisionAndMissionNew from "./components/VisionAndMissionNew";
import ShareValues from "./components/ShareValues";
import TeamMembers from "./components/TeamMembers";
import About from "./components/About";
import PageLayout from "../../src/components/PageLayout";
import { ChosenHeader } from "@/components/PageLayout/PageLayout";
import visionAndMissionMock from "@/utils/mock-ups/vision-and-mission.mock";

export default function AboutUs() {
  return (
    <>
      <HeroSection />
      <About />
      <WhoWeAre />
      <VisionAndMissionNew
        backgroundSrc={visionAndMissionMock.backgroundSrc}
        text1={visionAndMissionMock.text1}
        text2={visionAndMissionMock.text2}
      />
      <ShareValues />
      <TeamMembers />
    </>
  );
}

AboutUs.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout chosenHeader={ChosenHeader.FOR_CANDIDATES}>{page}</PageLayout>
  );
};
