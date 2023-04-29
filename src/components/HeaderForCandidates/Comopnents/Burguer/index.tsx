import React from 'react'
import { StyledBurger } from './styles'

interface Props {
    isForDesktop?: boolean
    open: boolean
    bgColor?: string
    handleClick: () => void
}

export const Burger = ({ bgColor, open, isForDesktop, handleClick }: Props) => {
  return (
          <StyledBurger
            isForDesktop={isForDesktop}
            open={open}
            onClick={handleClick}
            hasALitBackground
            bg={bgColor}
          >
            <div></div>
            <div></div>
            <div></div>
          </StyledBurger>
  )
}
