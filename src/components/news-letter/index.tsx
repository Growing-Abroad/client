import { FormEvent } from 'react';
import { Button, Input } from '@styles/global-styles';
import TwoColorTitle from '@components/two-color-title';
import { CheckboxWrapper, NewsLetterContainer } from './style';

export default function NewsLetter() {
  const handleCheckBox = (e: FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.checked) {
      e.currentTarget.value = 'false';
    } else {
      e.currentTarget.value = 'true';
    }
  };

  return (
    <NewsLetterContainer >
      <TwoColorTitle text1="News" text2="Letter" fontSize="32px" fullWidth />
      <Input
        placeholder="Name"
        style={{
          margin: '16px 0px 8px',
        }}
      />
      <Input placeholder="E-mail" />
      <div
        style={{
          display: 'flex',
          gap: '8px',
          margin: '18px 0',
        }}
      >
        <CheckboxWrapper>
          <input onClick={(e) => handleCheckBox(e)} type="checkbox" />
          <span></span>
        </CheckboxWrapper>
        <p style={{ fontSize: '.750rem' }}>
          Yes, I would like to sign up for the Growing Abroad Newsletter and I
          accept the websites Privacy Policy.
        </p>
      </div>
      <Button fontSize="24px">Subscribe</Button>
    </NewsLetterContainer>
  );
}
