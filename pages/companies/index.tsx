import React, { ReactElement } from 'react';
import PageLayout from '@components/PageLayout';
import { ChosenHeader } from '@/components/PageLayout/PageLayout';

function Companies() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

Companies.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout chosenHeader={ChosenHeader.FOR_COMPANIES}>{page}</PageLayout>
  );
};

export default Companies;
