import styled from 'styled-components';

import { theme } from '@styles/theme';
import { variables } from '@/styles/global-variables';

const {
  colors: { blue700, white },
} = theme;
const {
  sizes: { mediaQuery },
} = variables;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-items: center;
  min-width: 100%;
  height: 100%;

  @media (max-width: ${mediaQuery}) {
    max-width: 430px;
  }
`
interface AccordeonWrapperProps {
  isOpen: boolean
}

export const AccordeonWrapper = styled.div<AccordeonWrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  gap: 24px;
  border-radius: 14px;
  padding: 40px;
  background-color: ${white};
  border: ${props => props.isOpen ? `2px solid ${blue700}` : '2px solid transparent'};
  box-shadow:0px 6px 16px 0px rgba(74, 58, 255, 0.19);

  @media (max-width: ${mediaQuery}) {
    padding:22px;
    gap:10px;
  }
`
export const AccordeonHeader = styled.div<AccordeonWrapperProps>`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  cursor: pointer;

  .accordeon-icon {
  }
  @media (max-width: ${mediaQuery}) {
    gap:10px;
  }
`
export const AccordeonTitle = styled.h3`
  font-size: 26px;
  font-weight: 600;
  line-height: 32px;
  color: ${blue700};
  padding:0;
  margin:0;

  @media (max-width: ${mediaQuery}) {
    font-size:20px;
    line-height: 28px;
  }
`
interface AccordeonButtonProps {
  bgColor: string
}

export const AccordeonContent = styled.p<AccordeonWrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: start;
  color: ${blue700};
  justify-content: start;
  font-size:16px;
  font-weight: 400;
  margin:0;
  max-width: 723px;
  width: 100%;
  transition: opacity 2s ease-in-out;
  animation: slideIn 0.4s ease-in-out;

  @keyframes slideIn {
    from {
      opacity: 0;
      height: 0;
      transform: translateY(-20px);
    }
    1% {
      height: auto;
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @media (max-width: ${mediaQuery}) {
    line-height: 24px;
  }
`

