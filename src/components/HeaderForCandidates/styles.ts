import styled, { css } from "styled-components";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface ContainerProps {
  itsOpen: boolean;
}

interface IconButtonProps {
  withoutPadding?: boolean;
}

const localMobileSize = "1160px";

export const AwesomeIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.colors.blue700};

  :hover {
    color: ${({ theme }) => theme.colors.blue400};
  }
`;

export const Header = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 60px;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  padding: 0 18px;
  z-index: 230;
  
  @media (min-width: ${localMobileSize}) {
    display: none;
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
  position: fixed;
  z-index: 100;
  background-color: white;
  
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
  
  width: 80%;
  
  background-color: transparent;

  @media (min-width: ${localMobileSize}) {
    width: 100%;
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
  width: 150px;
  
  @media (min-width: ${localMobileSize}) {
    width: 200px;
    height: auto;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0;
  
  @media (min-width: 1750px) {
    justify-content: flex-end;
  }
  
  @media (min-width: ${localMobileSize}) {
    margin-left: auto;
    flex-direction: row;
    justify-content: flex-end;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 37px;

  margin-left: 37px;
  padding-top: 110px;
  
  @media (min-width: ${localMobileSize}) {
    padding-top: initial;
    flex-direction: row;
    align-items: center;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 1;
  
  /* or 60% */
  
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  letter-spacing: 1.3px;
  text-transform: uppercase;

  white-space: nowrap;

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
  align-items: center;
  gap: 37px;
  margin-left: 37px;

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
