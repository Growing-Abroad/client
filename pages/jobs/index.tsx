import { PageLayout } from "@/components";
import { ReactElement } from "react";
import CloudSection from "./components/cloud-section";
import JobsHeroSection from "./components/jobs-hero-section";
import UploadCvSection from "./components/upload-cv-section";


export default function Jobs() {
    return <>
        <JobsHeroSection />
        <CloudSection />
        <UploadCvSection />
    </>
}

Jobs.getLayout = function getLayout(page: ReactElement) {
    return <PageLayout>{page}</PageLayout>;
}