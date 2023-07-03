import { variables } from "@/styles/global-variables";
import styled from "styled-components";
import { theme } from "@/styles/theme";
import TwoColorTitle from "@/components/two-color-title";
import StdParagraqh from "@/components/generics/StdParagraqh/StdParagraqh";
import StdButton from "@/components/generics/StdButton/StdButton";
import Image from "next/image";
import StdInput from "@/components/generics/StdInput";

const {
  colors: { blue700, yellow400, blue300, blue400 },
} = theme;
const {
  sizes: { maxWidthAll, globalHorizontalPadding, mediaQuery },
} = variables;

export const UploadCvWrapper = styled.div`
  display: flex;
  padding-inline: ${globalHorizontalPadding};
  max-width: ${maxWidthAll};
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 120px;
  gap: 40px;
  flex-direction: column;

  @media (max-width: ${mediaQuery}) {
    gap: 25px;
    padding-inline: 40px;
    margin: 60px 0;

    .upload-cv-heading2 {
      span {
        white-space: normal;
      }
    }
  }
`;

export const UploadCvDetails = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  gap: 32px;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 1026px) {
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: row;
  }
  .cv-paragraqh {
    font-weight: 500;
    max-width: 502px;
    text-align: center;
    color: ${blue700};
    margin: 0;
    @media screen and (min-width: 1026px) {
      text-align: justify;
    }
  }

  @media (max-width: ${mediaQuery}) {
    gap: 25px;
    flex-direction: column;
  }
`;

export const CvForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .allow-dropdown {
    color: #05335b;
    border: 1px solid #05335b;
    border-radius: 10px;
    padding: 0 16px;
    font-size: 1rem;
    line-height: 1.25rem;
    .selected-flag {
      .iti-flag {
        zoom: 126%;
      }
    }
    input[type="tel"] {
      height: 52px;
      padding-left: 36px;
      &:focus-visible {
        outline: unset;
      }
    }
  }
`;

export const DeclarationTitle = styled(TwoColorTitle)`
  text-align: left;
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
`;

export const UIStdParagraqh = styled(StdParagraqh)`
  margin-bottom: 32px !important;
  cursor: pointer;
  color: #4A9AFD;
  font-size: 20px;
  margin: 21px 0 0;
  
  &.cv-upload-sub {
    margin-top: 32px;
    margin-bottom: 0;
    color: ${blue400};
  }
`;

export const InfoTitle = styled(TwoColorTitle)`
  @media screen and (min-width: 1026px) {
    display: flex;
    flex-direction: column;
    text-align: left;
  }
`;

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const UIInfoButton = styled(StdButton)`
  max-width: 324px;
  margin: auto;
  @media screen and (min-width: 1026px) {
    margin: unset;
    margin-right: auto;
  }
`;

export const UIImage = styled(Image)`
  @media screen and (max-width: 767px) {
    width: 100%;
    height: auto;
  }
`;

export const SpecializationsContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  width: 50%;
  @media screen and (min-width: 768px) {
    width: 25%;
  }
  min-width: 190px;
`;

export const UIInputCheckbox = styled.input`
  min-width: 30px;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const SpecializationsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 19px 0;
  justify-content: space-between;
  span {
    width: 100%;
    margin: 0;
  }
`;

export const PrivacyContent = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const PrivacyContainer = styled.div`
  width: 100%;
  max-width: 1233px;
  margin-top: 54px;
  gap: 5px;
  display: flex;
  flex-direction: column;
  padding-inline: 1rem;
  label {
    font-size: 2rem;
    line-height: 2.438rem;
  }
`;

export const PrivacyText = styled.p`
  * {
    text-decoration: none;
  }
  font-size: 12px;
  margin: 0;
  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const UITitle = styled(TwoColorTitle)`
  justify-content: flex-start;
  width: 100%;
  font-size: 2rem;
  line-height: 2.438rem;
  text-align: left;
`;

export const UITitleInfos = styled(UITitle)`
  margin-top: 70px;
`;

export const UISubtitle = styled(StdParagraqh)`
  font-weight: 400;
  color: ${blue700};
  margin: 6px 0 36px 0;
  @media screen and (min-width: 768px) {
    margin-top: 16px;
  }
`;

export const SelectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 12px 40px;
  width: 100%;
  margin-bottom: 80px;
  align-items: end;
  margin-bottom: 12px;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ContainerField = styled.div`
  max-width: 1217px;
  width: 100%;
  padding-bottom: 24px;
  padding-inline: 40px;
  @media screen and (min-width: 768px) {
    padding-inline: 1rem;
  }
`;

export const UISelect = styled.select`
  border-radius: 10px;
  border: 1px solid #05335b;
  background: #fff;
  height: 60px;
  padding: 0 10px;
`;

export const UIOption = styled.option`
  color: #05335b;
  font-size: 14px;
  font-family: Montserrat;
  line-height: 14px;
  letter-spacing: 1.3px;
  text-transform: capitalize;
`;

export const FieldGroup = styled.div`
  margin-bottom: 12px;
  grid-template-columns: 1fr;
  display: grid;
  grid-gap: 12px 40px;
  width: 100%;
  align-items: end;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const UploadDocsContainer = styled.div`
  background-color: ${blue300};
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 60px 0 6px;
  @media screen and (min-width: 768px) {
    padding-inline: 1rem;
  }
`;

export const UploadDocsContent = styled.div`
  padding: 60px 40px 75px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: baseline;
  text-align: center;
  width: 100%;
  max-width: 1233px;
  @media screen and (min-width: 768px) {
    padding: 60px 0 75px;
  }
`;

export const FileInputLabel = styled.label`
  cursor: pointer;
  transition: 400ms;
  &:hover {
    scale: 1.1;
    .label-icon {
      color: ${blue400};
    }
  }
`;

export const DropArea = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
  padding: 40px;
  background-color: white;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='black' stroke-width='8' stroke-dasharray='12' stroke-dashoffset='0' stroke-linecap='butt'/%3e%3c/svg%3e");
`;

export const DropMessage = styled.div`
  font-weight: 300;
  font-size: 1.25rem;
  line-height: 1.5rem;
  color: ${blue700};
`;

export const FileInput = styled.input`
  display: none;
`;

export const UIStdParagraqhCustom = styled(StdParagraqh)`
  font-weight: 400;
`