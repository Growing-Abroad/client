import React, { ReactElement } from "react";
import PageLayout from "../../src/components/PageLayout";
import { ChosenHeader } from "@/components/PageLayout/PageLayout";
import { 
  DataPrivacyContainer, 
  DataPrivacyContent, 
  DataPrivacyParagraph, 
  DataPrivacyTitle, 
  DataPrivacyTitle2, 
  Subtitle,
} from "../../styles/data-protection";
import { content } from "../../styles/data-protection/content";


export default function DataPrivacy() {

  return (
    <DataPrivacyContainer >
      <DataPrivacyContent>
        <DataPrivacyTitle>Data protection information for job seekers, employees and applicants</DataPrivacyTitle>        
        <Subtitle>
          Duty to provide information pursuant to Articles 13 and 14 GDPR when collecting personal data.
        </Subtitle>

        {content.map(({title, paragraph}) => (
          <div key={title}>
            <DataPrivacyTitle2>{title}</DataPrivacyTitle2>
            <DataPrivacyParagraph dangerouslySetInnerHTML={{ __html: paragraph }} />


          </div>
        ))}
      </DataPrivacyContent>
    </DataPrivacyContainer>
  );
}

DataPrivacy.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout chosenHeader={ChosenHeader.FOR_CANDIDATES} hideBlueSection={true}>{page}</PageLayout>
  );
};
