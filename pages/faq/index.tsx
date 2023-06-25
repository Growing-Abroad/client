import React, { ReactElement } from "react";
import PageLayout from "../../src/components/PageLayout";
import { Wrapper } from "@/components/Wrapper";
import FaqHeroSection from "./components/FaqHeroSection";
import FaqSection from "./components/FaqSection";
import { ChosenHeader } from "@/components/PageLayout/PageLayout";
import { GeneralFaqMockUp } from "@/components/reused-faq/faq-mock-ups";
import { PageBody } from "styles/coaching";
import Wave, { EWaveType } from "@/components/Wave";
import useAppContext from "@/hooks/useAppContext";
import NavHero from "@/components/NavHero";
import { SubheadingHero } from "styles/faq/FaqHeroSection/index.styles";
import Link from "next/link";
import PageBodyLayout from "@/components/generics/PageBody";

export default function FAQ() {
  const { isMobile } = useAppContext();

  return (
    <Wrapper>
      <FaqHeroSection />
      <PageBodyLayout
        id="page-faq"
        distanceFromTop={isMobile ? "300px" : "570px"}
        waveType={EWaveType.linear}
      >

        {isMobile ? (
          <SubheadingHero>
            Got a question? We're here to answer ! If you don't see your
            question here, drop us a line on or{" "}
            <Link href="#">contact page.</Link>
          </SubheadingHero>
        ) : (
          <></>
        )}
        {/* <NavHero /> */}
        <FaqSection accordeons={GeneralFaqMockUp} />
      </PageBodyLayout>
    </Wrapper>
  );
}

FAQ.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout chosenHeader={ChosenHeader.FOR_CANDIDATES}>{page}</PageLayout>
  );
};
