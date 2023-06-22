import styled, { css } from "styled-components";

export type TypeOfBlueSquare = "left-square" | "right-square";

interface SquareProps {
  type: TypeOfBlueSquare;
}

export const SquareContainer = styled.div<SquareProps>`
  width: 45vw;
  height: 35vw;
`;

export const Square = styled.div<SquareProps>`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.blue500};
  display: flex;
  position: absolute;
  bottom: -35%;

  @media (min-width: 1900px) {
    min-width: 1000px;
    min-height: 475px;
    padding-bottom: 5%;
  }

  @media (min-width: 1000px) and (max-width: 1180px) {
    bottom: -45%;
  }

  ${({ theme }) => css`
    @media (min-width: ${theme.sizes.mediaQuery}) and (max-width: 1000px) {
      bottom: -55%;
    }

    @media (max-width: ${theme.sizes.mediaQuery}) {
      bottom: -55%;
      padding-bottom: 55%;
    }
  `}

  ${({ theme, type }) =>
    type === "left-square" &&
    css`
      transform: rotate(25deg);
      left: -35%;
      justify-content: flex-end;

      @media (min-width: 1000px) and (max-width: 1180px) {
        left: -25%;
      }

      @media (max-width: ${theme.sizes.mediaQuery}) {
        left: -40%;
      }

      @media (max-width: 380px) {
        left: -45%;
      }
    `}
      ${({ theme, type }) =>
    type === "right-square" &&
    css`
      transform: rotate(-25deg);
      right: -35%;

      @media (min-width: 1000px) and (max-width: 1180px) {
        right: -25%;
      }

      @media (max-width: ${theme.sizes.mediaQuery}) {
        right: -40%;
      }
      @media (max-width: 380px) {
        right: -45%;
      }
    `};
`;

export const Content = styled.div<SquareProps>`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.white};
  justify-content: center;
  margin-top: 10%;

  @media (max-width: 1180px) {
    gap: 22%;
    justify-content: flex-start;
  }

  ${({ theme }) => css`
    @media (max-width: ${theme.sizes.mediaQuery}) {
      /* gap: 5%; */
      height: 50%;
      justify-content: center;
      padding-bottom: 8px;
    }
  `};

  @media (max-width: 410px) {
    gap: 5%;
    justify-content: flex-start;
  }

  ${({ theme, type }) =>
    type === "left-square" &&
    css`
      transform: rotate(-25deg);
      padding-left: 35%;
      align-items: flex-start;
      @media (min-width: 1000px) and (max-width: 1320px){
        padding-left: 38%;
      }
    `}
  ${({ theme, type }) =>
    type === "right-square" &&
    css`
      transform: rotate(25deg);
      padding-right: 35%;
      align-items: flex-end;

      @media (min-width: 1000px) and (max-width: 1320px) {
        padding-right: 45%;
      }

      @media (min-width: ${theme.sizes.mediaQuery}) and (max-width: 1000px) {
        padding-right: 50%;
      }
    `}
`;
