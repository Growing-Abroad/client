import React, { ReactElement } from "react";
import HeroSection from "./components/HeroSection";
import WhoWeAre from "./components/WhoWeAre";
import TeamMembers from "./components/TeamMembers";
import About from "./components/About";
import PageLayout from "../../src/components/PageLayout";

export default function AboutUs() {
  return (
    <>
      <HeroSection />
      <About />
      <WhoWeAre />
      <TeamMembers />
    </>
  )
}

AboutUs.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout>
      {page}
    </PageLayout>
  )
}