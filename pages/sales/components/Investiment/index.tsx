import TwoColorTitle from "@components/two-color-title";
import React, { useCallback, useRef, useState } from "react";
import computers from "@assets/pages/sales/computers.png";
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
    <S.Container style={{paddingBottom:'146px'}}>

      <S.ImageContainer >
        <Image
          width={868}
          height={536}
          src={computers}
          alt="devices"
          className={classes.youtubeImage}
        ></Image>
      </S.ImageContainer>

      <S.Paragraph style={{fontSize:`${isMobile ?'32px' :'60px'}`, textAlign:'center', fontWeight:'600', marginTop:'32px'}}>
      This course is an investment
in your <span style={{color:'#4A9AFD'}}>Successful Future </span>     </S.Paragraph>
      <StdButton style={{marginTop:'36px'}}>Get your Lifetime Access Now</StdButton>
    </S.Container>
  );
}

export default Investiment;
