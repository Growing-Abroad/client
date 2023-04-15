import styled, { css } from "styled-components";

interface ContentProps {
  isWorking: boolean;
  timeToRestart: number;
  startIndex: number;
}

interface ContainerProps {
  visibleItems: number;
}

export const Container = styled.div<ContainerProps>`
  max-width: 587px;
  overflow: hidden;
`;

export const Content = styled.div<ContentProps>`
  gap: 16px;
  display: flex;
  transition: all 25s ease-in-out;
  transform: translateX(-${({ startIndex }) => startIndex * 100}vw);

  ${({ isWorking, timeToRestart }) =>
    isWorking &&
    css`
      transition: none;
      animation: slide ${timeToRestart}s linear infinite;
      @keyframes slide {
        from {
          transform: translateX(0%);
        }
        to {
          transform: translateX(-115%);
        }
      }
    `}
`;
