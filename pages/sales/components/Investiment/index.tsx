import TwoColorTitle from "@components/two-color-title";
import React, { useCallback, useRef, useState } from "react";
import computers from "public/assets/images/banners-devices-view.webp";
import Image from "next/image";
import YoutubeplayButton from "public/assets/youtube-play-btn.webp";
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

      <S.Paragraph
        style={{
          width: `${isMobile ? "32px" : "1500px"}`,
          fontSize: `${isMobile ? "32px" : "60px"}`,
          textAlign: "center",
          fontWeight: "600",
          marginTop: "0px",
          lineHeight:`${isMobile ? "" : "73px"}`,
        }}
      >
        This course is an investment  <span>in your <span style={{ color: "#4A9AFD" }}>Successful Future </span></span>{" "}
      </S.Paragraph>
      <StdButton style={{ marginTop: "0px" }}>
        Get your Acess Now
      </StdButton>
    </S.Container>
  );
}

export default Investiment;
