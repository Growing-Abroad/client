import { variables } from "@/styles/global-variables";
import { theme } from "@/styles/theme";
import styled from "styled-components";

const {sizes: {
    maxWidthAll, 
    globalHorizontalPadding, 
    globalHorizontalPaddingMobile, 
    mediaQuery
}} = variables;
const {colors: {blue400, blue700}} = theme;


export const DataPrivacyContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  padding-top: 140px;
  padding-bottom: 120px;

  @media (max-width: ${mediaQuery}) {
    padding-bottom: 60px;
    padding-top: 100px;
  }
`

export const DataPrivacyContent = styled.div`
  flex-grow: 1;
  width: 100%;
  padding-inline: ${globalHorizontalPadding};
  max-width: ${maxWidthAll};

  @media (max-width: ${mediaQuery}) {
    padding-inline: ${globalHorizontalPaddingMobile};
    
  }

  .link-to {
    text-decoration: underline;
    color: ${blue700};
    &:hover {
      color: ${blue400};
    }
  }
`

export const DataPrivacyTitle = styled.h1`
  color: ${blue700};
  font-size: 3rem;
  line-height: 3.75rem;
  font-weight: 600;
  letter-spacing: 1.3px;
  margin-bottom: 55px;

  @media (max-width: ${mediaQuery}) {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
`

export const DataPrivacyTitle2 = styled.h2`
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 1.875rem;
  color: ${blue700};
  margin-top: 30px;

  @media (max-width: ${mediaQuery}) {
    font-size: 1.25rem;
    line-height: 1.5rem;
  }
`

export const DataPrivacyParagraph = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: ${blue700};
  margin: 0;
`



export const Underlined = styled.span`
  text-decoration: underline;
`

export const ItalicText = styled.i`
  font-style: italic;
`

export const BoldText = styled.b`
  font-style: bold;  
`

export const Ul = styled.ul`
  list-style-type: disc;
  &.coaching li {
    list-style: none;
  }
  
  li {
    display: list-item;
    list-style: disc;
  }
`

export const Ol = styled.ol`
  li {
    display: list-item;
    list-style: lower-roman;
  }
`