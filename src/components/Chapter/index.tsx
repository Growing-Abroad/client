import * as S from "./style";
import VerticalBar from "./VerticalBar";
import Image from "next/image";
import index1 from "@/../public/assets/germany.webp";
import index4 from "@/../public/assets/job-search-strategy.webp";
import index3 from "@/../public/assets/optimization.webp";
import index5 from "@/../public/assets/job-interview-preparation.webp";
import index6 from "@/../public/assets/job-interview-success.webp";
import useAppContext from "@/hooks/useAppContext";
import TwoColorTitle from "../two-color-title";
import StdButton from "../generics/StdButton/StdButton";
import { IconCheckBlue } from "../Icons";

export function Chapter() {
  const { isMobile } = useAppContext();
  return (
    <S.ChapterContainer>
      <TwoColorTitle
        text1="What you can expect"
        text2="in this Course"
        hasSpaceBtw
      />
      <S.ChapterContent>
        <S.ChapterTitle>Chapter</S.ChapterTitle>
        <VerticalBar />
        <S.ChapterContainerCards>
          <S.ChapterContentCard reverse={false}>
            <S.ImageChapter
              className="image"
              src={index1}
              alt="Germany Flag"
              width={isMobile ? 372 : 700}
              height={isMobile ? 188 : 373}
            />
            <S.CardInfo>
              <S.CardTitle>Getting a VISA for Germany</S.CardTitle>
              <div className="card-texts">
                <S.CardText>
                  <IconCheckBlue />
                  Understand the German laws for foreigners to enter Germany
                </S.CardText>
                <S.CardText>
                  <IconCheckBlue />
                  Steps you have to take to get a VISA for Germany
                </S.CardText>
                <S.CardText>
                  <IconCheckBlue />
                  Learn about the VISA requirements and different possiblities
                </S.CardText>
                <S.CardText>
                  <IconCheckBlue />
                  How to earn good money in Germany and benefit from the german
                  system
                </S.CardText>
              </div>
            </S.CardInfo>
          </S.ChapterContentCard>
          <S.ChapterContentCard reverse>
            <S.ImageChapter
              src={index3}
              className="image"
              alt="Germany Flag"
              width={isMobile ? 372 : 700}
              height={isMobile ? 188 : 373}
            />
            <S.CardInfo>
              <S.CardTitle>Optimizing your application documents</S.CardTitle>
              <div>
                <S.CardText>
                  <IconCheckBlue />
                  How to create an outstanding CV and Cover letter, optimized to
                  the German and European job market
                </S.CardText>
                <S.CardText>
                  <IconCheckBlue />
                  How to create a strong personal brand and profile on LinkedIn
                </S.CardText>
                <S.CardText>
                  <IconCheckBlue />
                  Develop a unique content strategy to capture your main
                  strengths and achievements to impress recruiters
                </S.CardText>
                <S.CardText>
                  <IconCheckBlue />
                  Get access to multiple templates and examples of optimized
                  application documents
                </S.CardText>
              </div>
            </S.CardInfo>
          </S.ChapterContentCard>
          <S.ChapterContentCard reverse={false}>
            <S.ImageChapter
              src={index4}
              className="image"
              alt="Germany Flag"
              width={isMobile ? 372 : 700}
              height={isMobile ? 188 : 373}
            />
            <S.CardInfo>
              <S.CardTitle>Find the right jobs in Germany</S.CardTitle>
              <div>
                <S.CardText>
                  <IconCheckBlue />
                  How to create your unique job search strategy and keep track
                  of your applications
                </S.CardText>
                <S.CardText>
                  <IconCheckBlue />
                  Learn about the most important job portals for foreigners in
                  Germany and how to use them
                </S.CardText>
                <S.CardText>
                  <IconCheckBlue />
                  Get access to multiple lists of german companies which hire
                  English speakers
                </S.CardText>
                <S.CardText>
                  <IconCheckBlue />
                  Learn how to write outstanding Emails to communicate with
                  german recruiters
                </S.CardText>
              </div>
            </S.CardInfo>
          </S.ChapterContentCard>
          <S.ChapterContentCard reverse>
            <S.ImageChapter
              src={index5}
              className="image"
              alt="Germany Flag"
              width={isMobile ? 372 : 700}
              height={isMobile ? 188 : 373}
            />
            <S.CardInfo>
              <S.CardTitle>Preparation for your job interview</S.CardTitle>
              <div>
                <S.CardText>
                  <IconCheckBlue />
                  Get access to the 80 most asked interview questions and learn
                  how to answer them
                </S.CardText>
                <S.CardText>
                  <IconCheckBlue />
                  Learn how to show credibility in the interview by using the
                  Growing Abroad Storytelling method
                </S.CardText>
                <S.CardText>
                  <IconCheckBlue />
                  Create your individual pitch to impress the recruiters in
                  seconds
                </S.CardText>
                <S.CardText>
                  <IconCheckBlue />
                  Learn about the different stages of job interviews and how to
                  convince in each of them
                </S.CardText>
              </div>
            </S.CardInfo>
          </S.ChapterContentCard>
          <S.ChapterContentCard reverse={false}>
            <S.ImageChapter
              src={index6}
              className="image"
              alt="Germany Flag"
              width={isMobile ? 372 : 700}
              height={isMobile ? 188 : 373}
            />
            <S.CardInfo>
              <S.CardTitle>Land your dream job</S.CardTitle>
              <div>
                <S.CardText>
                  <IconCheckBlue />
                  Learn how to deal with nervousness and anxiety before a job
                  interview
                </S.CardText>
                <S.CardText>
                  <IconCheckBlue />
                  Learn how to use your body language and voice to convince the
                  recruiters on an unconscious level
                </S.CardText>
                <S.CardText>
                  <IconCheckBlue />
                  How to use psychological techniques to impress the
                  interviewers and land your dream job
                </S.CardText>
                <S.CardText>
                  <IconCheckBlue />
                  How to write thank you notes after the interview to leave a
                  positive impression
                </S.CardText>
              </div>
            </S.CardInfo>
          </S.ChapterContentCard>

          <div className="bonus">
            <S.CardTitle>Bonus chapter with expert interviews </S.CardTitle>
          </div>
        </S.ChapterContainerCards>
      </S.ChapterContent>
      <StdButton>
        {" "}
        Buy Online Course Now
      </StdButton>
    </S.ChapterContainer>
  );
}
