import React from 'react';
import HeroSection from './components/HeroSection';
import { ReactElement } from 'react';
import ConsultingGmbHSection from './components/ConsultingGmbHSection/index';
import RecruitingAndCareerServicesSection from './components/RecrutingAndCareerServicesSection';
import PartnersSection from './components/PartnersSection';
import SectionDivider from './components/SectionDivider';
import { MeetTheFoundersSection } from './components/MeetTheFoundersSection';
import { NextPageWithLayout } from '@pages/_app';
import PageLayout from '@components/PageLayout';
import { IntlProvider } from 'react-intl';
import { ChosenHeader } from '@/components/PageLayout/PageLayout';
import _useLocale from '@/hooks/useLocale';

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
  const { locale, messages } = _useLocale();

  return (
    <IntlProvider locale={locale!} messages={messages}>
      <PageLayout chosenHeader={ChosenHeader.DEFAULT}>{page}</PageLayout>
    </IntlProvider>
  );
};

export default Page;
