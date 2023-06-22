import React from "react";
import * as S from "@/../styles/about-us/components/HeroSection/index.styles";
import HeroBackground from "@/../public/assets/growing-abroad.jpg";
import Uan from "@/../public/assets/Uan-Career-Coach-1.jpg";
import Uan2 from "@/../public/assets/Uan-Career-Coach-11.jpg";
import Manu from "@/../public/assets/Manu-Career-Coach-1.jpg";
import { Montserrat } from "next/font/google";
import classes from "./Hero.module.css";
import useAppContext from "@/hooks/useAppContext";
import BlueSquare from "./components/BlueSqare";
import Image from "next/image";

const montserrat = Montserrat({
  subsets: ["latin"],
});

function HeroSection() {
  const { windowSize } = useAppContext();

  return (
    <S.Container>
      <S.UIImage src={HeroBackground} alt="background Uan and Manu" />
      <S.ContentWrapper>
        <S.ImagesContainer>
          <S.ImagesWrapper>
            <BlueSquare type="left-square">
              <S.Quote className={classes.quotes}>“</S.Quote>
              <S.TextLeft>
                If you don't believe in yourself, nobody else will.
              </S.TextLeft>
            </BlueSquare>
          </S.ImagesWrapper>

          <S.ImagesWrapper className="right-wrapper">
            <BlueSquare type="right-square">
              <S.Quote className={classes.quotes}>”</S.Quote>
              <S.TextRight>
                You just have this one life. So start living.
              </S.TextRight>
            </BlueSquare>
          </S.ImagesWrapper>
        </S.ImagesContainer>
      </S.ContentWrapper>
    </S.Container>
  );
}

export default HeroSection;
