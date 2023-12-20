import React, { ReactElement, useEffect } from "react";
import { PageLayout } from "@/components";
import WhyBuyCourse from "./components/WhyBuyCourse";
import { Chapter } from "@/components/Chapter";
import BigCard from "./components/BigCard";
import TwoCards from "./components/TwoCards";
import FaqSection from "@pages/faq/components/FaqSection";
import TwoColorTitle from "@/components/two-color-title";
import useAppContext from "@/hooks/useAppContext";
import { ChosenHeader } from "@/components/PageLayout/PageLayout";
import { EWaveType } from "@/components/Wave";
import PageBodyLayout from "@/components/generics/PageBody";
import Investiment from "@pages/dream-job/components/Investiment";
import StoriesPageCandidates from "../candidates/components/StoriesPageCandidates";
import styled from "styled-components";
import CTAction from "@pages/dream-job/components/CTAction";
import FollowDreams from "@pages/dream-job/components/FollowDream";
import VerticalProgressBarCustom from "components/VerticalProgressBarCustom";
import SEO from "@/components/seo";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

export const OnlineCourseWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;

  #page-onlie-course {
    margin-top: 100vh;
    @media screen and (min-width: 768px) {
      margin-top: 103vh;
    }
  }
`;

const TwoColorTitleCustom = styled(TwoColorTitle)`
  width: 350px;
  max-width: 1039px;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;

export const OnlineCourseFaqMockUp = [
  {
    title: "What happens after I purchase the course? ",
    content: `You will receive an order confirmation and a welcome email containing a link to access the member area of the online course "Land Your Dream Job in Germany or Europe." Using this link, you can create an account on our online course platform hosted by Elopage. Once you have registered, you will gain access to all the videos, the digital workbook, and other course materials. Additionally, you will find a link to the Growing Abroad Community Group within this online course.`,
  },
  {
    title: "What language is used in the Online Course?",
    content:
      "The course is in English, as this is a requirement for jobs in Germany. Our recruiting experts are fluent in German and Portuguese.",
  },
  {
    title: "I have a completed vocational training. Is this course for me? ",
    content:
      "The course is designed for those with a university degree or those currently studying and looking for an internship. You can purchase the course with a completed vocational training, but you will need to adapt the content to your profession. The course provides an in-depth look at various topics and will provide you with great application materials and knowledge to help you succeed in job interviews. ",
  },
  {
    title: "Does the Online Course make sense if I am not in Germany?     ",
    content:
      "Absolutely! The course is designed for those in Germany and those living abroad. It will help you achieve your goal of working in Germany",
  },
  {
    title: "How does payment work?",
    content:
      "Payment can be made through PayPal, credit card, Apple Pay, and Google Pay. The price will be displayed in Euros. If you are from a country with a different currency, you can utilize a currency converter to calculate the price in your respective currency.",
  },
  {
    title:
      "After this Online Course, can I get jobs in other European countries?",
    content:
      "Yes. The techniques and methods taught in the course apply to all European countries. Our customers have secured jobs in many different European countries.",
  },
  {
    title: "Is this course a guarantee to secure a job in Germany or Europe?",
    content:
      "While this course provides comprehensive preparation to help you secure your dream job in Germany or Europe, it is important to note that success ultimately depends on your own dedication and efforts. The course equips you with valuable knowledge and skills, making it easier for you to navigate the job market. However, it does not guarantee job placement. Your level of motivation and willingness to apply what you learn will greatly impact your job search.",
  },
  {
    title: "How long will I have access to the online course?",
    content:
      "You will have access to the online course for a duration of 3 years. Throughout this period, you can watch the course content as many times as you wish.",
  },
];

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const { req, res } = context;

  // if (req && req.url === '/') {
    res.writeHead(302, { Location: '/' });
    res.end();
  // }

  return {
    props: {},
  };
};

export default function OnlineCourse() {
  const { isMobile } = useAppContext();

  useEffect(() => {
    window.addEventListener("resize", () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
  }, []);

  return (
    <>
      <SEO
        description="Build a successful career abroad with our Online Course. Learn how to build your application into German standards, how to rock your interview and much more"
        title="Online Course | Growing Abroad"
        url="https://growingabroad.de/online-course"
      />
      <OnlineCourseWrapper>
        <CTAction
          pageName="onlineCourses"
          titleIntl="Land your Dream job in"
          subTitleIntl=""
          buttonIntl="Buy Online Course Now"
        />
        <PageBodyLayout
          id="page-onlie-course"
          distanceFromTop={isMobile ? "770px" : "800px"}
          waveType={EWaveType.linear}
        >
          <TwoColorTitleCustom
            text1="Build a successful career abroad "
            text2="with this amazing ONLINE COURSE"
            fontSize={isMobile ? "36px" : "52px"}
            hasSpaceBtw
          />
          <WhyBuyCourse />
          <VerticalProgressBarCustom />

          {/* <Chapter /> */}
          <FollowDreams />

          <BigCard />
          <StoriesPageCandidates hasSubTitle={false} />
          <TwoCards />
          <Investiment />
          <TwoColorTitle
            text1="Frequently "
            text2="Asked Questions"
            styles={{ width: `${isMobile ? "387px" : ""}` }}
          />
          <FaqSection accordeons={OnlineCourseFaqMockUp} />
        </PageBodyLayout>
      </OnlineCourseWrapper>
    </>
  );
}

OnlineCourse.getLayout = function getLayout(page: ReactElement) {
  // const { locale, messages } = _useLocale();
  return (
    // <IntlProvider locale={locale!} messages={messages}>
    <PageLayout chosenHeader={ChosenHeader.FOR_CANDIDATES}>{page}</PageLayout>
    // </IntlProvider>
  );
};
