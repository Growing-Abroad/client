import { PageLayout } from "@/components";
import { ReactElement } from "react";
import CloudSection from "./components/cloud-section";
import JobsHeroSection from "./components/jobs-hero-section";
import UploadCvSection from "./components/upload-cv-section";
import { ChosenHeader } from "@/components/PageLayout/PageLayout";
import PageBodyLayout from "@/components/generics/PageBody";
import useAppContext from "@/hooks/useAppContext";
import { EWaveType } from "@/components/Wave";
import _useLocale from "@/hooks/useLocale";
import { IntlProvider } from "react-intl";
import CTAction from "@pages/sales/components/CTAction";
import styled from "styled-components";


const JobsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
`;

export default function Jobs() {
    const {windowSize: { height }} = useAppContext();

    const { isMobile } = useAppContext();

    return <>
          <JobsWrapper>
            <CTAction isJobpage={true} hasSubtitle={false} callActionText="Upload your CV NOW" />
            <PageBodyLayout id="page-jobs"
                distanceFromTop={isMobile ? "380px" : "600px"}
                waveType={EWaveType.linear}
            >
                <CloudSection />
                <UploadCvSection />
            </PageBodyLayout>
          </JobsWrapper>

        
    </>
}

Jobs.getLayout = function getLayout(page: ReactElement) {
  const { locale, messages } = _useLocale();

  return (
    <IntlProvider locale={locale!} messages={messages}>
      <PageLayout chosenHeader={ChosenHeader.FOR_CANDIDATES} hideBlueSection={true}>{page}</PageLayout>
    </IntlProvider>
  )
}
