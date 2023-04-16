import * as S from './style';
import VerticalBar from './VerticalBar';
import Image from 'next/image';
import index1 from '@/../public/assets/Germany11.webp';
import index2 from '@/../public/assets/Germany12.webp';
import index3 from '@/../public/assets/Germany13.webp';
import index4 from '@/../public/assets/Germany14.webp';
import index5 from '@/../public/assets/Germany15.webp';
import useAppContext from '@/hooks/useAppContext';
import TwoColorTitle from '../two-color-title';

export function Chapter() {
  const { isMobile } = useAppContext();
  return (
    <S.Container>
      <TwoColorTitle text1='What you can expect' text2='in this Course' hasSpaceBtw />
      <S.Content>

        <S.Title>Chapter</S.Title>
        <VerticalBar />
        <S.ContainerCards>
          <S.ContentCard reverse={false}>
            <Image  className="image" src={index1} alt="Germany Flag" width={isMobile ? 372 : 700} height={isMobile ? 188 : 373} />
            <S.CardInfo>
              <S.CardTitle>Germany the land of possibilities</S.CardTitle>
              <div>
                <S.CardText>
                  <span><svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.6875 10.1665C19.6875 4.854 15.3125 0.479004 10 0.479004C4.64844 0.479004 0.3125 4.854 0.3125 10.1665C0.3125 15.5181 4.64844 19.854 10 19.854C15.3125 19.854 19.6875 15.5181 19.6875 10.1665ZM8.86719 15.3228C8.63281 15.5571 8.20312 15.5571 7.96875 15.3228L3.90625 11.2603C3.67188 11.0259 3.67188 10.5962 3.90625 10.3618L4.80469 9.50244C5.03906 9.229 5.42969 9.229 5.66406 9.50244L8.4375 12.2368L14.2969 6.37744C14.5312 6.104 14.9219 6.104 15.1562 6.37744L16.0547 7.23682C16.2891 7.47119 16.2891 7.90088 16.0547 8.13525L8.86719 15.3228Z"
                      fill="#656C8C"
                    />
                  </svg></span>
                  Learn how to earn money in Germany
                </S.CardText>
                <S.CardText>
                  <span><svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.6875 10.1665C19.6875 4.854 15.3125 0.479004 10 0.479004C4.64844 0.479004 0.3125 4.854 0.3125 10.1665C0.3125 15.5181 4.64844 19.854 10 19.854C15.3125 19.854 19.6875 15.5181 19.6875 10.1665ZM8.86719 15.3228C8.63281 15.5571 8.20312 15.5571 7.96875 15.3228L3.90625 11.2603C3.67188 11.0259 3.67188 10.5962 3.90625 10.3618L4.80469 9.50244C5.03906 9.229 5.42969 9.229 5.66406 9.50244L8.4375 12.2368L14.2969 6.37744C14.5312 6.104 14.9219 6.104 15.1562 6.37744L16.0547 7.23682C16.2891 7.47119 16.2891 7.90088 16.0547 8.13525L8.86719 15.3228Z"
                      fill="#656C8C"
                    />
                  </svg></span>
                  Discover the benefits of the German system
                </S.CardText>
                <S.CardText>
                  <span><svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.6875 10.1665C19.6875 4.854 15.3125 0.479004 10 0.479004C4.64844 0.479004 0.3125 4.854 0.3125 10.1665C0.3125 15.5181 4.64844 19.854 10 19.854C15.3125 19.854 19.6875 15.5181 19.6875 10.1665ZM8.86719 15.3228C8.63281 15.5571 8.20312 15.5571 7.96875 15.3228L3.90625 11.2603C3.67188 11.0259 3.67188 10.5962 3.90625 10.3618L4.80469 9.50244C5.03906 9.229 5.42969 9.229 5.66406 9.50244L8.4375 12.2368L14.2969 6.37744C14.5312 6.104 14.9219 6.104 15.1562 6.37744L16.0547 7.23682C16.2891 7.47119 16.2891 7.90088 16.0547 8.13525L8.86719 15.3228Z"
                      fill="#656C8C"
                    />
                  </svg></span>
                  Understand the German laws for foreigners to enter Germany
                </S.CardText>
              </div>
            </S.CardInfo>
          </S.ContentCard>
          <S.ContentCard reverse>
            <Image src={index2} className="image" alt="Germany Flag" width={isMobile ? 372 : 700} height={isMobile ? 188 : 373} />
            <S.CardInfo>
              <S.CardTitle>Process of getting
                a VISA</S.CardTitle>
              <div>
                <S.CardText>
                  <span><svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.6875 10.1665C19.6875 4.854 15.3125 0.479004 10 0.479004C4.64844 0.479004 0.3125 4.854 0.3125 10.1665C0.3125 15.5181 4.64844 19.854 10 19.854C15.3125 19.854 19.6875 15.5181 19.6875 10.1665ZM8.86719 15.3228C8.63281 15.5571 8.20312 15.5571 7.96875 15.3228L3.90625 11.2603C3.67188 11.0259 3.67188 10.5962 3.90625 10.3618L4.80469 9.50244C5.03906 9.229 5.42969 9.229 5.66406 9.50244L8.4375 12.2368L14.2969 6.37744C14.5312 6.104 14.9219 6.104 15.1562 6.37744L16.0547 7.23682C16.2891 7.47119 16.2891 7.90088 16.0547 8.13525L8.86719 15.3228Z"
                      fill="#656C8C"
                    />
                  </svg></span>
                  Learn about the requirements of getting a VISA
                </S.CardText>
                <S.CardText>
                  <span><svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.6875 10.1665C19.6875 4.854 15.3125 0.479004 10 0.479004C4.64844 0.479004 0.3125 4.854 0.3125 10.1665C0.3125 15.5181 4.64844 19.854 10 19.854C15.3125 19.854 19.6875 15.5181 19.6875 10.1665ZM8.86719 15.3228C8.63281 15.5571 8.20312 15.5571 7.96875 15.3228L3.90625 11.2603C3.67188 11.0259 3.67188 10.5962 3.90625 10.3618L4.80469 9.50244C5.03906 9.229 5.42969 9.229 5.66406 9.50244L8.4375 12.2368L14.2969 6.37744C14.5312 6.104 14.9219 6.104 15.1562 6.37744L16.0547 7.23682C16.2891 7.47119 16.2891 7.90088 16.0547 8.13525L8.86719 15.3228Z"
                      fill="#656C8C"
                    />
                  </svg></span>
                  Learn the steps you have to take to get a VISA for Germany
                </S.CardText>
                <S.CardText>
                  <span><svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.6875 10.1665C19.6875 4.854 15.3125 0.479004 10 0.479004C4.64844 0.479004 0.3125 4.854 0.3125 10.1665C0.3125 15.5181 4.64844 19.854 10 19.854C15.3125 19.854 19.6875 15.5181 19.6875 10.1665ZM8.86719 15.3228C8.63281 15.5571 8.20312 15.5571 7.96875 15.3228L3.90625 11.2603C3.67188 11.0259 3.67188 10.5962 3.90625 10.3618L4.80469 9.50244C5.03906 9.229 5.42969 9.229 5.66406 9.50244L8.4375 12.2368L14.2969 6.37744C14.5312 6.104 14.9219 6.104 15.1562 6.37744L16.0547 7.23682C16.2891 7.47119 16.2891 7.90088 16.0547 8.13525L8.86719 15.3228Z"
                      fill="#656C8C"
                    />
                  </svg></span>
                  Discover the different VISA possibilities
                </S.CardText>
              </div>
            </S.CardInfo>
          </S.ContentCard>
          <S.ContentCard reverse={false}>
            <Image src={index3} className="image" alt="Germany Flag" width={isMobile ? 372 : 700} height={isMobile ? 188 : 373} />
            <S.CardInfo>
              <S.CardTitle>Optimizing
                your application
                documents</S.CardTitle>
              <div>
                <S.CardText>
                  <span><svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.6875 10.1665C19.6875 4.854 15.3125 0.479004 10 0.479004C4.64844 0.479004 0.3125 4.854 0.3125 10.1665C0.3125 15.5181 4.64844 19.854 10 19.854C15.3125 19.854 19.6875 15.5181 19.6875 10.1665ZM8.86719 15.3228C8.63281 15.5571 8.20312 15.5571 7.96875 15.3228L3.90625 11.2603C3.67188 11.0259 3.67188 10.5962 3.90625 10.3618L4.80469 9.50244C5.03906 9.229 5.42969 9.229 5.66406 9.50244L8.4375 12.2368L14.2969 6.37744C14.5312 6.104 14.9219 6.104 15.1562 6.37744L16.0547 7.23682C16.2891 7.47119 16.2891 7.90088 16.0547 8.13525L8.86719 15.3228Z"
                      fill="#656C8C"
                    />
                  </svg></span>
                  Learn step by step to optimize your CV, Cover letter, LinkedIn Profile and other relevant documents into German standards
                </S.CardText>
                <S.CardText>
                  <span><svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.6875 10.1665C19.6875 4.854 15.3125 0.479004 10 0.479004C4.64844 0.479004 0.3125 4.854 0.3125 10.1665C0.3125 15.5181 4.64844 19.854 10 19.854C15.3125 19.854 19.6875 15.5181 19.6875 10.1665ZM8.86719 15.3228C8.63281 15.5571 8.20312 15.5571 7.96875 15.3228L3.90625 11.2603C3.67188 11.0259 3.67188 10.5962 3.90625 10.3618L4.80469 9.50244C5.03906 9.229 5.42969 9.229 5.66406 9.50244L8.4375 12.2368L14.2969 6.37744C14.5312 6.104 14.9219 6.104 15.1562 6.37744L16.0547 7.23682C16.2891 7.47119 16.2891 7.90088 16.0547 8.13525L8.86719 15.3228Z"
                      fill="#656C8C"
                    />
                  </svg></span>
                  Develop your Business appearance to the next level to be ahead of your competition
                </S.CardText>
                <S.CardText>
                  <span><svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.6875 10.1665C19.6875 4.854 15.3125 0.479004 10 0.479004C4.64844 0.479004 0.3125 4.854 0.3125 10.1665C0.3125 15.5181 4.64844 19.854 10 19.854C15.3125 19.854 19.6875 15.5181 19.6875 10.1665ZM8.86719 15.3228C8.63281 15.5571 8.20312 15.5571 7.96875 15.3228L3.90625 11.2603C3.67188 11.0259 3.67188 10.5962 3.90625 10.3618L4.80469 9.50244C5.03906 9.229 5.42969 9.229 5.66406 9.50244L8.4375 12.2368L14.2969 6.37744C14.5312 6.104 14.9219 6.104 15.1562 6.37744L16.0547 7.23682C16.2891 7.47119 16.2891 7.90088 16.0547 8.13525L8.86719 15.3228Z"
                      fill="#656C8C"
                    />
                  </svg></span>
                  Learn about the Growing Abroad method to get tons of job interviews
                </S.CardText>
              </div>
            </S.CardInfo>
          </S.ContentCard>
          <S.ContentCard reverse>
            <Image src={index4} className="image" alt="Germany Flag" width={isMobile ? 372 : 700} height={isMobile ? 188 : 373} />
            <S.CardInfo>
              <S.CardTitle>Job Search
                Strategy to find
                the right jobs
                in Germany</S.CardTitle>
              <div>
                <S.CardText>
                  <span><svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.6875 10.1665C19.6875 4.854 15.3125 0.479004 10 0.479004C4.64844 0.479004 0.3125 4.854 0.3125 10.1665C0.3125 15.5181 4.64844 19.854 10 19.854C15.3125 19.854 19.6875 15.5181 19.6875 10.1665ZM8.86719 15.3228C8.63281 15.5571 8.20312 15.5571 7.96875 15.3228L3.90625 11.2603C3.67188 11.0259 3.67188 10.5962 3.90625 10.3618L4.80469 9.50244C5.03906 9.229 5.42969 9.229 5.66406 9.50244L8.4375 12.2368L14.2969 6.37744C14.5312 6.104 14.9219 6.104 15.1562 6.37744L16.0547 7.23682C16.2891 7.47119 16.2891 7.90088 16.0547 8.13525L8.86719 15.3228Z"
                      fill="#656C8C"
                    />
                  </svg></span>
                  Discover the secret methods to find English speaking jobs in Germany
                </S.CardText>
                <S.CardText>
                  <span><svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.6875 10.1665C19.6875 4.854 15.3125 0.479004 10 0.479004C4.64844 0.479004 0.3125 4.854 0.3125 10.1665C0.3125 15.5181 4.64844 19.854 10 19.854C15.3125 19.854 19.6875 15.5181 19.6875 10.1665ZM8.86719 15.3228C8.63281 15.5571 8.20312 15.5571 7.96875 15.3228L3.90625 11.2603C3.67188 11.0259 3.67188 10.5962 3.90625 10.3618L4.80469 9.50244C5.03906 9.229 5.42969 9.229 5.66406 9.50244L8.4375 12.2368L14.2969 6.37744C14.5312 6.104 14.9219 6.104 15.1562 6.37744L16.0547 7.23682C16.2891 7.47119 16.2891 7.90088 16.0547 8.13525L8.86719 15.3228Z"
                      fill="#656C8C"
                    />
                  </svg></span>
                  Learn about the proven Growing Abroad Storytelling method to show credibility in the interview
                </S.CardText>
                <S.CardText>
                  <span><svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.6875 10.1665C19.6875 4.854 15.3125 0.479004 10 0.479004C4.64844 0.479004 0.3125 4.854 0.3125 10.1665C0.3125 15.5181 4.64844 19.854 10 19.854C15.3125 19.854 19.6875 15.5181 19.6875 10.1665ZM8.86719 15.3228C8.63281 15.5571 8.20312 15.5571 7.96875 15.3228L3.90625 11.2603C3.67188 11.0259 3.67188 10.5962 3.90625 10.3618L4.80469 9.50244C5.03906 9.229 5.42969 9.229 5.66406 9.50244L8.4375 12.2368L14.2969 6.37744C14.5312 6.104 14.9219 6.104 15.1562 6.37744L16.0547 7.23682C16.2891 7.47119 16.2891 7.90088 16.0547 8.13525L8.86719 15.3228Z"
                      fill="#656C8C"
                    />
                  </svg></span>
                  Learn about different strategies to impress the interviewer
                </S.CardText>
                <S.CardText>
                  <span><svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.6875 10.1665C19.6875 4.854 15.3125 0.479004 10 0.479004C4.64844 0.479004 0.3125 4.854 0.3125 10.1665C0.3125 15.5181 4.64844 19.854 10 19.854C15.3125 19.854 19.6875 15.5181 19.6875 10.1665ZM8.86719 15.3228C8.63281 15.5571 8.20312 15.5571 7.96875 15.3228L3.90625 11.2603C3.67188 11.0259 3.67188 10.5962 3.90625 10.3618L4.80469 9.50244C5.03906 9.229 5.42969 9.229 5.66406 9.50244L8.4375 12.2368L14.2969 6.37744C14.5312 6.104 14.9219 6.104 15.1562 6.37744L16.0547 7.23682C16.2891 7.47119 16.2891 7.90088 16.0547 8.13525L8.86719 15.3228Z"
                      fill="#656C8C"
                    />
                  </svg></span>
                  Discover the research process of the company and the hiring managers
                </S.CardText>
              </div>
            </S.CardInfo>
          </S.ContentCard>
          <S.ContentCard reverse={false}>
            <Image src={index5} className="image" alt="Germany Flag" width={isMobile ? 372 : 700} height={isMobile ? 188 : 373} />
            <S.CardInfo>
              <S.CardTitle>Discover the research process of the company and the hiring managers</S.CardTitle>
              <div>
                <S.CardText>
                  <span><svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.6875 10.1665C19.6875 4.854 15.3125 0.479004 10 0.479004C4.64844 0.479004 0.3125 4.854 0.3125 10.1665C0.3125 15.5181 4.64844 19.854 10 19.854C15.3125 19.854 19.6875 15.5181 19.6875 10.1665ZM8.86719 15.3228C8.63281 15.5571 8.20312 15.5571 7.96875 15.3228L3.90625 11.2603C3.67188 11.0259 3.67188 10.5962 3.90625 10.3618L4.80469 9.50244C5.03906 9.229 5.42969 9.229 5.66406 9.50244L8.4375 12.2368L14.2969 6.37744C14.5312 6.104 14.9219 6.104 15.1562 6.37744L16.0547 7.23682C16.2891 7.47119 16.2891 7.90088 16.0547 8.13525L8.86719 15.3228Z"
                      fill="#656C8C"
                    />
                  </svg></span>
                  Learn effective strategies to answer the most important interview questions
                </S.CardText>
                <S.CardText>
                  <span><svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.6875 10.1665C19.6875 4.854 15.3125 0.479004 10 0.479004C4.64844 0.479004 0.3125 4.854 0.3125 10.1665C0.3125 15.5181 4.64844 19.854 10 19.854C15.3125 19.854 19.6875 15.5181 19.6875 10.1665ZM8.86719 15.3228C8.63281 15.5571 8.20312 15.5571 7.96875 15.3228L3.90625 11.2603C3.67188 11.0259 3.67188 10.5962 3.90625 10.3618L4.80469 9.50244C5.03906 9.229 5.42969 9.229 5.66406 9.50244L8.4375 12.2368L14.2969 6.37744C14.5312 6.104 14.9219 6.104 15.1562 6.37744L16.0547 7.23682C16.2891 7.47119 16.2891 7.90088 16.0547 8.13525L8.86719 15.3228Z"
                      fill="#656C8C"
                    />
                  </svg></span>
                  Learn about the proven Growing Abroad Storytelling method to show credibility in the interview
                </S.CardText>
                <S.CardText>
                  <span><svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.6875 10.1665C19.6875 4.854 15.3125 0.479004 10 0.479004C4.64844 0.479004 0.3125 4.854 0.3125 10.1665C0.3125 15.5181 4.64844 19.854 10 19.854C15.3125 19.854 19.6875 15.5181 19.6875 10.1665ZM8.86719 15.3228C8.63281 15.5571 8.20312 15.5571 7.96875 15.3228L3.90625 11.2603C3.67188 11.0259 3.67188 10.5962 3.90625 10.3618L4.80469 9.50244C5.03906 9.229 5.42969 9.229 5.66406 9.50244L8.4375 12.2368L14.2969 6.37744C14.5312 6.104 14.9219 6.104 15.1562 6.37744L16.0547 7.23682C16.2891 7.47119 16.2891 7.90088 16.0547 8.13525L8.86719 15.3228Z"
                      fill="#656C8C"
                    />
                  </svg></span>
                  Learn about different strategies to impress the interviewer
                </S.CardText>
                <S.CardText>
                  <span><svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.6875 10.1665C19.6875 4.854 15.3125 0.479004 10 0.479004C4.64844 0.479004 0.3125 4.854 0.3125 10.1665C0.3125 15.5181 4.64844 19.854 10 19.854C15.3125 19.854 19.6875 15.5181 19.6875 10.1665ZM8.86719 15.3228C8.63281 15.5571 8.20312 15.5571 7.96875 15.3228L3.90625 11.2603C3.67188 11.0259 3.67188 10.5962 3.90625 10.3618L4.80469 9.50244C5.03906 9.229 5.42969 9.229 5.66406 9.50244L8.4375 12.2368L14.2969 6.37744C14.5312 6.104 14.9219 6.104 15.1562 6.37744L16.0547 7.23682C16.2891 7.47119 16.2891 7.90088 16.0547 8.13525L8.86719 15.3228Z"
                      fill="#656C8C"
                    />
                  </svg></span>
                  Discover the research process of the company and the hiring managers
                </S.CardText>
              </div>
            </S.CardInfo>
          </S.ContentCard>
          <S.ContentCard reverse>
            <Image src={index3} className="image" alt="Germany Flag" width={isMobile ? 372 : 700} height={isMobile ? 188 : 373} />
            <S.CardInfo>
              <S.CardTitle>Rock your job interview and land your dream job</S.CardTitle>
              <div>
                <S.CardText>
                  <span><svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.6875 10.1665C19.6875 4.854 15.3125 0.479004 10 0.479004C4.64844 0.479004 0.3125 4.854 0.3125 10.1665C0.3125 15.5181 4.64844 19.854 10 19.854C15.3125 19.854 19.6875 15.5181 19.6875 10.1665ZM8.86719 15.3228C8.63281 15.5571 8.20312 15.5571 7.96875 15.3228L3.90625 11.2603C3.67188 11.0259 3.67188 10.5962 3.90625 10.3618L4.80469 9.50244C5.03906 9.229 5.42969 9.229 5.66406 9.50244L8.4375 12.2368L14.2969 6.37744C14.5312 6.104 14.9219 6.104 15.1562 6.37744L16.0547 7.23682C16.2891 7.47119 16.2891 7.90088 16.0547 8.13525L8.86719 15.3228Z"
                      fill="#656C8C"
                    />
                  </svg></span>
                  Learn effective methods to deal with nervousness and anxiety
                </S.CardText>
                <S.CardText>
                  <span><svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.6875 10.1665C19.6875 4.854 15.3125 0.479004 10 0.479004C4.64844 0.479004 0.3125 4.854 0.3125 10.1665C0.3125 15.5181 4.64844 19.854 10 19.854C15.3125 19.854 19.6875 15.5181 19.6875 10.1665ZM8.86719 15.3228C8.63281 15.5571 8.20312 15.5571 7.96875 15.3228L3.90625 11.2603C3.67188 11.0259 3.67188 10.5962 3.90625 10.3618L4.80469 9.50244C5.03906 9.229 5.42969 9.229 5.66406 9.50244L8.4375 12.2368L14.2969 6.37744C14.5312 6.104 14.9219 6.104 15.1562 6.37744L16.0547 7.23682C16.2891 7.47119 16.2891 7.90088 16.0547 8.13525L8.86719 15.3228Z"
                      fill="#656C8C"
                    />
                  </svg></span>
                  Learn how to impress in all the 6 phases of a job interview with psychological hacks
                </S.CardText>
                <S.CardText>
                  <span><svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.6875 10.1665C19.6875 4.854 15.3125 0.479004 10 0.479004C4.64844 0.479004 0.3125 4.854 0.3125 10.1665C0.3125 15.5181 4.64844 19.854 10 19.854C15.3125 19.854 19.6875 15.5181 19.6875 10.1665ZM8.86719 15.3228C8.63281 15.5571 8.20312 15.5571 7.96875 15.3228L3.90625 11.2603C3.67188 11.0259 3.67188 10.5962 3.90625 10.3618L4.80469 9.50244C5.03906 9.229 5.42969 9.229 5.66406 9.50244L8.4375 12.2368L14.2969 6.37744C14.5312 6.104 14.9219 6.104 15.1562 6.37744L16.0547 7.23682C16.2891 7.47119 16.2891 7.90088 16.0547 8.13525L8.86719 15.3228Z"
                      fill="#656C8C"
                    />
                  </svg></span>
                  Learn about different strategies to impress the interviewer
                </S.CardText>
                <S.CardText>
                  <span><svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.6875 10.1665C19.6875 4.854 15.3125 0.479004 10 0.479004C4.64844 0.479004 0.3125 4.854 0.3125 10.1665C0.3125 15.5181 4.64844 19.854 10 19.854C15.3125 19.854 19.6875 15.5181 19.6875 10.1665ZM8.86719 15.3228C8.63281 15.5571 8.20312 15.5571 7.96875 15.3228L3.90625 11.2603C3.67188 11.0259 3.67188 10.5962 3.90625 10.3618L4.80469 9.50244C5.03906 9.229 5.42969 9.229 5.66406 9.50244L8.4375 12.2368L14.2969 6.37744C14.5312 6.104 14.9219 6.104 15.1562 6.37744L16.0547 7.23682C16.2891 7.47119 16.2891 7.90088 16.0547 8.13525L8.86719 15.3228Z"
                      fill="#656C8C"
                    />
                  </svg></span>
                  Learn methods how to stay in the head of the interviewers during and after the interview
                </S.CardText>
              </div>
            </S.CardInfo>
          </S.ContentCard>

          <div  className='bonus'>
         <S.CardTitle>
          Bonus Chapter with Expert Interviews
        </S.CardTitle></div>
        </S.ContainerCards>
      </S.Content>
    </S.Container>
  );
}
