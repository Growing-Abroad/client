import React from "react";
import * as S from "../../../../styles/about-us/components/ShareValues/index.styles";
import TwoColorTitle from "@components/two-color-title";
import { Container } from "react-bootstrap";
import { sharedValues } from "@/utils/mock/shared_values";
import StdParagraqh from "@/components/generics/StdParagraqh/StdParagraqh";

function ShareValues() {

  return (
    <S.Container>
      <S.TitleContainer>
        <TwoColorTitle
          text1="Do we share the same"
          text2="Values?"
          hasSpaceBtw
          as="h2"
          wrapperStyles={{
            maxWidth: "100%",
          }}
        />
      </S.TitleContainer>

      <Container>
        <S.UIRow>
          {sharedValues.map((sharedValue, index) => (
            <S.UICol
              lg="4"
              md="12"
              
              key={index}
            >
              <S.Card key={index}>
                <S.UIImage
                  src={sharedValue.image}
                  alt={sharedValue.title}
                  style={{ width: "100%", maxHeight: "258px", height: "258px" }}
                />
                <S.CardContent>
                  <h3 style={{ margin: "0" }}>{sharedValue.title}</h3>
                  <StdParagraqh>{sharedValue.body}</StdParagraqh>
                </S.CardContent>
              </S.Card>
            </S.UICol>
          ))}
        </S.UIRow>
      </Container>
    </S.Container>
  );
}

export default ShareValues;
