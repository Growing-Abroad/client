import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import index1 from "@/../public/assets/germany.jpg";

const TimelineObserver = dynamic(() => import("react-timeline-animation"), {
  ssr: false, 
});

import * as S from "./styles";
import { IconCheckBlue } from "@/components/Icons";

export default function VerticalProgressBarCustom() {
  const Timeline = ({ setObserver, callback }) => {
    const [message1, setMessage1] = useState("");
    const [message2, setMessage2] = useState("");
    const [message3, setMessage3] = useState("");

    const timeline1 = useRef(null);
    const timeline2 = useRef(null);
    const timeline3 = useRef(null);
    const circle1 = useRef(null);
    const circle2 = useRef(null);
    const circle3 = useRef(null);

    const someCallback = () => {
      setMessage1("Step one");
      callback();
    };

    const someCallback2 = () => {
      setMessage2("Step two");
    };

    const someCallback3 = () => {
      setMessage3("Finish");
    };

    useEffect(() => {
      // setObserver(timeline1.current);
      setObserver(timeline2.current);
      setObserver(timeline3.current);
      setObserver(circle1.current, someCallback);
      setObserver(circle2.current, someCallback2);
      setObserver(circle3.current, someCallback3);
    }, []);

    return (
      <div>
        <S.Circle ref={circle1}>1</S.Circle>
        <S.ItemContainer>
          <S.Timeline id="timeline2" ref={timeline2} />
          <S.ItemContent>

            <S.UIImage
              src={index1}
              alt=""
              width={500}
              height={500}
            />
            <div>
              <S.CardTitle>Getting a VISA for Germany</S.CardTitle>
              <div className="card-texts">
                <div>
                  <IconCheckBlue />
                  Understand the German laws for foreigners to enter Germany
                </div>
                <div>
                  <IconCheckBlue />
                  Steps you have to take to get a VISA for Germany
                </div>
                <div>
                  <IconCheckBlue />
                  Learn about the VISA requirements and different possiblities
                </div>
                <div>
                  <IconCheckBlue />
                  How to earn good money in Germany and benefit from the german
                  system
                </div>
              </div>
            </div>
          </S.ItemContent>
        </S.ItemContainer>
        <div className="circleWrapper">
          <div id="circle2" ref={circle2} className="circle">
            2
          </div>
          
        </div>
        <div id="timeline3" ref={timeline3} className="timeline" />
        <div className="circleWrapper">
          <div id="circle3" ref={circle3} className="circle">
            3
          </div>
          <div className="message">{message3}</div>
        </div>
      </div>
    );
  };

  const onCallback = () => {
    console.log("awesome");
  };

  return (
    <S.ContainerProgressBar>
      <TimelineObserver
        initialColor="#D9D9D9"
        fillColor="#0073CF"
        hasReverse={true}
        handleObserve={(setObserver) => (
          <Timeline callback={onCallback} setObserver={setObserver} />
        )}
      />
    </S.ContainerProgressBar>
  );
}
