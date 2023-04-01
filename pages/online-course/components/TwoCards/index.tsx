import Image from 'next/image';
import * as S from './style';
import onlineCourse from '@/../public/assets/Photos-Main-Page/online-course-success.webp';
import StdButton from '@/components/generics/StdButton/StdButton';
import TwoColorTitle from '@/components/two-color-title';
import useAppContext from '@/hooks/useAppContext';

export function TwoCards() {
  const { isMobile } = useAppContext();
  return (
    <S.Container>
      <TwoColorTitle
        text1="Who is this"
        styles={{ fontSize:`${isMobile ?'36px' :'60px'}`, display:'flex', flexWrap:'wrap', width:`${isMobile ?'334px' :''}`, justifyContent:'center'}}
        text2="Online Course for?"
      />
      <S.ContentTwoCards>
        <S.TwoCardsWrapper>
          <Image
            src={onlineCourse}
            alt=""
            width={isMobile ? 383 : 454}
            height={isMobile ? 194 : 265}
            style={{ borderRadius: '10px' }}
          />
          <h3>
            <svg
               width={isMobile ? 64 : 64}
               height={isMobile ? 39 : 61}
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 28H3C1.25 28 0 29.375 0 31V61C0 62.75 1.25 64 3 64H13C14.625 64 16 62.75 16 61V31C16 29.375 14.625 28 13 28ZM8 59C6.25 59 5 57.75 5 56C5 54.375 6.25 53 8 53C9.625 53 11 54.375 11 56C11 57.75 9.625 59 8 59ZM48 10.25C48 1 42 0 39 0C36.375 0 35.25 5 34.75 7.25C34 10 33.375 12.75 31.5 14.625C27.5 18.75 25.375 23.875 20.375 28.75C20.125 29.125 20 29.5 20 29.875V56.625C20 57.375 20.625 58 21.375 58.125C23.375 58.125 26 59.25 28 60.125C32 61.875 36.875 64 42.875 64H43.25C48.625 64 55 64 57.5 60.375C58.625 58.875 58.875 57 58.25 54.75C60.375 52.625 61.375 48.625 60.375 45.375C62.5 42.5 62.75 38.375 61.5 35.5C63 34 64 31.625 63.875 29.375C63.875 25.5 60.625 22 56.5 22H43.75C44.75 18.5 48 15.5 48 10.25Z"
                fill="#7ED957"
              />
            </svg>
            It's for ...
          </h3>
          <div>
            <S.CardText>
              <span>
                {' '}
                <svg
                  width="26"
                  height="20"
                  viewBox="0 0 26 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.10938 18.625C9.57812 19.0938 10.375 19.0938 10.8438 18.625L24.625 4.84375C25.0938 4.375 25.0938 3.57812 24.625 3.10938L22.9375 1.42188C22.4688 0.953125 21.7188 0.953125 21.25 1.42188L10 12.6719L4.70312 7.42188C4.23438 6.95312 3.48438 6.95312 3.01562 7.42188L1.32812 9.10938C0.859375 9.57812 0.859375 10.375 1.32812 10.8438L9.10938 18.625Z"
                    fill="#7ED957"
                  />
                </svg>
              </span>
              People with a very good knowledge of English
            </S.CardText>
            <S.CardText>
              <span>
                {' '}
                <svg
                  width="26"
                  height="20"
                  viewBox="0 0 26 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.10938 18.625C9.57812 19.0938 10.375 19.0938 10.8438 18.625L24.625 4.84375C25.0938 4.375 25.0938 3.57812 24.625 3.10938L22.9375 1.42188C22.4688 0.953125 21.7188 0.953125 21.25 1.42188L10 12.6719L4.70312 7.42188C4.23438 6.95312 3.48438 6.95312 3.01562 7.42188L1.32812 9.10938C0.859375 9.57812 0.859375 10.375 1.32812 10.8438L9.10938 18.625Z"
                    fill="#7ED957"
                  />
                </svg>
              </span>
              People with a university degree (except lawyers and doctors)
            </S.CardText>
            <S.CardText>
              <span>
                {' '}
                <svg
                  width="26"
                  height="20"
                  viewBox="0 0 26 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.10938 18.625C9.57812 19.0938 10.375 19.0938 10.8438 18.625L24.625 4.84375C25.0938 4.375 25.0938 3.57812 24.625 3.10938L22.9375 1.42188C22.4688 0.953125 21.7188 0.953125 21.25 1.42188L10 12.6719L4.70312 7.42188C4.23438 6.95312 3.48438 6.95312 3.01562 7.42188L1.32812 9.10938C0.859375 9.57812 0.859375 10.375 1.32812 10.8438L9.10938 18.625Z"
                    fill="#7ED957"
                  />
                </svg>
              </span>
              People with a university degree (except lawyers and doctors)
            </S.CardText>
            <S.CardText>
              <span>
                {' '}
                <svg
                  width="26"
                  height="20"
                  viewBox="0 0 26 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.10938 18.625C9.57812 19.0938 10.375 19.0938 10.8438 18.625L24.625 4.84375C25.0938 4.375 25.0938 3.57812 24.625 3.10938L22.9375 1.42188C22.4688 0.953125 21.7188 0.953125 21.25 1.42188L10 12.6719L4.70312 7.42188C4.23438 6.95312 3.48438 6.95312 3.01562 7.42188L1.32812 9.10938C0.859375 9.57812 0.859375 10.375 1.32812 10.8438L9.10938 18.625Z"
                    fill="#7ED957"
                  />
                </svg>
              </span>
              People who are motivated and want to achieve something in life
            </S.CardText>
            <S.CardText>
              <span>
                {' '}
                <svg
                  width="26"
                  height="20"
                  viewBox="0 0 26 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.10938 18.625C9.57812 19.0938 10.375 19.0938 10.8438 18.625L24.625 4.84375C25.0938 4.375 25.0938 3.57812 24.625 3.10938L22.9375 1.42188C22.4688 0.953125 21.7188 0.953125 21.25 1.42188L10 12.6719L4.70312 7.42188C4.23438 6.95312 3.48438 6.95312 3.01562 7.42188L1.32812 9.10938C0.859375 9.57812 0.859375 10.375 1.32812 10.8438L9.10938 18.625Z"
                    fill="#7ED957"
                  />
                </svg>
              </span>
              People from all over the world and people who are already living
              in Germany
            </S.CardText>
          </div>
        </S.TwoCardsWrapper>
        <S.TwoCardsWrapper className="right-card">
          <Image
            src={onlineCourse}
            alt=""
            width={isMobile ? 383 : 454}
            height={isMobile ? 194 : 265}
          />
          <h3>
            {' '}
            <svg
               width={isMobile ? 64 : 64}
               height={isMobile ? 39 : 61}
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 7V37C0 38.75 1.25 40 3 40H13C14.625 40 16 38.75 16 37V7C16 5.375 14.625 4 13 4H3C1.25 4 0 5.375 0 7ZM5 32C5 30.375 6.25 29 8 29C9.625 29 11 30.375 11 32C11 33.75 9.625 35 8 35C6.25 35 5 33.75 5 32ZM39 64C42 64 48 63 48 53.875C48 48.625 44.75 45.625 43.75 42H56.5C60.625 42 63.875 38.625 64 34.75C64 32.5 63 30.125 61.5 28.625C62.75 25.75 62.5 21.625 60.375 18.75C61.375 15.5 60.375 11.5 58.25 9.375C58.875 7.125 58.625 5.25 57.5 3.75C55 0.125 48.625 0 43.25 0H42.875C36.875 0.125 32 2.25 28 4C26 4.875 23.375 6 21.375 6C20.625 6.125 20 6.75 20 7.5V34.25C20 34.75 20.125 35.125 20.375 35.375C25.375 40.25 27.5 45.375 31.5 49.5C33.375 51.375 34 54.125 34.75 56.875C35.25 59.125 36.375 64 39 64Z"
                fill="#FA6E59"
              />
            </svg>
            It's NOT for ...
          </h3>
          <div>
            <S.CardText>
              <span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.3438 9L17.0312 4.3125C17.6406 3.75 17.6406 2.8125 17.0312 2.25L16 1.21875C15.4375 0.609375 14.5 0.609375 13.9375 1.21875L9.25 5.90625L4.51562 1.21875C3.95312 0.609375 3.01562 0.609375 2.45312 1.21875L1.42188 2.25C0.8125 2.8125 0.8125 3.75 1.42188 4.3125L6.10938 9L1.42188 13.7344C0.8125 14.2969 0.8125 15.2344 1.42188 15.7969L2.45312 16.8281C3.01562 17.4375 3.95312 17.4375 4.51562 16.8281L9.25 12.1406L13.9375 16.8281C14.5 17.4375 15.4375 17.4375 16 16.8281L17.0312 15.7969C17.6406 15.2344 17.6406 14.2969 17.0312 13.7344L12.3438 9Z"
                    fill="#FA6E59"
                  />
                </svg>
              </span>
              People with no education
            </S.CardText>
            <S.CardText>
              <span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.3438 9L17.0312 4.3125C17.6406 3.75 17.6406 2.8125 17.0312 2.25L16 1.21875C15.4375 0.609375 14.5 0.609375 13.9375 1.21875L9.25 5.90625L4.51562 1.21875C3.95312 0.609375 3.01562 0.609375 2.45312 1.21875L1.42188 2.25C0.8125 2.8125 0.8125 3.75 1.42188 4.3125L6.10938 9L1.42188 13.7344C0.8125 14.2969 0.8125 15.2344 1.42188 15.7969L2.45312 16.8281C3.01562 17.4375 3.95312 17.4375 4.51562 16.8281L9.25 12.1406L13.9375 16.8281C14.5 17.4375 15.4375 17.4375 16 16.8281L17.0312 15.7969C17.6406 15.2344 17.6406 14.2969 17.0312 13.7344L12.3438 9Z"
                    fill="#FA6E59"
                  />
                </svg>
              </span>
              People with only basic level of English
            </S.CardText>
            <S.CardText>
              <span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.3438 9L17.0312 4.3125C17.6406 3.75 17.6406 2.8125 17.0312 2.25L16 1.21875C15.4375 0.609375 14.5 0.609375 13.9375 1.21875L9.25 5.90625L4.51562 1.21875C3.95312 0.609375 3.01562 0.609375 2.45312 1.21875L1.42188 2.25C0.8125 2.8125 0.8125 3.75 1.42188 4.3125L6.10938 9L1.42188 13.7344C0.8125 14.2969 0.8125 15.2344 1.42188 15.7969L2.45312 16.8281C3.01562 17.4375 3.95312 17.4375 4.51562 16.8281L9.25 12.1406L13.9375 16.8281C14.5 17.4375 15.4375 17.4375 16 16.8281L17.0312 15.7969C17.6406 15.2344 17.6406 14.2969 17.0312 13.7344L12.3438 9Z"
                    fill="#FA6E59"
                  />
                </svg>
              </span>
              People with only basic level of English
            </S.CardText>
            <S.CardText>
              <span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.3438 9L17.0312 4.3125C17.6406 3.75 17.6406 2.8125 17.0312 2.25L16 1.21875C15.4375 0.609375 14.5 0.609375 13.9375 1.21875L9.25 5.90625L4.51562 1.21875C3.95312 0.609375 3.01562 0.609375 2.45312 1.21875L1.42188 2.25C0.8125 2.8125 0.8125 3.75 1.42188 4.3125L6.10938 9L1.42188 13.7344C0.8125 14.2969 0.8125 15.2344 1.42188 15.7969L2.45312 16.8281C3.01562 17.4375 3.95312 17.4375 4.51562 16.8281L9.25 12.1406L13.9375 16.8281C14.5 17.4375 15.4375 17.4375 16 16.8281L17.0312 15.7969C17.6406 15.2344 17.6406 14.2969 17.0312 13.7344L12.3438 9Z"
                    fill="#FA6E59"
                  />
                </svg>
              </span>
              People who are motivated and want to achieve something in life
            </S.CardText>
          </div>
        </S.TwoCardsWrapper>
      </S.ContentTwoCards>
      <StdButton style={{ width: '181px' }}>Buy Now</StdButton>
    </S.Container>
  );
}
export default TwoCards;
