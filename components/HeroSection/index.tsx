import React from "react";

import {
  Container,
  Content,
  Title,
  Subtitle,
  ButtonsContainer,
  TextsContainer,
  SubtitleContainer,
  Video,
  VideoContainer,
  VideoContent,
  VideoBackgroundOpacity,
} from "@/../styles/components/HeroSection/index.styles";
import StdButton from "@/components/generics/StdButton/StdButton";
import useAppContext from "@/hooks/useAppContext";
import { useRouter } from "next/router"

function HeroSection() {
  const { isMobile } = useAppContext();
  const router = useRouter()

  return (
    <Container>
      <VideoContainer>
        <VideoContent>
          <Video autoPlay loop muted>
            <source src="assets/videos/new-header-video.mp4" type="video/mp4" />
          </Video>
        </VideoContent>
        <VideoBackgroundOpacity />
      </VideoContainer>
      <Content>
        <TextsContainer>
          {!isMobile ? (
            <Title.Container>
              <Title.GeneralColor>
                We match skilled International
                {"\xa0"}
                <Title.FirstColor>TALENTS{"\xa0"}</Title.FirstColor>
              </Title.GeneralColor>
              <Title.GeneralColor>
                with your{"\xa0"}
                <Title.SecondColor>COMPANY{"\xa0"}</Title.SecondColor>
              </Title.GeneralColor>
            </Title.Container>
          ) : (
            <Title.Container>
              <Title.GeneralColor>We match</Title.GeneralColor>
              <Title.GeneralColor>skilled</Title.GeneralColor>
              <Title.GeneralColor>International</Title.GeneralColor>
              <Title.GeneralColor>
                <Title.FirstColor>TALENTS{"\xa0"}</Title.FirstColor>
                with
              </Title.GeneralColor>
              <Title.GeneralColor>
                your{"\xa0"}
                <Title.SecondColor>COMPANY</Title.SecondColor>
              </Title.GeneralColor>
            </Title.Container>
          )}
          {!isMobile ? (
            <Subtitle>Recruiting and Career Coach company in Germany</Subtitle>
          ) : (
            <SubtitleContainer>
              <Subtitle>Recruiting and Career</Subtitle>
              <Subtitle>Coach company in Germany</Subtitle>
              {/* <Subtitle>for your open positions?</Subtitle>    */}
            </SubtitleContainer>
          )}
          <ButtonsContainer>
            <StdButton onClick={() => router.push("/companies")}
              style={{
                width: `${isMobile ? "196px" : "284px"}`,
                height: `${isMobile ? "35px" : "59px"}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: `${isMobile ? "8px 15px" : "20px 40px"}`,
                letterSpacing: "1.3px",
                whiteSpace: "nowrap",
                fontSize: `${isMobile ? "16px" : "20px"}`,
              }}
            >
              For Companies
            </StdButton>
            <StdButton onClick={() => router.push("/candidates")}
              style={{
                width: `${isMobile ? "177px" : "284px"}`,
                height: `${isMobile ? "35px" : "59px"}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: `${isMobile ? "8px 15px" : "20px 40px"}`,
                letterSpacing: "1.3px",
                whiteSpace: "nowrap",
                fontSize: `${isMobile ? "16px" : "20px"}`,
              }}
              className="find-job-btn"
            >
              For Candidates
            </StdButton>
          </ButtonsContainer>
        </TextsContainer>
      </Content>
    </Container>
  );
}

export default HeroSection;
