import styled, { css } from "styled-components";

export type TypeOfBlueSquare = "left-square" | "right-square";

interface SquareProps {
  type: TypeOfBlueSquare;
}

export const Square = styled.div<SquareProps>`
  width: 50vw;
  height: 35vw;
  background-color: ${({ theme }) => theme.colors.blue500};
  display: flex;
  position: absolute;
  bottom: -240px;
  min-width: 207px;
  min-height: 121px;

  @media (max-width: 1470px) {
    height: 40vw;
  }

  @media (max-width: 1280px) {
    height: 55vw;
  }

  @media (max-width: 900px) {
    height: 65vw;
  }

  ${({ theme }) => css`
    @media (max-width: ${theme.sizes.mediaQuery}) {
      height: 60vw;
    }
  `};

  @media (max-width: 630px) {
    height: 65vw;
  }

  @media (max-width: 575px) {
    width: 55vw;
    height: 70vw;
  }

  /* @media (max-width: 530px) {
    width: 60vw;
    height: 75vw;
  } */

  @media (max-width: 500px) {
    width: 60vw;
    height: 80vw;
    bottom: -200px;
  }

  ${({ theme, type }) =>
    type === "left-square" &&
    css`
      transform: rotate(25deg);
      margin-left: -25vw;
      justify-content: flex-end;
      @media (max-width: ${theme.sizes.mediaQuery}) {
        margin-left: -15vw;
      }
      @media (max-width: 575px) {
        margin-left: -20vw;
      }
      @media (max-width: 495px) {
        margin-left: -25vw;
      }
    `}
  ${({ theme, type }) =>
    type === "right-square" &&
    css`
      transform: rotate(-25deg);
      margin-right: -25vw;
      justify-content: flex-start;
      @media (max-width: ${theme.sizes.mediaQuery}) {
        margin-right: -15vw;
      }

      @media (max-width: 575px) {
        margin-right: -20vw;
      }
      @media (max-width: 495px) {
        margin-right: -25vw;
      }
    `};
`;

export const Content = styled.div<SquareProps>`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.white};
  justify-content: space-between;
  /* padding-top: 10%; */
  ${({ theme }) => css`
    @media (max-width: ${theme.sizes.mediaQuery}) {
      justify-content: center;
      width: 150%;
    }
  `}

  @media (max-width: 575px) {
    height: 75%;
    padding-bottom: 20%;
  }

  @media (max-width: 500px) {
    height: 110%;
  }

  ${({ theme, type }) =>
    type === "left-square" &&
    css`
      transform: rotate(-25deg);
      padding-left: 50%;
      align-items: flex-start;
      @media (max-width: ${theme.sizes.mediaQuery}) {
        padding-left: 35%;
        justify-content: flex-start;
      }

      @media (max-width: 630px) {
        padding-left: 25%;
        justify-content: flex-start;
      }

      @media (max-width: 575px) {
        padding-left: 35%;
      }

      @media (max-width: 500px) {
        padding-left: 50%;
      }
    `}
  ${({ theme, type }) =>
    type === "right-square" &&
    css`
      transform: rotate(25deg);
      padding-right: 50%;
      align-items: flex-end;

      @media (max-width: ${theme.sizes.mediaQuery}) {
        padding-right: 35%;
        justify-content: flex-start;

        @media (max-width: 630px) {
          padding-right: 25%;
          justify-content: flex-start;
        }
        @media (max-width: 575px) {
          padding-right: 35%;
        }
        @media (max-width: 500px) {
          padding-right: 50%;
        }
      }
    `}
      margin-top: 10%;
`;
