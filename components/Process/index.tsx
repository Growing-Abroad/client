import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import useAppContext from "@/hooks/useAppContext";

import index1 from "@/../public/assets/job-briefing.jpg";
import index2 from "@/../public/assets/talent-search.jpg";
import index3 from "@/../public/assets/assessment.jpg";
import index4 from "@/../public/assets/job-interview.jpg";
import { useRouter } from "next/router"

const TimelineObserver = dynamic(() => import("react-timeline-animation"), {
  ssr: false, 
});

import * as S from "./styles";

export default function Process() {
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
            <S.ContainerItemWithImg className="img-content">
              <S.ImgUi src={item.imageSrc} alt="" />
              <S.TitleCardItem>{item.title}</S.TitleCardItem>
              <S.SubTitleCardItem>{item.description}</S.SubTitleCardItem>
            </S.ContainerItemWithImg>
            {larguraJanela >= 768 && <S.Timeline id={`timeline${item.id}`} ref={timelineRef} /> }

            <div className="items-content"></div>
          </S.ItemContent>
        </S.ItemContainer>
      </React.Fragment>
    );
  };
  
  const Timeline = ({ setObserver, callback }: any) => {
    const router = useRouter()

    const timelineData = [
      {
        id: "1",
        imageSrc: index1,
        title: "Consulting & Job add briefing",
        description: "We collaborate to gain a comprehensive understanding of your open positions, their specific requirements, and the necessary skill sets"
      },
      {
        id: "2",
        imageSrc: index2,
        title: "search of Talents ",
        description: "We undertake a rigorous screening process to identify the most qualified talents in the market, ensuring a precise alignment of their skills and qualifications with your specific requirements"
      },
      {
        id: "3",
        imageSrc: index3,
        title: "Assessment and quality gate",
        description: "We will conduct the initial assessment and interview to ensure the candidates' quality and address any additional inquiries prior to their interview with your organization"
      },
      {
        id: "4",
        imageSrc: index4,
        title: "Interview and Hire",
        description: "We will conduct the initial assessment and interview to ensure the candidates' quality and address any additional inquiries prior to their interview with your organization"
        
      },

      
    ];

  
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
        </S.LastContent>
        <S.UIStdButton onClick={() => router.push("/contact-us")}>
          Contact us now
      </S.UIStdButton>
      </div>
    );
  };
  
  return (
    <S.ContainerProgressBar>
      <S.UITwoColorTitleContainer>
        <S.UITwoColorTitle
          text1="We break the process in"
          text2="4 simple steps:"
          hasSpaceBtw
        />
      </S.UITwoColorTitleContainer>
      

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
