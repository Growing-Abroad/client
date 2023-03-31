import { variables } from "@/styles/global-variables";
import Image from "next/image";
import styled from "styled-components";
import Cloud from "@assets/pages/jobs/cloud-img.png"
import TwoColorTitle from "@/components/two-color-title";
import { theme } from "@/styles/theme";
import StdParagraqh from "@/components/generics/StdParagraqh/StdParagraqh";
import StdButton from "@/components/generics/StdButton/StdButton";
import StdInput from "@/components/generics/StdInput";

const { colors: { blue700, yellow400 }} = theme;
const { sizes: { maxWidthAll, globalHorizontalPadding, mediaQuery }} = variables;

const UploadCvWrapper = styled.section`
    display: flex;
    padding-inline: ${globalHorizontalPadding};
    max-width: ${maxWidthAll};
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 80px;
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

    .personal-info-inputs-wrapper,
    .skills-wrapper {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 12px 40px;
        width: 100%;
        margin-bottom: 80px;
        align-items: end;
    }
    .skills-wrapper {
        grid-row-gap: 0px;
        width: 100%;
    }

    .other-info-wrapper {
        display: flex;
        gap: 32px;
        flex-direction: column;
        width: 100%;
    }

    .language-wrapper {
        display: flex;
        align-items: flex-start;
        gap: 40px;
    }
    
    @media (max-width: ${mediaQuery}) {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-inline: 40px;

        .personal-info-sub-heading {
            margin-top: 16px;
        }

        .personal-info-inputs-wrapper,
        .skills-wrapper {
            grid-template-columns: 1fr;
        }

        .language-wrapper {
            flex-direction: column;
            gap: 0px;
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

                <div className="personal-info-inputs-wrapper">
                    <StdInput label="First Name" name="First Name" required onChange={(e)=>{console.log({e})}} value="" />
                    
                    <StdInput label="Last Name" name="Last Name" required onChange={(e)=>{console.log({e})}} value="" />

                    <StdInput label="Email" name="Email" required onChange={(e)=>{console.log({e})}} value="" />

                    <StdInput label="Date of Birth" name="Date of Birth" required onChange={(e)=>{console.log({e})}} value="" />
 
                    <StdInput label="LinkedIn Profile" name="LinkedIn Profile" onChange={(e)=>{console.log({e})}} value="" />

                    <StdInput label="Telephone Number" name="Telephone Number" required onChange={(e)=>{console.log({e})}} value="" />

                    <StdInput label="Nationality" name="Nationality" required onChange={(e)=>{console.log({e})}} value="" />

                    <StdInput label="Country of Residence" name="Country of Residence" required onChange={(e)=>{console.log({e})}} value="" />
                    
                    <StdInput label="City of residence" name="City of residence" required onChange={(e)=>{console.log({e})}} value="" />

                    <StdInput label="Address" name="address" required onChange={(e)=>{console.log({e})}} value="" />
                   
                </div>

                <TwoColorTitle as="h3" 
                    text1="Other Information" 
                    text2="" 
                    className="upload-cv-heading3"
                    wrapperStyles={{maxWidth: '100%'}}
                    />

                <StdParagraqh className="personal-info-sub-heading">
                    Which of the following specializations apply?
                </StdParagraqh>

                <div className="other-info-wrapper">
                    <StdInput label="Area of Expertise" name="Area of Expertise" onChange={(e)=>{console.log({e})}} value="" />
                    
                    <div className="language-wrapper">
                        <StdInput label="Language" name="Language" required onChange={(e)=>{console.log({e})}} value="" />

                        <StdInput label="" name="Language" onChange={(e)=>{console.log({e})}} value="" />
                    </div>


                    <StdInput label="Art of Work" name="Art of Work" required onChange={(e)=>{console.log({e})}} value="" />

                    <StdInput label="Highest Degree" name="Highest Degree" required onChange={(e)=>{console.log({e})}} value="" />

                    <StdInput label="Work Experience" name="Work Experience*" required onChange={(e)=>{console.log({e})}} value="" />

                    <div className="skills-wrapper">
                        <StdInput label="Skills" name="Work Experience*" required onChange={(e)=>{console.log({e})}} value="" />

                        <StdInput label="" name="Work Experience*" onChange={(e)=>{console.log({e})}} value="" />
                        <StdInput label="" name="Work Experience*" onChange={(e)=>{console.log({e})}} value="" />
                        <StdInput label="" name="Work Experience*" onChange={(e)=>{console.log({e})}} value="" />
                    </div>
                </div>

            </CvForm>
        </>
    )
}