import { variables } from "@/styles/global-variables";
import styled from "styled-components"

const { sizes: { globalHorizontalPadding, maxWidthAll, mediaQuery}} = variables;

const PackageCourseWrapper = styled.div`
    max-width: ${maxWidthAll};
    width: 100%;
    padding: 0 ${globalHorizontalPadding};
    flex-grow: 1;
    display: flex;
    justify-content: flex-start;
    gap: 130px;
`

const PackageCourseContent = styled.div`

`

export default function CoachingPackageOnlineCourseSection() {
    return (
        <PackageCourseWrapper>
            <PackageCourseContent>
                
            </PackageCourseContent>


        </PackageCourseWrapper>
    )
} 