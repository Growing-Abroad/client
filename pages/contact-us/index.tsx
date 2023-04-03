import React, { ReactElement } from 'react';
import PageLayout from '../../src/components/PageLayout';
import { Wrapper } from '@/components/Wrapper';
import ContactSection from './components/ContactSection';

export default function CONTACT() {
  return (
    <Wrapper>
      <ContactSection/>
    </Wrapper>
  );
}

CONTACT.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>;
};
