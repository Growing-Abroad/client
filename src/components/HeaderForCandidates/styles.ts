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
  padding: 0 78px 0 18px;
  z-index: 230;
  
  @media (min-width: ${localMobileSize}) {
    display: none;
  }
`;

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  position: fixed;
  z-index: 110;
  top: 0;
  
  width: 100%;
  max-width: 1514px;
  margin: 0 auto;
  padding: 15px 90px 32px 22px;
  
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  animation: drop-down;
  
  ${({ theme, itsOpen }) => css`
    height: ${!itsOpen ? 0 : "100vh"};
    background-color: ${theme.colors.blue700};
    
    @media (min-width: ${localMobileSize}) {
      flex-direction: row;
      height: 90px;
      
      background-color: white;
      padding: 22px 50px;
    }
  `}
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  width: fit-content;
  
  background-color: transparent;

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
  
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  letter-spacing: 1.3px;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => css`
    @media (min-width: ${localMobileSize}) {
      color: ${theme.colors.blue700};
    }
  `}
 
  :hover {
    color: ${({ theme }) => theme.colors.blue400};
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 37px;
  margin-left: 37px;

  @media (min-width: 1750px) {
    flex: 1;
  }
  
  @media (min-width: ${localMobileSize}) {
    justify-content: flex-start;
    flex-direction: row;
  }
`;

export const IconButton = styled.button<IconButtonProps>`
  background-color: transparent;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${({ withoutPadding }) => (withoutPadding ? 0 : "50px")};
  z-index: 300;

  @media (min-width: ${localMobileSize}) {
    margin-bottom: initial;
  }
`;

export const Icon = styled(Image).attrs({
  width: 31,
  height: 32,
  alt: "",
  href: "",
})``;
