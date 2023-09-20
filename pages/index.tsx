import React from "react";
import HeroSection from "@/../components/HeroSection";
import { ReactElement } from "react";
import ConsultingGmbHSection from "@/../components/ConsultingGmbHSection";
import RecruitingAndCareerServicesSection from "@/../components/RecrutingAndCareerServicesSection";
import PartnersSection from "@/../components/PartnersSection";
import { NextPageWithLayout } from "@pages/_app";
import PageLayout from "@components/PageLayout";
import { ChosenHeader } from "@/components/PageLayout/PageLayout";
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import DiscoverGA from "./dream-job/components/DiscoverGA";


export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const { req, res } = context;

  // if (req && req.url === '/') {
  //   res.writeHead(302, { Location: '/candidates' });
  //   res.end();
  // }

  return {
    props: {},
  };
};

const Page: NextPageWithLayout = () => {
  return (
    <>
      <HeroSection />
      <DiscoverGA text1="Growing " text2="Abroad GmbH" typePages="home" />
      <RecruitingAndCareerServicesSection />
      <PartnersSection />
    </>
  );
};
 
Page.getLayout = function getLayout(page: ReactElement) {

  return (
    <PageLayout chosenHeader={ChosenHeader.DEFAULT} hideBlueSection={true} >
      {page}
    </PageLayout>
  );
};

export default Page;
