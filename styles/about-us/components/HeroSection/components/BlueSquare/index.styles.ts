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

  ${({ theme, type }) =>
    type === "left-square" &&
    css`
      transform: rotate(25deg);
      left: -35%;
      justify-content: flex-end;
    `}
  ${({ theme, type }) =>
    type === "right-square" &&
    css`
      transform: rotate(-25deg);
      right: -35%;
      justify-content: flex-start;
    `};
`;

export const Content = styled.div<SquareProps>`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.white};
  justify-content: space-between;

  ${({ theme, type }) =>
    type === "left-square" &&
    css`
      transform: rotate(-25deg);
      padding-left: 35%;
      align-items: flex-start;
    `}
  ${({ theme, type }) =>
    type === "right-square" &&
    css`
      transform: rotate(25deg);
      padding-right: 35%;
      align-items: flex-end;
    `}
      margin-top: 10%;
`;
