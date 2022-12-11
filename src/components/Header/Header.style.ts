import { variables } from '@/styles/global-variables';
import { theme } from '@/styles/theme';
import { ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'

const { colors: { secondaryBlue, primaryBlue } } = theme;

export const StyledHeader = styled.header`
  width: 100%;
  height: 65px;
  padding: 0 ${variables.sizes.globalHorizontalPadding};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 1000;


  @media (max-width: 768px) {
    align-items: center;
    padding: 0 16px;
    position: unset;
 
  }
`
export const HeaderContent = styled.div`
  width: min(100%, 1440px);

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.img`
  height: 42px;
  cursor: pointer;
`

export const StyledUl = styled.ul<BurgerProps>`
  list-style: none;
  display: flex;
  gap: 24px;
  z-index: 18;
  padding-left: 24px;
  
  li {
      font-weight: 500;
      font-size: 1.25rem;
      cursor: pointer;
      color: ${primaryBlue};

  }

  a { 
    text-decoration: none;
    color: ${primaryBlue};;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    background-color: ${secondaryBlue};
    position: fixed;
    transform: ${(props) => props.open ? 'translate(0)' : 'translate(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 16px;

    li {
        color: #fff;
        font-size: 1.5rem;

    }
  }
`

export const BurguerLogo = styled.img<BurgerProps>`
  height: 42px;
  z-index: 19;
  width: min-content;
  margin-bottom: 24px;
  display: ${(props) => props.open ? 'inital' : 'none'};
`

export const StyledBurger = styled.div<BurgerProps>`
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 15px;
  right: 20px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 20;

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${(props) => props.open ? "#ccc" : "#333"};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s;

    &:nth-child(1) {
        transform: ${(props) => props.open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
        transform: ${(props) => props.open ? 'rotate(45deg)' : 'rotate(0)'};
        opacity: ${(props) => props.open ? 0 : 1};
    }
    &:nth-child(3) {
        transform: ${(props) => props.open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
  @media (max-width: 768px) {
    position: fixed;
  }
`

interface BurgerProps extends ComponentPropsWithoutRef<"div"> {
  open: boolean
}