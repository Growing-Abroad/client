import styled from "styled-components";
import leadsBg from "@/../public/assets/images/leads-bg.jpg";
import Image from "next/image";
import StdButton from "@/components/generics/StdButton/StdButton";
import StdTextInput from "@/components/generics/StdInput/StdTextInput";
import StdInput from "@/components/generics/StdInput";
import Link from "next/link";

export const ContainerFunnelPagesContainer = styled.div`
  background: #f1f1f1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  background-image: url(${leadsBg.src});
  background-size: auto 100%;
  background-repeat: repeat-x;
  padding: 0 16px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1020px) {
    justify-content: center;
  }
`;

export const ContainerLogin = styled(Container)`
    @media screen and (min-width: 1267px) {
      margin-left: 88px;
  }
`



export const ImageUanManu = styled(Image)`
  height: auto;
  width: 100%;
  object-fit: contain;
  padding: 0 16px;
  object-position: bottom;
  max-width: 507px;
  margin: auto auto 0;
  @media screen and (min-width: 1020px) {
    margin: 42px 0 0 auto;
  }
`;

export const MasterlassTitle = styled.h1`
  margin-top: 54.78px;
  color: #05335b;
  text-align: center;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 1.3px;
  margin-bottom: 43px;
  @media screen and (min-width: 1020px) {
    font-size: 74px;
    text-align: left;
    margin: 78px auto 0;
    max-width: 1136px;
  }
`;

export const MasterlassSpan = styled.span`
  color: #ffdb5c;
`;

export const MasterclassItem = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;

export const ContentItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 55px;
  min-height: calc(100vh - 255px);
  @media screen and (min-width: 1020px) {
    flex-direction: row;
    max-width: 1236px;
    margin: auto;
    width: 100%;
  }
`;

export const ContentItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const ItemText = styled.p`
  max-width: 514px;
  margin: 0;
  color: #05335b;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
`;

export const UIStdButton = styled(StdButton)`
  margin: 46px auto 0;
  @media screen and (min-width: 1020px){
    margin: 46px auto 0 0;    
  }
`;

export const UIStdButtonLogin = styled(UIStdButton)`
  margin: 0 auto;
  @media screen and (min-width: 1020px){
    margin: 0 auto 0 0;    
  }
`

export const MasterlassTitleLogin = styled(MasterlassTitle)`
  @media screen and (min-width: 1020px) {
    max-width: 1063px;
    font-size: 60px;
  }
`;

export const CvForm = styled.form`
  gap: 8px;
  display: flex;
  flex-direction: column;
  [for="name"],
  [for="email"] {
    display: none;
  }
`;

export const StdTextInputMasterclass = styled(StdTextInput)`
  border-radius: 50px;
  border: 1px solid #05335b;
  background: #fff;
`;

export const CheckoboxInputMasterclass = styled.input`
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  &:focus-visible {
    outline: none;
  }
`;

export const LabelCheckbox = styled.label`
  display: flex;
    align-items: center;
    gap: 12px;
`;

export const LabelCheckboxText = styled.p`
  margin: 0;
  color: #05335b;
  font-size: 13px;
  font-style: normal;
  font-weight: 300;
  line-height: 24px;
  max-width: 541px;
`;

export const LabelCheckboxLink = styled(Link)`
  color: #05335b;
  text-decoration-line: underline;
`;


export const ContentItemsLogin = styled(ContentItems)`
  @media screen and (min-width: 1020px) {
    max-width: 1063px;
  }
  @media screen and (min-width: 1267px) {
    max-width: 1236px;
  }
`