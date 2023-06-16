import TwoColorTitle from "@components/two-color-title";
import React, { useCallback, useState } from "react";
import videoBackground from "@assets/pages/sales/Online-Course-Dream.webp";
import Image from "next/image";
import YoutubeplayButton from "public/assets/youtube-play-btn.webp";
import classes from "./style.module.css";
import * as S from "../../../../styles/about-us/components/WhoWeAre/index.styles";
import useAppContext from "@/hooks/useAppContext";
import VideoComponent from "@/components/VideoComponent";
import StdButton from "@/components/generics/StdButton/StdButton";

function FollowDreams() {
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
    <S.Container className="sales">
      <TwoColorTitle
        text1="Start your journey!"
        text2="Follow your Dream!"
        hasSpaceBtw
        className={classes.followDreamsTitle}
        fontSize={isMobile ?"36px" :"52px"}
        wrapperStyles={{
          flexDirection:"column",
          justifyContent: "center",
        }}
        as="h2"
      />

      <S.ImageContainer className="sales" onClick={handlePause}>
        {!isVideoPlaying ? (
          <Image
            width={804}
            height={isMobile ?250 : 438}
            src={videoBackground}
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

      <S.Paragraph className="sales">
        <p  className={`${classes.resume} subtitle`}>
          In this life changing Online Course we included all our insights,
          strategies and methods for you to successfully get a job in Germany or
          Europe.
        </p>
      </S.Paragraph>
      <StdButton>Buy Online Course Now</StdButton>
    </S.Container>
  );
}

export default FollowDreams;
