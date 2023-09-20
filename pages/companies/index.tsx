import { PageLayout } from "@/components";
import HeaderForCandidates from "@/components/HeaderForCandidates";
import { ChosenHeader } from "@/components/PageLayout/PageLayout";
import { CompaniesModule } from "@/modules/companies";
import WorkIn from "@pages/candidates/components/WorkIn/WorkIn";
import AreaBanner from "components/AreaBanner";
import PartnersSection from "components/PartnersSection";
import Process from "components/Process";
import React, { ReactElement } from "react";

export default function Companies() {
  return (
    <>
      <CompaniesModule />
      <WorkIn pageType="companies" />
      <AreaBanner />
      <Process />
      <PartnersSection />


    </>
  );
};

Companies.getLayout = function getLayout(page: ReactElement) {
  return (
      <PageLayout chosenHeader={ChosenHeader.FOR_COMPANIES}>{page}</PageLayout>
  );
};

