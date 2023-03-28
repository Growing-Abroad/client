import { PageLayout } from "@/components";
import { ReactElement } from "react";
import JobsHeroSection from "./components/jobs-hero-section";


export default function Jobs() {
    return <>
        <JobsHeroSection />
    </>
}

Jobs.getLayout = function getLayout(page: ReactElement) {
    return <PageLayout>{page}</PageLayout>;
}