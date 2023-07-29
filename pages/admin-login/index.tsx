import { useEffect, useState } from 'react';
import axios from 'axios';
import SEO from "@/components/seo";
import { SubmitHandler, useForm, FormProvider } from "react-hook-form";
import StdInput from '@/components/generics/StdInput';
import StdTextInput from '@/components/generics/StdInput/StdTextInput';
import StdButton from '@/components/generics/StdButton/StdButton';
import * as S from '@styles/pages-styles/admin-login/index.styles';
import GrowingLogo from '@assets/growing-abroad/full-logo-growing-reduced.png';
import Image from 'next/image';
import { useRouter } from "next/router";
import { useAuthContext } from '@/hooks/useAuthContext';


interface ILoginFields {
  email: string,
  password: string
}

const AdminLogin = () => {
  const authValues = useAuthContext();
  const route = useRouter();

  const formDefaultValues: ILoginFields = {
    email: '',
    password: ''
  };

  const formMethods = useForm<ILoginFields>({
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: formDefaultValues,
  });

  const {
    formState: { errors },
    handleSubmit,
  } = formMethods;

  const onSubmitLogin: SubmitHandler<ILoginFields> = async (data: ILoginFields) => {
    console.log({data})
    try {
      const response = await axios.post('http://localhost:3001/sign-in', data, {
        withCredentials: true
      });

      const token = response.data.accessToken;
      console.log({token});
      if (!token) {
        console.log('error')
        return
      }
      authValues?.setAccessToken(token);
    } catch (error) {
      // Handle error, show error message
      // console.error(error)
    }
  };

  useEffect(() => {
    console.log({accessToken: authValues?.accessToken})
    if (authValues?.accessToken) {
      route.push('/admin');
    }
  }, [authValues?.accessToken]);

  return (
    <>
      <SEO
        description="Growing Abroad Admin login page."
        title="Admin | Growing Abroad"
        url="https://growingabroad.de/admin-login"
      />
      <S.FormWrapper>
        <Image src={GrowingLogo.src} alt="Growing Abroad Logo" className='logo-img' width={300} height={120} style={{}}/>
        <FormProvider {...formMethods}>
          <S.LoginForm onSubmit={handleSubmit(onSubmitLogin)}>

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
              label="Password"
              name="password"
              required={true}
              errorMessage={
                errors.password?.type === "required" ? "Type your Password" : ""
              }
            >
              <StdTextInput name="password" required={true} />
            </StdInput>

            <StdButton type='submit' style={{borderRadius: '10px'}} >Login</StdButton>
          
          </S.LoginForm>
        </FormProvider>
      </S.FormWrapper>

    </>
  );
};

export default AdminLogin;
