import OriginalFancyCarousel from "@/components/OriginalFancyCarousel";
import TwoColorTitle from "@/components/two-color-title";
import useAppContext from "@/hooks/useAppContext";
import { variables } from "@/styles/global-variables"
import { successStoriesData } from "@/utils/mock-ups/success-stories-mock";
import styled from "styled-components"

const { sizes: { globalHorizontalPadding, maxWidthAll, mediaQuery, globalHorizontalPaddingMobile}} = variables;

const WrapperSection = styled.section`
    padding: 180px ${globalHorizontalPadding} 180px;
    max-width: ${maxWidthAll};
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 73px;

    @media(max-width:430px) {
        padding: 80px ${globalHorizontalPaddingMobile} 133px;
        gap: 30px;
    }

`

export default function SuccessStoriesSection() {
    const { isMobile } = useAppContext();

    return (
        <WrapperSection>
            <TwoColorTitle as="h2" text1="Success" text2="Stories" hasSpaceBtw wrapperStyles={{maxWidth: '100%'}} styles={isMobile ? {lineHeight: '2.75rem'} : {}} fontSize={isMobile ?"36px" :"60px"}/>
            <OriginalFancyCarousel dataArray={successStoriesData} />
        </WrapperSection>
    )
}
