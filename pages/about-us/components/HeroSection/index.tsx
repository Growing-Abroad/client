import React from "react";
import * as S from "../../../../styles/about-us/components/HeroSection/index.styles";
import HeroBackground from "@/../public/assets/pages/about-us/hero-background.webp";
import TwoColorTitle from "@components/two-color-title";
import Uan from "@/../public/assets/pages/about-us/uan-career-coach.webp";
import Manu from "@/../public/assets/pages/about-us/manu-career-coach.webp";
import { Montserrat } from "next/font/google";
import classes from "./Hero.module.css";

const montserrat = Montserrat({
  subsets: ["latin"],
});

function HeroSection() {
  return (
    <S.Container backgroundImg={HeroBackground.src}>
      <S.ContentWrapper>
        <TwoColorTitle text1="Discover" text2="Growing Abroad" hasSpaceBtw />
        <p
          style={{ maxWidth: "80vw", fontFamily: montserrat.style.fontFamily }}
          className={classes.para}
        >
          We, Uan from Brazil and Manu from Germany, put together our skills and
          knowledge to create a unique platform for foreigners to help to make
          your dream to live and work in Germany or Europe come true.
        </p>

        <S.ImagesContainer>
          <S.ImagesWrapper background={Uan.src}>
            <S.BlueSquare />

            <S.TextsWrapper>
              <S.Quote className={classes.quotes}>“</S.Quote>
              <S.TextLeft className="text-left">
                If you don't believe in yourself, nobody else will.
              </S.TextLeft>
            </S.TextsWrapper>
          </S.ImagesWrapper>

          <S.ImagesWrapper className="right-wrapper" background={Manu.src}>
            <S.BlueSquare className="right-image" />

            <S.TextsWrapper className="reverse">
              <S.Quote className={classes.quotes}>”</S.Quote>
              <S.TextRight className="text-right">
                You just have this one life.
              </S.TextRight>
            </S.TextsWrapper>
          </S.ImagesWrapper>
        </S.ImagesContainer>
      </S.ContentWrapper>
    </S.Container>
  );
}

export default HeroSection;
