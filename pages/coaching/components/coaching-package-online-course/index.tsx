import TwoColorTitle from "@/components/two-color-title";
import { variables } from "@/styles/global-variables";
import Image from "next/image";
import styled from "styled-components"
import OnlineCourse from '@assets/pages/coaching/online-course.webp';
import CoachingPackage from '@assets/pages/coaching/coaching-package.webp';
import useAppContext from "@/hooks/useAppContext";
import LeftRetangle from "@assets/pages/coaching/left-retangle.png";
import RightRetangle from "@assets/pages/coaching/right-retangle.png";
import LeftMobile from "@assets/pages/coaching/left-mobile.png";
import RightMobile from "@assets/pages/coaching/right-mobile.png";
import StdButton from "@/components/generics/StdButton/StdButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const { sizes: { globalHorizontalPadding, maxWidthAll, mediaQuery}} = variables;
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { theme } from "@/styles/theme";

const {colors: { yellow400, blue700 }} = theme;

const PackageCourseWrapper = styled.div`
    max-width: ${maxWidthAll};
    width: 100%;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    gap: 130px;

    @media (max-width: ${mediaQuery}) {
        flex-direction: column;
        gap: 120px;
    }
`

const PackageCourseContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    
    &.reversed {
        align-items: flex-start;

        .blue-retangle {
            right: unset;
            left: 0;
        }
        .price-wrapper {
            right: unset;
            left: 52px;
        }
    }

    .package-course-details {
        margin-top: 62px;
        max-width: 555px;
        color: ${blue700};

        p {
            margin: 0;
            font-weight: 600;
            font-size: 1.25rem;
            line-height: 1.5rem;
            text-align: justify;
        }
        ul {
            margin: 45px 0 65px 0;
            padding-left: 0;
            display: flex;
            flex-direction: column;
            gap: 24px;
            
            li {
                text-align: justify;
                display: flex;
                align-items: center;
                gap: 26px;

                font-size: 1rem;
                line-height: 1.25rem;
                display: flex;
                align-items: center;
                letter-spacing: 0.04em;

                .check-icon{
                    font-weight: 900;
                    font-size: 28px;
                }
            }

        }
        .book-now-btn {
            margin-inline: auto;
            display: flex;
            margin-bottom: 50px;
        }


    }

    @media (max-width: ${mediaQuery}) {
        flex-direction: column;
        align-items: center;

        &.reversed {
            align-items: center;

            .price-wrapper {
                right: unset;
                left: 35px;
            }
        }
        
        .package-course-details {
            padding-inline: 40px;
            margin-top: 29px;

            p {
                font-size: 1rem;
                line-height: 1.75rem;
            }

            ul {
                gap: 32px;
                margin: 30px 0 27px 0;

                li {
                    font-size: .875rem;
                    line-height: 1.5rem;
                    gap: 14px;
                }
            }

            .book-now-btn {
                margin-bottom: 20px;
                padding: 8px 15px;
            }
        }
    }
`

const ImageWrapper = styled.div`
    margin-top: 16px;
    position: relative;
    width: 100%;
    height: 377px;

    .blue-retangle {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0%;
        z-index: 1;
        height: 100%;
    }

    .price-wrapper {
        position: absolute;
        z-index: 2;
        right: 52px;
        top: 121px;
        gap: 12px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .price {
            color: white;
            font-weight: 600;
            letter-spacing: 1.3px;

            &.old-price {
                font-size: 2rem;
                line-height: 2.438rem;
                text-decoration: line-through;
            }

            &.new-price {
                font-size: 3rem;
                line-height: 3.688rem;
            }
        }
    }

    @media (max-width: ${mediaQuery}) {
        height: 268px;
        
        .price-wrapper {
            top: 90px;
            gap: 18px;
            right: 35px;

            .price {

                &.old-price {
                    font-size: 1.25rem;
                    line-height: 1.5rem;
                }

            
                &.new-price {
                    font-size: 1.5rem;
                    line-height: 1.813rem;
                }
            }
        }
      
    }

`

export default function CoachingPackageOnlineCourseSection() {
    const { isMobile } = useAppContext();
    const twoColorFontSize = isMobile ? '2rem': '3.438rem';

    const detailsContent = [
        'CV, Cover Letter and LinkedIn Optimization for the German market',
        'Individual Job Search Strategy with the focus on your strengths and goals',
        'Job Interview Preparation to get every job you wish for',
    ]

    return (
        <PackageCourseWrapper>

            <PackageCourseContent>

                <TwoColorTitle as="h2" text1="Coaching" text2="Package" hasSpaceBtw fontSize={twoColorFontSize}/>

                <ImageWrapper>
                    <Image src={CoachingPackage} alt='coaching package' style={{width: '100%', height: '100%'}} />
                    <Image src={isMobile ? LeftMobile : LeftRetangle} alt='blue retangle to frame the price' className="blue-retangle" />
                    <div className="price-wrapper">
                        <span className="price old-price">1597 €</span>
                        <span className="price new-price">597 €</span>
                    </div>
                </ImageWrapper> 

                <div className="package-course-details">
                    <p>
                        Get our Premium offer with all the Coaching Sessions from above and save more than 250€
                    </p>
                    <ul>
                        {detailsContent.map((liText) => (
                            <li>
                                <FontAwesomeIcon className="check-icon" icon={faCheck} color={yellow400} size={"xl"} />
                                {liText}
                            </li>
                        ))}
                    </ul>
                    <StdButton className="book-now-btn">Book Now</StdButton>
                </div>

            </PackageCourseContent>

            <PackageCourseContent className="reversed">
                
                <TwoColorTitle as="h2" text1="Online" text2="Course" hasSpaceBtw fontSize={twoColorFontSize} />
                
                <ImageWrapper>
                    <Image src={OnlineCourse} alt='Online Course' style={{width: '100%', height: '100%'}} />
                    <Image src={isMobile ? RightMobile : RightRetangle} alt='blue retangle to frame the price' className="blue-retangle" />
                    <div className="price-wrapper">
                        <span className="price old-price">1597 €</span>
                        <span className="price new-price">597 €</span>
                    </div>
                </ImageWrapper>

                <div className="package-course-details">
                    <p>
                        Get our absolute special offer. The Online Course "How to land your dream job in Germany or Europe"
                    </p>
                    <ul>
                        {detailsContent.map((liText) => (
                            <li>
                                <FontAwesomeIcon className="check-icon" icon={faCheck} color={yellow400} fontWeight={900} />
                                {liText}
                            </li>
                        ))}
                    </ul>
                    <StdButton className="book-now-btn">Book Now</StdButton>
                </div>
            </PackageCourseContent>

        </PackageCourseWrapper>
    )
} 