import React from "react";
import TwoColorTitle from "@/components/two-color-title";
import consultingGmbhMock from "@/utils/mock-ups/consulting-gmbh-mock-texts";
import useAppContext from "@/hooks/useAppContext";
import {
  Paragraph,
  ParagraphsContainer,
  Subtitle,
  TitlesContainer,
  Container,
} from "@/../styles/components/ConsultingGmbHSection/index.styles";
import BlueSquareWithCarousel from "@/components/BlueSquareWithCaroulsel";

function ConsultingGmbHSection() {
  const {
    isMobile,
    windowSize: { width },
  } = useAppContext();

  const shouldBreakLine: boolean = width <= 1395;

  return (
    <Container>
      <TitlesContainer>
        <TwoColorTitle
          text1="Growing Abroad"
          text2="GmbH"
          fontSize={!isMobile ? "60px" : "36px"}
          hasSpaceBtw={!shouldBreakLine}
          breakingLine={shouldBreakLine}
        />
        {!isMobile ? (
          <Subtitle>
            Recruiting and Career Services for International Talents
          </Subtitle>
        ) : (
          <Subtitle>Recruiting, Career Coach & Development Services</Subtitle>
        )}
      </TitlesContainer>



      <BlueSquareWithCarousel carouselData={consultingGmbhMock} changeOnHover>
        <ParagraphsContainer>
          <Paragraph>
            At Growing Abroad we are committed to match international skilled
            talents with companies that have a growing demand for jobs in the
            German and European job market.
          </Paragraph>
          <Paragraph>
            We are specialized not only in providing career development and
            consulting services to ambitious students and professionals
            seeking to establish themselves in Germany and Europe but also
            offer HR services for German companies matching international
            talents and candidates to fulfill their growing demand of jobs.
          </Paragraph>
          <Paragraph>
            <strong>Business Experts:</strong>
            <br />
            +10 years experience in Tech, Engineering, Consulting and IT
            Project Management
          </Paragraph>
          <Paragraph>
            <strong>Trusted Career Coaches:</strong>
            <br />
            90% Success Rate for our qualified international talents to get
            hired
          </Paragraph>
          <Paragraph>
            <strong>Talent Reach:</strong>
            <br />
            60.000+ Talents on our Social Media Platforms
          </Paragraph>
        </ParagraphsContainer>
      </BlueSquareWithCarousel>

    </Container>
  );
}

export default ConsultingGmbHSection;
