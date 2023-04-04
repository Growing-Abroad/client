import React from 'react';

import { Container, Title } from './styles';
import HeroSection from './components/HeroSection';
import { ReactElement } from 'react';
import ConsultingGmbHSection from './components/ConsultingGmbHSection/index';
import RecruitingAndCareerServicesSection from './components/RecrutingAndCareerServicesSection';
import PartnersSection from './components/PartnersSection';
import SectionDivider from './components/SectionDivider';
import { MeetTheFoundersSection } from './components/MeetTheFoundersSection';

import { NextPageWithLayout } from '@pages/_app';
import PageLayout from '@components/PageLayout';
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';
import de from '../lang/de.json';
import en from '../lang/en.json';
import pt from '../lang/pt.json';
import { ChosenHeader } from '@/components/PageLayout/PageLayout';
import { languages } from './candidates';

const Page: NextPageWithLayout = () => {
  return (
    <>
      <HeroSection />
      <ConsultingGmbHSection />
      <RecruitingAndCareerServicesSection />
      <PartnersSection />
      <SectionDivider />
      <MeetTheFoundersSection />
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  const { locale } = useRouter();

  return (
    <IntlProvider locale={locale!} messages={languages[locale]}>
      <PageLayout chosenHeader={ChosenHeader.FOR_CANDIDATES}>{page}</PageLayout>
    </IntlProvider>
  );
};

export default Page;
