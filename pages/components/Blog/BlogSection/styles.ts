import styled from 'styled-components';
import {variables} from "@styles/global-variables";
import {theme} from "@styles/theme";


export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  gap: 2rem;
  padding: 80px 160px;
  color: ${theme.colors.primaryBlue};
  height:auto;
  width: 100%;

  @media(max-width: ${variables.sizes.mediaQuery}) {
    padding: 80px ${variables.sizes.globalHorizontalPaddingMobile} 120px;
  }
`
export const SubHeadingBlog= styled.h3`
width:50%;
font: 500 1rem;
text-align: center;
`
export const BlogCard = styled.div`
width:100%;
flex-wrap:wrap;
padding-top:2%;
display:flex;
gap:3rem;
align-items:flex-start;
div{
display:flex;
justify-content:space-between;
align-items:flex-start;
}

@media (max-width: 768px) {
 gap:3rem;
}
`
