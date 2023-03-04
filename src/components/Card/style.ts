import styled from "styled-components"
import { theme } from '@styles/theme';
const {
  colors: { blue400, blue700, white },
} = theme;


export const ContainerBlogCard = styled.div`
display: flex;
width:595px;
height:246px;
gap:14px;
justify-content: start;
align-items: flex-start;
`
export const ContentBlogCard = styled.div`
display: flex;
flex-direction: column;
width: 50%;
justify-content: center;
align-items: flex-start;
gap:19px;
`
export const TitleBlogCard = styled.h3`
color:${blue700};
font-weight: 600;
font-size:26px;
`
export const TextBlogCard = styled.p`
color:${blue700};
font-weight: 500;
font-size:16px;

`
export const ButtonReadMore = styled.button`
color:${blue400};
display:flex;
align-items:center;
gap:2px;
justify-content:flex-end;
font-size:12px;
font-weight:700;
background-color:${white};
border:none;
margin-top:5%;
justify-self:end;
`

