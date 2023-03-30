import * as S from './style';
import ScrollBar from './VerticalBar';
import Image from 'next/image';
import index1 from '@/../public/assets/index-1.png';

export function Chapter() {
  return (
    <S.Container>
      <S.Content>
        <S.Title>Chapter</S.Title>
        <S.ContainerCards>
          <S.ContentCard>
            <Image src={index1} alt="Germany Flag" width={700} height={373} />
            <S.CardInfo>
              <S.CardTitle>Germany the land of possibilities</S.CardTitle>
              <div>
                <S.CardText>
                  <svg
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
                  </svg>
                  Learn how to earn money in Germany
                </S.CardText>
                <S.CardText>
                  <svg
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
                  </svg>
                  Learn how to earn money in Germany
                </S.CardText>
                <S.CardText>
                  <svg
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
                  </svg>
                  Learn how to earn money in Germany
                </S.CardText>
              </div>
            </S.CardInfo>
          </S.ContentCard>

          <ScrollBar />
        </S.ContainerCards>
      </S.Content>
    </S.Container>
  );
}
