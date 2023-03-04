import { theme } from "@/styles/theme";
import  styled from "styled-components";

const{
    colors:{primaryBlue,blue700,white},
} = theme;
export const ContentPagination = styled.div`
width:100%;
display:flex;
justify-content:center;
align-items:center;
gap:20px;
margin-top:10%;
`
export const Button = styled.button`
width:64px;
height:64px;
border-radius:6px;
background-color:${white};
border:1px solid #BDBDBD;
text-align:center;
font-size:18px;
color:#BDBDBD;
&:hover{
    background-color:${primaryBlue};
    color:${white};
}
`
