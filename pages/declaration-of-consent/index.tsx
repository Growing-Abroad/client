import React, { ReactElement } from "react";
import PageLayout from "../../src/components/PageLayout";
import { ChosenHeader } from "@/components/PageLayout/PageLayout";
import useAppContext from "@/hooks/useAppContext";
import styled from "styled-components";
import { Ul } from "styles/data-privacy";


const DeclartionContainer = styled.div`
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

const DeclarationContent = styled.div`
  flex-grow: 1;
  width: 100%;
  padding-inline: ${({theme}) => theme.sizes.globalHorizontalPadding};
  max-width: ${({theme}) => theme.sizes.maxWidthAll};

  @media (max-width: ${({theme})=> theme.sizes.mediaQuery}) {
    padding-inline: ${({theme}) => theme.sizes.globalHorizontalPaddingMobile};
    
  }
`

const DeclarationTitle = styled.h1`
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

const DeclarationTitle2 = styled.h2`
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 1.875rem;
  color: ${({theme}) => theme.colors.blue700};
  margin-top: 30px;
  margin-bottom: 12px;

  @media (max-width: ${({theme})=> theme.sizes.mediaQuery}) {
    font-size: 1.25rem;
    line-height: 1.5rem;
  }
`

const DeclarationSectionContent = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: ${({theme}) => theme.colors.blue700};
  margin: 0;
`

const SemiBold = styled.span`
  font-weight: 600;
`

export default function LegalNotice() {
  const { isMobile } = useAppContext();

  return (
    <DeclartionContainer >
      <DeclarationContent>
        <DeclarationTitle>Declaration of consent under data protection law:</DeclarationTitle>        

        <DeclarationTitle2>
          Part 1: General declaration of consent for data processing for the purpose of job placement by Growing Abroad GmbH.
        </DeclarationTitle2>
        <DeclarationSectionContent>
          By submitting this declaration of consent, I authorize Growing Abroad GmbH, with registered office at Jakob-Gelb-Platz 10 in 81543 Munich, to process the following personal data: <br />
          <Ul>
            <li>Salutation</li>
            <li>First and last name</li>
            <li>Place of residence</li>
            <li>Telephone/mobile phone number</li>
            <li>e-mail address</li>
          </Ul>
          In addition, I expressly consent to the processing of the following additional personal data by Growing Abroad, to the extent that I voluntarily provide such data at the time of registration or subsequent thereto: <br />
          <Ul>
            <li>desired salary</li>
            <li>vocational training</li>
            <li>school-leaving qualification</li>
            <li>photograph</li>
          </Ul>
          "Processing" in the aforementioned sense includes the following processing activities:
          <Ul>
            <li>Collection of the personal data from myself</li>
            <li>Collection of the personal data via a publicly viewable website (e.g. the common career websites such as XING, LinkedIn)</li>
            <li>Collection of the personal data from third parties, if necessary in individual cases</li>
            <li>Inspection of personal data by employees of Growing Abroad GmbH (in particular recruiters, account managers, etc.)</li>
            <li>(Interim) storage of the collected personal data on individual devices, servers, etc.</li>
            <li>Data transfer within the group of companies (e.g. by forwarding my submitted CV to the person responsible in each individual case)</li>
            <li>Data transfer to third parties</li>
            <li>in particular companies that have a job vacancy that is potentially suitable for me</li>
            <li>Service providers who, for example, maintain our talent pool, employee database, etc. (order processors)</li>
          </Ul>
          <br />
          <br />
          <SemiBold>
            The purpose of the aforementioned data processing operations is the successful job placement by Growing Abroad as a personnel service provider for the benefit of my person.
          </SemiBold>
        </DeclarationSectionContent>
        <br />

        <DeclarationTitle2>
          Part 2: Highlighting my consent regarding the inclusion of my personal data in the talent pool.
        </DeclarationTitle2>
        <DeclarationSectionContent>
        It is necessary to emphasize my express consent with regard to the storage of the personal data provided by me as well as the personal data collected from third parties in a manner permitted under data protection law, to be processed beyond the retention period resulting from Section 15 (4) AGG for the purpose of job placement within the framework of a talent pool.
        </DeclarationSectionContent>
        <br />
        <DeclarationTitle2>
          Part 3: Highlighting my additional consent to receive newsletters, event invitations, etc.
        </DeclarationTitle2>
        <DeclarationSectionContent>
          I would also like to emphasize my express declaration of consent with regard to data processing in the aforementioned sense in order to inform me specifically about newsletters, information events and other events following / in response to my application for a specific job and my unsolicited application. <br />
          In particular, I expressly agree that for the aforementioned purpose, processing in the talent pool of Growing Abroad GmbH will take place for an indefinite period of time. The same applies to the transfer of my personal data to third parties. <br />
          The following communication channels may be used expressly for the purposes described above (advertising) to me: <br />
          <Ul>
            <li>my disclosed postal address (letter advertising)</li>
            <li>the e-mail address I have provided (e-mail advertising)</li>
            <li>my given landline and mobile phone number (telephone and SMS advertising).</li>
          </Ul>
          The following measures (in connection with which my personal data are processed as described above) on the part of Growing Abroad GmbH are understood as "advertising": <br />
          <Ul>
            <li>
              Providing information about current lectures, workshops and other events related to the application process, labor market development (NEW WORK, etc.) in connection with the application process, e.g. by sending a corresponding invitation to participate in one of the aforementioned events
            </li>
            <li>Providing whitepapers and other information material regarding the successful application process</li>
            <li>Sending out newsletters with relevant information or announcements of upcoming events</li>
            <li>Sending out questionnaires, conducting surveys among applicants</li>
          </Ul>
          The following actors are active on the part of Growing Abroad GmbH as "users" and recipients within the framework of the marketing measures described above <br />
          <Ul>
            <li>Marketing department of Growing Abroad GmbH</li>
            <li>Recruiter</li>
          </Ul>
          <br />        

        </DeclarationSectionContent>
        
        <DeclarationTitle2>
          Cancellation Policy:
        </DeclarationTitle2>
        <DeclarationSectionContent>
          You may revoke this declaration of consent at any time and without giving reasons. Please address your revocation by e-mail to team@growingabroad.de to exercise your right of revocation. <br />
          <br />
          Upon receipt of your revocation, Growing Abroad GmbH will no longer process your data, unless legal or contractual retention obligations prevent immediate deletion. <br />
          <br />
          In the event of a legal or contractual impediment to deletion, processing will be restricted as a substitute until all impediments to deletion have ceased to exist.
        </DeclarationSectionContent>

      </DeclarationContent>
    </DeclartionContainer>
  );
}

LegalNotice.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout chosenHeader={ChosenHeader.FOR_CANDIDATES} hideBlueSection={true}>{page}</PageLayout>
  );
};
