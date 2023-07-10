import useAppContext from "@/hooks/useAppContext";
import signInNewsLetter from "@/services/news-letter/news-letter.service";
import { Checkbox } from "@mui/material";
import { SubmitHandler, useForm, FormProvider } from "react-hook-form";
import { useTheme } from "styled-components";
import StdButton from "../generics/StdButton/StdButton";
import { useState } from "react";
import StdError from "../generics/StdError";
import Toast from "../Toast";

import {
  InputNewsLetter,
  InputWrapper,
  NewsLetterContainer,
  NewsLetterForm,
  SubscribeWrapper,
  TitleNewsLetter,
  FlexContainer,
  FlexContainerCheckbox,
  SuccessMsg,
} from "./style";

interface INewsLetter {
  name: string;
  email: string;
  consent: boolean;
}

export default function NewsLetter() {
  const [showForm, setShowForm] = useState(true);
  const [showToast, setShowToast] = useState<boolean>(false);

  const formDefaultValues = {
    name: "",
    email: "",
    consent: false,
  };
  const {
    colors: { white },
  } = useTheme();
  const { isMobile, setLoading } = useAppContext();

  const methods = useForm<INewsLetter>({
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: formDefaultValues,
  });

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = methods;

  const onSubmit: SubmitHandler<INewsLetter> = async (data) => {
    const { name, email, consent } = data;

    setLoading(true);
    const newsletterData = {
      url: "https://api.growingabroad.de/contact",
      data: {
        user: {
          name,
          email,
          consent,
        },
        listId: 6,
      },
      setShowToast
    };
    try {
      const { response } = await signInNewsLetter(newsletterData);
      if (response.ok) {
        setShowForm(false);
      } 
    } catch (error) {
      console.error(error)
    }
    setLoading(false);
    
  };

  return (
    <>
      <NewsLetterContainer>
        <TitleNewsLetter>
          {showForm
            ? "Join our Newsletter"
            : "Thank you for subscribing to our Newsletter"}
        </TitleNewsLetter>
        {showForm ? (
          <FormProvider {...methods}>
            <NewsLetterForm onSubmit={handleSubmit(onSubmit)}>
              <SubscribeWrapper>
                <InputWrapper>
                  <FlexContainer>
                    <InputNewsLetter
                      {...register("name", { required: true })}
                      placeholder="Enter Your Full Name"
                    />
                    <StdError>
                      {errors.name?.type === "required"
                        ? "Please type your full name"
                        : ""}
                    </StdError>
                  </FlexContainer>

                  <FlexContainer>
                    <InputNewsLetter
                      placeholder="Enter Your E-mail Adress"
                      {...register("email", { required: true })}
                    />
                    <StdError>
                      {errors.email?.type === "required"
                        ? "Please type your E-mail Adress"
                        : ""}
                    </StdError>
                  </FlexContainer>
                </InputWrapper>
                <div
                  style={{
                    gap: `${isMobile ? "8px" : "0px"}`,
                    display: "flex",
                    alignItems: "flex-start",
                  }}
                >
                  <Checkbox
                    className="declaration-checkbox"
                    sx={{
                      "& .MuiSvgIcon-root": isMobile
                        ? { width: 30, height: 30 }
                        : { width: 24, height: 24 },
                      color: white,
                      "&.Mui-checked": {
                        color: white,
                      },
                    }}
                    {...register("consent", { required: true })}
                  />
                  <FlexContainerCheckbox>
                    <p
                      className="paragraph"
                      style={{ color: "white", fontSize: 13 }}
                    >
                      Yes, I would like to sign up for the Growing Abroad
                      Newsletter and I accept the websites Privacy Policy.{" "}
                      <br /> Our newsletter subscription is non-binding.*
                    </p>
                    <StdError>
                      {errors.consent?.type === "required"
                        ? "this field is required"
                        : ""}
                    </StdError>
                  </FlexContainerCheckbox>
                </div>
              </SubscribeWrapper>
              <StdButton
                style={{
                  margin: "0",
                  display: "flex",
                  alignItems: `${isMobile ? "flex-start" : "center"}`,
                  justifyContent: `${isMobile ? "center" : "center"}`,
                  width: `${isMobile ? "112px" : "193px"}`,
                  padding: `${isMobile ? "8px 15px" : "20px 40px"}`,
                  fontSize: `${isMobile ? "14px" : "16px"}`,
                  height: `${isMobile ? "35px" : "54px"}`,
                  textAlign: `${isMobile ? "start" : "center"}`,
                }}
                type="submit"
              >
                Subscribe
              </StdButton>
            </NewsLetterForm>
          </FormProvider>
        ) : (
          <>
            {showToast ? (
              <Toast
                setShowToast={setShowToast}
                message="An error occurred while subscribing to the newsletter. Please try again later."
              />
            ) : (
              <SuccessMsg>
                You will receive an email shortly to{" "}
                <span>CONFIRM YOUR REGISTRATION</span>. <br />
                If you don’t find any mail, then please also check your Spam
                Folder.
              </SuccessMsg>
            )}
          </>
        )}
      </NewsLetterContainer>
    </>
  );
}
