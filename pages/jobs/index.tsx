import { PageLayout } from "@/components";
import { ReactElement } from "react";
import CloudSection from "./components/cloud-section";
import JobsHeroSection from "./components/jobs-hero-section";


export default function Jobs() {
    return <>
        <JobsHeroSection />
        <CloudSection />
    </>
}

Jobs.getLayout = function getLayout(page: ReactElement) {
    return <PageLayout>{page}</PageLayout>;
}