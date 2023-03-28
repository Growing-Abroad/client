import ContainerHero from "@/components/ContainerHero"
import styled from "styled-components"
import JobsHeroBg from "@assets/pages/jobs/jobs-hero-bg.png"
import useAppContext from "@/hooks/useAppContext";
import TwoColorTitle from "@/components/two-color-title";
import { theme } from "@/styles/theme";
import { variables } from "@/styles/global-variables";

const { colors: { blue700, yellow400 }} = theme;
const { sizes: { maxWidthAll, globalHorizontalPadding }} = variables;

const ContainerWrapper = styled.div`
    height: 412px;
    width: 100%;

    @media (min-width: 430px) {
        height: calc(25.75rem + ((1vw - 4.3px) * 19.9446));
    }
    @media (min-width: 1513px) {
        height: 628px;
    }

`

export const HeroTitleWrapper = styled.div`
    padding: 128px 65px 0px ;
    max-width: ${maxWidthAll};
    width: 100%;

    .jobs-title {
        text-align: left;
    }
`
        
    

export default function JobsHeroSection() {
    const { isMobile } = useAppContext();

    return <>
        <ContainerWrapper>
            <ContainerHero 
                backgroundImageDesktop={JobsHeroBg.src}  
                backgroundImageMobile={JobsHeroBg.src}
                styles={isMobile ? {
                    height: '100%', 
                    justifyContent: 'flex-start', 
                    gap: '4px'
                } 
                : {
                    height: '100%', 
                    justifyContent: 'flex-start',
                    gap: '4px',
                }}
            >
                <HeroTitleWrapper>
                    <div style={{maxWidth: '740px'}}>
                        <TwoColorTitle 
                        text1="Land your Dream Job in" 
                        text2="Germany" 
                        hasSpaceBtw
                        color1={blue700}
                        color2={yellow400}
                        className="jobs-title"
                        wrapperStyles={{maxWidth: '100%', justifyContent: 'flex-start'}}
                        />
                        <TwoColorTitle 
                        text1="or" 
                        text2="Europe" 
                        hasSpaceBtw
                        color1={blue700}
                        color2={yellow400}
                        />       
                    </div>
                </HeroTitleWrapper>
            </ContainerHero>
        </ContainerWrapper>
    </>
}