import React, {useState, ChangeEvent} from 'react';
import TwoColorTitle from "@/components/two-color-title";
import StdParagraqh from "@/components/generics/StdParagraqh/StdParagraqh";
import StdButton from "@/components/generics/StdButton/StdButton";
import StdInput from "@/components/generics/StdInput";
import { CvForm, UploadCvDetails, UploadCvWrapper } from "./style";
import { useTheme } from "styled-components";
import { Checkbox } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt, faUpload } from '@fortawesome/free-solid-svg-icons';
import useAppContext from '@/hooks/useAppContext';

export default function UploadCvSection() {
    const {
        colors: { blue700, blue400 }
    } = useTheme();
    const { isMobile } = useAppContext();

    const [selectedFile, setSelectedFile] = useState<File>();

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files?.[0]) {
            setSelectedFile(event.target.files[0]);
        }
    };
  
    const handleDrop: React.DragEventHandler<HTMLDivElement> = (event) => {
      event.preventDefault();
        if (event.dataTransfer?.files[0]) {
            setSelectedFile(event.dataTransfer?.files[0]);
        }
    };
  
    const handleDragOver: React.DragEventHandler<HTMLDivElement> = (event) => {
      event.preventDefault();
    };

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
                <div className="padded">
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
                        wrapperStyles={isMobile ? {textAlign: 'center',
                            width: '100%'} : {maxWidth: '100%'}}
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
                </div>
                <div className="upload-docs-container">
                    <div className="upload-docs-content padded">

                        <TwoColorTitle as="h3" 
                            text1="Documents" 
                            text2="" 
                            className="upload-cv-heading3"
                            wrapperStyles={{maxWidth: '100%'}}
                        />
                        <StdParagraqh className="personal-info-sub-heading">
                            Accepted file formats: pdf, jpg, png, doc, docx, rtf, txt, odt with max upload size of 5MB. 
                        </StdParagraqh>
                        <TwoColorTitle as="h4" 
                            text1="CV Upload" 
                            text2="" 
                            className=""
                            wrapperStyles={{maxWidth: '100%',marginBottom: '20px'}}
                            styles={isMobile ? {fontSize: '1.5rem', lineHeight: '1.875rem' } : {}}
                        />

                        {/* <label htmlFor="file-upload" className="custom-file-upload">
                            <FontAwesomeIcon icon={faCloudUploadAlt}></FontAwesomeIcon> Choose File
                        </label>
                        <input id="file-upload" type="file"/>
                         */}
                        <div
                            className="drop-area"
                            onDrop={handleDrop}
                            onDragOver={handleDragOver}
                        >
                            {!selectedFile ? (
                                <div className="drop-message">
                                    <span>
                                        {isMobile?'Upaload you CV':'Drag and drop a file here or click to select a file'}
                                    </span>
                                </div>
                            ) : (
                                <div className="file-details">
                                    <div className="file-name">{selectedFile.name}</div>
                                    <div className="file-size">{selectedFile.size} bytes</div>
                                </div>
                            )}
                            <label htmlFor="cv-file-input" className='file-input-label'>
                                <FontAwesomeIcon icon={faCloudUploadAlt} size='5x' color={blue700} className='label-icon' />
                            </label>
                            <input
                                id='cv-file-input'
                                type="file"
                                className="file-input"
                                onChange={handleFileChange}
                            />
                        </div>
                        <StdParagraqh className="personal-info-sub-heading cv-upload-sub">
                            + Optional Documents (Cover Letter, Qualifications, Recommendations, ...)
                        </StdParagraqh>


                    </div>
                </div>
                <div className="declaration-of-consent">
                    <TwoColorTitle as="h3" 
                        text1="Declaration of Consent" 
                        text2="" 
                        className="upload-cv-heading3"
                        wrapperStyles={{maxWidth: '100%'}}
                        styles={isMobile ? {marginBottom: '24px'} : {marginBottom: '24px'}}
                    />

                    <div  style={{
                        gap: '8px',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Checkbox 
                        className='declaration-checkbox' 
                        sx={{ 
                            '& .MuiSvgIcon-root': {  width: 30, height: 30 },
                            color: blue700,
                            '&.Mui-checked': {
                                color: blue400,
                            },
                        }} />
                        <p
                            className='declaration-paragraqh'
                            
                        >
                            I agree to the <span className='highlight'>declaration of consent</span> and have read and understood the <span className='highlight'>revocation and privacy policy.</span> 
                        </p>
                    </div>

                    <StdButton style={{justifySelf: 'center', marginTop: '56px'}} icon={faUpload} >Upload Now</StdButton>
                </div>
            </CvForm>
        </>
    )
}