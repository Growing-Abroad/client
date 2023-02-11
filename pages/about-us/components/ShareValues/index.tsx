import React from "react";
import * as S from "./styles";
import TwoColorTitle from "@components/two-color-title";
import Image from "next/image";
import { successStoriesData } from "@utils/mock-ups/success-stories-mock";
import StdParagraqh from "@/components/StdParagraqh/StdParagraqh";


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
              width={300}
            />
            <S.CardContent>
              <S.WhiteTriangle />
              <h3>{sharedValue.title}</h3>
              <StdParagraqh>{sharedValue.paragraph}</StdParagraqh>
            </S.CardContent>
          </S.Card>
        ))}
      </S.CardContainer>
    </S.Container>
  );
}

export default ShareValues;
