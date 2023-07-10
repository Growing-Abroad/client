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
import { useRouter } from "next/router"

export const Presentation = () => {
  const router = useRouter()

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
        <Button onClick={() => router.push("/contact-us")}>Find experts now</Button>
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
