import styled from 'styled-components';
import { variables } from '@styles/global-variables';
import { theme } from '@styles/theme';

const {
  colors: { white, yellow400 },
} = theme;
const {
  sizes: { mediaQuery },
} = variables;

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
  width: 500px;
  padding-top: 20px;
  padding-left: 0px;
  gap: 10px;
  color: ${white};
  align-items: ${(props) => props.alignItems || 'left'};
  &:first-child {
    width: 402px;
    padding-left: 0px;
  }
  & h3 {
    font-size: 36px;
    color: ${white};
    margin-bottom: 20px;
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
  }
  & p {
    font-size: 20px;
    margin-bottom: 18px;
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
