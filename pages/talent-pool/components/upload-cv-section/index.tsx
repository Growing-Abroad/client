import React, { useState, useEffect } from "react";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { SubmitHandler, useForm, FormProvider } from "react-hook-form";
import StdButton from "@/components/generics/StdButton/StdButton";
import * as S from "styles/jobs/components/upload-cv-section/index.styles";
import useAppContext from "@/hooks/useAppContext";
import StdInput from "@/components/generics/StdInput";
import StdTextInput from "@/components/generics/StdInput/StdTextInput";
import Image from "next/image";
import imgUpload from "@/../public/assets/pages/jobs/growing.png";
import StdError from "@/components/generics/StdError";
import uploadIcon from "@assets/pages/jobs/icon-upload.svg";
import newApplication from "@/services/applications/applications.service";
import LoadingComponent from "@/components/generics/Loading";
import styles from "../../../newsletter-confirmation/funnels.style.module.css";
import Toast from "@/components/Toast";
import Popup from "components/PopUp";
import notebooimg from "@/../public/assets/images/notebook-img.png";
import PhoneInputWithCountry from 'react-phone-number-input/react-hook-form';

import 'react-phone-number-input/style.css'

export interface IFormFields {
  pronoum: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  areasOfExpertise: Array<string>;
  declarationOfConsent: boolean;
  newsletter: string;
  file: FileList;
  otherFile: FileList;
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
  const { isMobile, loading, setLoading } = useAppContext();
  const [selectedFile, setSelectedFile] = useState<File>();
  const [inputError, setInputError] = useState<boolean>(false);
  const [selectedFileOptional, setSelectedFileOptional] = useState<File>();
  const [showNewInput, SetShowNewInput] = useState(false);
  const [showToast, setShowToast] = useState<boolean>(false);
  const [msgToast, setMsgToast] = useState<string>("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const formDefaultValues = {
    pronoum: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  };

  const methods = useForm<IFormFields>({
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: formDefaultValues,
  });

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
    setValue,
    control
  } = methods;

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const onSubmit: SubmitHandler<IFormFields> = async (data: IFormFields) => {
    if (selectedFile !== undefined) {
      setLoading(true);
      try {
        await newApplication(data);
        resetStates();
        setIsPopupOpen(true);
      } catch (error) {
        setIsPopupOpen(false);
        setShowToast(true);
        console.error(error);
        setMsgToast("An error has occurred. Please try again later.");
      } finally {
        setLoading(false);
      }
    } else {
      setMsgToast("please fill in all fields");
      setShowToast(true);
      setInputError(true);
    }
  };

  const resetStates = () => {
    reset();
    setSelectedFile(undefined);
    setSelectedFileOptional(undefined);
  };

  const HandlePreventDefault: React.DragEventHandler<HTMLDivElement> = (
    event
  ) => {
    event.preventDefault();
  };

  const handleDrop: React.DragEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();

    setValue("file", event.dataTransfer.files, { shouldValidate: true });
    setSelectedFile(event.dataTransfer.files[0]);
  };

  const handleDropOptional: React.DragEventHandler<HTMLDivElement> = (
    event
  ) => {
    event.preventDefault();
    setValue("otherFile", event.dataTransfer.files);
    setSelectedFileOptional(event.dataTransfer.files[0]);
  };

  useEffect(() => {
    setInputError(false);
  }, [selectedFile]);

  const MB = 1024 * 1024;

  return (
    <>
      {loading && <LoadingComponent />}
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
            <S.UIInfoButton onClick={() => (location.href = "/online-course")}>
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
                name="pronoum"
                required={true}
                errorMessage={
                  errors.pronoum?.type === "required"
                    ? "Select how would you like to be addressed"
                    : ""
                }
              >
                <S.UISelect
                  placeholder="No specification"
                  {...register("pronoum", { required: true })}
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
                <S.PhoneContainer>
                  <PhoneInputWithCountry
                    control={control}
                    defaultCountry="DE"
                    name="phone"
                    rules={{ required: true }}
                  />
                </S.PhoneContainer>
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
                    {...register("areasOfExpertise", { required: true })}
                    value={item}
                  />
                  {item}
                </S.SpecializationsContent>
              ))}
              <StdError>
                {errors.areasOfExpertise?.type === "required"
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
              <S.DropArea
                onDragOver={HandlePreventDefault}
                onDragEnter={HandlePreventDefault}
                onDragLeave={HandlePreventDefault}
                onDrop={handleDrop}
              >
                {!selectedFile ? (
                  <S.DropMessage>
                    {isMobile
                      ? "Upload you CV"
                      : "Drag resume in here or select"}
                  </S.DropMessage>
                ) : (
                  <S.DropMessage>
                    <div>{selectedFile.name}</div>
                    <div>{selectedFile.size} MB</div>
                  </S.DropMessage>
                )}
                <S.FileInputLabel htmlFor="cv-file-input">
                  <Image src={uploadIcon} alt="Icon" />
                </S.FileInputLabel>

                <S.FileInput
                  id="cv-file-input"
                  type="file"
                  {...register("file", {
                    required: false,
                    onChange: (e) => setSelectedFile(e.target.files[0]),
                  })}
                />
                <StdError>
                  {inputError
                    ? "Please upload your CV"
                    : (selectedFile?.size ?? 0) / MB > MB * 5
                    ? "The file exceeds the maximum size of 5 MB. Please choose a smaller file."
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
                <S.DropArea
                  onDragOver={HandlePreventDefault}
                  onDragEnter={HandlePreventDefault}
                  onDragLeave={HandlePreventDefault}
                  onDrop={handleDropOptional}
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
                        {selectedFileOptional.size} MB
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
                />
                <S.PrivacyText>
                  Yes, I want to get updates and news of Growing Abroad and I
                  accept the websites{" "}
                  <Link href="/data-privacy">Privacy Policy</Link>
                  . <br />
                  Our newsletter subscription is non-binding.
                </S.PrivacyText>
              </S.PrivacyContent>
            </StdInput>

            <StdInput
              label="Data protection statement"
              name="declarationOfConsent"
              required={true}
              errorMessage={
                errors.declarationOfConsent?.type === "required"
                  ? "This is a required field. Please fill in the required information."
                  : ""
              }
            >
              <S.PrivacyContent>
                <S.UIInputCheckbox
                  type="checkbox"
                  {...register("declarationOfConsent", { required: true })}
                />
                <S.PrivacyText>
                  I agree to the{" "}
                  <Link href="/declaration-of-consent ">
                    declaration of consent
                  </Link>{" "}
                  and have read and understood the{" "}
                  <Link href="/data-protection">
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
            Upload Now
          </StdButton>
          {showToast && (
            <S.ToastContainer>
              <Toast setShowToast={setShowToast} message={msgToast} />
            </S.ToastContainer>
          )}
        </S.CvForm>

        <Popup isOpen={isPopupOpen} onClose={handleClosePopup}>
          <S.FunnelPagesContainer>
            <h1
              style={{ marginBottom: 10 }}
              className={styles.funnels_pages__title}
            >
              You did it!
            </h1>
            <p className={styles.funnels_pages__paragraph}>
              You successfully registered in our Talentpool - whoop whoop!{" "}
              <br />
              As soon as we find a position that's a great fit for you, we'll
              reach out to you directly.
            </p>
            <S.PopImg
              src={notebooimg.src}
              alt="two guys cheering"
              height={400}
              width={718}
            />
          </S.FunnelPagesContainer>
        </Popup>
      </FormProvider>
    </>
  );
}
