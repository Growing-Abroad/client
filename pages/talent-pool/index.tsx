import { PageLayout } from "@/components";
import { ReactElement } from "react";
import CloudSection from "./components/cloud-section";
import UploadCvSection from "./components/upload-cv-section";
import { ChosenHeader } from "@/components/PageLayout/PageLayout";
import PageBodyLayout from "@/components/generics/PageBody";
import useAppContext from "@/hooks/useAppContext";
import { EWaveType } from "@/components/Wave";
import CTAction from "@pages/dream-job/components/CTAction";
import styled from "styled-components";
import SEO from "@/components/seo";

export const JobsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;

  #page-jobs {
    margin-top: 60vh;
    @media screen and (min-width: 768px) {
      margin-top: 103vh;
    }
  }
`;

export default function Talentpool() {
  const { windowSize: isMobile } = useAppContext();



  return (
    <>
      <SEO
        description="Do you want to work in Germany or Europe? Take the first steps by uploading your optimized application documents following German and European standards "
        title="Talentpool | Growing Abroad"
        url="https://growingabroad.de/talent-pool"
      />
      <JobsWrapper>
        <CTAction
          buttonURL=""
          pageName="jobs"
          titleIntl="Land your Dream job in" //"page.jobs.title"
          subTitleIntl=""
          buttonIntl="Upload your CV NOW" //"page.jobs.buttonCallToAction"
        />
        <PageBodyLayout
          id="page-jobs"
          distanceFromTop={isMobile ? "380px" : "600px"}
          waveType={EWaveType.linear}
        >
          <CloudSection />
          <UploadCvSection />
        </PageBodyLayout>
      </JobsWrapper>
    </>
  );
}

Talentpool.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout
      chosenHeader={ChosenHeader.FOR_CANDIDATES}
      hideBlueSection={true}
    >
      {page}
    </PageLayout>
  );
};
