import styled from 'styled-components';
import {variables} from "@styles/global-variables";
import {theme} from "@styles/theme";
const {
  sizes: { mediaQuery },
} = variables;



export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  gap: 2rem;
  padding: 120px 140px 54px 140px;
  color: ${theme.colors.primaryBlue};
  height:auto;
  min-width:100%;
  & div > h2{
    margin:0;
    height:73px;
  }

  @media(max-width: ${variables.sizes.mediaQuery}) {
    padding: 65px ${variables.sizes.globalHorizontalPaddingMobile} 65px;
    gap:32px;
   & div > h2{
    margin:0;
    height:43px;
  }
}
`
export const SubHeadingBlog = styled.h4`
letter-spacing:1.3px;
text-align: center;
margin-bottom:32px;
@media (max-width: ${mediaQuery}) {
width:204px;
font-weight: 600;
font-size:16px;
line-height:24px;
letter-spacing:1.3px;
text-align: center;
margin-bottom:0;
height:54px;
}
`
export const BlogCard = styled.div`
min-width:1280px;
flex-wrap:wrap;
display:grid;
grid-template-columns:repeat(2,1fr);
align-items:end;
justify-items:end;
row-gap:45px;
column-gap:40px;
padding-top:32px;
padding-bottom:42px;
@media (max-width: ${mediaQuery}) {
  min-width:100%;
  grid-template-columns:repeat(1,1fr);
  justify-content:center;
  align-items:center;
  padding: 0 42px;
  row-gap:23px;
}
`
