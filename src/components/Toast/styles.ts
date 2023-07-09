import styled, { keyframes } from 'styled-components';

const fadeOutAnimation = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(50px);
  }
`;

export const ToastContainer = styled.div<{ fadeOut?: boolean }>`
  z-index: 1;
  position: fixed;
  bottom: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  color: #fff;
  padding: 12px 16px;
  border-radius: 2px;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 24px;
  color: #FFFFFF;
  background: #FF5F47;

  ${({ fadeOut }) =>
    fadeOut &&
    `
    animation-name: ${fadeOutAnimation};
  `}
`;