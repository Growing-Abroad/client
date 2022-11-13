import { ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'

export const StyledHeader = styled.header`
  width: 100%;
  height: 65px;
  padding: 0 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;

  @media (max-width: 768px) {
      align-items: flex-start;
  }

  .logo {
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

  li {
      font-weight: 500;
      cursor: pointer;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    background-color: #00f;
    position: fixed;
    transform: ${(props) => props.open ? 'translate(0)' : 'translate(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 1.5rem;

    li {
        color: #fff;
    }
  }
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
`

interface BurgerProps extends ComponentPropsWithoutRef<"div"> {
  open: boolean
}