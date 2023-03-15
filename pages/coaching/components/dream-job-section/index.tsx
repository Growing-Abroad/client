import TwoColorTitle from "@/components/two-color-title";
import CenteredSection from "../centeredSection";
import styled from "styled-components";
import { variables } from "@/styles/global-variables";
import { style } from "@mui/system";
import { theme } from "@/styles/theme";


const { sizes: { globalHorizontalPadding, maxWidthAll}} = variables;
const { colors: {blue700} } = theme; 


export const DreamJobSubtitle = styled.p`
    color: ${blue700};
    font-size: 1.5rem;
    line-height: 38px;
    font-weight: 600;
    margin-top: 44px;
    max-width: 708px;
    text-align: center;
`

export default function DreamJobSection() {
    return (
        <CenteredSection>
            <TwoColorTitle text1="Ready for your" text2="Dream Job?" as="h2" hasSpaceBtw />
            <DreamJobSubtitle>
                Choose one of our individual Coaching Services to prepare you for your journey to Germany and Europe
            </DreamJobSubtitle>
        </CenteredSection>
    )
}