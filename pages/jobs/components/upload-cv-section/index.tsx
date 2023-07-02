import React, { useState, useRef } from "react";
import { CircularProgress } from "@mui/material";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { SubmitHandler, useForm, FormProvider } from "react-hook-form";
import IntlTelInput from "react-intl-tel-input";
import StdParagraqh from "@/components/generics/StdParagraqh/StdParagraqh";
import StdButton from "@/components/generics/StdButton/StdButton";
import * as S from "styles/jobs/components/upload-cv-section/index.styles";
import useAppContext from "@/hooks/useAppContext";
import StdInput from "@/components/generics/StdInput";
import StdTextInput from "@/components/generics/StdInput/StdTextInput";
import "react-intl-tel-input/dist/main.css";
import Image from "next/image";
import imgUpload from "@/../public/assets/pages/jobs/growing.png";
import StdError from "@/components/generics/StdError";
import uploadIcon from "@assets/pages/jobs/icon-upload.svg";

interface FormFields {
  title: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  specializationInput: Array<string>;
  declaration_of_consent: boolean;
  newsletter: string;
  file: FileList;
  otherFile: FileList;
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

const titleOptions = [
  {
    name: "Male",
    key: "Male",
  },
  {
    name: "Female",
    key: "Female",
  },
  {
    name: "Divers",
    key: "Divers",
  },
  {
    name: "Prefer not to say",
    key: "Prefer-not-to-say",
  },
];

export default function UploadCvSection() {
  const { isMobile } = useAppContext();
  const [selectedFile, setSelectedFile] = useState<File>();
  const [selectedFileOptional, setSelectedFileOptional] = useState<File>();
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
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    setValue,
  } = methods;

  const handleDragOver: React.DragEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();
  };

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    console.log("data12", data);
  };

  const handleSanitaze = ({ number, countryData }: IPhone) => {
    const phoneNumber = number.dialCode + countryData;
    return `+${phoneNumber.replace(/\D/g, "")}`;
  };

  return (
    <>
      <S.UploadCvWrapper>
        <S.InfoTitle
          text1="Create a Profile &"
          text2="Upload your Application Documents"
          hasSpaceBtw
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
            <S.UIStdParagraqhCustom>
              Important: Only upload your application documents when they are
              optimized into German standard. If you don't have optimized
              application documents, they will not be considered. In our Online
              course you will learn every little step to optimize your
              application documents into German Standard. We kindly ask you not
              to include sensitive data (see Article 9 DSGVO) in your
              application, neither in the form nor in the uploaded documents.
            </S.UIStdParagraqhCustom>
            <S.UIInfoButton onClick={() => location.href = "/online-course"}>
              To the online course
            </S.UIInfoButton>
          </S.ContentInfo>
        </S.UploadCvDetails>
      </S.UploadCvWrapper>

      <FormProvider {...methods}>
        <S.CvForm id="scroll-id" onSubmit={handleSubmit(onSubmit)}>
          <S.ContainerField>
            <S.UITitle text1="Personal Information" text2="" />
            <S.UISubtitle>Enter your personal details below</S.UISubtitle>

            <S.SelectContainer>
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
                <S.UISelect
                  placeholder="No specification"
                  {...register("title", { required: true })}
                >
                  <S.UIOption value="" defaultChecked>
                    No specification
                  </S.UIOption>
                  {titleOptions.map((item) => (
                    <S.UIOption key={item.key} value={item.key}>
                      {item.name}
                    </S.UIOption>
                  ))}
                </S.UISelect>
              </StdInput>
            </S.SelectContainer>

            <S.FieldGroup>
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
            </S.FieldGroup>

            <S.FieldGroup>
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
            </S.FieldGroup>

            <S.UITitleInfos text1="Other Information" text2="" />

            <S.UISubtitle>
              Which of the following specializations apply? *
            </S.UISubtitle>

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
          </S.ContainerField>

          <S.UploadDocsContainer>
            <S.UploadDocsContent>
              <S.UITitle text1="Documents" text2="" />
              <S.UISubtitle>
                Accepted file formats: pdf, jpg, png, doc, docx, rtf, txt, odt
                with max upload size of 5MB.
              </S.UISubtitle>
              <S.UITitle text1="CV Upload *" text2="" />
              <S.DropArea onDragOver={handleDragOver}>
                {!selectedFile ? (
                  <S.DropMessage>
                    {isMobile
                      ? "Upload you CV"
                      : "Drag resume in here or select"}
                  </S.DropMessage>
                ) : (
                  <S.DropMessage>
                    <div>{selectedFile.name}</div>
                    <div>{selectedFile.size} bytes</div>
                  </S.DropMessage>
                )}
                <S.FileInputLabel htmlFor="cv-file-input">
                  <Image src={uploadIcon} alt="Icon" />
                </S.FileInputLabel>

                <S.FileInput
                  id="cv-file-input"
                  type="file"
                  {...register("file", {
                    required: true,
                    onChange: (e) => setSelectedFile(e.target.files[0]),
                  })}
                />
                <StdError>
                  {errors.file?.type === "required"
                    ? "Please upload your CV"
                    : ""}
                </StdError>
              </S.DropArea>
              <div onClick={() => SetShowNewInput(!showNewInput)}>
                <S.UIStdParagraqh>
                  {showNewInput || selectedFileOptional ? "-" : "+"} Optional
                  Documents (Cover Letter, Qualifications, Recommendations, ...)
                </S.UIStdParagraqh>
              </div>

              {(showNewInput || selectedFileOptional) && (
                <S.DropArea onDragOver={handleDragOver}>
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
                  <S.FileInputLabel htmlFor="cv-file-input-optional">
                    <Image src={uploadIcon} alt="Icon" />
                  </S.FileInputLabel>
                  <S.FileInput
                    id="cv-file-input-optional"
                    type="file"
                    {...register("otherFile", {
                      required: false,
                      onChange: (e) =>
                        setSelectedFileOptional(e.target.files[0]),
                    })}
                  />
                </S.DropArea>
              )}
            </S.UploadDocsContent>
          </S.UploadDocsContainer>

          <S.PrivacyContainer>
            <StdInput label="Newsletter" name="newsletter" required={false}>
              <S.PrivacyContent>
                <S.UIInputCheckbox
                  type="checkbox"
                  {...register("newsletter", { required: false })}
                  value="Yes, I want to get updates and news of Growing Abroad and I accept the websites Privacy Policy. Our newsletter subscription is non-binding."
                />
                <S.PrivacyText>
                  Yes, I want to get updates and news of Growing Abroad and I
                  accept the websites{" "}
                  <Link target="_blank" href="/data-privacy-policy">
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
                />
                <S.PrivacyText>
                  I agree to the{" "}
                  <Link target="_blank" href="/declaration-of-consent ">
                    declaration of consent
                  </Link>{" "}
                  and have read and understood the{" "}
                  <Link target="_blank" href="/data-privacy-policy/applicants">
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
