import { variables } from "@/styles/global-variables";
import Image from "next/image";
import styled from "styled-components";
import Cloud from "@assets/pages/jobs/cloud-img.png"
import TwoColorTitle from "@/components/two-color-title";
import { theme } from "@/styles/theme";
import StdParagraqh from "@/components/generics/StdParagraqh/StdParagraqh";
import StdButton from "@/components/generics/StdButton/StdButton";

const { colors: { blue700, yellow400 }} = theme;
const { sizes: { maxWidthAll, globalHorizontalPadding, mediaQuery }} = variables;

const UploadCvWrapper = styled.section`
    display: flex;
    padding-inline: ${globalHorizontalPadding};
    max-width: ${maxWidthAll};
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 81px;
    gap: 72px;
    flex-direction: column;

    @media (max-width: ${mediaQuery}) {
        gap: 25px;
        padding-inline: 40px;
        margin-bottom: 109px;

        .upload-cv-heading2 {
            span {
                white-space: normal;
            }
        }
    }
`

const UploadCvDetails = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    gap: 32px;

    .cv-paragraqh {
        font-weight: 500;
        max-width: 500px;
        text-align: justify;
        color: ${blue700};
        margin: 0;
    }


    @media (max-width: ${mediaQuery}) {
        gap: 25px;
        flex-direction: column;
    }
`

const CvForm = styled.form`
    width: 100%;
    max-width: ${maxWidthAll};
    padding-inline: ${globalHorizontalPadding};

    .upload-cv-heading3 {
        font-size: 2rem;
        line-height: 2.438rem;
    }

    .personal-info-sub-heading {
        font-weight: 400;
        color: ${blue700};
        margin: 6px 0 36px 0;
    }
    
    @media (max-width: ${mediaQuery}) {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-inline: 40px;

        .personal-info-sub-heading {
            margin-top: 16px;
        }
    }
`


export default function UploadCvSection() {
    return (
        <>
            <UploadCvWrapper>
                    <TwoColorTitle as="h2" 
                    text1="Upload your" 
                    text2="Application Documents" 
                    hasSpaceBtw
                    styles={{display: 'flex', flexDirection:'column'}}
                    className="upload-cv-heading2"
                    wrapperStyles={{maxWidth: '100%'}}
                    />

                <UploadCvDetails>
                    <StdParagraqh className="cv-paragraqh">
                        Important: Only upload your application documents when they are optimized into German standard. If you don't have optimized application documents, they will not be considered. In our Online course you will learn every little step to optimize your application documents into German Standard.
                    </StdParagraqh>
                    <StdButton>To The Online Course</StdButton>
                </UploadCvDetails>
            </UploadCvWrapper>
            <CvForm>
                <TwoColorTitle as="h3" 
                    text1="Personal Information" 
                    text2="" 
                    className="upload-cv-heading3"
                    wrapperStyles={{maxWidth: '100%'}}
                    />
                <StdParagraqh className="personal-info-sub-heading">
                    Enter your personal details below
                </StdParagraqh>
            </CvForm>
        </>
    )
}