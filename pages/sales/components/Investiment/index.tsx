import TwoColorTitle from "@components/two-color-title";
import React, { useCallback, useRef, useState } from "react";
import computers from "public/assets/images/banners-devices-view.jpg";
import Image from "next/image";
import YoutubeplayButton from "public/assets/youtube-play-btn.jpg";
import classes from "./style.module.css";
import { Montserrat } from "next/font/google";
import * as S from "../../../../styles/about-us/components/WhoWeAre/index.styles";
import useAppContext from "@/hooks/useAppContext";
import VideoComponent from "@/components/VideoComponent";
import StdButton from "@/components/generics/StdButton/StdButton";

const font = Montserrat({
  subsets: ["latin"],
});

function Investiment() {
  const { isMobile } = useAppContext();
  return (
    <S.Container style={{ paddingBottom: "100px" }}>
      <S.ImageContainer>
        <Image
          width={900}
          height={436}
          src={computers}
          alt="devices"
          className={classes.youtubeImage}
        ></Image>
      </S.ImageContainer>

      <S.ParagraphCustom>
        This course is an investment in <span>your <span style={{ color: "#4A9AFD" }}>Successful Future </span></span>
      </S.ParagraphCustom>
      <S.StdButtonCustom>
        Get your Acess Now
      </S.StdButtonCustom>
    </S.Container>
  );
}

export default Investiment;
