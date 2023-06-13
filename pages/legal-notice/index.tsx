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

const LegalNoticeParagraph = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: ${({theme}) => theme.colors.blue700};
  margin: 0;
`

export default function LegalNotice() {
  const { isMobile } = useAppContext();

  return (
    <LegalNoticeContainer >
      <LegalNoticeContent>
        <LegalNoticeTitle>Legal Notice</LegalNoticeTitle>        

        <LegalNoticeTitle2>Information according to § 5 TMG</LegalNoticeTitle2>
        <LegalNoticeParagraph>Growing Abroad GmbH</LegalNoticeParagraph>
        <LegalNoticeParagraph>Jakob-Gelb-Platz 10</LegalNoticeParagraph>
        <LegalNoticeParagraph>81543 Munich</LegalNoticeParagraph>

        <LegalNoticeTitle2>Represented by</LegalNoticeTitle2>
        <LegalNoticeParagraph>Manuel Josef Feneberg</LegalNoticeParagraph>
        <LegalNoticeParagraph>Uanderson Caetano da Silva</LegalNoticeParagraph>

        <LegalNoticeTitle2>Contact</LegalNoticeTitle2>
        <LegalNoticeParagraph>team@growingabroad.de</LegalNoticeParagraph>

        <LegalNoticeTitle2>Registry Information</LegalNoticeTitle2>
        <LegalNoticeParagraph>Registered at the Register Court: Munich</LegalNoticeParagraph>
        <LegalNoticeParagraph>Registration Number: HRB 284545</LegalNoticeParagraph>

        <LegalNoticeTitle2>VAT Identification Number</LegalNoticeTitle2>
        <LegalNoticeParagraph>VAT identification number according to §27a of the German Value Added Tax Act (Umsatzsteuergesetz): [Insert VAT ID here]</LegalNoticeParagraph>

        <LegalNoticeTitle2>Responsible for content according to § 55 Abs. 2 RStV</LegalNoticeTitle2>
        <LegalNoticeParagraph>Growing Abroad GmbH</LegalNoticeParagraph>
        <LegalNoticeParagraph>Jakob-Gelb-Platz 10</LegalNoticeParagraph>
        <LegalNoticeParagraph>81543 Munich</LegalNoticeParagraph>

        <LegalNoticeTitle2 style={{marginTop: '78px'}}>Liability for Content</LegalNoticeTitle2>
        <LegalNoticeParagraph>The contents of our pages have been created with the utmost care. However, we cannot guarantee the accuracy, completeness, or timeliness of the content. As a service provider, we are responsible for our own content on these pages in accordance with § 7 Abs.1 TMG (German Telemedia Act) and general laws. According to §§ 8 to 10 TMG, we are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information under general laws remain unaffected. However, liability in this regard is only possible from the moment of knowledge of a specific infringement. Upon becoming aware of such infringements, we will remove the content immediately.</LegalNoticeParagraph>

        <LegalNoticeTitle2>Liability for Links</LegalNoticeTitle2>
        <LegalNoticeParagraph>Our offer contains links to external websites of third parties, over whose contents we have no influence. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the linked pages is always responsible for their content. The linked pages were checked for possible legal violations at the time of linking. Illegal content was not recognizable at the time of linking. However, a permanent control of the content of the linked pages is not reasonable without concrete indications of an infringement. Upon becoming aware of any violations, we will remove such links immediately.</LegalNoticeParagraph>

        <LegalNoticeTitle2>Copyright</LegalNoticeTitle2>
        <LegalNoticeParagraph>The content and works created by the site operators on these pages are subject to German copyright law. The reproduction, editing, distribution, and any kind of use outside the limits of copyright law require the written consent of the respective author or creator. Downloads and copies of this site are only permitted for private, non-commercial use. Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected. In particular, third-party content is identified as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. Upon becoming aware of any infringements, we will remove such content immediately.</LegalNoticeParagraph>

      </LegalNoticeContent>
    </LegalNoticeContainer>
  );
}

LegalNotice.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout chosenHeader={ChosenHeader.FOR_CANDIDATES} hideBlueSection={true}>{page}</PageLayout>
  );
};
