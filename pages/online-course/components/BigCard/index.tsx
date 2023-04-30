import Image from "next/image";
import * as S from "../../../../styles/online-course/components/BigCard/styles";
import onlineCourse from "@/../public/assets/Photos-Main-Page/online-course-success.webp";
import StdButton from "@/components/generics/StdButton/StdButton";
import useAppContext from "@/hooks/useAppContext";

export function BigCard() {
  const { isMobile } = useAppContext();
  return (
    <S.Container>
      <S.BigCardWrapper>
        <Image
          src={onlineCourse}
          alt=""
          width={isMobile ? 383 : 750}
          height={isMobile ? 241 : 515}
          style={{
            objectFit: "cover",
            objectPosition: `${isMobile ? " " : "50% 15%"}`,
            borderRadius: "10px",
          }}
        />
        <h1>
          Online <span style={{ color: "#4A9AFD" }}>Course</span>
        </h1>
        <h2>
          Land your Dream Job in{" "}
          <span style={{ color: "#4A9AFD" }}>Germany or Europe</span>
        </h2>
        <span
          style={{
            fontSize: "16px",
            width: "109px",
            textAlign: "left",
            fontWeight: "700",
            borderBottom: "3px solid #05335B",
            alignSelf:'end',
          }}
        >
          Value
        </span>
        <div>
          <S.CardText>
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.6875 10.1665C19.6875 4.854 15.3125 0.479004 10 0.479004C4.64844 0.479004 0.3125 4.854 0.3125 10.1665C0.3125 15.5181 4.64844 19.854 10 19.854C15.3125 19.854 19.6875 15.5181 19.6875 10.1665ZM8.86719 15.3228C8.63281 15.5571 8.20312 15.5571 7.96875 15.3228L3.90625 11.2603C3.67188 11.0259 3.67188 10.5962 3.90625 10.3618L4.80469 9.50244C5.03906 9.229 5.42969 9.229 5.66406 9.50244L8.4375 12.2368L14.2969 6.37744C14.5312 6.104 14.9219 6.104 15.1562 6.37744L16.0547 7.23682C16.2891 7.47119 16.2891 7.90088 16.0547 8.13525L8.86719 15.3228Z"
                  fill="#4A9AFD"
                />
              </svg>
            </span>
            50+ video sessions to learn step by step how to land your dream job
            in Germany or Europe
            <span className="priceSpan">737 €</span>
          </S.CardText>
          <S.CardText>
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.6875 10.1665C19.6875 4.854 15.3125 0.479004 10 0.479004C4.64844 0.479004 0.3125 4.854 0.3125 10.1665C0.3125 15.5181 4.64844 19.854 10 19.854C15.3125 19.854 19.6875 15.5181 19.6875 10.1665ZM8.86719 15.3228C8.63281 15.5571 8.20312 15.5571 7.96875 15.3228L3.90625 11.2603C3.67188 11.0259 3.67188 10.5962 3.90625 10.3618L4.80469 9.50244C5.03906 9.229 5.42969 9.229 5.66406 9.50244L8.4375 12.2368L14.2969 6.37744C14.5312 6.104 14.9219 6.104 15.1562 6.37744L16.0547 7.23682C16.2891 7.47119 16.2891 7.90088 16.0547 8.13525L8.86719 15.3228Z"
                  fill="#4A9AFD"
                />
              </svg>
            </span>
            Interactive Workbook with more than 200 pages and Coaching tasks to
            guide you through the entire application process
            <span className="priceSpan">179 €</span>
          </S.CardText>
          <S.CardText>
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.6875 10.1665C19.6875 4.854 15.3125 0.479004 10 0.479004C4.64844 0.479004 0.3125 4.854 0.3125 10.1665C0.3125 15.5181 4.64844 19.854 10 19.854C15.3125 19.854 19.6875 15.5181 19.6875 10.1665ZM8.86719 15.3228C8.63281 15.5571 8.20312 15.5571 7.96875 15.3228L3.90625 11.2603C3.67188 11.0259 3.67188 10.5962 3.90625 10.3618L4.80469 9.50244C5.03906 9.229 5.42969 9.229 5.66406 9.50244L8.4375 12.2368L14.2969 6.37744C14.5312 6.104 14.9219 6.104 15.1562 6.37744L16.0547 7.23682C16.2891 7.47119 16.2891 7.90088 16.0547 8.13525L8.86719 15.3228Z"
                  fill="#4A9AFD"
                />
              </svg>
            </span>
            Bonus chapter with expert interviews of different areas. (Hiring
            Managers, HR Recruiters, Salary negotiating Coach, Successful
            foreigners)
            <span className="priceSpan">189 €</span>
          </S.CardText>
          <S.CardText>
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.6875 10.1665C19.6875 4.854 15.3125 0.479004 10 0.479004C4.64844 0.479004 0.3125 4.854 0.3125 10.1665C0.3125 15.5181 4.64844 19.854 10 19.854C15.3125 19.854 19.6875 15.5181 19.6875 10.1665ZM8.86719 15.3228C8.63281 15.5571 8.20312 15.5571 7.96875 15.3228L3.90625 11.2603C3.67188 11.0259 3.67188 10.5962 3.90625 10.3618L4.80469 9.50244C5.03906 9.229 5.42969 9.229 5.66406 9.50244L8.4375 12.2368L14.2969 6.37744C14.5312 6.104 14.9219 6.104 15.1562 6.37744L16.0547 7.23682C16.2891 7.47119 16.2891 7.90088 16.0547 8.13525L8.86719 15.3228Z"
                  fill="#4A9AFD"
                />
              </svg>
            </span>
            Bonus material: CV and Cover Letter Templates, List of typical
            interview questions, List of most popular job seeking platforms,
            List of companies who hire English speakers, Job application
            tracker, Email templates, and many more
            <span className="priceSpan">127 €</span>
          </S.CardText>
          <S.CardText>
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.6875 10.1665C19.6875 4.854 15.3125 0.479004 10 0.479004C4.64844 0.479004 0.3125 4.854 0.3125 10.1665C0.3125 15.5181 4.64844 19.854 10 19.854C15.3125 19.854 19.6875 15.5181 19.6875 10.1665ZM8.86719 15.3228C8.63281 15.5571 8.20312 15.5571 7.96875 15.3228L3.90625 11.2603C3.67188 11.0259 3.67188 10.5962 3.90625 10.3618L4.80469 9.50244C5.03906 9.229 5.42969 9.229 5.66406 9.50244L8.4375 12.2368L14.2969 6.37744C14.5312 6.104 14.9219 6.104 15.1562 6.37744L16.0547 7.23682C16.2891 7.47119 16.2891 7.90088 16.0547 8.13525L8.86719 15.3228Z"
                  fill="#4A9AFD"
                />
              </svg>
            </span>
            Access to the exclusive Growing Abroad Community Group with
            motivated foreigners with the same goals
            <span className="priceSpan">27 €</span>
          </S.CardText>

        </div>
        <p className="descount">
          Instead Of <span>1360 €</span> Only
        </p>
        <S.PriceSpan>297 €</S.PriceSpan>
        <StdButton
            style={{
              textAlign: `center`,
              width: `${isMobile ? "238px" : "365px"}`,
              padding: `${isMobile ? "8px 15px" : "20px 40px"}`,
              marginRight: `${isMobile ? "0" : "30px"}`,
              marginTop: `${isMobile ? "20px" : "48px"}`,
            }}
          >
            Get Access Now
          </StdButton>
      </S.BigCardWrapper>

    </S.Container>
  );
}
export default BigCard;
