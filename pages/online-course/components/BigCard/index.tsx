import Image from "next/image";
import * as S from "../../../../styles/online-course/components/BigCard/styles";
import onlineCourse from "@/../public/assets/Photos-Main-Page/online-course-success.webp";
import discount from "@/../public/assets/discount.svg";
import StdButton from "@/components/generics/StdButton/StdButton";
import useAppContext from "@/hooks/useAppContext";
import TwoColorTitle from "@/components/two-color-title";
import { IconCheckBlue } from "@/components/Icons";

export function BigCard() {
  const { isMobile } = useAppContext();
  return (
    <S.Container>
      <TwoColorTitle
        text1="Get the Online Course now and join the"
        text2="Growing Abroad Community"
        styles={{
          flexDirection: "column",
          display: "flex",
          marginBottom: `${isMobile ? "20px" : "40px"}`,
        }}
        fontSize={isMobile ? "" : "60px"}
        hasSpaceBtw
      />
      <S.BigCardWrapper>
        <Image
          src={discount}
          alt="discount"
          width={153}
          height={103}
          style={{
            position: "absolute",
            top: `${isMobile ? "380px" : "450px"}`,
            right: `${isMobile ? "-20px" : "70px"}`,
            transform: "scale(1.5)",
          }}
        />
        <Image
          src={onlineCourse}
          alt=""
          width={isMobile ? 383 : 705}
          height={isMobile ? 241 : 294}
          style={{
            objectFit: "cover",
            objectPosition: `${isMobile ? " " : "50% 40%"}`,
            borderRadius: "10px",
          }}
        />
        <h1>Online Course</h1>
        <h2>
          Land your Dream Job in{" "}
          <span style={{ color: "#4A9AFD" }}>Germany or Europe</span>
        </h2>
        <p className="discount">
          Instead Of <span>1360 €</span> Only
        </p>
        <S.PriceSpan>397 €</S.PriceSpan>
        <div>
          <S.CardText>
            <IconCheckBlue />
            <p>
              <strong>50+ video sessions</strong> to learn step by step how to
              land your dream job in Germany or Europe
            </p>
          </S.CardText>
          <S.CardText>
            <IconCheckBlue />
            <p>
              <strong>Interactive Workbook</strong> with more than 200 pages and
              Coaching tasks to guide you through the entire application process
            </p>
          </S.CardText>
          <S.CardText>
            <IconCheckBlue />
            <p>
              <strong>Bonus chapter with expert interviews</strong> of different
              areas. (Hiring Managers, HR Recruiters, Salary negotiating Coach,
              Successful foreigners)
            </p>
          </S.CardText>
          <S.CardText>
            <IconCheckBlue />
            <p>
              <strong>Bonus material:</strong> CV and Cover Letter Templates,
              List of typical interview questions, List of most popular job
              seeking platforms, List of companies who hire English speakers,
              Job application tracker, Email templates, and many more
            </p>
          </S.CardText>
          <S.CardText>
            <IconCheckBlue />
            <p>
              Access to the <strong>exclusive Growing Abroad Community</strong>{" "}
              Group with motivated foreigners with the same goals
            </p>
          </S.CardText>
        </div>
        <StdButton
          style={{
            textAlign: `center`,
            width: `${isMobile ? "238px" : "365px"}`,
            padding: `${isMobile ? "8px 15px" : "20px 40px"}`,
            marginRight: "0",
            marginTop: `${isMobile ? "20px" : "0px"}`,
          }}
        >
          Get Access Now
        </StdButton>
      </S.BigCardWrapper>
    </S.Container>
  );
}
export default BigCard;
