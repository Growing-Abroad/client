import styled from "styled-components";

export const Wrapper = styled.div`
  width:100%;
  display:flex;
  height:auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  padding:89px 140px 262px 0px;
  gap:81px;
`
export const Content = styled.div`
max-width:1280px;
display:flex;
gap:72px;
align-items:center;
justify-content:space-between;
&:first-child{
  top:0;
  left:0;
}
`
export const RightContent = styled.div`
width:613px;
height:648px;
display:flex;
flex-direction:column;
justify-content:flex-start;
gap:61px;
`
export const TextWrapper = styled.div`
display:flex;
width:100%;
gap:32px;
align-items:center;
justify-content:center;
height:52px;

`
export const BoldSpan = styled.span`
font-weight:600;
`
export const Text = styled.p`
font-size:20px;

`
export const Icon = styled.span`
width:24px;
height:24px;
`
