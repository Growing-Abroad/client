import React from "react";
import { 
    BoldText, 
    ItalicText, 
    Ol, 
    Ul, 
    Underlined 
} from ".";
import { CustomLink, EmailLink, LinkTo } from "@/components/generics/EmailLink";

export const content = [
  {
    title: "1. Controllers names and contact details",
    paragraph: `
    Growing Abroad GmbH <br />
    represented by Manuel Feneberg and Uanderson Caetano da Silva <br /> <br />
    Jakob-Gelb-Platz 10 <br />
    81543 Munich, <br />
    Germany <br /> <br />
    E-Mail: <a href="mailto:team@growingabroad.de">team@growingabroad.de</a><br />
    Website: <a href="www.growingabroad.de" target="_blank">www.growingabroad.de</a> <br />
    `
  },
  {
    title: "2. Collection and storage of personal data in applications and on the basis of applicant profiles on applicant portals, as well as the type and purpose of such data and their use",
    paragraph: `
      <h3>2.1 Collection and storage</h3>
      <p>When</p>
      <ul>
        <li>you are contacting us for the first time,</li>
        <li>you submit an application to us,</li>
        <li>we contact you for the first time on the basis of your applicant profile on applicant portals such as Experteer and/or Indeed, or</li>
        <li>we contact you for the first time based on your profile on professional social media platforms such as LinkedIn and/or XING,</li>
      </ul>

      <p>then we usually collect the following information:</p>
      <ul>
        <li>Salutation, first name, last name,</li>
        <li>address,</li>
        <li>a valid e-mail address,</li>
        <li>telephone number (landline and/or mobile),</li>
        <li>all other data that you provide in your application documents,</li>
        <li>all other data that you have released in the applicant profile on applicant portals</li>
      </ul>
      <p>We assign you a candidate number in our database and store your personal data there.</p>

      <h3>2.2 Where for do we process your data (purpose of processing) and on what legal basis?</h3>
      <p>In the following, we inform you about what we process your data for and on what legal basis.</p>

      <h4>2.2.1. Data processing based on our legitimate interests (Article 6 (1) sent. 1 lit. f GDPR)</h4>
      <p>We may also use your data on the basis of a balance of interests to protect the legitimate interests of us or third parties. This is done, for example, for the following purposes:</p>

      <ul>
        <li>For applicant consultation and support and sales</li>
        <li>General business management as a recruitment agency and further development of services</li>
        <li>Advertising, market and opinion research</li>
      </ul>

      <p>Our interest in the respective processing results from the respective purposes and is otherwise of an economic nature. As far as possible and appropriate, we process your data pseudonymously or anonymously.</p>
      

      <h4>2.2.2. Data processing for the purpose of performing a future or current contract with us (Article 6 (1) sent. 1 lit. b GDPR)</h4>
      <p>We process your data to carry out contractual obligations and pre-contractual measures with you, i.e. in particular</p>

      <ul>
        <li>for the internal processing of your application</li>
        <li>for correspondence with you</li>
        <li>for contacting you as a job seeker, to contact you at your request and to initiate an application process (recruitment, acquisition measures)</li>
        <li>for conducting an application process, in particular by sending your candidate profile to our customers and coordinating customer interviews</li>
        <li>to conduct application and, if necessary, briefing interviews, e.g. via video call (Microsoft Teams, Zoom)</li>
        <li>to advise you on your career goals</li>
        <li>to advise you on the optimization of your application documents</li>
        <li>to conduct surveys to improve ourselves as a service provider</li>
        <li>to process warranty claims</li>
        <li>to process any liability claims that may exist and to assert any claims against you</li>
      </ul>

      <h4>2.2.3. Data processing on the basis of your consent (Article 6 (1) sent. 1 lit. a GDPR)</h4>
      <p>
      For optimal candidate support and in particular for the creation and management of a candidate database and to ensure smooth application processes in the future, we store your data for a period of up to ten years. For this purpose, we require your consent pursuant to Art. 6 (1) a GDPR.
      <br />
      <br />
      If you do not give us consent to store your personal data for a longer period, then we will delete your data after the purpose has been achieved, provided that there are no further reasons for storage, see under point 4. In this case, longer-term candidate support with you is not possible.
      <br />
      <br />
      You can revoke consent at any time with effect for the future. This also applies to declarations of consent that you gave to us before the GDPR came into force, i.e. before May 25, 2018. We inform you that the revocation of consent does not affect the lawfulness of the processing carried out on the basis of the consent until the revocation.
      </p>

      <h4>2.2.4. Due to legal requirements (Article 6 (1) sent.1 lit. C GDPR.</h4>
      <p>We are subject to various legal obligations, such as statutory commercial storage and documentation obligations (from HGB, StGB or AO).</p>
    `
  },
  {
    title: "3. Categories of data recipients",
    paragraph: `
      <p>The transfer of personal data is also processing within the meaning of the section 3. However, we would like to inform you separately about the issue of transferring data to third parties. The protection of your personal data is very important to us. For this reason, we are particularly careful when it comes to passing on your data to third parties.
        <br />
        <br />
        As a rule, your personal data is transferred to third parties for the following purposes:
      </p>

      <ul>
        <li>Application recipients (suitable companies, based on your application).</li>
        <li>Order processors with whom we have concluded an agreement in accordance with Art. 28 GDPR</li>
        <li>Accounting (e.g. tax advisor)</li>
        <li>Litigation (e.g. lawyer)</li>
        <li>Communication platform (e.g. email, WhatsApp, other messenger services).</li>
      </ul>
      <p>In particular, the transfer of your personal data to companies suitable for your application is mandatory for the processing of contractual relationships with you, in accordance with Art. 6 para. 1 p. 1 letter b GDPR.</p>
    `
  },
  {
    title: "4. Duration of data storage",
    paragraph: `
      <p>Your personal data will be deleted by us if it is no longer necessary for the purposes for which it was collected or otherwise processed, the processing is not necessary for the exercise of the right to freedom of expression and information, for compliance with a legal obligation, for reasons of public interest or for the establishment, exercise or defense of legal claims.</p>
    `
  },
  {
    title: "5. Data subject rights",
    paragraph: `
      <p>You have the right:</p>
      <ul>
        <li>Pursuant to Art. 7 (3) DSGVO, to revoke your consent, once given, at any time vis-à-vis us. This has the consequence that we may no longer continue the data processing based on this consent for the future;</li>
        <li>to request information about your personal data processed by us in accordance with Art. 15 DSGVO. In particular, you may request information about the processing purposes, the category of personal data, the categories of recipients to whom your data have been or will be disclosed, the planned storage period, the existence of a right to rectification, erasure, restriction of processing or objection, the existence of a right of complaint, the origin of your data if it has not been collected by us, and the existence of automated decision-making, including profiling, and, if applicable, meaningful information about its details;</li>
        <li>pursuant to Art. 16 DSGVO, to request the correction of incorrect or incomplete personal data stored by us without undue delay;</li>
        <li>pursuant to Art. 17 DSGVO, to request the erasure of your personal data stored by us, insofar as it is no longer necessary for the purposes for which it was collected or otherwise processed, the processing is not necessary for the exercise of the right to freedom of expression and information, for compliance with a legal obligation, for reasons of public interest or for the assertion, exercise or defense of legal claims;</li>
        <li>pursuant to Art. 18 DSGVO, to request the restriction of the processing of your personal data, insofar as the accuracy of the data is disputed by you, the processing is unlawful, but you object to its erasure and we no longer require the data, but you need it for the assertion, exercise or defense of legal claims or you have objected to the processing pursuant to Art. 21 DSGVO;</li>
        <li>pursuant to Art. 20 DSGVO, to receive your personal data that you have provided to us in a structured, common and machine-readable format or to request the transfer to another controller; and</li>
        <li>complain to a supervisory authority in accordance with Art. 77 DSGVO. As a rule, you can contact the supervisory authority of your usual place of residence or workplace for this purpose.</li>
      </ul>
    `
  },
  {
    title: "6. Right of objection",
    paragraph: `
      <p>Insofar as your personal data is processed on the basis of legitimate interests pursuant to Art. 6 (1) p. 1 lit. f DSGVO, you have the right to object to the processing of your personal data pursuant to Art. 21 DSGVO, insofar as there are grounds for doing so that arise from your particular situation. If you wish to exercise your right to object, simply send an e-mail to team@growingabroad.de.</p>
    `
  }
  
]