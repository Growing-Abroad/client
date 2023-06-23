import React, { ReactElement } from 'react';
import PageLayout from '../../src/components/PageLayout';
import { Wrapper } from '@/components/Wrapper';
import ContactSection from './components/ContactSection';
import { ChosenHeader } from '@/components/PageLayout/PageLayout';

export default function ContactUs() {
  return (
    <Wrapper>
      <ContactSection/>
    </Wrapper>
  );
}

ContactUs.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout chosenHeader={ChosenHeader.FOR_CANDIDATES}>{page}</PageLayout>;
};
