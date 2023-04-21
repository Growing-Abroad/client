import React, { useState, useEffect, useRef } from "react";
import * as S from "./style";
import useAppContext from "@/hooks/useAppContext";
import { ProgressBar } from "./ProgressBar";

const VerticalBar: React.FC = () => {
  const { isMobile } = useAppContext();
  const propsBar = [
    {
      index: 1,
      height: "730px",
    },
    { index: 2, height: "910px" },
    { index: 3, height: "830px" },
    { index: 4, height: "870px" },
    { index: 5, height: "860px" },
    { index: 6, height: "" },
  ];
  const [barColor, setBarColor] = useState<string>("#0073CF");
  const [scrollPercentage, setScrollPercentage] = useState<number>(0);
  const emptyBarRef = useRef<HTMLDivElement | null>(null);
  const [currentHeight, setCurrentHeight] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      // const scrollPosition = window.pageYOffset;
      // const windowHeight = window.innerHeight;
      // const fullHeight = document.body.clientHeight;
      // const currentScreenCenter = window.scrollY + window.innerHeight / 2;
      // const currentBarTopPosition =
      //   emptyBarRef.current.getBoundingClientRect().top -
      //   emptyBarRef.current.offsetTop +
      //   94;

      // console.log("window", currentScreenCenter);
      // console.log("barTop", currentBarTopPosition);

      const element = emptyBarRef.current;
      if (!element) return;

      const elementRect = element.getBoundingClientRect();

      // Get the vertical distance between the top of the element and the center of the screen
      const centerOffset = window.innerHeight / 2;
      const elementTop = elementRect.top;
      const distance = Math.abs(elementTop - centerOffset);

      // console.log(
      //   "Distance between top of element and center of screen: " + distance
      // );
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.pageYOffset;
  //     const windowHeight = window.innerHeight;
  //     const fullHeight = document.body.clientHeight;
  //     const newScrollPercentage =
  //       (scrollPosition / (fullHeight - windowHeight)) * 100;

  //     setScrollPercentage(newScrollPercentage);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  // useEffect(() => {
  //   let requestId: number;

  //   const animateFill = () => {
  //     const fillPercentage = Math.min(scrollPercentage / 100, 1);
  //     const newColor = `#0073CF`;
  //     setBarColor(newColor);

  //     if (requestId) {
  //       cancelAnimationFrame(requestId);
  //     }

  //     requestId = requestAnimationFrame(animateFill);

  //     if (fillPercentage === 1) {
  //       setBarColor('red');
  //       cancelAnimationFrame(requestId);
  //     }
  //   };

  //   animateFill();

  //   return () => {
  //     if (requestId) {
  //       cancelAnimationFrame(requestId);
  //     }
  //   };
  // }, [scrollPercentage]);

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          width: "5px",
          height: "5px",
          backgroundColor: "red",
          zIndex: "999999",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "0",
          left: `${isMobile ? "26px" : "50%"}`,
          display: "flex",
          marginLeft: `${isMobile ? "0" : "-40px"}`,
          flexDirection: "column",
          alignItems: "center",
          zIndex:10,
          paddingTop: "75px",
        }}
      >
        {propsBar.map((prop) => {
          return (
            <>
              {" "}
              <S.IndexCircle>
                {prop.index}
                <S.IndexCircleProgress backgroundColor={barColor}>
                  {prop.index}
                </S.IndexCircleProgress>
              </S.IndexCircle>
              <ProgressBar height={parseInt(prop.height, 10)} />
            </>
          );
        })}
      </div>
    </>
  );
};

export default VerticalBar;
