import React, { ReactElement } from "react";
import PageLayout from "../../src/components/PageLayout";
import { Wrapper } from "@/components/Wrapper";
import FaqHeroSection from "./components/FaqHeroSection";
import FaqSection from "./components/FaqSection";
import { ChosenHeader } from "@/components/PageLayout/PageLayout";
// import { GeneralFaqMockUp } from "@/components/reused-faq/faq-mock-ups";
// import { PageBody } from "@/styles/pages-styles/coaching";
import Wave, { EWaveType } from "@/components/Wave";
import useAppContext from "@/hooks/useAppContext";
// import NavHero from "@/components/NavHero";
import { SubheadingHero } from "styles/faq/FaqHeroSection/index.styles";
import Link from "next/link";
import PageBodyLayout from "@/components/generics/PageBody";
import { Ul } from "styles/data-privacy";


export const GeneralFaqMockUp = [
  {
    title: "What is your service?",
    content:
    (
      <p style={{marginBottom: 0}}>
         We want to help you get your dream job in Germany or Europe. 
        That's why we have different <Link style={{color: "#0073cf"}} href="/coaching">coaching packages</Link> available to guide you along the way. 
        We also have an <Link style={{color: "#0073cf"}} href="/online-course">online course</Link> that will lead you through every step you need to take to land your dream 
        job in Germany or Europe.
      </p>

    )
  },
  {
    title: "What are the requirements to get a job in Germany?",
    content:(
    <>
      Not everyone can easily find a job in Germany. There are certain requirements you need to meet: <br />
      <br />
      <Ul>
        <li>
          Very good knowledge of the English language (German is not mandatory, but it increases your chances).
        </li>
        <li>
          Completed vocational training or a higher education degree.
        </li>
        <li>
          Your qualification must be recognized by the German authorities.
        </li>
      </Ul>
    </>
      ),
  },
  {
    title: "Do I need to speak German to find a job in Germany?",
    content:
      "No, speaking German is not necessary to find a job in Germany. Many large international companies in Germany use English as their business language, and even many young startups choose English as their business language. However, once you are in Germany, we strongly recommend studying German. It will make it much easier to integrate into the country when you know the language spoken by the people.",
  },
  {
    title: "What is the process to find a job in Germany?",
    content: (
      <>
        The first thing you need is a job offer from a German company. Without a job offer, you can't get a work visa. So, the first step is to find a job offer. Here are some steps to get a job offer from a German company: <br />
            <br />
        <Ul>
          <li>
            Make your application documents match the European standards.</li>
          <li>Apply for jobs on common job platforms in Germany.</li>
          <li>Impress the hiring managers during job interviews.</li>
        </Ul>
        <p style={{marginBottom: 0}}>
          We have created an <Link style={{color: "#0073cf"}} href="/online-course">online course</Link> just for you. In this course, we will guide you through each step to help you land your dream job in Germany.
        </p>
      </>
      ),
  },
  {
    title: "Is it possible to get a job in Germany without a degree?",
    content: "To find a job in Germany, you must have either finished vocational training or obtained a university degree. If you don't have either, don't worry! You still have options to educate yourself in Germany. For instance, you can apply for a student visa and study here, or you can complete vocational training in Germany. There are always ways to achieve your goals. However, it's crucial to have a strong desire because the path without a degree can be more difficult."
  }
];


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
            <Link href="/contact-us" target="_blank">contact page.</Link>
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
