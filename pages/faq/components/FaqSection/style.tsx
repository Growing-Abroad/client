import styled from 'styled-components';

import { variables } from '@/styles/global-variables';
const {
  sizes: { mediaQuery },
} = variables;
export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
justify-items: center;
min-width: 100%;
height: 100%;
gap:29px;
padding:125px 307px 303px 307px;
@media (max-width: ${mediaQuery}) {
  max-width: 430px;
  padding:65px 28px 233px 28px;
}
`
