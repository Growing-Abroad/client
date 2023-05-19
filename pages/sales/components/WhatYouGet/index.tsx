import StdButton from "@/components/generics/StdButton/StdButton";
import Benefits from "@/../public/assets/pages/sales/Benefits-Online-Course.webp";
import classes from "./style.module.css";
import Image from "next/image";
import * as S from "../../../../styles/online-course/components/WhyBuyCourse/style";
import useAppContext from "@/hooks/useAppContext";
import TwoColorTitle from "@/components/two-color-title";

export function WhatYouGet() {
  const { isMobile } = useAppContext();
  return (
    <S.WrapperWhyBuyCourse style={{paddingBottom:`${isMobile ?'0px' : '146px'}`,paddingTop:`0px`, gap:`${isMobile ?'' : '40px'}`}}>
      <TwoColorTitle
        className={classes.title}
        text1="What you get out of   "
        text2="this Online Course"
        hasSpaceBtw
        styles={{marginBottom:`${isMobile ?'' : '0px'}`, width:`${isMobile ? "341px" : "auto"}`, whiteSpace:`${isMobile ? "normal" : "normal"}`, textAlign:`center`}}
        fontSize={isMobile ?"36px" :"60px"}
      />
      <S.ContentWhyBuyCourse style={{ flexDirection: `${isMobile ? "column" : "row-reverse"}`, paddingLeft:`${isMobile ? "" : "0"}` }}>
        <Image
          src={Benefits}
          width={isMobile ? 400 : 600}
          height={isMobile ? 320 : 518}
          alt=""
        />
        <S.RightContentWhyBuyCourse
          className={classes.text}
          style={{ marginLeft:`${isMobile ? '0px': "140px"}`, gap:`${isMobile ?'41px' : '30px'}` }}
        >
          <S.TextWrapperWhyBuyCourse>
            <S.IconWhyBuyCourse>
              <svg
                width="26"
                height="19"
                viewBox="0 0 26 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.10938 17.8252C9.57812 18.2939 10.375 18.2939 10.8438 17.8252L24.625 4.04395C25.0938 3.5752 25.0938 2.77832 24.625 2.30957L22.9375 0.62207C22.4688 0.15332 21.7188 0.15332 21.25 0.62207L10 11.8721L4.70312 6.62207C4.23438 6.15332 3.48438 6.15332 3.01562 6.62207L1.32812 8.30957C0.859375 8.77832 0.859375 9.5752 1.32812 10.0439L9.10938 17.8252Z"
                  fill="#FFDB5C"
                />
              </svg>
            </S.IconWhyBuyCourse>
            <S.TextWhyBuyCourse>
              <span>50+ video sessions</span> to learn step by step how to land
              your dream job in Germany or Europe
            </S.TextWhyBuyCourse>
          </S.TextWrapperWhyBuyCourse>
          <S.TextWrapperWhyBuyCourse>
            <S.IconWhyBuyCourse>
              <svg
                width="26"
                height="19"
                viewBox="0 0 26 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.10938 17.8252C9.57812 18.2939 10.375 18.2939 10.8438 17.8252L24.625 4.04395C25.0938 3.5752 25.0938 2.77832 24.625 2.30957L22.9375 0.62207C22.4688 0.15332 21.7188 0.15332 21.25 0.62207L10 11.8721L4.70312 6.62207C4.23438 6.15332 3.48438 6.15332 3.01562 6.62207L1.32812 8.30957C0.859375 8.77832 0.859375 9.5752 1.32812 10.0439L9.10938 17.8252Z"
                  fill="#FFDB5C"
                />
              </svg>
            </S.IconWhyBuyCourse>
            <S.TextWhyBuyCourse>
              Interactive <span>Workbook</span> and <span>Coaching</span> tasks
              to guide you through the whole process
            </S.TextWhyBuyCourse>
          </S.TextWrapperWhyBuyCourse>
          <S.TextWrapperWhyBuyCourse>
            <S.IconWhyBuyCourse>
              <svg
                width="26"
                height="19"
                viewBox="0 0 26 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.10938 17.8252C9.57812 18.2939 10.375 18.2939 10.8438 17.8252L24.625 4.04395C25.0938 3.5752 25.0938 2.77832 24.625 2.30957L22.9375 0.62207C22.4688 0.15332 21.7188 0.15332 21.25 0.62207L10 11.8721L4.70312 6.62207C4.23438 6.15332 3.48438 6.15332 3.01562 6.62207L1.32812 8.30957C0.859375 8.77832 0.859375 9.5752 1.32812 10.0439L9.10938 17.8252Z"
                  fill="#FFDB5C"
                />
              </svg>
            </S.IconWhyBuyCourse>
            <S.TextWhyBuyCourse>
              <span>Bonus chapter</span> with expert interviews for different
              topics (CEOs, Hiring Managers, HR Recruiter, Salary negotiating
              coach, ...)
            </S.TextWhyBuyCourse>
          </S.TextWrapperWhyBuyCourse>
          <S.TextWrapperWhyBuyCourse>
            <S.IconWhyBuyCourse>
              <svg
                width="26"
                height="19"
                viewBox="0 0 26 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.10938 17.8252C9.57812 18.2939 10.375 18.2939 10.8438 17.8252L24.625 4.04395C25.0938 3.5752 25.0938 2.77832 24.625 2.30957L22.9375 0.62207C22.4688 0.15332 21.7188 0.15332 21.25 0.62207L10 11.8721L4.70312 6.62207C4.23438 6.15332 3.48438 6.15332 3.01562 6.62207L1.32812 8.30957C0.859375 8.77832 0.859375 9.5752 1.32812 10.0439L9.10938 17.8252Z"
                  fill="#FFDB5C"
                />
              </svg>
            </S.IconWhyBuyCourse>
            <S.TextWhyBuyCourse>
              <span>Bonus material:</span> CV Templates, List of typical
              interview questions, List of most popular job seeking platforms,
              List of companies who hire English speakers, ...
            </S.TextWhyBuyCourse>
          </S.TextWrapperWhyBuyCourse>
          <S.TextWrapperWhyBuyCourse>
            <S.IconWhyBuyCourse>
              <svg
                width="26"
                height="19"
                viewBox="0 0 26 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.10938 17.8252C9.57812 18.2939 10.375 18.2939 10.8438 17.8252L24.625 4.04395C25.0938 3.5752 25.0938 2.77832 24.625 2.30957L22.9375 0.62207C22.4688 0.15332 21.7188 0.15332 21.25 0.62207L10 11.8721L4.70312 6.62207C4.23438 6.15332 3.48438 6.15332 3.01562 6.62207L1.32812 8.30957C0.859375 8.77832 0.859375 9.5752 1.32812 10.0439L9.10938 17.8252Z"
                  fill="#FFDB5C"
                />
              </svg>
            </S.IconWhyBuyCourse>
            <S.TextWhyBuyCourse>
              Access to the exclusive <span>Growing Abroad Community</span>{" "}
              Group with motivated foreigners who all want to achieve more in
              life
            </S.TextWhyBuyCourse>
          </S.TextWrapperWhyBuyCourse>
          <StdButton style={{ width: "181px", margin: " 10px   auto 10px" }}>
            Buy Now
          </StdButton>
        </S.RightContentWhyBuyCourse>
      </S.ContentWhyBuyCourse>
    </S.WrapperWhyBuyCourse>
  );
}

export default WhatYouGet;
