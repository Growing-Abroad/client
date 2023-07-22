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