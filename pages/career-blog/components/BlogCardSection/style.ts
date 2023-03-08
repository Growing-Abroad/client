import styled from "styled-components";

import { theme } from '@styles/theme';
import { variables } from "@/styles/global-variables";
const {
  colors: { blue400, blue700, white },
} = theme;
const {
  sizes: { mediaQuery },
} = variables;


export const ContainerBlogCardSection = styled.div`
width:100%;
background-color:${white};
flex-wrap:wrap;
padding: 0px 140px;
padding-top:7%;
display:grid;
grid-template-columns:repeat(2,1fr);
justify-content:space-between;
align-items:center;
@media (max-width: ${mediaQuery}) {
  grid-template-columns:repeat(1,1fr);
  justify-content:center;
  align-items:center;
  padding: 0 42px;
}
`
