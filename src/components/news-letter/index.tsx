import useAppContext from '@/hooks/useAppContext';
import signInNewsLetter from '@/services/news-letter/news-letter.service';
import { Checkbox } from "@mui/material";
import { FormEvent } from 'react';
import { useForm } from 'react-hook-form';
import { useTheme } from "styled-components";
import StdButton from '../generics/StdButton/StdButton';
import {
  InputNewsLetter,
  InputWrapper,
  NewsLetterContainer,
  NewsLetterForm,
  SubscribeWrapper,
  TitleNewsLetter
} from './style';

export type TNewsLetter = {
  name: string;
  email: string;
  consent: boolean;
}

export default function NewsLetter() {
  const {
    colors: { white, blue400 },
  } = useTheme();
  const {
    isMobile, loading, setLoading
  } = useAppContext();
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<TNewsLetter>();

  const handleCheckBox = (e: FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.checked) {
      e.currentTarget.value = 'false';
    } else {
      e.currentTarget.value = 'true';
    }
  };

  const onSubmit = async (data: TNewsLetter) => {
    const { name, email, consent } = data;
    if (!consent) return;
    setLoading(true);
    console.log(data)
    const newsletterData = {
      url: 'https://api.growingabroad.de/contact',
      data: {
        user: {
          name,
          email,  
          consent
        },
        listId: 6
      }
    };
    const response = await signInNewsLetter(newsletterData)
    console.log(response)
    if(response.ok) {
      //todo 
    }else {
     //todo
    }
    setLoading(false);
  }

  return (
    <>
      <NewsLetterContainer>
        <TitleNewsLetter>Join our Newsletter</TitleNewsLetter>
        <NewsLetterForm onSubmit={handleSubmit(onSubmit)}>
          <SubscribeWrapper>
            <InputWrapper>
              <InputNewsLetter 
                {...register('name', {required: true})}
                placeholder="Enter Your Full Name" 
              />
              <InputNewsLetter 
                placeholder="Enter Your E-mail Adress" 
                {...register('email', {required: true})}
              />
            </InputWrapper>
            <div
              style={{
                gap: `${isMobile ?"8px" :"0px"}`,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Checkbox
                className="declaration-checkbox"
                sx={{
                  "& .MuiSvgIcon-root": isMobile ? { width: 30, height: 30 } : {  width: 24, height:24} ,
                  color: white,
                  "&.Mui-checked": {
                    color: white,
                  },
                }}
                {...register('consent', {required: true})}
              />
              <p  className="paragraph" style={{color:"white"}}>
                Yes, I would like to sign up for the Growing Abroad Newsletter and I accept the websites Privacy Policy. <br /> Our newsletter subscription is non-binding.*
              </p>
            </div>
            
          </SubscribeWrapper>
          <StdButton
            style={{
              margin: "0",
              display:'flex',
              alignItems: `${isMobile ? "flex-start" : "center"}`,
              justifyContent:`${isMobile ? "center" : "center"}`,
              width: `${isMobile ? "112px" : "193px"}`,
              padding: `${isMobile ? "8px 15px" : "20px 40px"}`,
              fontSize:`${isMobile ?'14px' : '16px'}`,
              height:`${isMobile ?'35px' : '54px'}`,
              textAlign: `${isMobile ? "start" : "center"}`
            }}
            type="submit"
          >
            Subscribe
          </StdButton>
        </NewsLetterForm>
      </NewsLetterContainer>
    </>
  );
}
