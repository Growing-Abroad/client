import styled, { css } from 'styled-components';

interface ContentProps {
  slideWidth: number;
  slideCount: number;
}

export const Container = styled.div`
  max-width: 587px;
  overflow: hidden;
`;

export const Content = styled.div<ContentProps>`
  display: flex;
  gap: 17px;
  ${({ slideWidth, slideCount }) => css`
    width: calc((100% + ${slideWidth}px) * ${slideCount});
    transform: translateX(-${slideWidth}px);
    transition: transform 0.5s ease-in-out;
    animation: slide ${slideCount * 5}s linear infinite;
    @keyframes slide {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(calc(-${slideWidth}px * ${slideCount}));
      }
    }
  `}
`;
