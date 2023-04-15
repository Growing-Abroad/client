import { FormEvent } from 'react';
import { Checkbox } from "@mui/material";
import {
  CheckboxWrapper,
  ContentInputNewsLetter,
  InputNewsLetter,
  InputWrapper,
  NewsLetterContainer,
  SubscribeWrapper,
  TitleNewsLetter,
} from './style';
import useAppContext from '@/hooks/useAppContext';
import StdButton from '../generics/StdButton/StdButton';
import { useTheme } from "styled-components";


export default function NewsLetter() {
  const {
    colors: { white, blue400 },
  } = useTheme();
  const {
    isMobile
  } = useAppContext();

  const handleCheckBox = (e: FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.checked) {
      e.currentTarget.value = 'false';
    } else {
      e.currentTarget.value = 'true';
    }
  };

  return (
    <>
      <NewsLetterContainer>
        <TitleNewsLetter>Join our Newsletter</TitleNewsLetter>
        <ContentInputNewsLetter>
          <SubscribeWrapper>
            <InputWrapper>
              <InputNewsLetter placeholder="Enter Your Full Name" />
              <InputNewsLetter placeholder="Enter Your E-mail Adress" />
            </InputWrapper>
            <div
            style={{
              gap: `${isMobile ?"8px" :"0px"}`,
              display: "flex",
              alignItems: "start",
            }}
          >
            <Checkbox
              className="declaration-checkbox"
              sx={{
                "& .MuiSvgIcon-root": isMobile ? { width: 30, height: 30 } : {  width: 40, height: 40} ,
                color: white,
                "&.Mui-checked": {
                  color: white,
                },
              }}
            />
            <p  className="paragraph" style={{color:"white"}}>
            By clicking you are agreeing  with the growing abroad rules and policy
            </p>
          </div>
            {/* <div
              style={{
                gap: '8px',

              }}
            >
              <CheckboxWrapper>
                <input onClick={(e) => handleCheckBox(e)} type="checkbox" />
                <span></span>
              </CheckboxWrapper>
              <p
                style={{
                  marginLeft: '40px',
                  fontSize: '.750rem',
                  color: 'white',
                }}
              >
                Yes, I would like to sign up for the Growing Abroad Newsletter
                and I accept the websites Privacy Policy.
              </p>
            </div> */}
          </SubscribeWrapper>
          <StdButton
            style={{
              display:'flex',
              alignItems: `${isMobile ? "flex-start" : "center"}`,
              justifyContent:`${isMobile ? "center" : "center"}`,
              width: `${isMobile ? "112px" : "193px"}`,
              padding: `${isMobile ? "8px 15px" : "20px 40px"}`,
              fontSize:`${isMobile ?'14px' : '16px'}`,
              height:`${isMobile ?'35px' : '54px'}`,
              textAlign: `${isMobile ? "start" : "center"}`
            }}
          >
            Subscribe
          </StdButton>
        </ContentInputNewsLetter>
      </NewsLetterContainer>
    </>
  );
}
