import React from "react";
import * as S from "../../../../styles/about-us/components/ShareValues/index.styles";
import TwoColorTitle from "@components/two-color-title";
import Image from "next/image";
import { Container, Col } from "react-bootstrap";
import { sharedValues } from "utils/mock/shared_values";
import StdParagraqh from "@/components/generics/StdParagraqh/StdParagraqh";
import useAppContext from "@/hooks/useAppContext";

function ShareValues() {
  const { isMobile } = useAppContext();

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
        <S.Row>
          {sharedValues.map((sharedValue, index) => (
            <Col
              lg="4"
              md="12"
              style={{
                paddingBottom: "56px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              key={index}
            >
              <S.Card key={index}>
                <Image
                  src={sharedValue.image}
                  alt={sharedValue.title}
                  style={{ width: "100%", maxHeight: "258px", height: "258px" }}
                />
                <S.CardContent>
                  {/* <S.WhiteTriangle /> */}
                  <h3 style={{ margin: "0" }}>{sharedValue.title}</h3>
                  <StdParagraqh>{sharedValue.body}</StdParagraqh>
                  {/* <StdParagraqh style={{fontFamily: font.style.fontFamily}}>{sharedValue.paragraph}</StdParagraqh> */}
                </S.CardContent>
              </S.Card>
            </Col>
          ))}
        </S.Row>
      </Container>
    </S.Container>
  );
}

export default ShareValues;
