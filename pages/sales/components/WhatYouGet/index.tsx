import StdButton from "@/components/generics/StdButton/StdButton";
import Benefits from "@/../public/assets/images/get-job-benefits.webp";
import classes from "./style.module.css";
import Image from "next/image";
import * as S from "../../../../styles/online-course/components/WhyBuyCourse/style";
import useAppContext from "@/hooks/useAppContext";
import { IconCheck } from "@/components/Icons";

export function WhatYouGet() {
  const { isMobile } = useAppContext();
  return (
    <S.WrapperWhyBuyCourse className="what-you-get"
    >
      <S.DiscoverTitle 
        className="discover-title"
        text1="What you get in"
        text2="this Online Course"
        hasSpaceBtw        
      />
      <S.ContentWhyBuyCourse className="sales-course"
        style={{
          paddingLeft: `${isMobile ? "" : "0"}`,
          transform: 'unset',
          marginBottom: `${isMobile ? '0' : '0'}`       
        }}
      >
        <S.ImageOnlineCourse
          src={Benefits}
          className="img-benefits"
          alt=""
        />
        <S.RightContentWhyBuyCourse
          className={classes.text}
          style={{
            marginLeft: "0",
            gap: `${isMobile ? "41px" : "30px"}`,
          }}
        >
          <S.TextWrapperWhyBuyCourse>
            <S.IconWhyBuyCourse>
              <IconCheck/>
            </S.IconWhyBuyCourse>
            <S.TextWhyBuyCourse>
              <span>50+ video sessions</span> to learn step by step how to land
              your dream job in Germany or Europe
            </S.TextWhyBuyCourse>
          </S.TextWrapperWhyBuyCourse>
          <S.TextWrapperWhyBuyCourse>
            <S.IconWhyBuyCourse>
            <IconCheck/>
            </S.IconWhyBuyCourse>
            <S.TextWhyBuyCourse>
              Interactive <span>Workbook</span> and <span>Coaching</span> tasks
              to guide you through the whole process
            </S.TextWhyBuyCourse>
          </S.TextWrapperWhyBuyCourse>
          <S.TextWrapperWhyBuyCourse>
            <S.IconWhyBuyCourse>
            <IconCheck/>
            </S.IconWhyBuyCourse>
            <S.TextWhyBuyCourse>
              <span>Bonus chapter</span> with expert interviews for different
              topics (CEOs, Hiring Managers, HR Recruiter, Salary negotiating
              coach, ...)
            </S.TextWhyBuyCourse>
          </S.TextWrapperWhyBuyCourse>
          <S.TextWrapperWhyBuyCourse>
            <S.IconWhyBuyCourse>
            <IconCheck/>
            </S.IconWhyBuyCourse>
            <S.TextWhyBuyCourse>
              <span>Bonus material:</span> CV Templates, List of typical
              interview questions, List of most popular job seeking platforms,
              List of companies who hire English speakers, ...
            </S.TextWhyBuyCourse>
          </S.TextWrapperWhyBuyCourse>
          <S.TextWrapperWhyBuyCourse>
            <S.IconWhyBuyCourse>
            <IconCheck/>
            </S.IconWhyBuyCourse>
            <S.TextWhyBuyCourse>
              Access to the exclusive <span>Growing Abroad Community</span>{" "}
              Group with motivated foreigners who all want to achieve more in
              life
            </S.TextWhyBuyCourse>
          </S.TextWrapperWhyBuyCourse>
          <StdButton style={{ width: "181px", margin: "38px auto 100px" }}>
            Buy Now
          </StdButton>
        </S.RightContentWhyBuyCourse>
      </S.ContentWhyBuyCourse>
    </S.WrapperWhyBuyCourse>
  );
}

export default WhatYouGet;
