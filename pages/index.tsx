import React from 'react'
import type { ReactElement } from 'react'
import PageLayout from '../src/components/PageLayout'
import type { NextPageWithLayout } from './_app'
import BlogSection from './components/Blog/BlogSection';
import CallToAction from './components/CallToAction/CallToAction';
import CommunitySection from './components/Community';
import DiscoverGA from './components/DiscoverGA';
import OurServicesSection from './components/OurServices';
import SuccessStories from './components/Success-stories';
import WorkIn from './components/WorkIn/WorkIn';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  width: 100%;
`

const Page: NextPageWithLayout = () => {
  return <HomeWrapper>
    <CallToAction />
    <WorkIn />
    <DiscoverGA />
    <OurServicesSection />
    <SuccessStories />
    <CommunitySection />
    <BlogSection />
  </HomeWrapper>
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout>
      {page}
    </PageLayout>
  )
}

export default Page