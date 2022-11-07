import { FormEvent } from 'react';
import { Button, Input } from '../../styles/global-styles';
import { theme } from '../../styles/theme';
import TwoColorTitle from '../two-color-title';
import { CheckboxWrapper } from './style';

export default function NewsLetter() {
  const handleCheckBox = (e: FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.checked) {
      e.currentTarget.value = 'false';
    } else {
      e.currentTarget.value = 'true';
    }
  };

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px' }}
    >
      <TwoColorTitle text1="News" text2="Letter" fontSize="32px" />
      <Input
        placeholder="Name"
        style={{
          borderColor: theme.colors.primaryBlue,
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
    </div>
  );
}
