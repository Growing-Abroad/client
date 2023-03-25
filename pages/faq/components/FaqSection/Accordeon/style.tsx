import styled from 'styled-components';

import { theme } from '@styles/theme';
import { variables } from '@/styles/global-variables';
const {
  colors: { blue400, blue700, white },
} = theme;
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
@media (max-width: ${mediaQuery}) {
  max-width: 430px;
}
`
interface AccordeonWrapperProps {
  isOpen: boolean
}

export const AccordeonWrapper = styled.div<AccordeonWrapperProps>`
display: flex;
flex-direction: column;
align-items: start;
justify-content: center;
width: 896px;
gap:24px;
max-height: ${props => props.isOpen ? "260px" : '132px'};
border-radius: 14px;
padding:${props => props.isOpen ? "40px 40px" : '40px 40px'};
background-color: ${white};
border: ${props => props.isOpen ? `2px solid ${blue700}` : '2px solid transparent'};
transition: max-height 1s ease-out;
box-shadow:0px 6px 16px 0px rgba(74, 58, 255, 0.19);
@media (max-width: ${mediaQuery}) {
  max-width:374px;
  max-height:267px;
  padding:22px;
  justify-content: space-between;
  height:${props => props.isOpen ? "267px" : '132px'};
  gap:10px;

  }
`
export const AccordeonHeader = styled.div<AccordeonWrapperProps>`
display: flex;
flex-direction: row;
align-items: start;
justify-content: space-between;
width: 100%;
max-height:56px;
@media (max-width: ${mediaQuery}) {
  gap:10px;
}
`
export const AccordeonTitle = styled.h3`
font-size: 26px;
font-weight: 600;
line-height: 32px;
color: ${blue700};
max-width:670px;
padding:0;
margin:0;
height: 56px;
@media (max-width: ${mediaQuery}) {
  max-width:274px;
  font-size:20px;
  line-height: 28px;
}
`
interface AccordeonButtonProps {
bgColor: string
}

export const AccordeonButton = styled.button<AccordeonButtonProps>`
display: flex;
align-items: center;
justify-content: center;
width: 51px;
height:51px;
border-radius: 50%;
background-color: ${props => props.bgColor};
border: none;
cursor: pointer;
box-shadow: 0px 5px 16px rgba(8, 15, 52, 0.06);;
@media (max-width: ${mediaQuery}) {
width: 40px;
height:40px;
img{
  width: 13px;
  height:6px;
}
}
`
export const AccordeonContent = styled.p`
display: flex;
flex-direction: column;
align-items: start;
color: ${blue700};
justify-content: start;
font-size:16px;
font-weight:500;
margin:0;
max-width:723px;
height: 67px;
@media (max-width: ${mediaQuery}) {
  line-height: 24px;
  height:133px;
}
`

