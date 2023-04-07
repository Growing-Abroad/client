import styled, { css } from 'styled-components';
import Image from 'next/image';
import { ComponentPropsWithoutRef, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface BurgerProps extends ComponentPropsWithoutRef<'div'> {
  open: boolean;
}

interface AlternativeHeaderProp {
  showAlternativeHeader?: boolean;
}

interface ContainerProps extends AlternativeHeaderProp {
  itsOpen: boolean;
}

interface ButtonsProps extends AlternativeHeaderProp {}

export const StyledBurger = styled.div<BurgerProps>`
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 15px;
  right: 20px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 120;

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s;

    &:nth-child(1) {
      transform: ${(props) => (props.open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${(props) => (props.open ? 'rotate(45deg)' : 'rotate(0)')};
      opacity: ${(props) => (props.open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${(props) => (props.open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }

  ${({ theme }) => css`
    @media (min-width: ${theme.sizes.mediaQuery}) {
      display: none;
    }
    @media (max-width: ${theme.sizes.mediaQuery}) {
      position: fixed;
    }
  `}
`;

export const Container = styled.div<ContainerProps>`
  z-index: 120;
  display: flex;
  justify-content: space-between;
  min-width: 100%;
  height: 90px;
  padding: 22px 64px;
  margin: 0;
  max-width: ${({ theme }) => theme.sizes.maxWidthAll};
  transition: all 1.5s;

  ${({ showAlternativeHeader }) =>
    showAlternativeHeader &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      opacity: 0;
      background-color: ${({ theme }) => theme.colors.white};

      animation: slide-down 400ms forwards;
      animation-iteration-count: 1;
      z-index: 250;

      @keyframes slide-down {
        0% {
          top: -100px;
          opacity: 0;
        }
        1% {
          position: fixed;
          top: -100px;
          opacity: 0.01;
        }
        100% {
          top: 10;
          opacity: 1;
        }
      }
    `}

  ${({ theme, itsOpen }) => css`
    @media (max-width: ${theme.sizes.mediaQuery}) {
      display: ${itsOpen ? 'flex' : 'none'};
      flex-direction: column;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 110;
      padding: 15px 90px 32px 22px;
      background-color: ${theme.colors.blue400};
    }
  `}
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: transparent;
`;

export const Logo = styled(Image).attrs({
  width: 150,
  height: 45,
  alt: '',
})<AlternativeHeaderProp>`
  width: 200px;
  height: auto;
  transition: all 1.5s;

  ${({ showAlternativeHeader }) =>
    showAlternativeHeader &&
    css`
      display: none;
    `}
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  padding-left: 80px;
  flex: 1;
  justify-content: space-around;

  ${({ theme }) => css`
    @media (max-width: ${theme.sizes.mediaQuery}) {
      padding: 0;
      flex-direction: column;
    }
  `}
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex: 5;
  justify-content: flex-end;
  gap: 37px;

  ${({ theme }) => css`
    @media (max-width: ${theme.sizes.mediaQuery}) {
      align-items: flex-start;
      flex-direction: column;
      justify-content: flex-start;
      flex: 2;
    }
  `}
`;

export const Button = styled.button<ButtonsProps>`
  background-color: transparent;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 12px;
  /* or 60% */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 1.3px;
  text-transform: uppercase;
  transition-duration: 1.5s;

  ${({ showAlternativeHeader, theme }) =>
    !showAlternativeHeader
      ? css`
          color: ${theme.colors.white};
        `
      : css`
          color: ${theme.colors.blue700};
        `}

  :hover {
    color: ${({ theme }) => theme.colors.blue400};
  }

  /* ${({ theme }) => css`
    @media (max-width: ${theme.sizes.mediaQuery}) {
      color: ${theme.colors.white};
    }
  `} */
`;

export const IconsContainer = styled.div`
  display: flex;
  flex: 2;
  justify-content: space-around;
  padding-left: 80px;

  ${({ theme }) => css`
    @media (max-width: ${theme.sizes.mediaQuery}) {
      flex-direction: column;
      justify-content: flex-end;
      padding: 0;
    }
  `};
`;

export const IconButton = styled.button<ButtonsProps>`
  background-color: transparent;

  .icon {
    transition-duration: 1.5s;
    ${({ showAlternativeHeader, theme }) =>
      !showAlternativeHeader
        ? css`
            color: ${theme.colors.white};
          `
        : css`
            color: ${theme.colors.blue700};
          `}
    :hover {
      color: ${({ theme }) => theme.colors.blue400};
    }
  }

  ${({ theme }) => css`
    @media (max-width: ${theme.sizes.mediaQuery}) {
      width: 32px;
      height: 32px;
      border-radius: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 50px;
    }
  `}
`;

export const Icon = styled(Image).attrs({
  width: 31,
  height: 32,
  alt: '',
  href: '',
})``;
