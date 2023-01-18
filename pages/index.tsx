import CallToAction from "./components/CallToAction/CallToAction"
import WorkIn from "@pages/components/WorkIn/WorkIn";
import OurServicesSection from "@pages/components/OurServices";
import SuccessStories from "@pages/components/Success-stories";
import CommunitySection from "@pages/components/Community";
import BlogSection from "@pages/components/Blog/BlogSection";
import {ReactElement} from "react";

import {NextPageWithLayout} from "@pages/_app";
import PageLayout from "@components/PageLayout";
import DiscoverGA from "@pages/components/DiscoverGA";

const Page: NextPageWithLayout = () => {
  return <>
    <CallToAction />
    <WorkIn />
    <DiscoverGA />
    <OurServicesSection />
    <SuccessStories />
    <CommunitySection />
    <BlogSection />
  </>
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
      <PageLayout>
        {page}
      </PageLayout>
  )
}

export default Page