import { PropsWithChildren } from "react";
import styled from "styled-components";

const StyledStdParagraqh = styled.p`
    font-weight: 300;
    font-size: 1rem;
    line-height: 1.5rem;
`

export default function StdParagraqh({children}: PropsWithChildren) {
    return <StyledStdParagraqh>{children}</StyledStdParagraqh>
}