import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import useAppContext from "@/hooks/useAppContext";

import index1 from "@/../public/assets/VerticalProgress/Germany.jpg";
import index2 from "@/../public/assets/VerticalProgress/Visa-Application.jpg";
import index3 from "@/../public/assets/VerticalProgress/Job-Interview-Preparation.jpg";
import index4 from "@/../public/assets/VerticalProgress/Job-Search-Strategy.jpg";
import index5 from "@assets/VerticalProgress/Job-Interview-Preparation-2.jpg";
import index6 from "@/../public/assets/VerticalProgress/Job-Interview-Success.jpg";

const TimelineObserver = dynamic(() => import("react-timeline-animation"), {
  ssr: false, 
});

import * as S from "./styles";
import { IconCheckBlue } from "@/components/Icons";
import TwoColorTitle from "@/components/two-color-title";

export default function VerticalProgressBarCustom() {
  const TimelineItem = ({ setObserver, callback, item }: any) => {
    const timelineRef = useRef(null);
    const circleRef = useRef(null);
    const [larguraJanela, setLarguraJanela] = useState(window.innerWidth);


    useEffect(() => {
      setObserver(timelineRef.current);
      setObserver(circleRef.current, callback);

      const handleResize = () => {
        setLarguraJanela(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    const { isMobile } = useAppContext();

    return (
      <React.Fragment>
        <S.Circle id={item.id} ref={circleRef}>
          {item.id}
        </S.Circle>
        <S.ItemContainer>
          {larguraJanela < 768 && <S.Timeline id={`timeline${item.id}`} ref={timelineRef} /> }
          <S.ItemContent indexOrder={item.id} className={`timeline${item.id}`}>
            <S.UIImage className="img-content" src={item.imageSrc} alt="" 
              width={isMobile ? 372 : 700}
              height={isMobile ? 188 : 373} />
            {larguraJanela >= 768 && <S.Timeline id={`timeline${item.id}`} ref={timelineRef} /> }

            <div className="items-content">
              <S.CardTitle>{item.title}</S.CardTitle>
              <S.CardTexts>
                {item.checks.map((check: string, index: number) => (
                  <S.ItemCheck key={index}>
                    <IconCheckBlue />
                    {check}
                  </S.ItemCheck>
                ))}
              </S.CardTexts>
            </div>
          </S.ItemContent>
        </S.ItemContainer>
      </React.Fragment>
    );
  };
  
  const Timeline = ({ setObserver, callback }: any) => {
    const timelineData = [
      {
        id: "1",
        imageSrc: index1,
        title: "Germany the land of possibilities",
        checks: [
          "Learn how to earn money in Germany",
          "Discover the benefits of the German system",
          "Understand the German laws for foreigners to enter Germany",
        ],
      },
      {
        id: "2",
        imageSrc: index2,
        title: "Process of getting a VISA",
        checks: [
          "Learn about the requirements of getting a VISA",
          "Learn the steps you have to take to get a VISA for Germany",
          "Discover the different VISA possibilities",
        ],
      },
      {
        id: "3",
        imageSrc: index3,
        title: "Optimizing your application documents",
        checks: [
          "Learn step by step to optimize your CV, Cover letter, LinkedIn Profile and other relevant documents into German standards",
          "Develop your Business appearance to the next level to be ahead of your competition",
          "Learn about the Growing Abroad method to get tons of job interviews",
        ],
      },
      {
        id: "4",
        imageSrc: index4,
        title: "Job Search Strategy to find the right jobs in Germany",
        checks: [
          "Discover the secret methods to find English speaking jobs in Germany",
          "Learn all the insights about the most effective job portals for foreigners in Germany",
          "Learn how to write outstanding E-Mails to communicate with recruiters in Germany",
          "Discover the step by step application process to get tons of job interviews in Germany",
        ],
      },
      {
        id: "5",
        imageSrc: index5,
        title: "Preparation Process for your job interview",
        checks: [
          "Learn effective strategies to answer the most important interview questions",
          "Learn about the proven Growing Abroad Storytelling method to show credibility in the interview",
          "Learn about different strategies to impress the interviewer",
          "Discover the research process of the company and the hiring managers",
        ],
      },
      {
        id: "6",
        imageSrc: index6,
        title: "Rock your job interview and land your dream job",
        checks: [
          "Learn effective methods to deal with nervousness and anxiety",
          "Learn how to impress in all the 6 phases of a job interview with psychological hacks",
          "Learn about different strategies to impress the interviewer",
          "Learn methods how to stay in the head of the interviewers during and after the interview",
        ],
      },
      
    ];
    const lastText = "Bonus chapter with expert interviews"

    const circleRef = useRef(null);
  
    useEffect(() => {
      setObserver(circleRef.current, callback);
    }, []);

    const hadleScroll = () => {
      const sectionElement = document.getElementById("scroll-id");
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      }
    };
  
    return (
      <div>
        {timelineData.map((item) => (
          <TimelineItem
            key={item.id}
            setObserver={setObserver}
            callback={callback}
            item={item}
          />
        ))}
        <S.LastContent>
          <S.Line />
          <S.Circle id="lastItem" ref={circleRef}>
            {timelineData.length+1}
          </S.Circle>
          <S.CardTitle className="last-Item">{lastText}</S.CardTitle>
        </S.LastContent>
        <S.UIStdButton onClick={hadleScroll}>
          Buy Online Course Now
      </S.UIStdButton>
      </div>
    );
  };
  
  return (
    <S.ContainerProgressBar>
      <TwoColorTitle
        text1="What you can expect"
        text2="in this Course"
        hasSpaceBtw
      />
      <S.ChapterTitle>Chapter</S.ChapterTitle>

      <TimelineObserver
        initialColor="#D9D9D9"
        fillColor="#0073CF"
        hasReverse={true}
        handleObserve={(setObserver) => (
          <Timeline callback={() => {}} setObserver={setObserver} />
        )}
      />
    </S.ContainerProgressBar>
  );
}
