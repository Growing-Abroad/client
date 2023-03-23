import TwoColorTitle from "@/components/two-color-title";
import styled from "styled-components";
import { variables } from "@/styles/global-variables";
import { theme } from "@/styles/theme";
import Image, { StaticImageData } from "next/image";
import checkIcon from '@assets/icons/check-icon.svg';
import StdParagraqh from "@/components/generics/StdParagraqh/StdParagraqh";
import StdButton from "@/components/generics/StdButton/StdButton";
import useAppContext from "@/hooks/useAppContext";

const { sizes: { globalHorizontalPadding, maxWidthAll, mediaQuery}} = variables;
const { colors: {blue700} } = theme; 

const Service = styled.div`
    min-height: 600px;
    width: 100%;
    padding-left: ${globalHorizontalPadding};
    display: flex;
    justify-content: end;
    gap: 40px;

    &.reversed {
        flex-direction: row-reverse;
        padding-left: 0;
        padding-right: ${globalHorizontalPadding};
        justify-content: start;


        .img-wrapper {
            flex-direction: row-reverse;
        }

    }

    @media (max-width: ${mediaQuery}) {
        flex-direction: column !important;
        padding: 0;

        &.reversed {
            padding: 0;
            .img-wrapper {
                flex-direction: row-reverse;
            }
        }
    }
`

const ServiceData = styled.div`
    flex-grow: 1;
    padding: 80px 0 70px;
    max-width: 1500px;

    .services-list {
        display: flex;
        flex-direction: column;
        gap: 30px;

        .list-item {
            display: flex;
            align-items: center;

            .paragraqh {
                margin: 0 0 0 32px;
                font-weight: 400;
                line-height: 1.25rem;
            }
        }
    }

    .price {
        display: flex; 
        gap: 40px; 
        align-items: center; 
        margin-top: 56px;

        span {
            color: ${blue700};
            letter-spacing: 1.3px;
            font-weight: 400;
            font-size: 1.25rem;

            &:last-of-type {
                font-size: 2rem;
                font-weight: 600;
            }
        }

        
    }

    
    @media (max-width: ${mediaQuery}) {
        padding: 0 40px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .services-list {
            padding-left: 0;
            .list-item {
                .paragraqh {
                    margin-left: 24px;
                    font-size: 0.875rem;
                    text-align: justify;
                }
            }
        }
    }
`

const ImgWrapper = styled.div`
        display: flex;
    .price-mobile {
        display: flex; 
        flex-direction: column;
        gap: 24px; 
        align-items: center; 
        margin-top: 40px;
        flex-grow: 1;

        span {
            color: ${blue700};
            letter-spacing: 1.3px;
            font-weight: 400;
            font-size: 1.25rem;
            line-height: 1.875rem;

            &:first-of-type {
                font-size: 2rem;
                line-height: 2.5rem;
                font-weight: 600;
            }
        }

    }
`

export interface IDramJobCardProps {
    title: string,
    description: string,
    info: string[],
    deprecatedPrice: string,
    actualPrice: string,
    img: StaticImageData,
    classes?: string

}

export default function DreamJobCard({title, description, info, deprecatedPrice, actualPrice, img, classes}: IDramJobCardProps) {
    const {isMobile} = useAppContext();

    return (
        <>
            <Service className={classes}>
                <ServiceData>

                    <TwoColorTitle text1={title} text2="" as="h3" styles={isMobile ? {fontWeight: '700', fontSize: '2rem', lineHeight: '2.5rem'} : {fontWeight: '700'}} wrapperStyles={{width: isMobile? '100%': 'max-content'}}/>
                   
                    <TwoColorTitle 
                    wrapperStyles={isMobile ? {margin: '32px 0', width: '100%'} :{width: '100%', margin: '20px 0 42px', justifyContent: "left"}} 
                    styles={isMobile ? {fontSize: '1rem', lineHeight: '1.625rem', marginBottom: '0px'} : {textAlign: 'justify'}} text1={description} text2="" as="h4" 
                    />
                    
                    <ul className="services-list" >
                        {info.map((info: string) => (
                            <li className="list-item">
                                <Image src={checkIcon} height={18} width={22.20} alt={'check icon'}/>
                                <StdParagraqh className="paragraqh">
                                    {info}
                                </StdParagraqh>
                            </li>
                        ))}
                    </ul>
                    {!isMobile && <div className="price">
                        <StdButton>Book Now</StdButton>
                        <span style={{textDecoration: 'line-through'}}>{deprecatedPrice}</span>
                        <span>{actualPrice}</span>
                    </div>}

        
                </ServiceData>
                <ImgWrapper className="img-wrapper">
                    {isMobile && <div className="price price-mobile">
                        <span>{actualPrice}</span>
                        <span style={{textDecoration: 'line-through'}}>{deprecatedPrice}</span>
                        <StdButton>Book Now</StdButton>
                    </div>}
                    <Image src={img} alt="cv-optimization" style={isMobile ? {height: '250px', width: '223px'} : {height: '100%'}} />
                </ImgWrapper>
            </Service>
        </>
    )
}