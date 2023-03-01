import React from "react";
import * as S from "./styles";
import TwoColorTitle from "@components/two-color-title";
import Image from "next/image";
import { successStoriesData } from "@utils/mock-ups/success-stories-mock";
import StdParagraqh from "@/components/generics/StdParagraqh/StdParagraqh";
import { Montserrat } from '@next/font/google'
import classes from './style.module.css'

const font = Montserrat({
  subsets: ['latin']
})


function ShareValues() {
  return (
    <S.Container>
      <TwoColorTitle text1="Do we share the same" text2="values?" hasSpaceBtw />
      <S.CardContainer>
        {successStoriesData.map((sharedValue, index) => (
          <S.Card key={index}>
            <Image
              src={sharedValue.imgSrc}
              alt={sharedValue.title}
              style={{width: '100%', height: 'auto'}}
            />
            <S.CardContent>
              {/* <S.WhiteTriangle /> */}
              <h3 style={{fontFamily: font.style.fontFamily}}>{sharedValue.title}</h3>
              <div className={classes.embarmain+' '+classes.tcenter}>
              <div className={classes.embar + ' ' + classes.embarbig}></div>
            </div>
              <StdParagraqh style={{fontFamily: font.style.fontFamily}}>{sharedValue.paragraph}</StdParagraqh>
            </S.CardContent>
          </S.Card>
        ))}
      </S.CardContainer>
    </S.Container>
  );
}

export default ShareValues;
