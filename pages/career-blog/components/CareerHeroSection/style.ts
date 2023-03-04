import styled from "styled-components";

import { theme } from '@styles/theme';
const {
  colors: { blue400, blue700, white },
} = theme;

interface IContainerHeroProps{
  backgroundImage:string
}

export const ContainerHero = styled.div<IContainerHeroProps>`
max-width:90%;
background-image:url('${({backgroundImage})=>backgroundImage}');
background-repeat:no-repeat;
height:612px;
display:flex;
margin:0 10%;
flex-direction:column;
border-bottom: 2px solid ${blue700};
.border-image{
width:100%;
bottom:0;
left:0;
}
`
export const line= styled.hr`
width:100%;

height:2px;
background-color:${blue700};`

export const ContentHero = styled.div`
display:flex;
flex-direction:column;
height:100%;
justify-content:center;
align-items:flex-start;
width:50%;
`
export const SubheadingHero = styled.p`
font-size:24px;
font-weight: 600;
line-height: 38px;
`

export const NavHero = styled.nav`
display:flex;
justify-content:space-between;
align-items:flex-start;
max-width:100%;
height:44px;
padding:0 160px 18px 0px;
`
export const NavList = styled.ul`
display:flex;
gap:48px;
`
export const NavItem = styled.li`
font-weight: 700;
font-size:20px;
letter-spacing: 1.3px;
color:${blue700};
`
export const SearchButton = styled.button`
background-color:transparent;
border: transparent;
cursor:pointer;
`
