import ContainerHero from "@/components/ContainerHero"
import styled from "styled-components"
import JobsHeroBg from "@assets/pages/jobs/jobs-hero-bg-desktop.png"
import JobsHeroMobile from "@assets/pages/jobs/jobs-hero-bg-mobile.png"
import JobsHeroWide from "@assets/pages/jobs/jobs-hero-ultra-wide.png"
import useAppContext from "@/hooks/useAppContext";
import TwoColorTitle from "@/components/two-color-title";
import { theme } from "@/styles/theme";
import { variables } from "@/styles/global-variables";
import StdButton from "@/components/generics/StdButton/StdButton"

const { colors: { blue700, yellow400 }} = theme;
const { sizes: { maxWidthAll, globalHorizontalPadding, mediaQuery }} = variables;

const ContainerWrapper = styled.section`
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
    padding: 90px 140px 0px ;
    max-width: ${maxWidthAll};
    width: 100%;

    .jobs-title {
        text-align: left;
    }

    .upload-cv-btn {
        margin-top: 24px;
        text-transform: uppercase; 
        font-weight: 800;
    }

    @media (max-width: ${mediaQuery}) {
        padding: 59px 42px 0px ;

        .jobs-title {
            max-width: 210px;
            span {
                display: block
            }
        }

        .upload-cv-btn {
            margin-top: 14px;
            padding: 8px 15px;
        }
    }
`
        
    

export default function JobsHeroSection() {
    const { isMobile } = useAppContext();

    return <>
        <ContainerWrapper>
            <ContainerHero 
                backgroundImageDesktop={JobsHeroBg.src}  
                backgroundImageMobile={JobsHeroMobile.src}
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
                        text1="Get your Dream Job in" 
                        text2="Germany" 
                        hasSpaceBtw
                        color1={blue700}
                        color2={yellow400}
                        className="jobs-title"
                        wrapperStyles={{maxWidth: '100%', justifyContent: 'flex-start'}}
                        />
                        {!isMobile && <TwoColorTitle 
                        text1="or" 
                        text2="Europe" 
                        hasSpaceBtw
                        color1={blue700}
                        color2={yellow400}
                        />}  

                        <StdButton className="upload-cv-btn" >
                            Upload your CV NOW    
                        </StdButton>  
                    </div>
                </HeroTitleWrapper>
            </ContainerHero>
        </ContainerWrapper>
    </>
}