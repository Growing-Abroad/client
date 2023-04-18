import TwoColorTitle from "@components/two-color-title";
import React, { useCallback, useRef, useState } from "react";
import UanAndManu from "@assets/pages/about-us/about-us-coaches.webp";
import Image from "next/image";
import YoutubeplayButton from "public/assets/youtube-play-btn.webp";
import classes from "./style.module.css";
import { Montserrat } from "next/font/google";
import * as S from "../../../../styles/about-us/components/WhoWeAre/index.styles";
import useAppContext from "@/hooks/useAppContext";
import VideoComponent from "@/components/VideoComponent";

const font = Montserrat({
  subsets: ["latin"],
});

type ControllerType = "play" | "pause";

function WhoWeAre() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { isMobile } = useAppContext();

  const handlePlay = useCallback(() => {
    setIsVideoPlaying(true);
  }, [setIsVideoPlaying]);

  const handlePause = useCallback(() => {
    if (isVideoPlaying) {
      setIsVideoPlaying(false);
    }
  }, [isVideoPlaying, setIsVideoPlaying]);

  return (
    <S.Container>
      <TwoColorTitle
        text1="Who"
        text2="We Are"
        hasSpaceBtw
        wrapperStyles={{
          width: "100%",
          justifyContent: "center",
          height: `${isMobile ? "44px" : "auto"}`,
        }}
        as="h2"
      />

      <S.ImageContainer onClick={handlePause}>
        {!isVideoPlaying ? (
          <Image
            width={1128}
            height={628}
            src={UanAndManu}
            alt="uan and manu"
            className={classes.youtubeImage}
          ></Image>
        ) : (
          <VideoComponent
            isPlaying={isVideoPlaying}
            src="assets/videos/header-video.mp4"
            type="video/mp4"
            controls
          />
        )}
        {!isVideoPlaying && (
          <div>
            <S.Player onClick={handlePlay} src={YoutubeplayButton}></S.Player>
          </div>
        )}
      </S.ImageContainer>

      <S.Paragraph>
        <S.p style={{ fontFamily: font.style.fontFamily }}>
          Growing abroad helps qualified people that dream to live and work
          abroad, but have no clue on where to start in order to achieve that.
          These are people who speak English, have either a University degree or
          a completed vocational training and don’t see many opportunities in
          their home country.
        </S.p>
        <S.p style={{ fontFamily: font.style.fontFamily }}>
          We will be with you through the whole application process and help you
          to optimize your CV and application documents into German standards,
          help you to look for adequate jobs, help you to rock your job
          interview to get the job you admire.
        </S.p>
        <S.p style={{ fontFamily: font.style.fontFamily }}>
          We provide a life-changing experience where you will learn a different
          language, get to know a new culture and have a different perspective
          in your life.
        </S.p>
      </S.Paragraph>
    </S.Container>
  );
}

export default WhoWeAre;
