import React, { useEffect, useState } from "react";
import useAppContext from "@/hooks/useAppContext";

import {
  Container,
  TextContainer,
} from "@/../styles/about-us/components/VisionAndMissionNew/index.styles";
import { useTheme } from "styled-components";

export interface IText {
  heading: string;
  description: string;
}
export interface IVisionAndMission {
  text1: IText;
  text2: IText;
  backgroundSrc: {
    desktop: string;
    mobile: string;
  };
}

function VisionAndMissionNew({
  backgroundSrc,
  text1,
  text2,
}: IVisionAndMission) {
  const [backgroundImg, setBackgroundImg] = useState<string>("");

  const { isMobile } = useAppContext();

  const {
    colors: { blue500, blue700 },
  } = useTheme();

  useEffect(() => {
    if (isMobile) {
      setBackgroundImg(backgroundSrc.mobile);
      return;
    }
    setBackgroundImg(backgroundSrc.desktop);
  }, [isMobile]);

  return (
    <Container backgroundImg={backgroundImg}>
      <TextContainer
        bgColor={`${blue500}f0`}
        left="0"
        top="auto"
        bottom="0"
        color="primary"
        blueArea
      >
        <div>
          <h3>{text1.heading}</h3>
          <p>{text1.description}</p>
        </div>
      </TextContainer>
      <TextContainer
        bgColor="primary"
        left="50%"
        top="25%"
        bottom="auto"
        onTheTop
        color={blue700}
      >
        <h3>{text2.heading}</h3>
        <p>{text2.description}</p>
      </TextContainer>
    </Container>
  );
}

export default VisionAndMissionNew;
