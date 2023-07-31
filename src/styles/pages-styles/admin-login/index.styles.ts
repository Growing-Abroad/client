import styled from 'styled-components';
import {variables} from "@styles/global-variables";
import { theme } from '@/styles/theme';


const {sizes: {mediaQuery}} = variables;
const {colors: { blue700}} = theme;

export const FormWrapper = styled.div`
  padding: 100px 12px 12px;
  max-width: 100%;
  width: 350px;

  .logo-img {
    width: 100%;
    height: auto;
    margin-bottom: 16px;
  }

  @media (max-width: ${mediaQuery}) {
    padding-top: 24px;
  }
`

export const LoginForm = styled.form`
  padding: 16px;
  border: 1.5px solid ${blue700};

  width: 100%;
  max-width: 100%;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const InputWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`

export const PasswordTypeButton = styled.button`
  all: unset;
  cursor: pointer;
  border-radius: 50px;
  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  right: 6px;
  margin: auto 0;
  top: 0;
  bottom: 0;

  &:hover {
    background-color: rgba(0,0,0,.05)
  }
`;