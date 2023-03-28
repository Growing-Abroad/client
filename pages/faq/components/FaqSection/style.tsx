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
padding:80px 135px 181px 135px;
@media (max-width: ${mediaQuery}) {
  max-width: 430px;
  padding:25px 12px 150px 12px;
}
`
export const Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 1242px;
background-color:#F7F7FB;
border-radius:20px;
gap:29px;
padding: 56px 172px 122px 172px;
@media (max-width: ${mediaQuery}) {
  max-width: 430px;
  padding:40px 16px 88px 12px;
}
`
