import React from "react";
import { 
    BoldText, 
    ItalicText, 
    Ol, 
    Ul, 
    Underlined 
} from ".";
import { CustomLink, EmailLink, LinkTo } from "@/components/generics/EmailLink";
import Link from "next/link";



export const content: Array<{title: string, paragraph: string | JSX.Element}> = [
    {
      title: '1. Name and Address of the Controller',
      paragraph: (
        <>
          The controller within the meaning of the General Data Protection Regulation (GDPR) and other national data protection laws of the member states of the European Union and other data protection regulations is: 
          <br /><br />
          Growing Abroad GmbH <br />
          Jakob-Gelb-Platz 10 <br />
          81543 Munich <br />
          Germany <br />
          Email: <EmailLink>team@growingabroad.de</EmailLink>  <br />
          Website: <CustomLink href="www.growingabroad.de" target="_blank">www.growingabroad.de</CustomLink> <br />
        </>
      ) 
    },
    {
      title: '2. Definitions of terms',
      paragraph: (
        <>
          We have designed our privacy policy according to the principles of clarity and transparency. However, if there are any ambiguities with regard to the use of various terms, the corresponding definitions can be found <CustomLink href="https://dsgvo-gesetz.de/art-4-dsgvo/" target="_blank">here</CustomLink> .
        </>
      ) 
    },
    {
      title: '3. Legal Basis for Data Processing',
      paragraph: (
        <>
          a) <Underlined>Processing of Personal Data under the GDPR</Underlined>  <br />
          <br />
          We only process your personal data, such as your name, email address, IP address, etc., if there is a legal basis for such processing. The following provisions of the General Data Protection Regulation (GDPR) are particularly relevant:
          <br /><br />

          <Ul>
            <li>Article 6(1)(a) GDPR: The data subject has given consent to the processing of their personal data for one or more specific purposes.</li>
            <li>Article 6(1)(b) GDPR: The processing is necessary for the performance of a contract to which the data subject is a party or for the implementation of pre-contractual measures at the request of the data subject.</li>
            <li>Article 6(1)(c) GDPR: The processing is necessary for compliance with a legal obligation to which the controller is subject.</li>
            <li>Article 6(1)(d) GDPR: The processing is necessary to protect the vital interests of the data subject or another natural person.</li>
            <li>Article 6(1)(e) GDPR: The processing is necessary for the performance of a task carried out in the public interest or in the exercise of official authority vested in the controller.</li>
            <li>Article 6(1)(f) GDPR: The processing is necessary for the purposes of the legitimate interests pursued by the controller or a third party, except where such interests are overridden by the interests or fundamental rights and freedoms of the data subject, particularly if the data subject is a child.</li>
          </Ul>
          
          <br />
          However, we will always indicate the legal basis for the processing of your personal data at the respective sections of this privacy policy. <br />
          <br />
          <br />
          b) <Underlined>Consent of Legal Guardians according to Art. 8(1) Sentence 2 Alt. 2 GDPR</Underlined>  <br />
          <br />
          A legal guardian must give consent to all data processing activities on this website that require the consent of a minor who has not yet reached the age of 16. Information about the individual data processing operations, their purposes, and the categories of data involved, for which the consent of the data subject is required, can be found in the privacy policy.  <br />
          You can revoke your consent at any time by sending a written revocation statement to the contact details of the controller. The processing carried out prior to the revocation remains lawful. <br />
          <br />
          <br />
          c) <Underlined>Processing of Information according to § 25(1) TTDSG</Underlined> <br />
          <br />
          Furthermore, we process information in accordance with § 25(1) TTDSG by storing information on your end device or accessing information that is already stored on your end device. This may include both personal and non-personal data, such as cookies, browser fingerprints, advertising IDs, MAC addresses, and IMEI numbers. An end device is any device directly or indirectly connected to the interface of a public telecommunications network for the transmission, processing, or reception of messages, as defined in § 2(2) No. 6 TTDSG. <br />
          In general, we process this information based on your consent, as specified in § 25(1) TTDSG.  <br />
          If an exception under § 25(2) No. 1 and No. 2 TTDSG applies, we do not require your consent. Such an exception applies when we solely access or store the information to transmit a message over a public telecommunications network or when it is strictly necessary for us to provide you with a telemedia service that you explicitly requested. You can revoke your consent at any time. <br />
          Please note that the revocation of consent does not affect the lawfulness of processing based on consent before its revocation.
        </>
      ) 
    },
    {
      title: '4. Disclosure of Personal Data',
      paragraph: (
        <>
          The disclosure of personal data also constitutes processing within the meaning of the preceding paragraph 3. However, we would like to provide you with separate information regarding the topic of disclosure to third parties. Protecting your personal data is of utmost importance to us. Therefore, we exercise great caution when it comes to disclosing your data to third parties. <br />
          We only disclose data to third parties if there is a legal basis for such processing. For example, we may disclose personal data to individuals or companies acting as processors on our behalf in accordance with Article 28 of the GDPR. A processor is anyone who processes personal data on our behalf, particularly in a relationship of instruction and control.  <br />
          In accordance with the provisions of the GDPR, we enter into a contract with each of our processors to ensure compliance with data protection regulations and to provide comprehensive protection for your data.
        </>  
      )
    },
    {
      title: '5. Storage Period and Deletion',
      paragraph: (
        <>
          We will delete your personal data when it is no longer necessary for the purposes for which it was collected or otherwise processed, provided that its processing is not required for exercising the right to freedom of expression and information, for compliance with a legal obligation, for reasons of public interest, or for the establishment, exercise, or defense of legal claims.
        </>  
      )
    },
    {
      title: '6. SSL or TLS Encryption',
      paragraph: (
        <>
          For security reasons and to protect the transmission of confidential content, such as the inquiries you send to us as the website operator, this website uses SSL or TLS encryption. You can recognize an encrypted connection by the change in the browser's address line from "http://" to "https://" and the lock icon in your browser bar. When SSL or TLS encryption is activated, the data you transmit to us cannot be read by third parties.
        </>  
      )
    },
    {
      title: '7. Cookies',
      paragraph: (
        <>
          We use cookies on our website. Cookies are small data packets that are automatically created by your browser and stored on your device when you visit our website. These cookies are used to store information related to the respective device being used. <br />
          There are two types of cookies: technically necessary cookies and "additional" cookies. Technically necessary cookies are those that are strictly required to provide a service of the information society that you have explicitly requested. <br />
          <br />
          a) <Underlined>Technically Necessary Cookies</Underlined> <br />
          <br />
          To enhance your experience of using our website, we use technically necessary cookies. These may include session cookies (e.g., language and font selection, shopping cart, etc.), consent cookies, cookies to ensure server stability and security, and similar purposes. The legal basis for these cookies is Article 6(1)(f) of the GDPR, representing our legitimate interest in the error-free operation of the website and our interest in providing our services to you in an optimized manner. <br />
          <br />
          b) <Underlined>Additional Cookies</Underlined> <br />
          <br />
          Additional cookies are used for statistical, analytical, marketing, and retargeting purposes. <br />
          We use these cookies based on your consent according to Article 6(1)(a) of the GDPR. <br />
          You can withdraw your consent for the use of cookies at any time. Please note that the legality of processing based on your consent prior to withdrawal is not affected. <br />
          You can manage your cookie settings on our website, disable the use of cookies in your browser settings (although this may restrict the functionality of the online offering), or opt out of specific services on an individual basis. <br />
          Within the respective sections of this privacy policy, we inform you about the legal basis for the processing of data related to specific services. 
        </>  
      )
    },
    {
      title: '8. Cookie-Banner',
      paragraph: (
        <>
          To obtain consent for the cookies we use, we utilize the Cookie-Banner Cookiebot.com provided by Usercentrics A/S, Havnegade 39, 1058 Copenhagen, Denmark. This banner sets a so-called consent cookie to retrieve and process the respective consent status. This consent cookie is technically necessary and is therefore used based on our legitimate interest according to Article 6(1)(f) of the GDPR and Section 25(1) of the TTDSG.
        </>  
      )
    },
    {
      title: '9. Collection and storage of personal data and their nature and purpose of use',
      paragraph: (
        <>  
          a) <Underlined>External Hosting</Underlined> <br />
          <br />
          Our website is hosted on Google Cloud, Gordon House, Barrow Street, Dublin 4, Ireland. For this reason, all personal data collected on our website is stored on the servers of our hosting provider, unless an external service of a third party is involved. This may include the IP address, email address, communication data, or similar information. The specific personal data involved will be explained in more detail in the descriptions of the individual functions and services provided by us. If we use an external service provided by a third party, this will be clearly indicated in the description of the respective service or tool. <br />
          The hosting provider processes your data only on our behalf and to the extent necessary to fulfill the services on the website. The hosting provider does not process the data for its own purposes. We have entered into a data processing agreement with the hosting provider. <br />
          <br />
          b) <Underlined>When visiting the website</Underlined> <br />
          <br />
          When you access our website, your browser automatically sends information to the server of our website and this information is temporarily stored in a log file. The following information is collected without your intervention and stored until it is automatically deleted: <br />
          <Ul style={{listStyleType: 'circle'}}>
            <li>IP address of the requesting computer</li>
            <li>Date and time of access</li>
            <li>Name and URL of the retrieved file</li>
            <li>Website from which the access is made (referrer URL)</li>
            <li>Browser type and operating system of your computer, as well as the name of your access provider</li>
          </Ul>

          We process the aforementioned data for the following purposes:
          <Ul style={{listStyleType: 'circle'}}>
            <li>Ensuring a smooth connection setup of the website</li>
            <li>Ensuring convenient use of our website</li>
            <li>Evaluating system security and stability</li>
            <li>Error analysis</li>
            <li>Further administrative purposes</li>
          </Ul>
          
          Data that could potentially identify you, such as the IP address, will be deleted no later than 7 days after collection. If we store the data beyond this period, it will be pseudonymized so that it can no longer be associated with you. <br />
          The legal basis for data processing is Article 6(1)(f) of the GDPR. Our legitimate interest arises from the purposes of data collection listed above. Under no circumstances do we use the collected data to draw conclusions about your person. <br />
          <br />
          c) <Underlined>Sales</Underlined> <br /> 
          <br />
          For the sale of our products and services, we use the online sales platform elopage provided by elopage GmbH, Kurfürstendamm 208, 107179 Berlin. Therefore, when you click on a product button on our website, you will be redirected to our sales page on elopage, where we also provide you with all further information regarding the processing of your data in the context of sales and payment processing. <br />
          We have entered into a data processing agreement with elopage. <br /> 
          For more information about elopage and the processing of personal data by elopage, please visit https://elopage.com/privacy?locale=de. <br />
          <br />
          d) <Underlined>Newsletter</Underlined> <br />
          <br />
          <ItalicText>Content of the Newsletter and Registration Data</ItalicText>  <br />
          <br />
          The delivery of our newsletter, as well as the conducting of statistical surveys and analyses, and the logging of the registration process, only take place if you subscribe to it and have given your consent in accordance with Art. 6(1)(a) of the GDPR, § 25(1) of the TTDSG. <br />
          The content of the newsletter is specifically described during the newsletter registration process. To subscribe to the newsletter, providing your email address is sufficient. If you voluntarily provide additional information such as your name and/or gender, they will be used exclusively for personalizing the newsletter sent to you. <br />
          <br />
          <ItalicText>Double Opt-In and Logging</ItalicText> <br />
          <br />
          For newsletter registration, we use the double opt-in procedure for security reasons, so that no one can register with someone else's email address. Therefore, after registering for our newsletter, you will receive an email asking you to confirm your registration. Your registration only becomes effective upon confirmation. <br />
          Furthermore, your newsletter registration is logged, including the storage of the registration and confirmation timestamps, the data you provided, and your IP address. If you make changes to your data, these changes will also be logged. <br />
          <br />
          <ItalicText>Withdrawal</ItalicText> <br /> 
          <br />
          If you no longer wish to receive our newsletter, you can revoke your consent at any time for future newsletters. To do so, you can click on the unsubscribe link at the end of each newsletter or send us an email to the following email address: {<EmailLink>team@growingabroad.de</EmailLink>}. <br /> 
          The revocation of consent does not affect the legality of data processing based on the consent before its withdrawal. <br />
          <br />
          <BoldText>Use of ActiveCampaign</BoldText> <br />
          <br />
          We send our newsletter using the newsletter service "ActiveCampaign," operated by ActiveCampaign, LLC (1 North Dearborn St, 5th Floor, Chicago, IL 60602, USA). <br />
          The email addresses of our newsletter subscribers, as well as their other data described in these notices, are stored on ActiveCampaign's servers in the USA. ActiveCampaign uses this information to send and evaluate the newsletter on our behalf. <br />
          Furthermore, according to ActiveCampaign, this data may be used in pseudonymous form, i.e., without assigning it to a specific user, for optimizing or improving their own services, such as technical optimization of newsletter delivery and display or statistical purposes to determine the countries from which the recipients originate. However, the email service provider does not use the data of our newsletter subscribers to contact them directly or share it with third parties. You can find ActiveCampaign's privacy policy here: <CustomLink href="https://www.activecampaign.com/legal/privacy-policy" target="_blank">https://www.activecampaign.com/legal/privacy-policy</CustomLink> .<br />
          <br />
          <ItalicText>Statistical Surveys and Analyses</ItalicText> <br />
          <br />
          The newsletters sent via ActiveCampaign contain a so-called "web beacon," a pixel-sized file that is retrieved from the server of the email service provider when opening the newsletter. In the context of this retrieval, technical information such as browser and system information, as well as your IP address and the time of retrieval, are initially collected. <br /> 
          These details are used for the technical improvement of the services based on the technical data or the target groups and their reading behavior based on the retrieval locations (determinable through the IP address) or the access times. <br />
          Statistical surveys also include determining whether newsletters are opened, when they are opened, and which links are clicked. These pieces of information can be attributed to individual newsletter recipients for technical reasons. However, it is neither our intention nor ActiveCampaign's to monitor individual users. The evaluations serve us primarily to recognize the reading habits of our users and to adapt our content to them or send different content according to the interests of our users. <br />
          We have entered into a data processing agreement with ActiveCampaign in accordance with Article 26 of the GDPR, as well as the standard contractual clauses. <br />
          <br />
          e) <Underlined>Contact Form</Underlined> <br />
          <br />
          We provide a form on our website for you to contact us at any time. To use the contact form, it is necessary to provide a name for personal addressing and a valid email address for communication, so that we know who the inquiry is from and can process it accordingly. <br />
          If you send us inquiries through the contact form, your information from the inquiry form, including the contact details you provided, as well as your IP address, will be processed in accordance with Art. 6(1)(b) and (f) of the GDPR for the purpose of carrying out pre-contractual measures based on your request or for the exercise of our legitimate interest, namely the conduct of our business activities. <br />
          The inquiries and the associated data will be deleted no later than 6 months after receipt, unless they are required for further contractual relationships. <br />
          <br />
          We use SendGrid, an email delivery service, for our contact form. The service provider is the American company Twilio Inc, 889 Winslow St, Redwood City, California 94063, USA.
          <br />
          SendGrid also processes data from you in the USA, among other places. We would like to point out that according to the opinion of the European Court of Justice, there is currently no adequate level of protection for the transfer of data to the USA. This may be associated with various risks to the lawfulness and security of data processing.
          <br />
          As a basis for data processing with recipients located in third countries (outside the European Union, Iceland, Liechtenstein, Norway, i.e. especially in the USA) or a data transfer there, SendGrid uses so-called standard contractual clauses (= Art. 46. para. 2 and 3 DSGVO). Standard Contractual Clauses (SCC) are templates provided by the EU Commission and are intended to ensure that your data comply with European data protection standards even if they are transferred to third countries (such as the USA) and stored there. Through these clauses, SendGrid undertakes to comply with the European level of data protection when processing your relevant data, even if the data is stored, processed and managed in the USA. These clauses are based on an implementing decision of the EU Commission. You can find the decision and the corresponding standard contractual clauses here, among other places: https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj?locale=de
          <br />
          The Data Processing Addendum, which corresponds to the standard contractual clauses, can be found at <Link href="https://www.twilio.com/legal/data-protection-addendum" target="_blank">https://www.twilio.com/legal/data-protection-addendum</Link>.
          <br />
          You can learn more about the data processed through the use of SendGrid in the Privacy Policy at <Link target="_blank" href="https://www.twilio.com/legal/privacy">https://www.twilio.com/legal/privacy</Link>.
          <br />
          <br />
          f) <Underlined>Application Form</Underlined> <br />
          <br />
          We provide a form on our website for you to apply to us. Your personal data from the application will be processed in accordance with our privacy policy for applicants. 
          When uploading your resume, you can create an account through which you can manage and edit all your uploaded documents. The creation and management of your account is based on your consent pursuant to Art. 6(1)(a) of the GDPR. <br />
          <br />
          g) <Underlined>Google Tag Manager</Underlined> <br />
          <br />
          We use the Google Tag Manager on our website, provided by Google (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland). The Google Tag Manager is a management and administration tool that allows for central management and deployment of other tracking and/or statistical tools. <br />
          When you visit our website and give your consent in accordance with Art. 6(1)(a) of the GDPR, the Google Tag Manager collects and processes your IP address, which may also be transferred to the USA. However, the Google Tag Manager does not create user profiles or perform any analyses itself. <br />
          You can find the Google Privacy Policy here: [https://www.google.com/policies/privacy/?hl=en] <br />
        
        </> 
      )
    },
    {
      title: '10. Analysis and Tracking Tools',
      paragraph: (
        <>
          We use the following analysis and tracking tools on our website to ensure continuous optimization and tailor it to your needs. <br />
          We use these tools based on your consent provided in accordance with Art. 6(1)(a) of the GDPR. You can revoke your consent at any time by changing your cookie settings. The processing until revocation remains lawful. <br />
          The respective purposes of data processing and data categories can be found in the corresponding tools. Please note that we have no control over whether and to what extent the service providers carry out further data processing. <br />
          <br />
          a) <Underlined>Google Analytics</Underlined>  <br />
          <br />
          We use Google Analytics, a web analytics service provided by Google (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland, hereinafter referred to as "Google"), on our website. <br />
          In this context, Google Analytics uses cookies (see section 7). The information generated by the cookie about your use of this website, such as: <br />
          <Ul>
            <li>Name and version of the browser used</li>
            <li>Operating system of your computer</li>
            <li>Website from which the access originated (referrer URL)</li>
            <li>IP address of the requesting computer</li>
            <li>Time of the server request</li>
          </Ul>
          is usually transmitted to and stored on a server of Google in the USA. <br />
          <br />
          Your IP address is automatically anonymized by Google before being recorded via EU domains and servers. Therefore, no logging or storage of your IP address occurs. <br />
          On our behalf, Google will use this information to evaluate your use of our website, compile reports on website activity, and provide us with other services related to website usage and internet usage. The IP address transmitted by your browser as part of Google Analytics will not be merged with other data from Google. <br />
          We have concluded a contract for order processing with Google. 
          Please click here for an overview of Google's privacy policy: [<CustomLink href="https://support.google.com/analytics/answer/6004245" target="_blank">https://support.google.com/analytics/answer/6004245</CustomLink>] <br />
          <br />
          b) <Underlined>Google Remarketing</Underlined>  <br />
          <br />
          We use the remarketing function of Google Analytics to target advertising campaigns, including Google AdWords campaigns, to visitors of our website. <br />
          Based on your previous visits to our website, relevant advertisements will be presented to you when you visit other websites in the Google Display Network. <br />
          The DoubleClick cookie allows Google to display targeted advertisements to us and other third-party providers that correspond to the interests identified based on your previous visits to our website and/or other websites. This advertising may be displayed on websites within the Google network and/or those of other operators in the Google advertising network. We also use the Google Analytics advertising features to analyze the effectiveness of our own advertising campaigns. <br />
          If you have agreed in your Google account that your web and app browsing history will be linked to your Google account and that information from your Google account will be used to personalize ads, Google will use data from you along with Google Analytics data to create cross-device remarketing audience lists. Google Analytics initially collects Google-authenticated IDs from your browser as a user of our website, which are associated with your Google account. Subsequently, Google Analytics temporarily links these IDs with Google Analytics data to optimize our target audiences. <br />
          Please click here for an overview of Google's privacy policy: [<CustomLink>https://support.google.com/analytics/answer/6004245</CustomLink>] <br />
          <br />
          c) <Underlined>Google Ads Conversion Tracking</Underlined> <br />
          <br />
          We utilize Google Ads, an online advertising program provided by Google (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland), on our website. This program also employs conversion tracking. With this tool, Google Ads places a cookie on your device when you access our website through a Google advertisement. <br />
          The cookie does not enable personal tracking. If you, as a user, visit our website while the cookie is still active, it becomes apparent to both us and Google that you clicked on the corresponding ad and were redirected to our site. Each Google Ads customer is assigned a different cookie, making cookies untraceable across the websites of Ads customers. Data obtained through conversion cookies is used to generate conversion statistics for Ads customers. As customers of Google Ads, we learn the total number of users who responded to our ad and were subsequently redirected to a website equipped with a conversion tracking tag. This allows us to assess the success of individual advertising measures. However, we do not receive any information that personally identifies you as a user. <br /> 
          When using Google Ads, your browser automatically establishes a direct connection to Google's server. If you have a Google account and are logged in, your visit can be associated with your account. If you do not have a Google account, Google assigns you a unique identifier. We have no control over the data collected and stored by Google. 
          For more information about Google's privacy policy, please visit <CustomLink href="http://www.google.de/policies/privacy/" target="_blank">http://www.google.de/policies/privacy/</CustomLink>. <br />
          <br />
          d) <Underlined>Google AdSense</Underlined> <br />
          <br />
          We use Google AdSense, a service provided by Google (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland), to display advertisements on our website. Google AdSense utilizes cookies, which are files that allow Google to analyze data about your usage of our website when stored on your device. Additionally, Google AdSense uses web beacons, invisible graphics that enable Google to analyze clicks on our website, traffic on the site, and related information. <br />
          The information obtained through cookies and web beacons, including your IP address and the delivery of ad formats, is transmitted to and stored on a server located in the United States. Google may share this collected information with third parties when required by law or when Google engages third parties to process the data. However, Google will not merge your IP address with other stored data. <br />
          For more information about Google's privacy policy, please visit <CustomLink href="http://www.google.de/policies/privacy/" target="_blank">http://www.google.de/policies/privacy/</CustomLink>. <br />
          <br />
          e) <Underlined>Use of Google reCAPTCHA</Underlined> <br />
          <br />
          We use the reCAPTCHA service provided by Google (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland) on our web pages, specifically in our contact form, to distinguish between input from a human and automated, abusive, or machine processing. We have a legitimate interest in protecting our web offerings from abusive automated spying and spam. <br />
          When queried by the reCAPTCHA service, your IP address, as well as any additional data required by Google for the reCAPTCHA service, may be transmitted to Google and processed there. <br />
          To use reCAPTCHA, you must accept Google's terms of use, which are presented in a separate field. We have activated IP anonymization on this website, so your IP address is truncated by Google within member states of the European Union or other contracting parties to the Agreement on the European Economic Area before transmission. Only in exceptional cases will the full IP address be transferred to a Google server in the USA and truncated there. <br />
          On our behalf, Google will use this information to evaluate your use of this service. The IP address transmitted by your browser in the context of reCAPTCHA will not be merged with other Google data. The data collected in the context of reCAPTCHA is subject to Google's separate privacy policy. <br />
          For more information about Google's privacy policies, please visit: <CustomLink href="https://www.google.com/intl/de/policies/privacy/" target="_blank">https://www.google.com/intl/de/policies/privacy/</CustomLink>. <br />
          By integrating reCAPTCHA, Google Fonts are also dynamically loaded from Google without explicit action by the website operator or visitor. The integration of these web fonts is accomplished through a server call, typically to a server in the USA operated by Google. The following information may be transmitted to and stored by Google as a result: <br />
          <Ul>
            <li>Name and version of the browser used</li>
            <li>Referrer URL (the webpage from which the request originated)</li>
            <li>Operating system of your computer</li>
            <li>Screen resolution of your computer</li>
            <li>IP address of the requesting computer</li>
            <li>Language settings of the browser or operating system used by the user</li>
          </Ul>
          For more information, please refer to Google's privacy policy, which can be accessed at the following links: <br />
          <LinkTo>https://www.google.com/fonts#AboutPlace:about</LinkTo> <br />
          <LinkTo>https://www.google.com/policies/privacy/</LinkTo>
        </>
      )
    },
    {
      title: '11. Social Media',
      paragraph: (
        <>
          On our website, we offer you the option to share content from our blog. For this purpose, we have integrated the recommendation functions of Facebook, Twitter, and LinkedIn on our website. These services are deactivated by default but can be activated by you when used. <br /> 
          If you use the recommendation function on our website, personal data such as your IP address may be transmitted to the respective platform operators. The use of this data by the platform operators is beyond our control. The responsibility for the privacy-compliant operation lies with their respective providers. <br />
          <br />
          You can find information here: <br />
          <br />
          Facebook: Meta Platforms Ireland Limited (Hanover Reach, 5-7 Hanover Quay, Dublin 2 Ireland) <br /> 
          <LinkTo>https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&amp;entry=0</LinkTo> <br />
          <br />
          Twitter: Twitter Inc. (1355 Market Street, Suite 900, San Francisco, CA 94103, USA) <br />
          <LinkTo>http://twitter.com/privacy</LinkTo> <br />
          <br />
          LinkedIn: LinkedIn Ireland Unlimited Company (Wilton Place, Dublin 2, Ireland) <br />
          <LinkTo>https://www.linkedin.com/legal/privacy-policy?_l=de_DE</LinkTo> <br />
          <br />
          The legal basis for the use of the social media recommendation function is your consent in accordance with Art. 6(1)(a) of the GDPR. 
        </>  
      )
    },
    {
      title: '12. Embedding of Images, Audio, and Videos',
      paragraph: (
        <>
          <Underlined>YouTube</Underlined>  <br />
          <br />
          We embed videos from YouTube, which is operated by Google (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland), on our website using iFrame. As part of embedding the videos, we have enabled YouTube's enhanced privacy mode.  <br />
          When you play a YouTube video during your visit, a connection is established to YouTube's servers, and the YouTube server is informed of which of our pages you have visited. <br />
          This allows YouTube to directly associate your browsing behavior with your personal profile. You can prevent this by logging out of your member account before visiting our website. <br />Additionally, when the service starts, YouTube sets various cookies to improve their offered services and prevent misuse, according to their own statements. <br />
          For more information on how user data is handled and the cookies set, please refer to YouTube's privacy policy at: https://www.google.com/intl/de/policies/privacy <br />
          By embedding YouTube, the Google Fonts from Google are also dynamically loaded without explicit determination by the website operator or visitor. The integration of these web fonts is done through a server request, typically a server from Google in the USA. As a result, the following information may be transmitted to the server and stored by Google: <br />
          <Ul>
            <li>Name and version of the browser used</li>
            <li>Referring webpage (Referrer URL)</li>
            <li>Operating system of your computer</li>
            <li>Screen resolution of your computer</li>
            <li>IP address of the requesting computer</li>
            <li>Language settings of the browser or operating system used by the user</li>
          </Ul>

          For more information, please refer to Google's privacy policy, which you can access here: <br /> 
          <LinkTo>https://www.google.com/fonts#AboutPlace:about</LinkTo>  <br />
          <LinkTo>https://www.google.com/policies/privacy/</LinkTo> <br />
          The legal basis is derived from your consent given in accordance with Art. 6(1)(a) of the GDPR. You can revoke your consent at any time by changing the cookie settings on our website.
        </>  
      )
    },
    {
      title: '13. Rights of the Data Subject',
      paragraph: (
        <>
          You have the following rights: <br />
          <br />
          a) <Underlined>Information</Underlined> <br />
          <br />
          According to Art. 15 of the GDPR, you have the right to obtain information about the personal data we process concerning you. This right to information includes the following details: <br />
          <Ul>
            <li>Purposes of the processing</li>
            <li>Categories of personal data</li>
            <li>Recipients or categories of recipients to whom the data has been or will be disclosed</li>
            <li>Planned storage period or, at least, the criteria for determining the storage period</li>
            <li>Existence of the right to rectification, erasure, restriction of processing, or objection</li>
            <li>Right to lodge a complaint with a supervisory authority</li>
            <li>Source of your personal data, if it was not collected from you directly</li>
            <li>Existence of automated decision-making, including profiling, and meaningful information about its details, if applicable </li>
          </Ul>
           
          b) <Underlined>Rectification</Underlined> <br />
          <br />
          According to Art. 16 of the GDPR, you have the right to obtain without undue delay the rectification of inaccurate or incomplete personal data concerning you that is stored by us. <br />
          <br />
          c) <Underlined>Erasure</Underlined> <br />
          <br />
          According to Art. 17 of the GDPR, you have the right to obtain the erasure of your personal data without undue delay if one of the following grounds applies: <br />
          <Ul>
            <li>The personal data is no longer necessary for the purposes for which it was collected or otherwise processed.</li>
            <li>You withdraw your consent on which the processing is based, and there is no other legal ground for the processing.</li>
            <li>You object to the processing pursuant to Article 21(1) of the GDPR, and there are no overriding legitimate grounds for the processing, or you object to the processing pursuant to Article 21(2) of the GDPR.</li>
            <li>The personal data has been unlawfully processed.</li>
            <li>The personal data has to be erased for compliance with a legal obligation in Union or Member State law to which the controller is subject.</li>
            <li>The personal data has been collected in relation to the offer of information society services referred to in Article 8(1) of the GDPR. </li>  
          </Ul>
          
          d) <Underlined>Restriction of Processing</Underlined> <br />
          <br />
          According to Art. 18 of the GDPR, you have the right to obtain the restriction of the processing of your personal data if one of the following applies: <br />
          <Ul>
            <li>You contest the accuracy of your personal data.</li>
            <li>The processing is unlawful, and you oppose the erasure of your personal data.</li>
            <li>We no longer need your personal data for the purposes of the processing, but you require it for the establishment, exercise, or defense of legal claims.</li>
            <li>You have objected to the processing pursuant to Article 21(1) of the GDPR, pending the verification whether the legitimate grounds of the controller override your grounds.</li>
          </Ul>
          <br />          
          a) <Underlined>Information</Underlined>  
          <br />
          If you have requested the rectification or erasure of your personal data or the restriction of its processing according to Articles 16, 17, or 18 of the GDPR, we will communicate this to all recipients to whom your personal data has been disclosed unless it proves impossible or involves disproportionate effort. You have the right to request us to inform you about these recipients. <br />
          <br />
          b) <Underlined>Data Portability</Underlined>
          <br />
          You have the right to receive the personal data you have provided to us in a structured, commonly used, and machine-readable format. <br />
          You also have the right to transmit this data to another controller, where technically feasible, if the processing is based on consent pursuant to Article 6(1)(a) or Article 9(2)(a) of the GDPR or on a contract pursuant to Article 6(1)(b) of the GDPR. <br />
          <br />
          c) <Underlined>Withdrawal</Underlined><br />
          <br />
          According to Article 7(3) of the GDPR, you have the right to withdraw your consent at any time. The withdrawal of consent shall not affect the lawfulness of processing based on consent before its withdrawal. We will no longer continue the data processing based on your revoked consent in the future. <br />
          <br />
          d) <Underlined>Complaint</Underlined> br
          <br />
          According to Article 77 of the GDPR, you have the right to lodge a complaint with a supervisory authority if you consider that the processing of your personal data infringes the GDPR. <br />
          <br />
          e) <Underlined>Objection</Underlined> <br />
          <br />
          If your personal data is processed based on legitimate interests according to Article 6(1)(f) of the GDPR, you have the right, under Article 21 of the GDPR, to object to the processing of your personal data on grounds relating to your particular situation or if the objection is directed against direct marketing. In the latter case, you have a general right to object that will be implemented by us without specifying your particular situation. If you wish to exercise your right to withdraw consent or objection, simply send an email to <EmailLink>team@growingabroad.de</EmailLink>. <br />
          <br />
          f) <Underlined>Automated Individual Decision-Making, Including Profiling</Underlined> <br />
          <br />
          You have the right not to be subject to a decision based solely on automated processing, including profiling, which produces legal effects concerning you or similarly significantly affects you. However, this does not apply if the decision is: <br />
          <br />
          <Ol>
            <li> necessary for entering into or performance of a contract between you and us</li>
            <li> authorized by Union or Member State law to which we are subject and that also lays down suitable measures to safeguard your rights, freedoms, and legitimate interests</li>
            <li> based on your explicit consent</li>
          </Ol>

          However, these decisions shall not be based on special categories of personal data referred to in Article 9(1) of the GDPR, unless Article 9(2)(a) or (g) of the GDPR applies, and suitable measures to safeguard your rights and freedoms and legitimate interests have been implemented. <br />
          Regarding the cases mentioned in i) and iii), we take adequate measures to safeguard your rights, freedoms, and legitimate interests, including at least the right to obtain human intervention on our part, to express your point of view, and to contest the decision.
        </>  
      )
    },
    {
      title: '14. Amendment of the Privacy Policy',
      paragraph: (
        <>
          If we make changes to the privacy policy, it will be clearly indicated on the website, and registered customers will be informed. <br />
          <br />
          Effective Date: June 13, 2023.
        </>  
      )
    }

    
]

