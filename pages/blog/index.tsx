import React, { ReactElement } from "react";
import PageLayout from "../../src/components/PageLayout";
import Banner from "./components/Banner";
import BannerImage from "./components/BannerImage";
import MainContents from "./components/MainContents";

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
        <PageLayout>
            {page}
        </PageLayout>
    )
}