import styled, { css, CSSProperties } from "styled-components";
import { variables } from "@/styles/global-variables";
import { style } from "@mui/system";

interface Props {
    children: React.ReactNode;
    containerStyles?: CSSProperties;
    contentStyles?: CSSProperties;
}

interface IStyledProp {
    style?: CSSProperties;

}

const { sizes: { globalHorizontalPadding, maxWidthAll, mediaQuery}} = variables;

const Section = styled.section<IStyledProp>`
    display: flex;
    justify-content: center;
    ${({ style }) =>
    style &&
    css`
      ${Object.entries(style).map(([key, value]) => {
        const formattedKey = key.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase());
        return `${formattedKey}: ${value};`;
      })}
    `}

`
const ContentWrapper = styled.div<IStyledProp>`
    max-width: ${maxWidthAll};
    padding: 80px ${globalHorizontalPadding};
    display: flex;
    flex-direction: column;
    align-items: center;
    ${({ style }) =>
    style &&
    css`
      ${Object.entries(style).map(([key, value]) => {
        const formattedKey = key.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase());
        return `${formattedKey}: ${value};`;
      })}
    `}

    @media (max-width: ${mediaQuery}) {
      padding: 80px 66px;
      
    }
`

export default function CenteredSection({children, containerStyles, contentStyles}: Props) {
    return <Section style={containerStyles}>
        <ContentWrapper style={contentStyles}>
            {children}
        </ContentWrapper>
    </Section> 
}