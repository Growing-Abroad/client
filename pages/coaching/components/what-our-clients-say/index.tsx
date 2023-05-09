import FancyCarousel from "@/components/Fancy-carousel";
import OriginalFancyCarousel from "@/components/OriginalFancyCarousel";
import TwoColorTitle from "@/components/two-color-title";
import useAppContext from "@/hooks/useAppContext";
import { variables } from "@/styles/global-variables"
import { successStoriesData } from "@/utils/mock-ups/success-stories-mock";
import styled from "styled-components"

const { sizes: { globalHorizontalPadding, maxWidthAll, mediaQuery, globalHorizontalPaddingMobile}} = variables;

const WrapperSection = styled.section`
    padding: 0px ${globalHorizontalPadding} 184px;
    max-width: ${maxWidthAll};
    width: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 73px;

    @media (max-width: ${mediaQuery}) {
        padding: 0px ${globalHorizontalPaddingMobile} 133px;  
        gap: 30px;
    }

`

export default function WhatOurClientsSay() {
    const { isMobile } = useAppContext();

    return (
        <WrapperSection>
            <TwoColorTitle as="h2" text1="What" text2="our Clients Say" hasSpaceBtw wrapperStyles={{maxWidth: '100%'}} styles={isMobile ? {lineHeight: '2.75rem'} : {}} />
            <OriginalFancyCarousel dataArray={successStoriesData} />
        </WrapperSection>    
    )
}