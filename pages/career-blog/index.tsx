import React, { ReactElement } from "react";
import PageLayout from "../../src/components/PageLayout";
import { Wrapper } from "@/components/Wrapper";
import BlogCardSection from "./components/BlogCardSection";
import CareerHeroSection from "./components/CareerHeroSection";
import { ChosenHeader } from "@/components/PageLayout/PageLayout";
import { PageBody } from "styles/coaching";
import Wave from "@/components/Wave";
import NavHero from "@/components/NavHero";
import useAppContext from "@/hooks/useAppContext";

export default function CareerBlog() {
  const { isMobile } = useAppContext();
  return (
    <Wrapper>
      <CareerHeroSection />
      <PageBody style={{ marginTop: `${isMobile ? "650px" : "650px"}` }}>
        <Wave
          type={1}
          height="auto"
          styles={{
            height: `${isMobile ? "150px" : "650px"}`,
            marginTop: `${isMobile ? "50px" : "0"}`,
          }}
          className="border-image"
        ></Wave>

        <NavHero />
        <BlogCardSection />
      </PageBody>
    </Wrapper>
  );
}

CareerBlog.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout chosenHeader={ChosenHeader.FOR_CANDIDATES}>{page}</PageLayout>
  );
};
