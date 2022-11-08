import styled from 'styled-components';
import { variables } from '../../styles/global-variables';
import { theme } from '../../styles/theme';

const {
  colors: { secondaryBlue, terciaryBlue },
} = theme;
const {
  sizes: {
    maxWidthAll,
    globalHorizontalPadding,
    mediaQuery,
    globalHoriznalPaddingMobile,
  },
} = variables;

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: ${terciaryBlue};
  align-items: center;
  width: 100%;
`;

export const FooterContentWrapper = styled.div`
  max-width: ${maxWidthAll};
  width: 100%;
  padding: 80px 120px;
  display: flex;
  flex-direction: column;
  gap: 60px;

  @media (max-width: ${mediaQuery}) {
    align-items: center;
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

export const FooterLinksUl = styled.ul`
`;

export const FooterLinksLi = styled.li`
  color: ${secondaryBlue};
  font-weight: 500;
  cursor: pointer;
  line-height: 2rem;
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
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
  background-color: ${secondaryBlue};
  color: white;
  width: 100%;
`;

export const FooterBottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  max-width: ${maxWidthAll};
  width: 100%;
  padding: 12px ${globalHorizontalPadding};

  @media (max-width: ${mediaQuery}) {
    align-items: center;
    flex-direction: column;
    gap: 16px;
    padding: 12px ${globalHoriznalPaddingMobile};
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
