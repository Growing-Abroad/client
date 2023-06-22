import TwoColorTitle from "@components/two-color-title";
import React, { useCallback, useRef, useState } from "react";
import UanAndManu from "@assets/pages/about-us/about-us-coaches.jpg";
import BackgroudAboutUSImg from "@assets/pages/about-us/About-Growing-Abroad.jpg";
import Image from "next/image";
import YoutubeplayButton from "public/assets/youtube-play-btn.jpg";
import classes from "./style.module.css";
import { Montserrat } from "next/font/google";
import * as S from "../../../../styles/about-us/components/WhoWeAre/index.styles";
import useAppContext from "@/hooks/useAppContext";
import VideoComponent from "@/components/VideoComponent";

const font = Montserrat({
  subsets: ["latin"],
});

interface IWhoWeAreProps {
  pageType?: "sales" | "about-us" | "online-course"
}

function WhoWeAre({pageType}: IWhoWeAreProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
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
    <S.Container className={`${pageType == "about-us" && "about-us"}`}>
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
            src={pageType == "about-us" ? BackgroudAboutUSImg : UanAndManu}
            alt="uan and manu"
            className={`${pageType == "about-us" ? classes.youtubeImageAboutUs : classes.youtubeImage}`}
          ></Image>
        ) : (
          <VideoComponent
            isPlaying={isVideoPlaying}
            src={pageType == "about-us" ? "assets/videos/Growing-Abroad-About-Us.mp4" : "assets/videos/header-video.mp4"}
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
        <S.p> Let us help you realize your dream of working abroad!</S.p>
        <S.p>
          Growing Abroad will guide you through the entire process: from
          optimizing your CV for German standards to acing job interviews and
          finding the perfect job. You don't have to go alone - we'll be with
          you every step of the way!
        </S.p>
        <S.p>
          Start your life-changing experience today and embrace a new language,
          culture, and perspective!
        </S.p>
      </S.Paragraph>
    </S.Container>
  );
}

export default WhoWeAre;
