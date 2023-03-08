import styled from "styled-components"
import { theme } from '@styles/theme';
import { variables } from "@/styles/global-variables";
const {
  colors: { blue400, blue700, white },
} = theme;
const {
  sizes: { mediaQuery },
} = variables;



export const ContainerBlogCard = styled.div`
display: flex;
width:31rem;
gap:0.875rem;
justify-content: start;
align-items: flex-start;
height:15rem;
margin-bottom:3%;
@media (max-width: ${mediaQuery}) {
  height:10rem;
  width:25rem;
}
`
export const ContentBlogCard = styled.div`
display: flex;
flex-direction: column;
width:100%;
height:100%;
justify-content: space-between;
align-items: flex-start;
gap:0.75rem;
@media (max-width: ${mediaQuery}) {
  height:100%;
  gap:0.8rem;
  h3{
    font-size:0.875rem;
  }
  p{
    font-size:0.75rem;
    }
  }
  button{
    font-size:10px;
  }
`
export const TitleBlogCard = styled.h3`
color:${blue700};
font-weight: 600;
font-size:20px;
letter-spacing: 1.3px;
`
export const TextBlogCard = styled.p`
color:${blue700};
font-weight: 500;
font-size:0.8rem;
letter-spacing: 1.3px;

`
export const ButtonReadMore = styled.button`
color:${blue400};
display:flex;
align-items:center;
gap:2px;
letter-spacing: 1.3px;
justify-content:flex-end;
font-size:0.75rem;
font-weight:700;
background-color:${white};
border:none;
@media (max-width: ${mediaQuery}) {
  margin-bottom:5%;
};
`

