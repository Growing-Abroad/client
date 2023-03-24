import React, { ReactElement } from "react";
import {Container} from "./styles"
import PageLayout from "../../src/components/PageLayout";
import Banner from "./components/Banner";
import BannerImage from "./components/BannerImage";
import MainContents from "./components/MainContents";

export default function Blog() {
    return (
        <Container>
            <Banner />
            <BannerImage />
            <MainContents />
        </Container>
    )
}

Blog.getLayout = function getLayout(page: ReactElement) {
    return (
        <PageLayout>
            {page}
        </PageLayout>
    )
}
