import React, { useState, ChangeEvent, useRef, useEffect } from "react";
import { useTheme } from "styled-components";
import { Checkbox, CircularProgress, FormControlLabel, FormGroup, SelectChangeEvent, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt, faUpload } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';
import { SubmitHandler, useForm, FormProvider } from "react-hook-form";
import IntlTelInput from 'react-intl-tel-input';

import TwoColorTitle from "@/components/two-color-title";
import StdParagraqh from "@/components/generics/StdParagraqh/StdParagraqh";
import StdButton from "@/components/generics/StdButton/StdButton";
import * as S from "styles/jobs/components/upload-cv-section/index.styles";
import useAppContext from "@/hooks/useAppContext";
import StdSelect from "@/components/generics/StdInput/StdSelect";
import StdInput from "@/components/generics/StdInput";
import StdTextInput from "@/components/generics/StdInput/StdTextInput";
import 'react-intl-tel-input/dist/main.css';
import Image from "next/image";
import imgUpload from "@/../public/assets/pages/jobs/growing.png";

interface FormFields {
  title: string
  firstName: string
  lastName: string
  email: string
  phone: string
}

interface IPhone {
  countryData: string
  
  number: {
    name?: string
    iso2?: string
    dialCode?: string
    priority?: number
    areaCodes?: string[] | null
  }
}

const expertiseOptions = [
  'Communication',
  'IT',
  'Media',
  'Finance & Accounting',
  'Marketing',
  'Engineering',
  'Logistics',
  'Supply Chain Management',
  'HR',
  'Digital',
  'Creation',
  'Office',
  'Sales',
  'Health Care',
  'Science',
  'Architecture',
  'Arts',
  'Social Service',
  'Education',
  'Mechanics',
  'Agriculture',
  'Government',
  'Law',
  'Other',
]

export default function UploadCvSection() {
  const {
    colors: { blue700, blue400 },
  } = useTheme();
  const { isMobile, smallDesktopSize, windowSize: { width } } = useAppContext();
  const [selectedFile, setSelectedFile] = useState<File>();
  const [selectedFileOptional, setSelectedFileOptional] = useState<File>();
  const [title, setTitle] = useState('')
  const [showNewInput, SetShowNewInput] = useState(false)

  const phoneRef = useRef(null);

  const formDefaultValues = {
      title: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
  }

  const methods = useForm<FormFields>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: formDefaultValues,
  })

  const {
    formState: { errors, isSubmitted, isSubmitting },
    handleSubmit,
    clearErrors,
    reset,
    register,
    setValue
  } = methods

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleFileChangeOptional = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.[0]) {
      setSelectedFileOptional(event.target.files[0]);
    }
  };

  const handleDrop: React.DragEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();
    if (event.dataTransfer?.files[0]) {
      setSelectedFile(event.dataTransfer?.files[0]);
    }
  };
  const handleDropOptionl: React.DragEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();
    if (event.dataTransfer?.files[0]) {
      
      setSelectedFileOptional(event.dataTransfer?.files[0]);
    }
  };


  const handleDragOver: React.DragEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();
  };

  const handleChangeTitle = (event: SelectChangeEvent) => {
    setTitle(event.target.value as string)
    clearErrors()
  };



  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    console.log('data12', data)
  }

  const handleSanitaze = ({number, countryData}: IPhone) => {
    const phoneNumber = number.dialCode+countryData
    return `+${phoneNumber.replace(/\D/g, "")}`
  }

  useEffect(() => {
    if (isSubmitted && !errors) {
      reset(formDefaultValues)
      setTitle('')
    }
  }, [formDefaultValues, isSubmitted, reset, errors])





  return (
    <>
      <S.UploadCvWrapper>
        <S.InfoTitle
          text1="Create a Profile &"
          text2="Upload your Application Documents"
          hasSpaceBtw
          className="upload-cv-heading2"
          wrapperStyles={{ width: "100%", justifyContent:"flex-start" }}
        />

        <S.UploadCvDetails>
          <Image src={imgUpload} alt="Create a Profile & Upload your Application Documents" width={516} height={299} />

          <S.ContentInfo>
            <StdParagraqh className="cv-paragraqh">
              Important: Only upload your application documents when they are optimized into German standard. 
              If you don't have optimized application documents, they will not be considered. 
              In our Online course you will learn every little step to optimize your 
              application documents into German Standard. We kindly ask you not to include sensitive data (see Article 9 DSGVO) 
              in your application, neither in the form nor in the uploaded documents.
            </StdParagraqh>
            <S.UIInfoButton>
              to the online course
            </S.UIInfoButton>
          </S.ContentInfo>
        </S.UploadCvDetails>
      </S.UploadCvWrapper>
      <FormProvider {...methods}>
        <S.CvForm onSubmit={handleSubmit(onSubmit)}>
          <div className="padded">
            <TwoColorTitle
              as="h3"
              text1="Personal Information"
              text2=""
              wrapperClassName="upload-cv-heading3-wrapper"
              className="upload-cv-heading3"
              wrapperStyles={{ maxWidth: "100%", width: '100%' }}
            />
            <StdParagraqh className="personal-info-sub-heading">
              Enter your personal details below
            </StdParagraqh>

            <div className="personal-info-inputs-wrapper  smaller-margin-bottom">
              <StdInput
                label="Title"
                name="title"
                required={true}
                errorMessage={errors.title?.type === 'required' ? 'Select how would you like to be addressed' : ''}
              >
                <StdSelect
                  value={title}
                  name="title"
                  onChange={handleChangeTitle}
                  required={true}
                  options={[
                    {
                      value: 'Male',
                      label: 'Male'
                    },
                    {
                      value: 'Female',
                      label: 'Female'
                    },
                    {
                      value: 'Divers',
                      label: 'Divers'
                    },
                    {
                      value: 'Prefer-not-to-say',
                      label: 'Prefer not to say'
                    },
                  ]}
                />
              </StdInput>
            </div>
            <div className="personal-info-inputs-wrapper smaller-margin-bottom">
              <StdInput
                label="First Name"
                name="firstName"
                required={true}
                errorMessage={errors.firstName?.type === 'required' ? 'Type your First Name' : ''}
              >
                <StdTextInput
                  name="firstName"
                  required={true}
                />
              </StdInput>

              <StdInput
                label="Last Name"
                name="lastName"
                required={true}
                errorMessage={errors.lastName?.type === 'required' ? 'Type your Last Name' : ''}
              >
                <StdTextInput
                  name="lastName"
                  required={true}
                />
              </StdInput>
            </div>

            <div className="personal-info-inputs-wrapper smaller-margin-bottom">
              <StdInput
                label="Email"
                name="email"
                required={true}
                errorMessage={errors.email?.type === 'required' ? 'Type your Email' : ''}
              >
                <StdTextInput
                  name="email"
                  required={true}
                />
              </StdInput>

              <StdInput
                label="Telephone Number"
                name="phone"
                required={true}
                errorMessage={errors.phone?.type === 'required' ? 'Type your Telephone Number' : ''}
              >
                <IntlTelInput
                  preferredCountries={['de']}
                  fieldId="phone"
                  fieldName="phone"
                  format
                  key="phone"
                  {...register('phone', {required: true})}
                  ref={phoneRef}
                  onPhoneNumberChange={(value, countryData, number) => {
                    setValue('phone', handleSanitaze({countryData, number}))
                  }}
                  
                />
               
              </StdInput>
            </div>

            <S.UITwoColorTitle
              text1="Other Information"
              text2=""
              className="upload-cv-heading3"
              wrapperClassName="upload-cv-heading3-wrapper"
              wrapperStyles={
                isMobile
                  ? { textAlign: "center", width: "100%" }
                  : { maxWidth: "100%", width: "100%" }
              }
            />

            <StdParagraqh className="personal-info-sub-heading">
              Which of the following specializations apply?
            </StdParagraqh>

            <FormGroup
              sx={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "row",
                justifyContent: "space-between",
                alignContent: 'flex-start',
                gap: 1.25,
              }}
            >
              {expertiseOptions.map((opt) => {
                return (
                  <FormControlLabel
                    sx={{
                      flexBasis: 'calc(20% - 10px)',
                      boxSizing: 'border-box',
                    }}
                    key={opt}
                    label={(
                      <Typography
                        sx={{
                          fontFamily: 'inherit',
                          width: 250,
                        }}
                      >
                        {opt}
                      </Typography>
                    )}
                    control={
                      <Checkbox
                        sx={{
                          color: blue700,
                          '&.Mui-checked': {
                            color: blue700,
                          },
                        }}
                      />
                    }
                  />
                )
              })}
            </FormGroup>
          </div>
          <div className="upload-docs-container">
            <div className="upload-docs-content padded">
              <TwoColorTitle
                as="h3"
                text1="Documents"
                text2=""
                className="upload-cv-heading3"
                wrapperClassName="upload-cv-heading3-wrapper"
                wrapperStyles={{ maxWidth: "100%", }}
              />
              <StdParagraqh className="personal-info-sub-heading">
                Accepted file formats: pdf, jpg, png, doc, docx, rtf, txt, odt
                with max upload size of 5MB.
              </StdParagraqh>
              <TwoColorTitle
                as="h4"
                text1="CV Upload"
                text2=""
                className=""
                wrapperClassName="upload-cv-heading4-wrapper"
                wrapperStyles={{ maxWidth: "100%", marginBottom: "20px" }}
                styles={
                  isMobile ? { fontSize: "1.5rem", lineHeight: "1.875rem" } : {}
                }
              />

              <div
                className="drop-area"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
              >
                {!selectedFile ? (
                  <div className="drop-message">
                    <span>
                      {isMobile
                        ? "Upload you CV"
                        : "Drag resume in here or select"}
                    </span>
                  </div>
                ) : (
                  <div className="file-details">
                    <div className="file-name">{selectedFile.name}</div>
                    <div className="file-size">{selectedFile.size} bytes</div>
                  </div>
                )}
                <label htmlFor="cv-file-input" className="file-input-label">
                  <FontAwesomeIcon
                    icon={faCloudUploadAlt}
                    size="5x"
                    color={blue700}
                    className="label-icon"
                  />
                </label>
                <input
                  id="cv-file-input"
                  type="file"
                  className="file-input"
                  onChange={handleFileChange}
                />
              </div>
              <div onClick={() => SetShowNewInput(!showNewInput)} >
                <S.UIStdParagraqh className="personal-info-sub-heading cv-upload-sub">
                  {(showNewInput || selectedFileOptional) ? "-" : "+"} Optional Documents (Cover Letter, Qualifications,
                  Recommendations, ...)
                </S.UIStdParagraqh>
              </div>

              

              {(showNewInput || selectedFileOptional) && 
                (<div
                  className="drop-area"
                  onDrop={handleDropOptionl}
                  onDragOver={handleDragOver}
                >
                  {!selectedFileOptional ? (
                    <div className="drop-message">
                      <span>
                        {isMobile
                          ? "Upload you optional documents"
                          : "Drag optional documents in here or select"}
                      </span>
                    </div>
                  ) : (
                    <div className="file-details">
                      <div className="file-name">{selectedFileOptional.name}</div>
                      <div className="file-size">{selectedFileOptional.size} bytes</div>
                    </div>
                  )}
                  <label htmlFor="cv-file-input-optional" className="file-input-label">
                    <FontAwesomeIcon
                      icon={faCloudUploadAlt}
                      size="5x"
                      color={blue700}
                      className="label-icon"
                    />
                  </label>
                  <input
                    id="cv-file-input-optional"
                    type="file"
                    className="file-input"
                    onChange={handleFileChangeOptional}
                  />
                </div>
                )}
            </div>
          </div>
          <div className="declaration-of-consent newsletter-check">
            <TwoColorTitle
              as="h3"
              text1="Newsletter"
              text2=""
              wrapperClassName="upload-cv-heading3-wrapper"
              className="upload-cv-heading3 declarations"
              wrapperStyles={{ maxWidth: "100%" }}
              styles={
                isMobile ? { marginBottom: "24px" } : { marginBottom: "24px" }
              }
            />

            <div
              style={{
                gap: "8px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Checkbox
                className="declaration-checkbox"
                sx={{
                  "& .MuiSvgIcon-root": { width: 30, height: 30 },
                  color: blue700,
                  "&.Mui-checked": {
                    color: blue400,
                  },
                }}
              />
              <p className="declaration-paragraqh">
                Yes, I want to get updates, news and job openings of Growing Abroad
              </p>
            </div>

          </div>
          <div className="declaration-of-consent">
            <S.DeclarationTitle
              text1="Declaration of Consent"
              text2=""
              wrapperClassName="upload-cv-heading3-wrapper"
              className="upload-cv-heading3 declarations"
              wrapperStyles={{ maxWidth: "100%" }}
            />

            <div
              style={{
                gap: "8px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Checkbox
                className="declaration-checkbox"
                sx={{
                  "& .MuiSvgIcon-root": { width: 30, height: 30 },
                  color: blue700,
                  "&.Mui-checked": {
                    color: blue400,
                  },
                }}
              />
              <p className="declaration-paragraqh">
                I agree to the{" "}
                <Link href="/" className="highlight">declaration of consent</Link> and have
                read and understood the{" "}
                <Link href="/" className="highlight">revocation and privacy policy.</Link>
                *
              </p>
            </div>
            <p className="required-field">
              This is a required field. Please fill in the required information.
            </p>

          </div>

          <StdButton
            style={{ justifySelf: "center", marginTop: "56px", marginBottom: '77px' }}
            icon={faUpload}
            type="submit"
          >
            {isSubmitting ? <CircularProgress /> : 'Upload Now'}
          </StdButton>
        </S.CvForm>
      </FormProvider>
    </>
  );
}
