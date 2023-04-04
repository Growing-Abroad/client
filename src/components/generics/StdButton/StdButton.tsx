import { variables } from '@/styles/global-variables';
import { theme } from '@/styles/theme';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropsWithChildren } from 'react';
import styled, { CSSProperties } from 'styled-components';

const {
  colors: { yellow400, blue700 },
} = theme;
const {
  sizes: { mediaQuery },
} = variables;

interface HoverProps {
  color?: string;
  backgroundColor?: string;
}

interface StyledStdBtnProps {
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
  padding: 20px 40px;
  border-radius: 50px;
  cursor: pointer;
  transition: 400ms;
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.25);
  white-space: nowrap;

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
}

export default function StdButton({
  children: text,
  className,
  icon,
  style,
  hover,
  backgroundColor,
  color,
}: IStdButton) {
  return (
    <StyledStdBtn
      backgroundColor={backgroundColor}
      color={color}
      hover={hover}
      className={className}
      style={style}
    >
      {icon && <FontAwesomeIcon icon={icon} size="lg" />}
      {'\xa0'}
      {text}
    </StyledStdBtn>
  );
}
