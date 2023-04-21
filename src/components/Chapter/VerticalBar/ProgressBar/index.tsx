import React, { useState, useEffect, useRef } from "react";
import * as S from "../style";

interface ProgressBarProps {
  height: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ height }) =>  {
  const emptyBarRef = useRef<HTMLDivElement>(null);
  const [currentHeight, setCurrentHeight] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!emptyBarRef.current) return;

      const elementRect = emptyBarRef.current.getBoundingClientRect();

      // Get the vertical distance between the top of the element and the center of the screen
      const centerOffset = window.scrollY + window.innerHeight / 2;
      const elementTop = elementRect.top;
      const distance = Math.abs(elementTop - centerOffset);

      // console.log(
      //   "Distance between top of element and center of screen: " + distance
      // );
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <S.VerticalBar height={height} ref={emptyBarRef}>
      <S.VerticaProgressBar height={currentHeight} />
    </S.VerticalBar>
  );
}
