import styled, { css } from "styled-components";
import { variables } from "@styles/global-variables";
import { theme } from "@styles/theme";
import StdButton from "../generics/StdButton/StdButton";

const {
  colors: { yellow400, blue700, blue500, white },
} = theme;
const {
  sizes: { maxWidthAll, mediaQuery },
} = variables;

export interface IFooter {
  usePageBody?: boolean;
  hideBlueSection?: boolean;
}

export const FooterContainer = styled.footer<IFooter>`
  width: 100%;
  z-index: 20;

  ${({usePageBody})=> {
    if (usePageBody) {
      return css`
      `
    }
  }}
`

export const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${blue500};
  align-items: center;
  width: 100%;
  position: relative;

  .wave {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;

    background-position: top;
    background-repeat: no-repeat;
    background-size: 100%;

    width: 100%;
    height: 200px;

    @media screen and (min-width: 64rem) {
      top: -20px;
      border-top: 5rem solid #fff;
    }
  }
`;

export const FooterContentWrapper = styled.div`
  max-width: ${maxWidthAll};
  width: 100%;
  padding: 80px 80px;
  display: flex;
  flex-direction: column;
  gap: 60px;

  @media (max-width: ${mediaQuery}) {
    align-items: flex-start;
    justify-content: flex-start;
    padding: 70px 32px 56px;
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  gap: 11px;
`;

interface IMedia {
  src: string;
}
export const Media = styled.img<IMedia>`
  src: ${(props) => props.src};
  height: 32px;
  width: 32px;
  cursor: pointer;
`;

export const FooterBottomContainer = styled.div`
  display: flex;
  background-color: ${white};
  color: white;
  width: 100%;
  box-shadow: 0px 8px 10px 2px rgba(0, 0, 0, 0.3);
`;

export const FooterBottomWrapper = styled.div`
  display: flex;
  font-weight: 600;
  justify-content: space-between;
  color: ${blue700};
  margin: 0 auto;
  width: 100%;
  max-width: ${maxWidthAll};
  padding: 24px 74px;
  font-size: 12px;
  span {
    white-space: nowrap;
  }

  @media (max-width: ${mediaQuery}) {
    align-items: start;
    flex-direction: column;
    gap: 16px;
    padding: 12px 44px;
    span {
      letter-spacing: 1.4px;
    }
  }
`;

export const FooterBottomRight = styled.div`
  display: flex;
  gap: 32px;
  @media (max-width: ${mediaQuery}) {
    gap: 87px;
  }
`;

export const Links = styled.a`
  all: unset;
  color: inherit;
  cursor: pointer;
  letter-spacing: 1.3px;
`;

interface IFooterLinksProps {
  width?: string;
  alignItems?: string;
}
export const FooterLinks = styled.ul<IFooterLinksProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width};
  font-weight: 600;
  width: 246px;
  gap: 10px;
  color: ${white};
  align-items: ${(props) => props.alignItems || "center"};
  &:first-child {
    width: 402px;
    padding-left: 0px;
  }
  & h3 {
    font-size: 26px;
    text-decoration: underline;
    text-underline-offset: 24px;
    color: ${white};
    margin-bottom: 30px;
    white-space: nowrap;
  }
  & li,
  p,
  p > span {
    font-weight: 300;
    text-decoration: none;
  }
  & li {
    font-size: 16px;
    white-space: nowrap;

    :hover {
      cursor: pointer;
    }
  }
  & p {
    font-size: 20px;
    margin-bottom: 18px;

    :hover {
      cursor: pointer;
    }
  }
  & p > span {
    color: ${yellow400};
  }
  @media (max-width: ${mediaQuery}) {
    flex-direction: column;
    width: 100%;
    align-items: start;
    padding: 0;
    gap: 8px;
    & p {
      max-width: 304px;
      font-size: 14px;
      font-weight: 500;
      text-align: start;
      height: 100%;
    }
    & h3 {
      font-size: 24px;
      text-decoration: underline;
      text-underline-offset: 20px;
      color: ${white};
      margin-bottom: 30px;
    }
  }
`;
export const FooterLinksContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5vw;
  width: 100%;
  @media (max-width: ${mediaQuery}) {
    margin-right: 0;
    flex-direction: column;
    align-items: flex-start;
    gap: 43px;
  }
`;


export const ImgBG = styled.div`
  &::before {
    content: "";
      width: 100%;
      height: 5px;
      background: #fff;
      display: flex;
      margin-top: -4px;
    @media screen and (min-width: 1024px){
      margin-top: -2px;
    }
  }
` 

export const StdButtonCustom = styled(StdButton)`
  display: flex;
  justify-content: center;
  width: 143px;
  padding: 8px 15px;
  font-size: 12px;
  margin: 0;

  @media screen and (min-width: 769px) {
    width: 210px;
    padding: 20px 40px;
    font-size: 16px;
  }
`