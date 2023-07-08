import React, { ReactElement } from "react";
import PageLayout from "../../src/components/PageLayout";
import { ChosenHeader } from "@/components/PageLayout/PageLayout";
import { 
  DataPrivacyContainer, 
  DataPrivacyContent, 
  DataPrivacyParagraph, 
  DataPrivacyTitle, 
  DataPrivacyTitle2, 
} from "../../styles/data-privacy";
import { content } from "../../styles/data-privacy/content";


export default function DataPrivacy() {

  return (
    <DataPrivacyContainer >
      <DataPrivacyContent>
        <DataPrivacyTitle>Data Privacy</DataPrivacyTitle>        

        <DataPrivacyParagraph>
          We conduct our websites according to the principles set out below: 
          <br />
          We are committed to complying with the legal provisions on data protection and strive to always consider the principles of data avoidance and data minimization.
        </DataPrivacyParagraph>

        {content.map(({title, paragraph}) => (
          <div key={title}>
            <DataPrivacyTitle2>{title}</DataPrivacyTitle2>
            <DataPrivacyParagraph>
              {paragraph}
            </DataPrivacyParagraph>
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
