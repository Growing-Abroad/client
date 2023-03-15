import { PropsWithChildren } from "react";
import styled, { CSSProperties } from "styled-components";

const StyledStdParagraqh = styled.p`
    font-weight: 300;
    font-size: 1rem;
    line-height: 1.5rem;
`

export interface IStdParagraqh extends PropsWithChildren {
    className?: string
    style?: CSSProperties
}

export default function StdParagraqh({children, className, style}: IStdParagraqh) {
    return <StyledStdParagraqh className={className} style={style}>{children}</StyledStdParagraqh>
}