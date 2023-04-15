import { PageLayout } from "@/components";
import { ReactElement } from "react";
import CloudSection from "./components/cloud-section";
import JobsHeroSection from "./components/jobs-hero-section";
import UploadCvSection from "./components/upload-cv-section";
import { ChosenHeader } from "@/components/PageLayout/PageLayout";


export default function Jobs() {
    return <>
        <JobsHeroSection />
        <CloudSection />
        <UploadCvSection />
    </>
}

Jobs.getLayout = function getLayout(page: ReactElement) {
    return <PageLayout chosenHeader={ChosenHeader.FOR_CANDIDATES}>{page}</PageLayout>;
}