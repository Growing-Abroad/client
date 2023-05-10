import styled, { css } from "styled-components";
import { ComponentPropsWithoutRef } from "react";
import { breakpoints } from "utils/constants";

const localMobileSize = "1160px";

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

export const StyledBurgerContainer = styled.div<BurgerContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  
  position: fixed;
  top: 30px;
  right: 18px;
  z-index: 115;
  
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 1.25rem;

  translate: 0 -50%;

  ${({ theme, open }) => css`
    background-color: ${open ? theme.colors.yellow400 : "transparent"};
    padding-left: ${open ? "0.5rem" : 0};
  `}

  @media (min-width: ${breakpoints.tablet.max}px) {
    top: 45px;
  }
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

  ${() => css`
    @media (min-width: ${localMobileSize}) {
      div {
        background-color: ${({ theme }) => theme.colors.blue700};
      }
    }
  `}
`;
