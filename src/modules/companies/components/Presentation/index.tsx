import React from "react";
import {
  Button,
  Wrapper,
  Description,
  ImageBox,
  Title,
  Container,
} from "./styles";
import Image from "next/image";

export const Presentation = () => {
  return (
    <Container>
      <Wrapper>
        <Title>
          We match skilled International <span>TALENTS</span> with your{" "}
          <span>COMPANY</span>
        </Title>
        <Description>
          Are you looking for Skilled International Talents for your open
          positions?
        </Description>
        <Button>Find experts now</Button>
        <ImageBox>
          <Image
            fill
            style={{
              objectFit: "contain",
              objectPosition: "bottom",
            }}
            src="/assets/main-hero-photo.jpg"
            alt="Founders Presenteation Photo"
          />
        </ImageBox>
      </Wrapper>
    </Container>
  );
};
