import { PageLayout } from "@/components";
import { ReactElement, useState } from "react";
import { ChosenHeader } from "@/components/PageLayout/PageLayout";
import * as S from "../../styles/masterclass";
import UanAndManu from "@/../public/assets/masterclassDesktop.png";
import { SubmitHandler, useForm, FormProvider } from "react-hook-form";
import StdInput from "@/components/generics/StdInput";
import StdError from "@/components/generics/StdError";
import signInNewsLetter from "@/services/news-letter/news-letter.service";
import useAppContext from "@/hooks/useAppContext";
import Toast from "@/components/Toast";
import { useRouter } from "next/router"

const formDefaultValues = {
  name: "",
  email: "",
  consent: false,
};

export interface IFormFields {
  name: string;
  email: string;
  consent: boolean;
}

export default function MasterclassLogin() {
  const { setLoading } = useAppContext();
  const [showToast, setShowToast] = useState<boolean>(false);
  const router = useRouter()

  const methods = useForm<IFormFields>({
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: formDefaultValues,
  });
  const onSubmit: SubmitHandler<IFormFields> = async (data: IFormFields) => {
    const { name, email, consent } = data;
    const splitedName = name.split(' ');
    setLoading(true);
    const newsletterData = {
      url: "https://api.growingabroad.de/contact",
      data: {
        user: {
          name,
          firstName: splitedName[0],
          lastName: splitedName[1] || '',
          email,
          consent,
        },
        listId: 4,
      },
      setShowToast
    };
    try {
      await signInNewsLetter(newsletterData);
      router.push("/masterclass/thank-you")
    } catch (error) {
      setShowToast(true)
      console.error(error)
    }
    setLoading(false);
    
  };

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = methods;

  return (
    <>
      <S.ContainerFunnelPagesContainer>
        <S.MasterlassTitleLogin>
          Find out how to land your Dream Job in
          <S.MasterlassSpan>
            {" "}
            Germany <br />
          </S.MasterlassSpan>{" "}
          in the exclusive
          <S.MasterlassSpan> Free Masterclass</S.MasterlassSpan>
        </S.MasterlassTitleLogin>
        <S.ContentItemsLogin>
          <S.ContainerLogin>
            <S.ContentItem>
              <FormProvider {...methods}>
                <S.CvForm onSubmit={handleSubmit(onSubmit)}>
                  <StdInput
                    label=""
                    name="name"
                    required={true}
                    errorMessage={
                      errors.name?.type === "required" ? "Type your Name" : ""
                    }
                  >
                    <S.StdTextInputMasterclass
                      placeholder="Enter First Name"
                      name="name"
                      required={true}
                    />
                  </StdInput>
                  <StdInput
                    label=""
                    name="email"
                    required={true}
                    errorMessage={
                      errors.email?.type === "required" ? "Type your E-mail" : ""
                    }
                  >
                    <S.StdTextInputMasterclass
                      placeholder="Enter Your Email Address"
                      name="email"
                      required={true}
                    />
                  </StdInput>

                  <S.LabelCheckbox htmlFor="consent">
                    <S.CheckoboxInputMasterclass
                      type="checkbox"
                      required={true}
                      {...register("consent", { required: true })}
                    />
                    <S.LabelCheckboxText>Yes, I would like to sign up for the Growing Abroad Newsletter and I accept the websites <S.LabelCheckboxLink href="">Privacy Policy</S.LabelCheckboxLink>. Our newsletter subscription is non-binding.*</S.LabelCheckboxText>
                  </S.LabelCheckbox>
                  <StdError>
                    {errors.consent?.type === "required"
                      ? "this field is mandatory"
                      : ""}
                  </StdError>

                  <S.UIStdButtonLogin type="submit">
                    FREE Masterclass - Sign Up Now
                  </S.UIStdButtonLogin>
                </S.CvForm>
              </FormProvider>
            </S.ContentItem>
          </S.ContainerLogin>
          <S.ImageUanManu src={UanAndManu} alt="Uan and Manu" />
        </S.ContentItemsLogin>
        {showToast && (
              <Toast
                setShowToast={setShowToast}
                message="An error occurred while signing up for the FREE Masterclass. Please try again later."
              />
            )}
      </S.ContainerFunnelPagesContainer>
    </>
  );
}

MasterclassLogin.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout
      chosenHeader={ChosenHeader.FOR_MASTERCLASS}
      hideBlueSection={true}
    >
      {page}
    </PageLayout>
  );
};
