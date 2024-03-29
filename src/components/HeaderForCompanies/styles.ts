import styled, { css } from "styled-components";
import Image from "next/image";
import { ComponentPropsWithoutRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface BurgerProps extends ComponentPropsWithoutRef<"div"> {
  open: boolean;
}

interface ContainerProps {
  itsOpen: boolean;
}

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

  :hover {
    cursor: pointer;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s;

    &:nth-child(1) {
      transform: ${(props) => (props.open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${(props) => (props.open ? "rotate(45deg)" : "rotate(0)")};
      opacity: ${(props) => (props.open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${(props) => (props.open ? "rotate(-45deg)" : "rotate(0)")};
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
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 90px;
  padding: 22px 64px;
  margin: 0;

  ${({ theme, itsOpen }) => css`
    @media (max-width: ${theme.sizes.mediaQuery}) {
      display: ${itsOpen ? "flex" : "none"};
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

export const LogoContainer = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: transparent;
`;

export const Logo = styled(Image).attrs({
  width: 150,
  height: 45,
  alt: "",
})``;

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
      flex: 2;
    }
  `}
`;

export const Button = styled.button`
  background-color: transparent;
  font-family: "Montserrat";
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

  color: ${({ theme }) => theme.colors.blue700};

  :hover {
    color: ${({ theme }) => theme.colors.blue400};
  }

  ${({ theme }) => css`
    @media (max-width: ${theme.sizes.mediaQuery}) {
      :hover {
        c olor: ${theme.colors.white};
      }
    }
  `}
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

export const IconButton = styled.div`
  background-color: transparent;
  color: white;

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
  alt: "",
  href: "",
})``;

export const AwesomeIcon = styled(FontAwesomeIcon).attrs({
  size: "2xl",
})`
  color: ${({ theme }) => theme.colors.blue700};

  :hover {
    color: ${({ theme }) => theme.colors.blue400};
    cursor: pointer;
  }

  ${({ theme }) => css`
    @media (max-width: ${theme.sizes.mediaQuery}) {
      :hover {
        color: ${({ theme }) => theme.colors.white};
        cursor: pointer;
      }
    }
  `}
`;
