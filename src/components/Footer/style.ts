import styled from 'styled-components';
import { variables } from '@styles/global-variables';
import { theme } from '@styles/theme';

const {
  colors: { primaryYellow, primaryBlue, blue500, white },
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
  background-color: ${blue500};
  align-items: center;
  width: 100%;
  position: relative;

  .wave {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;

    background-position: top;
    background-repeat: no-repeat;
    background-size: 100%;

    width: 100%;
    height: 200px;
  }
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
    padding: 56px ${globalHorizontalPaddingMobile};
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
`;

export const FooterLinksUl = styled.ul`
`;

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
`;

export const FooterBottomWrapper = styled.div`
  display: flex;
  font-weight: 600;
  justify-content: space-between;
  color: ${primaryBlue};
  margin:0 auto;
  width: 100%;
  max-width: ${maxWidthAll};
  padding: 24px ${globalHorizontalPadding};
  span{
    white-space:  nowrap;
  }

  @media (max-width: ${mediaQuery}) {
    align-items: start;
    flex-direction: column;
    gap: 16px;
    margin: 0 70px;
    padding: 12px ${globalHorizontalPaddingMobile};
    span{
      letter-spacing:1.4px;
    }
  }
`;

export const FooterBottomRight = styled.div`
  display: flex;
  gap: 32px;
  @media (max-width: ${mediaQuery}) {
    justify-content: space-between;
  }
`;

export const Links = styled.a`
  all: unset;
  color: inherit;
  cursor: pointer;
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
  width:25rem;
  gap: 10px;
  color: ${white};
  align-items: ${(props) => props.alignItems || 'center'};
  &:first-child{
    width:40rem;

  }
  @media (max-width: ${mediaQuery}) {
    flex-direction: column;
    width: 100%;
    align-items: start;
    margin-left: 70px;
    & p {
      width: 70%;
      font-size: 14px;
      text-align: start;
      height: 100%;
    }
  }
  & h3 {
    font-size: 26px;
    text-decoration: underline;
    text-underline-offset: 24px;
    color: ${white};
    margin-bottom: 50px;
  }
  & li,
  p,
  p > span {
    font-weight: 300;
    text-decoration: none;
  }
  & li {
    font-size: 16px;
  }
  & p {
    font-size: 20px;
    margin-bottom: 18px;
  }
  & p > span {
    color: ${primaryYellow};
  }
`;
export const FooterLinksContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5vw;
  width: 100%;
  @media (max-width: ${mediaQuery}) {
    margin-right:0;
    flex-direction: column;
    gap:43px;
  }
`;
