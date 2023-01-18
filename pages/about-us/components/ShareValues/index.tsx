import React from "react";
import * as S from "./styles";
import TwoColorTitle from "@/src/components/two-color-title";
import Image from "next/image";
import { successStoriesData } from "@/src/utils/mock-ups/success-stories-mock";

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
              <p>{sharedValue.paragraph}</p>
            </S.CardContent>
          </S.Card>
        ))}
      </S.CardContainer>
    </S.Container>
  );
}

export default ShareValues;
