import { theme } from "@/styles/theme";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PropsWithChildren } from "react";
import styled, { CSSProperties } from "styled-components";

const { colors: { yellow400, blue700 } } = theme;

const StyledStdBtn = styled.button`
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 1.25rem;
    background-color: ${yellow400};
    color: ${blue700};
    letter-spacing: 1.3px;
    padding: 20px 40px;
    border-radius: 50px;
    cursor: pointer;
    transition: 400ms;
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.25);

    &:hover {
        background-color: ${blue700};
        color: ${yellow400};
    }
`

export interface IStdButton extends PropsWithChildren {
    className?: string
    style?: CSSProperties
    icon?: IconProp
}

export default function StdButton({children: text, className, icon, style}: IStdButton) {
    return (
        <StyledStdBtn className={className} style={style}>
            {icon && <FontAwesomeIcon icon={icon} size='lg' />}
            {'\xa0'}
            {text}
        </StyledStdBtn>)
}