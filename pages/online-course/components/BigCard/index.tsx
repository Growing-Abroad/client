import Image from "next/image";
import * as S from "../../../../styles/online-course/components/BigCard/styles";
import onlineCourse from "@/../public/assets/Photos-Main-Page/online-course-success.jpg";
import onlineCourseTenporary from "@/../public/assets/Photos-Main-Page/online-course-success2.jpg";
import discount from "@/../public/assets/discount.svg";
import useAppContext from "@/hooks/useAppContext";
import { IconCheckBlue } from "@/components/Icons";
import { useEffect, useState } from 'react';
import { useRouter as useNextRouter } from "next/router"

export function BigCard() {
  const { isMobile } = useAppContext();
  const [isIos, setIsIos] = useState<boolean>(false)
  const router = useNextRouter()

  useEffect(() => {
    const userAgent = window.navigator.userAgent;

    const isSafari = /^((?!chrome|android).)*safari/i.test(userAgent);

    const isIOS = /iPad|iPhone|iPod/.test(userAgent);

    const isAndroid = /Android/.test(userAgent);

    if (isIOS && isMobile && isSafari) {
      setIsIos(true)
    }

    if (isAndroid) {
      setIsIos(false)
    }
  }, []);

  const dataDesejada = new Date('2023-07-14T15:00:00+02:00');
  const dataAtual = new Date();


  return (
    <S.Container>
      <S.TwoColorTitleCustom
        text1="Get the Online Course now and join the"
        text2="Growing Abroad Community"
        fontSize={isMobile ? "" : "52px"}
        hasSpaceBtw
      />
      <S.BigCardWrapper id="scroll-id">
        
          <S.ImageFlagDiscount
            isIos={isIos}
            src={discount}
            alt="discount"
            width={153}
            height={103}
          />
        
        <S.ImageCustom
        src={onlineCourse}
        alt=""
        width={isMobile ? 383 : 705}
        height={isMobile ? 241 : 294}
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
        <S.StdButtonCustom onClick={() => router.push("https://growingabroad.myelopage.com/s/growingabroad/land-your-dream-job/payment")}>
          Get Access Now
        </S.StdButtonCustom>
      </S.BigCardWrapper>
    </S.Container>
  );
}
export default BigCard;
