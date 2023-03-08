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
  padding: 80px 160px;
  color: ${theme.colors.primaryBlue};
  height:auto;
  width: 100%;

  @media(max-width: ${variables.sizes.mediaQuery}) {
    padding: 80px ${variables.sizes.globalHorizontalPaddingMobile} 120px;
  }
`
export const SubHeadingBlog= styled.h3`
width:100%;
font: 400 1.5rem;
text-align: center;
`
export const BlogCard = styled.div`
width:100%;
flex-wrap:wrap;
display:grid;
grid-template-columns:repeat(2,1fr);
justify-content:space-between;
justify-items:center;
margin:0 auto;
padding-top:20px;
align-items:center;
@media (max-width: ${mediaQuery}) {
  grid-template-columns:repeat(1,1fr);
  justify-content:center;
  align-items:center;
  padding: 0 42px;
}
`
