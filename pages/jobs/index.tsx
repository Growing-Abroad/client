import { PageLayout } from "@/components";
import { ReactElement } from "react";
import CloudSection from "./components/cloud-section";
import JobsHeroSection from "./components/jobs-hero-section";
import UploadCvSection from "./components/upload-cv-section";
import { ChosenHeader } from "@/components/PageLayout/PageLayout";
import PageBodyLayout from "@/components/generics/PageBody";
import useAppContext from "@/hooks/useAppContext";
import { EWaveType } from "@/components/Wave";


export default function Jobs() {
    const {windowSize: {height}} = useAppContext();

    function getDistanceFromTop() {
        if (height > 1513) {
            return '628px';
        }
        if (height > 430) {
            return 'calc(25.75rem + ((1vw - 4.3px) * 19.9446))';
        }
        return '412px;'
    }

    return <>
        <JobsHeroSection />
        <PageBodyLayout 
            distanceFromTop={'100px'} 
            id="page-jobs"
            waveType={EWaveType.linear}
        >
            <CloudSection />
            <UploadCvSection />
        </PageBodyLayout>
    </>
}

Jobs.getLayout = function getLayout(page: ReactElement) {
    return <PageLayout chosenHeader={ChosenHeader.FOR_CANDIDATES}>{page}</PageLayout>;
}