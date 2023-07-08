import HeaderForCandidates from "@/components/HeaderForCandidates";
import { CompaniesModule } from "@/modules/companies";
import React from "react";

const Companies = () => {
  return (
    <>
      <HeaderForCandidates />
      <CompaniesModule />
    </>
  );
};

export default Companies;
