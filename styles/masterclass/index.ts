import styled from "styled-components";
import leadsBg from "@/../public/assets/images/leads-bg.jpg";
import Image from "next/image";
import StdButton from "@/components/generics/StdButton/StdButton";
import StdTextInput from "@/components/generics/StdInput/StdTextInput";
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
  a {
    text-decoration: none;
  }
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
`;

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
  @media screen and (min-width: 1020px) {
    margin: 46px auto 0 0;
  }
`;

export const UIStdButtonLogin = styled(UIStdButton)<{ disable: boolean }>`
  margin: 0 auto;
  pointer-events: ${({ disable }) => (disable ? "none" : "initial")};
  @media screen and (min-width: 1020px) {
    margin: 0 auto 0 0;
  }
`;

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
`;

export const CountdownTimerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: #05335b;
  text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-size: 64px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: capitalize;
  text-align: center;
  max-width: 324px;
  margin: 40px auto auto;
  @media screen and (min-width: 768px) {
    margin: 30px auto auto;
  }
`;

export const WhiteTitle = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 1.3px;
  text-transform: capitalize;
  margin: 73px 16px 33px;
  @media screen and (min-width: 768px) {
    font-size: 48px;
    margin: 55px 16px 23px;
  }
`;

export const CountdownTimerSubTitle = styled.h2`
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
  max-width: 743px;
  margin: auto auto 33px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    margin: auto auto 53px;
  }
`;

export const CountdownTimerText = styled.p`
  margin: 0;
  font-size: 24px;
`;

export const ThankyouItems = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 51px;
  margin: 62px 0;
  justify-content: center;
`;

export const ThankyouItem = styled.div`
  border-radius: 10px;
  border: 3px solid #05335b;
  width: 366px;
  max-height: 283px;
`;

export const ContainerIcon = styled.div`
  width: 64px;
  height: 44px;
  flex-shrink: 0;
  border-radius: 4px;
  background: #4a9afd;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-bottom: 14px;
`;

export const ThankyouItemsTitle = styled.h4`
  color: #05335b;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 1.3px;
  margin: 0;
  padding: 0 20px;
`;

export const ThankyouItemsText = styled.p`
  color: #05335b;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin: 25px 0 0;
  padding: 0 20px 20px;
`;

export const TextEmail = styled.p`
  margin: 28px auto 54px;
  color: #05335b;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  max-width: 946px;
`;

export const UIImage = styled(Image)`
  margin-top: 46px;
  margin-bottom: 32px;
  width: 100%;
  max-width: 718px;
  height: auto;
`;

export const UIParagraph = styled.p`
  margin: 0;
  color: #05335b;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const UILink = styled(Link)`
  text-decoration: none;
  button {
    display: flex;
    gap: 8px;
  }
`;

export const VideoContainer = styled.div`
  padding: 56.25% 0 0;
  position: relative;
  @media screen and (min-width: 768px) {
    padding: 439px 0 0;
  }
`;

export const VideoIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-height: 438px;
`;

export const FreeMasterClassTitle = styled.h1`
  color: #05335b;
  text-align: center;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 1.3px;
  text-transform: capitalize;
  margin: 73px 0 57px;
  @media screen and (min-width: 768px) {
    margin: 55px 0 43px;
    color: #fff;
  }
`;

export const FreeMasterClassTitleSpan = styled.span`
  color: #05335b;
  span {
    @media screen and (max-width: 767px) {
      color: #4a9afd;
    }
  }
`;


export const UILinkFreeMasterClass = styled(UILink)`
  @media screen and (min-width: 768px) {
    margin: auto auto 52px; 
  }
`