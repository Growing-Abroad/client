import React, { ReactElement } from "react";
import PageLayout from "../../src/components/PageLayout";
import Banner from "./components/Banner";
import BannerImage from "./components/BannerImage";
import MainContents from "./components/MainContents";
import { ChosenHeader } from "@/components/PageLayout/PageLayout";

export default function Blog() {
    return (
        <div>
            <Banner />
            <BannerImage />
            <MainContents />
        </div>
    )
}

Blog.getLayout = function getLayout(page: ReactElement) {
    return (
        <PageLayout chosenHeader={ChosenHeader.FOR_CANDIDATES}>
            {page}
        </PageLayout>
    )
}