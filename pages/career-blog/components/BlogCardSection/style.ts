import styled from "styled-components";

import { theme } from '@styles/theme';
const {
  colors: { blue400, blue700, white },
} = theme;


export const ContainerBlogCardSection = styled.div`
width:100%;
background-color:${white};
flex-wrap:wrap;
padding-top:7%;
display:flex;
justify-content:space-between;
gap:3rem;
align-items:center;
@media (max-width: 768px) {
}
`
