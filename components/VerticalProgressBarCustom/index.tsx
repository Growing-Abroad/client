import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import useAppContext from "@/hooks/useAppContext";

import index1 from "@/../public/assets/germany.jpg";
import index2 from "@/../public/assets/optimization.jpg";
import index3 from "@/../public/assets/job-search-strategy.jpg";
import index4 from "@assets/job-interview-preparation.jpg";
import index5 from "@/../public/assets/job-interview-success.jpg";

const TimelineObserver = dynamic(() => import("react-timeline-animation"), {
  ssr: false, 
});

import * as S from "./styles";
import { IconCheckBlue } from "@/components/Icons";

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
        title: "Getting a VISA for Germany",
        checks: [
          "Understand the German laws for foreigners to enter Germany",
          "Steps you have to take to get a VISA for Germany",
          "Learn about the VISA requirements and different possiblities",
          "How to earn good money in Germany and benefit from the german system",
        ],
      },
      {
        id: "2",
        imageSrc: index2,
        title: "Optimizing your application documents",
        checks: [
          "How to create an outstanding CV and Cover letter, optimized to the German and European job market",
          "How to create a strong personal brand and profile on LinkedIn",
          "Develop a unique content strategy to capture your main strengths and achievements to impress recruiters",
          "Get access to multiple templates and examples of optimized application documents",
        ],
      },
      {
        id: "3",
        imageSrc: index3,
        title: "Find the right jobs in Germany",
        checks: [
          "How to create your unique job search strategy and keep track of your applications",
          "Learn about the most important job portals for foreigners in Germany and how to use them",
          "Get access to multiple lists of german companies which hire English speakers",
          "Learn how to write outstanding Emails to communicate with german recruiters",
        ],
      },
      {
        id: "4",
        imageSrc: index4,
        title: "Preparation for your job interview",
        checks: [
          "Get access to the 80 most asked interview questions and learn how to answer them",
          "Learn how to show credibility in the interview by using the Growing Abroad Storytelling method",
          "Create your individual pitch to impress the recruiters in seconds",
          "Learn about the different stages of job interviews and how to convince in each of them",
        ],
      },
      {
        id: "5",
        imageSrc: index5,
        title: "Land your dream job",
        checks: [
          "Learn how to deal with nervousness and anxiety before a job interview",
          "Learn how to use your body language and voice to convince the recruiters on an unconscious level",
          "How to use psychological techniques to impress the interviewers and land your dream job",
          "How to write thank you notes after the interview to leave a positive impression",
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
      <S.UITwoColorTitleContainer>
        <S.UITwoColorTitle
          text1="What you can expect"
          text2="in this Course"
          hasSpaceBtw
        />
      </S.UITwoColorTitleContainer>
      
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
