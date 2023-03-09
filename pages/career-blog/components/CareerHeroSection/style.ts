import styled from "styled-components";

import { theme } from '@styles/theme';
import { variables } from "@/styles/global-variables";
const {
  colors: { blue400, blue700, white },
} = theme;
const {
  sizes: { mediaQuery },
} = variables;
export const ContentHero = styled.div`
display:flex;
flex-direction:column;
height:100%;
justify-content:center;
align-items:start;
padding:0 140px;
gap:33px;
max-width:60%;
@media (max-width: ${mediaQuery}){
  padding:0 42px;
  max-width:40%;
  padding-top:12%;
  justify-content:flex-start;
  align-items:flex-start;
  div{
    max-width:100%;
    text-align:start;

  }
  div > h1{
   font-size:44px;
   padding-left:1.2rem;
    &:first-child{
      padding-left:0
    }

  }

}

`
export const SubheadingHero = styled.p`
font-size:24px;
font-weight: 400;
line-height: 38px;
width:650px;
font-style:normal;
@media (max-width: ${mediaQuery}){
  max-width:100%;
  font-size:1rem;
  line-height:27px;
  z-index:2;
  margin-bottom:86px;
  text-align:start;
  padding:0 42px;
}
`

export const NavHero = styled.nav`
display:flex;
gap:48px;
align-items:flex-start;
width: 100%;
padding: 0px 140px;
height:3rem;
border-bottom:2px solid ${blue700};
@media (max-width: ${mediaQuery}){
  flex-wrap: wrap;
  gap:12px;
  height:162px;
  margin-bottom:2rem;
  padding:0 32px 62px 42px;
}
`
export const NavList = styled.ul`
width:100%;
display:flex;
gap:48px;
height:100%;
padding:0;
@media (max-width: ${mediaQuery}){
  flex-wrap: wrap;
  gap:12px;
  justify-content:space-between;
}

`
export const NavItem = styled.li`
font-weight: 700;
font-size:20px;
letter-spacing: 1.3px;
white-space: nowrap;
width:max-content;
color:${blue700};
padding:0 0.7rem;
&:first-child{
  padding-left:0;
}
&:last-child{
  margin-left:172px;
}

@media (max-width: ${mediaQuery}){
    padding:0 1rem 0 0;
}
`
export const SearchButton = styled.button`
background-color:transparent;
border: transparent;
cursor:pointer;
align-self:start;
`
