import { FormEvent } from 'react';
import {
  CheckboxWrapper,
  ContentInputNewsLetter,
  InputNewsLetter,
  InputWrapper,
  NewsLetterContainer,
  SubscribeButton,
  SubscribeWrapper,
  TitleNewsLetter,
} from './style';
import { removePxFromCssValue } from '@utils/scripts/general-utility';
import { variables } from '@styles/global-variables';
import useAppContext from '@/hooks/useAppContext';

export default function NewsLetter() {
  const {
    windowSize: { width },
  } = useAppContext();

  const handleCheckBox = (e: FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.checked) {
      e.currentTarget.value = 'false';
    } else {
      e.currentTarget.value = 'true';
    }
  };

  return (<>
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
              margin: '18px 0',
            }}
          >
            <CheckboxWrapper>
              <input onClick={(e) => handleCheckBox(e)} type="checkbox" />
              <span></span>
            </CheckboxWrapper>
            <p style={{ marginLeft:'40px',fontSize: '.750rem', color: 'white' }}>
              Yes, I would like to sign up for the Growing Abroad Newsletter and
              I accept the websites Privacy Policy.
            </p>
          </div>
        </SubscribeWrapper>
        <SubscribeButton width='153px' fontSize='16px' height='50px'>Subscribe</SubscribeButton>
      </ContentInputNewsLetter>
    </NewsLetterContainer>
    </>);
}
