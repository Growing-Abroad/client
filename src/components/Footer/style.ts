import styled from "styled-components";
import { variables } from "@styles/global-variables";
import { theme } from "@styles/theme";

const {
  colors: { primaryYellow, primaryBlue,secondaryBlue, terciaryBlue, white },
} = theme;
const {
  sizes: {
    maxWidthAll,
    globalHorizontalPadding,
    mediaQuery,
    globalHorizontalPaddingMobile,
  },
} = variables;

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: ${secondaryBlue};
  align-items: center;
  width: 100%;
`;

export const FooterContentWrapper = styled.div`
  max-width: ${maxWidthAll};
  width: 100%;
  padding: 80px ${globalHorizontalPadding};
  display: flex;
  flex-direction: column;
  gap: 60px;

  @media (max-width: ${mediaQuery}) {
    align-items: center;
    justify-content: center;
    padding: 80px ${globalHorizontalPaddingMobile};
  }
`;

export const FooterContent = styled.div`
  display: flex;
  gap: 32px;

  @media (max-width: ${mediaQuery}) {
    align-items: center;
    flex-direction: column;
    gap: 48px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  gap: 48px;
  width: 100%;
`;

export const FooterLinksUl = styled.ul``;

export const FooterLinksLi = styled.li`
  color: ${white};
  font-weight: 500;
  cursor: pointer;
  line-height: 2rem;
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  @media (max-width: ${mediaQuery}) {
    align-items: center;
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  gap: 16px;
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
  justify-content: center;
  background-color: ${white};
  color: white;
  width: 100%;
`;

export const FooterBottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  color:${primaryBlue};
  max-width: ${maxWidthAll};
  width: 100%;
  padding: 24px ${globalHorizontalPadding};

  @media (max-width: ${mediaQuery}) {
    align-items: center;
    flex-direction: column;
    gap: 16px;
    padding: 12px ${globalHorizontalPaddingMobile};
  }
`;

export const FooterBottomRight = styled.div`
  display: flex;
  gap: 32px;
`;

export const Links = styled.a`
  all: unset;
  color: inherit;
  cursor: pointer;
`;
export const FooterLinksContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 105px;
  width: 100%;
  &:first-child {
    margin-right: 293px;
  }
  @media (max-width: ${mediaQuery}) {
    margin-right:0;
    flex-direction: column;
    gap:43px;
  }
`;
export const FooterLinks = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-weight: 600;
  gap: 10px;
  color: ${white};
  & h3 {
    font-size: 32px;
    text-decoration: underline;
    text-underline-offset: 24px;
    color: ${white};
    margin-bottom:50px;
  }
  & li,
  p,
  p > span {
    font-weight: 400;
    text-decoration: none;
  }
  & li {
    font-size: 16px;
  }
  & p {
    font-size: 20px;
    margin-bottom:18px;
  }
  & p > span {
    color: ${primaryYellow};
  }
`;
