import React, { ReactElement } from "react";
import PageLayout from "../../src/components/PageLayout";
import { ChosenHeader } from "@/components/PageLayout/PageLayout";
import useAppContext from "@/hooks/useAppContext";
import styled from "styled-components";


const LegalNoticeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  padding-top: 170px;
  padding-bottom: 120px;

  @media (max-width: ${({theme})=> theme.sizes.mediaQuery}) {
    padding-bottom: 60px;
    padding-top: 100px;
  }
`

const LegalNoticeContent = styled.div`
  flex-grow: 1;
  width: 100%;
  padding-inline: ${({theme}) => theme.sizes.globalHorizontalPadding};
  max-width: ${({theme}) => theme.sizes.maxWidthAll};

  @media (max-width: ${({theme})=> theme.sizes.mediaQuery}) {
    padding-inline: ${({theme}) => theme.sizes.globalHorizontalPaddingMobile};
    
  }
`

const LegalNoticeTitle = styled.h1`
  color: ${({theme}) => theme.colors.blue700};
  font-size: 3rem;
  line-height: 3.75rem;
  font-weight: 600;
  letter-spacing: 1.3px;
  margin-bottom: 32px;

  @media (max-width: ${({theme})=> theme.sizes.mediaQuery}) {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
`

const LegalNoticeTitle2 = styled.h2`
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 1.875rem;
  color: ${({theme}) => theme.colors.blue700};
  margin-top: 30px;

  @media (max-width: ${({theme})=> theme.sizes.mediaQuery}) {
    font-size: 1.25rem;
    line-height: 1.5rem;
  }
`

const LegalNoticeTitleParagraph = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: ${({theme}) => theme.colors.blue700};
  margin: 0;
`

export default function DataPrivacy() {

  return (
    <LegalNoticeContainer >
      <LegalNoticeContent>
        <LegalNoticeTitle>Legal Notice</LegalNoticeTitle>        

        <LegalNoticeTitle2>Introduction</LegalNoticeTitle2>
        <LegalNoticeTitleParagraph>With the following information we would like to you as the "data subject" an overview of how we process your of your personal data by us and your rights under the data protection laws. The use of our Internet pages is possible without entering personal data. Insofar as you special services of our enterprise via our website, however, the services of our company via our website, processing of personal of personal data may become necessary. If the processing of personal data is necessary and there is no legal basis for such a no legal basis for such processing, we will generally obtain your consent from you. <br /><br />

        The processing of personal data, for example your name, address or e-mail address, always takes place in accordance with the Data Protection Regulation (DS-GVO) and in compliance with the legal provisions applicable to "Growing Abroad GmbH" country-specific data protection regulations. Data Protection Provisions. By means of this privacy policy, we would like to inform you about the scope and purpose of the personal data we collect, use and processed personal data.<br /><br />

        We have as responsible for the processing, we have implemented numerous technical and measures to ensure the most complete protection possible for the personal data  protection of personal data processed via this website. Nevertheless, Internet-based data transmissions may be subject to security vulnerabilities, so that an absolute protection cannot be guaranteed. For this reason you are free to transmit personal data to us by alternative means, for example by telephone or by mail.</LegalNoticeTitleParagraph>
        
        <LegalNoticeTitle2>Introduction</LegalNoticeTitle2>
        <LegalNoticeTitleParagraph>With the following information we would like to you as the "data subject" an overview of how we process your of your personal data by us and your rights under the data protection laws. The use of our Internet pages is possible without entering personal data. Insofar as you special services of our enterprise via our website, however, the services of our company via our website, processing of personal of personal data may become necessary. If the processing of personal data is necessary and there is no legal basis for such a no legal basis for such processing, we will generally obtain your consent from you. <br /><br />

        The processing of personal data, for example your name, address or e-mail address, always takes place in accordance with the Data Protection Regulation (DS-GVO) and in compliance with the legal provisions applicable to "Growing Abroad GmbH" country-specific data protection regulations. Data Protection Provisions. By means of this privacy policy, we would like to inform you about the scope and purpose of the personal data we collect, use and processed personal data.<br /><br />

        We have as responsible for the processing, we have implemented numerous technical and measures to ensure the most complete protection possible for the personal data  protection of personal data processed via this website. Nevertheless, Internet-based data transmissions may be subject to security vulnerabilities, so that an absolute protection cannot be guaranteed. For this reason you are free to transmit personal data to us by alternative means, for example by telephone or by mail.</LegalNoticeTitleParagraph>
        
      </LegalNoticeContent>
    </LegalNoticeContainer>
  );
}

DataPrivacy.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout chosenHeader={ChosenHeader.FOR_CANDIDATES} hideBlueSection={true}>{page}</PageLayout>
  );
};
