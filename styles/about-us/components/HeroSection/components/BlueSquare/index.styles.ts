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

  ${({ type }) =>
    type === "left-square" &&
    css`
      transform: rotate(25deg);
      margin-left: -25vw;
      justify-content: flex-end;
    `}
  ${({ type }) =>
    type === "right-square" &&
    css`
      transform: rotate(-25deg);
      margin-right: -25vw;
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
  /* padding-top: 10%; */

  ${({ type }) =>
    type === "left-square" &&
    css`
      transform: rotate(-25deg);
      padding-left: 50%;
      align-items: flex-start;
    `}
  ${({ type }) =>
    type === "right-square" &&
    css`
      transform: rotate(25deg);
      padding-right: 50%;
      align-items: flex-end;
    `}
      margin-top: 10%;
`;
