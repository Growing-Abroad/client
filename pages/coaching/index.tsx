import { PageLayout } from "@/components";
import { ReactElement } from "react";
import CoachingHeroSection from "./components/hero-section";
import DreamJobSection from "./components//dream-job-section";
import VisionAndMissionNew, {
  IText,
} from "@pages/about-us/components/VisionAndMissionNew";
import CoachingPackageOnlineCourseSection from "@pages/coaching/components/coaching-package-online-course";
import ReusedFaq from "@/components/reused-faq";
import { ChosenHeader } from "@/components/PageLayout/PageLayout";
import VisionAndMissionBackground from "../../public/assets/pages/coaching/career-coaches.jpg";
import useAppContext from "@/hooks/useAppContext";
import PageBodyLayout from "@/components/generics/PageBody";
import StoriesPageCandidates from "@pages/candidates/components/StoriesPageCandidates";
import SEO from "@/components/seo";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

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

export default function Coaching() {
  const {
    windowSize: { width },
  } = useAppContext();

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
      return "340px";
    }
    if (width > 430 && width <= 1513) {
      return "calc(21.25rem + ((1vw - 2.3px) * 22.1607))";
    }
    if (width > 1513) {
      return "580px";
    }
    return "";
  }

  return (
    <>
      <SEO
        description="We are a HR agency specialized in the German and European job market. We offer coaching services to help you land your dream job 3 times faster"
        title="Coaching | Growing Abroad"
        url="https://growingabroad.de/coaching"
      />
      <CoachingHeroSection distanceFromTop={getDistanceFromTop()} />
      <PageBodyLayout id="page-coaching" distanceFromTop={getDistanceFromTop()}>
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
        <StoriesPageCandidates pageType="coaching" hasSubTitle={false} />
        <div style={{ marginTop: 50 }}>
          <ReusedFaq pageType="coaching" />
        </div>
      </PageBodyLayout>
    </>
  );
}

Coaching.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout chosenHeader={ChosenHeader.FOR_CANDIDATES}>{page}</PageLayout>
  );
};
