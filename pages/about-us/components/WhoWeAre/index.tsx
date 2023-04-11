import TwoColorTitle from "@components/two-color-title";
import React from "react";
import UanAndManu from "@assets/pages/about-us/about-us-coaches.webp";
import Image from "next/image";
import YoutubeplayButton from "public/assets/youtube-play-btn.webp";
import classes from "./style.module.css";
import { Montserrat } from "next/font/google";
import * as S from "../../../../styles/about-us/components/WhoWeAre/index.styles";
import useAppContext from "@/hooks/useAppContext";

const font = Montserrat({
  subsets: ["latin"],
});
function WhoWeAre() {
  const { isMobile } = useAppContext();

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

      <S.ImageContainer className={classes.imageContainer}>
        <Image
          width={1128}
          height={628}
          src={UanAndManu}
          alt="uan and manu"
          className={classes.youtubeImage}
        ></Image>
        <div className={classes.ripplesContainer}>
          <Image
            src={YoutubeplayButton}
            alt="youtube play button"
            className={classes.youtubePlayButton + " " + classes.blurbRippleOut}
          ></Image>
        </div>
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
