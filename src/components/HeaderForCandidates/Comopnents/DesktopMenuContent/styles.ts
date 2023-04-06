import Image from 'next/image';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import type { ContainerProps } from '../../styles';
import { theme } from '@/styles/theme';

interface LiProps {
  isLit?: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: fixed;
  top: -110vh;
  left: 0;
  width: 100%;
  height: 110vh;
  padding: 0 140px;
  background-color: ${({ theme }) => theme.colors.blue700};
  border-radius: 0 0 20px 20px;
  z-index: 115;
  overflow: hidden;
  transition: all 500ms;
  transition-delay: 0.025s;
  ${({ itsOpen }) =>
    itsOpen &&
    css`
      top: 0;
    `}
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
`;

export const LogoContainer = styled.div``;

export const Logo = styled(Image)``;

export const CloseButton = styled.button`
  width: 3rem;
  height: 3rem;
  border-radius: 1.5rem;
  background-color: ${({ theme }) => theme.colors.yellow400};
  color: ${({ theme }) => theme.colors.blue700};

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 66px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
  flex: 1;
  padding-top: 50px;

  justify-content: space-between;

  color: ${({ theme }) => theme.colors.white};
`;

export const LeftSideContainer = styled.nav`
  padding-right: 0;
  display: flex;
  height: 100%;
  flex: 1;
  justify-content: flex-start;
`;

export const LeftSideContent = styled.ul`
  width: 100%;

  :hover {
    div:not(:hover) {
      opacity: 0.25;
    }
  }
`;

export const MenuItemContainer = styled.div`
  /* width: 100%; */
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  :hover {
    color: ${({ theme }) => theme.colors.blue400};
    cursor: pointer;

    .awesome-icon {
      color: ${({ theme }) => theme.colors.blue400};
    }
  }
`;

export const RSMenuItem = styled.li`
  height: 100%;
  font-family: 'Montserrat';
  font-size: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  :hover {
    color: ${({ theme }) => theme.colors.blue400};
    cursor: pointer;
  }
`;

export const RightSideContainer = styled.nav`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  align-items: flex-start;
`;

export const RightSideContent = styled.ul`
  width: 100%;
  padding: 32px 0 0 150px;

  :hover {
    div:not(:hover) {
      opacity: 0.5;
    }
  }
`;

export const LSMenuItem = styled.li<LiProps>`
  font-family: 'Montserrat';
  font-size: 36px;
  ${({ isLit, theme }) =>
    isLit &&
    css`
      color: ${theme.colors.blue400};
      text-transform: uppercase;
      font-weight: 700;
      font-size: 1.125rem;
      line-height: 1.1rem;

      .awesome-ico {
        color: ${theme.colors.blue400};
      }
    `}
`;

export const Divider = styled.div`
  width: 75%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Description = styled.p`
  font-family: 'Montserrat';
  font-size: 16px;
  line-height: 0.875rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const AwesomeIcon = styled(FontAwesomeIcon).attrs({
  icon: faArrowRight,
  size: 'xl',
  className: 'awesome-icon',
  color: 'transparent',
})``;
