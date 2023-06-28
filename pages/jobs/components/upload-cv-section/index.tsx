import React, { useState, ChangeEvent, useRef, useEffect } from "react";
import { useTheme } from "styled-components";
import { CircularProgress, SelectChangeEvent } from "@mui/material";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { SubmitHandler, useForm, FormProvider } from "react-hook-form";
import IntlTelInput from "react-intl-tel-input";

import TwoColorTitle from "@/components/two-color-title";
import StdParagraqh from "@/components/generics/StdParagraqh/StdParagraqh";
import StdButton from "@/components/generics/StdButton/StdButton";
import * as S from "styles/jobs/components/upload-cv-section/index.styles";
import useAppContext from "@/hooks/useAppContext";
import StdSelect from "@/components/generics/StdInput/StdSelect";
import StdInput from "@/components/generics/StdInput";
import StdTextInput from "@/components/generics/StdInput/StdTextInput";
import "react-intl-tel-input/dist/main.css";
import Image from "next/image";
import imgUpload from "@/../public/assets/pages/jobs/growing.png";
import StdError from "@/components/generics/StdError";

// import uploadIcon from "public/assets/pages/jobs/icon-upload.svg"
import uploadIcon from "@assets/pages/jobs/icon-upload.svg";

interface FormFields {
  title: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  specializationInput: string;
  declaration_of_consent: string;
  newsletter: string;
  file: string;
  otherFile: string;
}

interface IPhone {
  countryData: string;

  number: {
    name?: string;
    iso2?: string;
    dialCode?: string;
    priority?: number;
    areaCodes?: string[] | null;
  };
}

const expertiseOptions = [
  "Agriculture",
  "Architecture",
  "Arts",
  "Communication",
  "Creation",
  "Digital",
  "Education",
  "Engineering",
  "Finance & Accounting",
  "Government",
  "Health Care",
  "HR",
  "IT",
  "Law",
  "Logistics",
  "Marketing",
  "Media",
  "Mechanics",
  "Office",
  "Sales",
  "Science",
  "Social Service",
  "Supply Chain Management",
  "Other",
];

export default function UploadCvSection() {
  const {
    colors: { blue700, blue400 },
  } = useTheme();
  const {
    isMobile,
    smallDesktopSize,
    windowSize: { width },
  } = useAppContext();
  const [selectedFile, setSelectedFile] = useState<File>();
  const [selectedFileOptional, setSelectedFileOptional] = useState<File>();
  const [title, setTitle] = useState("");
  const [showNewInput, SetShowNewInput] = useState(false);

  const phoneRef = useRef(null);

  const formDefaultValues = {
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  };

  const methods = useForm<FormFields>({
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: formDefaultValues,
  });

  const {
    formState: { errors, isSubmitted, isSubmitting },
    handleSubmit,
    clearErrors,
    reset,
    register,
    setValue,
  } = methods;

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleFileChangeOptional = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("asasa");
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
    setTitle(event.target.value as string);
    clearErrors();
  };

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    console.log("data12", data);
  };

  const handleSanitaze = ({ number, countryData }: IPhone) => {
    const phoneNumber = number.dialCode + countryData;
    return `+${phoneNumber.replace(/\D/g, "")}`;
  };

  useEffect(() => {
    if (isSubmitted && !errors) {
      reset(formDefaultValues);
      setTitle("");
    }
  }, [formDefaultValues, isSubmitted, reset, errors]);

  return (
    <>
      <S.UploadCvWrapper>
        <S.InfoTitle
          text1="Create a Profile &"
          text2="Upload your Application Documents"
          hasSpaceBtw
          className="upload-cv-heading2"
          wrapperStyles={{ width: "100%", justifyContent: "flex-start" }}
        />

        <S.UploadCvDetails>
          <S.UIImage
            src={imgUpload}
            alt="Create a Profile & Upload your Application Documents"
            width={516}
            height={299}
          />

          <S.ContentInfo>
            <StdParagraqh className="cv-paragraqh">
              Important: Only upload your application documents when they are
              optimized into German standard. If you don't have optimized
              application documents, they will not be considered. In our Online
              course you will learn every little step to optimize your
              application documents into German Standard. We kindly ask you not
              to include sensitive data (see Article 9 DSGVO) in your
              application, neither in the form nor in the uploaded documents.
            </StdParagraqh>
            <S.UIInfoButton href="https://growingabroad.de/online-course">
              To the online course
            </S.UIInfoButton>
          </S.ContentInfo>
        </S.UploadCvDetails>
      </S.UploadCvWrapper>
      <FormProvider {...methods}>
        <S.CvForm id="form-jobs" onSubmit={handleSubmit(onSubmit)}>
          <div className="padded">
            <TwoColorTitle
              as="h3"
              text1="Personal Information"
              text2=""
              wrapperClassName="upload-cv-heading3-wrapper"
              className="upload-cv-heading3"
              wrapperStyles={{ maxWidth: "100%", width: "100%" }}
            />
            <StdParagraqh className="personal-info-sub-heading">
              Enter your personal details below
            </StdParagraqh>

            <div className="personal-info-inputs-wrapper  smaller-margin-bottom">
              <StdInput
                label="Title"
                name="title"
                required={true}
                errorMessage={
                  errors.title?.type === "required"
                    ? "Select how would you like to be addressed"
                    : ""
                }
              >
                <StdSelect
                  value={title}
                  name="title"
                  onChange={handleChangeTitle}
                  required={true}
                  options={[
                    {
                      value: "Male",
                      label: "Male",
                    },
                    {
                      value: "Female",
                      label: "Female",
                    },
                    {
                      value: "Divers",
                      label: "Divers",
                    },
                    {
                      value: "Prefer-not-to-say",
                      label: "Prefer not to say",
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
                errorMessage={
                  errors.firstName?.type === "required"
                    ? "Type your First Name"
                    : ""
                }
              >
                <StdTextInput name="firstName" required={true} />
              </StdInput>

              <StdInput
                label="Last Name"
                name="lastName"
                required={true}
                errorMessage={
                  errors.lastName?.type === "required"
                    ? "Type your Last Name"
                    : ""
                }
              >
                <StdTextInput name="lastName" required={true} />
              </StdInput>
            </div>

            <div className="personal-info-inputs-wrapper smaller-margin-bottom">
              <StdInput
                label="Email"
                name="email"
                required={true}
                errorMessage={
                  errors.email?.type === "required" ? "Type your Email" : ""
                }
              >
                <StdTextInput name="email" required={true} />
              </StdInput>

              <StdInput
                label="Telephone Number"
                name="phone"
                required={true}
                errorMessage={
                  errors.phone?.type === "required"
                    ? "Type your Telephone Number"
                    : ""
                }
              >
                <IntlTelInput
                  preferredCountries={["de"]}
                  fieldId="phone"
                  fieldName="phone"
                  format
                  key="phone"
                  {...register("phone", { required: true })}
                  ref={phoneRef}
                  onPhoneNumberChange={(value, countryData, number) => {
                    setValue("phone", handleSanitaze({ countryData, number }));
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
              Which of the following specializations apply? <span>*</span>
            </StdParagraqh>

            <S.SpecializationsContainer>
              {expertiseOptions.map((item, idx) => (
                <S.SpecializationsContent key={idx}>
                  <S.UIInputCheckbox
                    type="checkbox"
                    {...register("specializationInput", { required: true })}
                    value={item}
                  />
                  {item}
                </S.SpecializationsContent>
              ))}
              <StdError>
                {errors.specializationInput?.type === "required"
                  ? "Please choose your specialization"
                  : ""}
              </StdError>
            </S.SpecializationsContainer>
          </div>

          <div className="upload-docs-container">
            <div className="upload-docs-content padded">
              <TwoColorTitle
                as="h3"
                text1="Documents"
                text2=""
                className="upload-cv-heading3"
                wrapperClassName="upload-cv-heading3-wrapper"
                wrapperStyles={{ maxWidth: "100%" }}
              />
              <StdParagraqh className="personal-info-sub-heading">
                Accepted file formats: pdf, jpg, png, doc, docx, rtf, txt, odt
                with max upload size of 5MB.
              </StdParagraqh>
              <TwoColorTitle
                as="h4"
                text1="CV Upload *"
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
                  <Image src={uploadIcon} alt="Icon" />
                </label>

                <input
                  id="cv-file-input"
                  type="file"
                  className="file-input"
                  {...register("file", {
                    required: true,
                    onChange: handleFileChange,
                  })}
                />
                <StdError>
                  {errors.file?.type === "required"
                    ? "Please upload your CV"
                    : ""}
                </StdError>
              </div>
              <div onClick={() => SetShowNewInput(!showNewInput)}>
                <S.UIStdParagraqh className="personal-info-sub-heading cv-upload-sub">
                  {showNewInput || selectedFileOptional ? "-" : "+"} Optional
                  Documents (Cover Letter, Qualifications, Recommendations, ...)
                </S.UIStdParagraqh>
              </div>

              {(showNewInput || selectedFileOptional) && (
                <div
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
                      <div className="file-name">
                        {selectedFileOptional.name}
                      </div>
                      <div className="file-size">
                        {selectedFileOptional.size} bytes
                      </div>
                    </div>
                  )}
                  <label
                    htmlFor="cv-file-input-optional"
                    className="file-input-label"
                  >
                    <Image src={uploadIcon} alt="Icon" />
                  </label>
                  <input
                    id="cv-file-input-optional"
                    type="file"
                    className="file-input"
                    {...register("otherFile", {
                      required: false,
                      onChange: handleFileChangeOptional,
                    })}
                  />
                </div>
              )}
            </div>
          </div>

          <S.PrivacyContainer className="declaration-of-consent newsletter-check">
            <StdInput label="Newsletter" name="newsletter" required={false}>
              <S.PrivacyContent>
                <S.UIInputCheckbox
                  type="checkbox"
                  {...register("newsletter", { required: false })}
                  value="Yes, I want to get updates and news of Growing Abroad and I accept the websites Privacy Policy. Our newsletter subscription is non-binding."
                />
                <S.PrivacyText className="declaration-paragraqh">
                  Yes, I want to get updates and news of Growing Abroad and I
                  accept the websites{" "}
                  <Link href="https://growingabroad.de/data-privacy-policy">
                    Privacy Policy
                  </Link>
                  . Our newsletter subscription is non-binding.
                </S.PrivacyText>
              </S.PrivacyContent>
            </StdInput>

            <StdInput
              label="Data protection statement"
              name="declaration_of_consent"
              required={true}
              errorMessage={
                errors.declaration_of_consent?.type === "required"
                  ? "This is a required field. Please fill in the required information."
                  : ""
              }
            >
              <S.PrivacyContent>
                <S.UIInputCheckbox
                  type="checkbox"
                  {...register("declaration_of_consent", { required: true })}
                  value="I agree to the declaration of consent and have read and understood the revocation and privacy policy*"
                />
                <S.PrivacyText className="declaration-paragraqh">
                  I agree to the{" "}
                  <Link href="https://growingabroad.de/declaration-of-consent ">
                    declaration of consent
                  </Link>{" "}
                  and have read and understood the{" "}
                  <Link href="https://growingabroad.de/data-privacy-policy/applicants">
                    revocation and privacy policy
                  </Link>
                  . *
                </S.PrivacyText>
              </S.PrivacyContent>
            </StdInput>
          </S.PrivacyContainer>

          <StdButton
            style={{
              justifySelf: "center",
              marginTop: "56px",
              marginBottom: "77px",
            }}
            icon={faUpload}
            type="submit"
          >
            {isSubmitting ? <CircularProgress /> : "Upload Now"}
          </StdButton>
        </S.CvForm>
      </FormProvider>
    </>
  );
}
