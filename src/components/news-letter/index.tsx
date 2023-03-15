import { FormEvent } from 'react';
import {
  CheckboxWrapper,
  ContentInputNewsLetter,
  InputNewsLetter,
  InputWrapper,
  NewsLetterContainer,
  SubscribeWrapper,
  TitleNewsLetter,
} from './style';
import { removePxFromCssValue } from '@utils/scripts/general-utility';
import { variables } from '@styles/global-variables';
import useAppContext from '@/hooks/useAppContext';
import StdButton from '../generics/StdButton/StdButton';

export default function NewsLetter() {
  const {
    windowSize: { width },
    isMobile
  } = useAppContext();

  const handleCheckBox = (e: FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.checked) {
      e.currentTarget.value = 'false';
    } else {
      e.currentTarget.value = 'true';
    }
  };

  return (
    <>
      <NewsLetterContainer>
        <TitleNewsLetter>Join our newsletter</TitleNewsLetter>
        <ContentInputNewsLetter>
          <SubscribeWrapper>
            <InputWrapper>
              <InputNewsLetter placeholder="Enter Your Full Name" />
              <InputNewsLetter placeholder="Enter Your E-mail Adress" />
            </InputWrapper>
            <div
              style={{
                gap: '8px',

              }}
            >
              <CheckboxWrapper>
                <input onClick={(e) => handleCheckBox(e)} type="checkbox" />
                <span></span>
              </CheckboxWrapper>
              <p
                style={{
                  marginLeft: '40px',
                  fontSize: '.750rem',
                  color: 'white',
                }}
              >
                Yes, I would like to sign up for the Growing Abroad Newsletter
                and I accept the websites Privacy Policy.
              </p>
            </div>
          </SubscribeWrapper>
          <StdButton
            style={{
              display:'flex',
              alignItems: `${isMobile ? "flex-start" : "center"}`,
              justifyContent:`${isMobile ? "center" : "center"}`,
              width: `${isMobile ? "112px" : "193px"}`,
              padding: `${isMobile ? "8px 15px" : "20px 40px"}`,
              fontSize:`${isMobile ?'14px' : '16px'}`,
              height:`${isMobile ?'35px' : '54px'}`,
              textAlign: `${isMobile ? "start" : "center"}`
            }}
          >
            Subscribe
          </StdButton>
        </ContentInputNewsLetter>
      </NewsLetterContainer>
    </>
  );
}
