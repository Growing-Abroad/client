import useAppContext from '@/hooks/useAppContext';
import { variables } from '@/styles/global-variables';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropsWithChildren } from 'react';
import { ButtonProps } from 'react-bootstrap';
import styled, { CSSProperties } from 'styled-components';

const {
  sizes: { mediaQuery },
} = variables;

interface HoverProps {
  color?: string;
  backgroundColor?: string;
}

interface StyledStdBtnProps extends ButtonProps {
  hover?: HoverProps;
  backgroundColor?: string;
  color?: string;
}

const StyledStdBtn = styled.button<StyledStdBtnProps>`
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.25rem;
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor ?? theme.colors.yellow400};
  color: ${({ theme, color }) => color ?? theme.colors.blue700};
  letter-spacing: 1.3px;
  padding: 20px 36px;
  border-radius: 50px;
  cursor: pointer;
  transition: 350ms;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.15);
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ theme, hover }) =>
      hover?.backgroundColor ?? theme.colors.blue700};
    color: ${({ theme, hover }) => hover?.color ?? theme.colors.yellow400};
  }

  @media (max-width: ${mediaQuery}) {
    font-size: 0.875rem;
    line-height: 1.188rem;
    padding: 12px 18px;
  }
`;

export interface IStdButton extends PropsWithChildren, StyledStdBtnProps {
  className?: string;
  style?: CSSProperties;
  icon?: IconProp;
  onClick?(arg: any): any;
}

export default function StdButton({
  children,
  className,
  icon,
  style,
  hover,
  backgroundColor,
  color,
  onClick,
  ...props
}: IStdButton) {
  const { isMobile } = useAppContext();

  return (
    <StyledStdBtn
      {...props}
      backgroundColor={backgroundColor}
      color={color}
      hover={hover}
      className={className}
      style={style}
      onClick={onClick}
    >
      {icon && <FontAwesomeIcon icon={icon} size={isMobile ? 'sm': undefined} style={isMobile ? {marginRight: '8px'} : {marginRight: '16px'}}/>}
      {children}
    </StyledStdBtn>
  );
}
