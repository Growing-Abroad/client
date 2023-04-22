import React from "react";
import * as S from "@/../styles/about-us/components/HeroSection/index.styles";
import HeroBackground from "@/../public/assets/pages/about-us/hero-background.webp";
import TwoColorTitle from "@components/two-color-title";
import Uan from "@/../public/assets/Uan-Career-Coach-1.webp";
import Manu from "@/../public/assets/Manu-Career-Coach-1.webp";
import { Montserrat } from "next/font/google";
import classes from "./Hero.module.css";
import useAppContext from "@/hooks/useAppContext";

const montserrat = Montserrat({
  subsets: ["latin"],
});

function HeroSection() {
  const { isMobile } = useAppContext();

  return (
    <S.Container backgroundImg={HeroBackground.src}>
      <S.ContentWrapper>
        <TwoColorTitle
          breakingLine={isMobile}
          text1="Discover"
          text2="Growing Abroad"
          hasSpaceBtw
        />
        <p
          style={{ maxWidth: "80vw", fontFamily: montserrat.style.fontFamily }}
          className={classes.para}
        >
          Uan from Brazil and Manu from Germany created a unique platform for
          foreigners to make their dream of living and working in Germany or
          Europe a reality
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
                You just have this one life. So start living.
              </S.TextRight>
            </S.TextsWrapper>
          </S.ImagesWrapper>
        </S.ImagesContainer>
      </S.ContentWrapper>
    </S.Container>
  );
}

export default HeroSection;
