import styled, { css } from "styled-components";
import Image from "next/image";
import { ComponentPropsWithoutRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface BurgerContainerProps {
  open: boolean;
}

interface BurgerProps
  extends ComponentPropsWithoutRef<"div">,
    BurgerContainerProps {
  isForDesktop?: boolean;
  hasALitBackground?: boolean;
  bg?: string;
  hoveredBG?: string;
}

export interface ContainerProps {
  itsOpen: boolean;
}

interface IconButtonProps {
  withoutPadding?: boolean;
}

const localMobileSize = "1160px";

export const StyledBurgerContainer = styled.div<BurgerContainerProps>`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 115;

  ${({ theme, open }) => css`
    @media (max-width: ${localMobileSize}) {
      position: fixed;
      top: 10px;
      right: 25px;

      background-color: ${open ? theme.colors.yellow400 : "transparent"};
      padding-left: ${open ? "0.5rem" : 0};
    }
  `}
`;

export const StyledBurger = styled.div<BurgerProps>`
  position: relative;
  width: 2rem;
  height: 2rem;

  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 115;
  :hover {
    cursor: pointer;

    div {
      background-color: ${({ theme, bg }) => bg ?? theme.colors.blue400};
    }
  }

  div {
    width: 2rem;
    height: 0.25rem;
    ${({ theme, hasALitBackground }) =>
      !hasALitBackground
        ? css`
            background-color: ${theme.colors.white};
          `
        : css`
            background-color: ${theme.colors.blue700};
          `};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s;

    &:nth-child(1) {
      transform: ${(props) => (props.open ? "rotate(45deg)" : "rotate(0)")};
      width: ${({ open }) => (open ? "1.5rem" : "2rem")};
      margin-top: ${({ open }) => (open ? "0.25rem" : "0")};
      margin-left: ${({ open }) => (open ? "0.25rem" : "0")};
    }
    &:nth-child(2) {
      transform: ${(props) => (props.open ? "rotate(45deg)" : "rotate(0)")};
      opacity: ${(props) => (props.open ? 0 : 1)};
      width: ${({ open }) => (open ? "1.5rem" : "2rem")};
    }
    &:nth-child(3) {
      transform: ${(props) => (props.open ? "rotate(-45deg)" : "rotate(0)")};
      width: ${({ open }) => (open ? "1.5rem" : "2rem")};
      margin-left: ${({ open }) => (open ? "0.25rem" : "0")};
      margin-bottom: ${({ open }) => (open ? "0.25rem" : "0")};
    }
  }

  ${({ theme }) => css`
    @media (min-width: ${localMobileSize}) {
      div {
        background-color: ${({ theme }) => theme.colors.blue700};
      }
    }
    @media (max-width: ${localMobileSize}) {
      /* position: fixed;
      top: 15px;
      right: 20px; */
    }
  `}
`;

export const AwesomeIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.colors.blue700};

  :hover {
    color: ${({ theme }) => theme.colors.blue400};
  }
`;

export const Header = styled.div`
  display: none;
  @media (max-width: ${localMobileSize}) {
    position: fixed;
    width: 100%;
    height: 60px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 18px;
    z-index: 230;
  }
`;

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1514px;
  height: 90px;
  padding: 22px 50px;
  margin: 0;
  transition: all 0.5s ease-in-out;
  animation: drop-down;

  ${({ theme, itsOpen }) => css`
    @media (max-width: ${localMobileSize}) {
      flex-direction: column;
      overflow: hidden;
      height: ${!itsOpen ? 0 : "100vh"};
      position: fixed;
      top: 0;
      left: 0;
      z-index: 110;
      padding: 15px 90px 32px 22px;
      background-color: ${theme.colors.blue700};
    }
  `}
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;

  @media (max-width: ${localMobileSize}) {
    width: 80%;
    align-items: center;
  }

  :hover {
    cursor: pointer;
  }
`;

export const Logo = styled(Image).attrs({
  width: 150,
  height: 45,
  alt: "",
})`
  width: 200px;
  height: auto;

  ${({ theme }) => css`
    @media (max-width: ${localMobileSize}) {
      width: 150px;
    }
  `};
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  padding-left: 158px;
  flex: 1;
  justify-content: space-around;

  @media (min-width: 1750px) {
    justify-content: flex-end;
  }

  ${({ theme }) => css`
    @media (max-width: ${localMobileSize}) {
      padding: 0;
      flex-direction: column;
    }
  `}
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex: 5;
  justify-content: flex-start;
  gap: 37px;

  ${({ theme }) => css`
    @media (max-width: ${localMobileSize}) {
      padding-top: 110px;
      flex-direction: column;
      align-items: flex-start;
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
    @media (max-width: ${localMobileSize}) {
      color: ${theme.colors.white};
      :hover {
        color: ${({ theme }) => theme.colors.blue400};
      }
    }
  `}
`;

export const IconsContainer = styled.div`
  display: flex;
  flex: 3;
  justify-content: space-around;
  align-items: center;
  gap: 37px;
  padding-left: 37px;

  @media (min-width: 1750px) {
    gap: 37px;
    justify-content: flex-start;
    flex: 1;
  }

  @media (max-width: ${localMobileSize}) {
    flex-direction: column;
    justify-content: flex-end;
  }
`;

export const IconButton = styled.button<IconButtonProps>`
  background-color: transparent;

  @media (max-width: ${localMobileSize}) {
    width: 32px;
    height: 32px;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: ${({ withoutPadding }) => (withoutPadding ? 0 : "50px")};
    z-index: 300;
  }
`;

export const Icon = styled(Image).attrs({
  width: 31,
  height: 32,
  alt: "",
  href: "",
})``;
