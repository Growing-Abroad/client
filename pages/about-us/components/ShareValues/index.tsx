import React from "react";
import * as S from "./styles";
import TwoColorTitle from "@components/two-color-title";
import Image from "next/image";
import { Container, Row, Col,  } from "react-bootstrap";
import { sharedValues } from "utils/mock/shared_values";
import StdParagraqh from "@/components/generics/StdParagraqh/StdParagraqh";


function ShareValues() {
  return (
    <S.Container>
      <TwoColorTitle text1="Do we share the same" text2="values?" hasSpaceBtw as="h2" />

      <Container>
        <Row>
          {sharedValues.map((sharedValue, index) => (
            <Col lg="4" md="12" style={{paddingBottom: '56px'}}>
              <S.Card key={index}>
                <Image
                  src={sharedValue.image}
                  alt={sharedValue.title}
                  style={{ width: '100%', height: 'auto' }}
                />
                <S.CardContent>
                  {/* <S.WhiteTriangle /> */}
                  <h3 style={{margin: '0'}}>{sharedValue.title}</h3>
                  <StdParagraqh>
                    {sharedValue.body}
                  </StdParagraqh>
                  {/* <StdParagraqh style={{fontFamily: font.style.fontFamily}}>{sharedValue.paragraph}</StdParagraqh> */}
                </S.CardContent>
              </S.Card></Col>
          ))}
        </Row>
      </Container>
    </S.Container>
  );
}

export default ShareValues;
