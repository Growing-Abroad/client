import React from "react";

import MeetFounders from "@/utils/mock-ups/meet-founders-carousel";

import FancyCarousel from "@/components/Fancy-carousel";
import TwoColorTitle from "@/components/two-color-title";

import {
  Container,
  Content,
  TitlesContainer,
  Subtitle,
  ContentTitle,
  ContentDescription,
  TextsContainer,
  CallToAction,
  Span,
} from "@/../styles/components/MeetTheFoundersSection/index.styles";
import StdButton from "@/components/generics/StdButton/StdButton";
import useAppContext from "@/hooks/useAppContext";

export function MeetTheFoundersSection() {
  const {
    windowSize: { width },
    smallDesktopSize,
    isMobile,
  } = useAppContext();
  const shouldBreakLine: boolean = width <= smallDesktopSize;

  return (
    <Container>
      <TitlesContainer>
        <TwoColorTitle
          text1="Meet the"
          text2="Founders"
          hasSpaceBtw={!shouldBreakLine}
          breakingLine={shouldBreakLine}
        />
        <Subtitle>
          We bring all necessary skills and experience need to help you in the
          recruiting journey
        </Subtitle>
      </TitlesContainer>
      <Content>
        <FancyCarousel
          dataArray={MeetFounders}
          haveSmallsSlides
          isIntroducingAPerson
        />
        <TextsContainer>
          <ContentTitle>Business Experts</ContentTitle>
          <ContentDescription>
            <Span>+ 10 years experience</Span> in Tech,Engineering, Consulting
            and IT Project Management
          </ContentDescription>
          <ContentTitle>Trusted Career Coaches</ContentTitle>
          <ContentDescription>
            <Span>90 % Success Rate</Span> for our qualified international
            talents to get hired
          </ContentDescription>
          <ContentTitle>Social media</ContentTitle>
          <ContentDescription>
            <Span>60.000+ Followers</Span> on our Social Media Platforms
          </ContentDescription>
        </TextsContainer>
      </Content>
      <CallToAction>
        <StdButton
          style={{
            width: !isMobile ? 324 : 228,
            height: !isMobile ? 59 : 35,
            fontSize: !isMobile ? 20 : 16,
            lineHeight: 19,
            letterSpacing: 1.3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Learn more about us
        </StdButton>
      </CallToAction>
    </Container>
  );
}
