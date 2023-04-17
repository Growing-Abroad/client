import React, { useCallback, useState } from "react";
import * as S from "../../../../styles/about-us/components/About/index.styles";
import { aboutUs } from "@utils/mock-ups/about-us.mock";
import StdButton from "@/components/generics/StdButton/StdButton";
import useAppContext from "@/hooks/useAppContext";

function About() {
  const { isMobile } = useAppContext();
  const [isOpen, setIsOpen] = useState(false);

  const handleSwitchParagraph = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, [setIsOpen]);

  return (
    <S.Container>
      <S.TextContainer>
        {aboutUs.map((section, i) => (
          <S.Text isOpen={isOpen} key={section.title} id={"box" + i}>
            <h3>{section.title}</h3>
            <h4>{section.subtitle}</h4>

            <div className="paragraph-container">
              {section.paragraphs.map((p, i) => (
                <p className="more-text" key={i}>
                  {p}
                </p>
              ))}
            </div>
          </S.Text>
        ))}
      </S.TextContainer>
      <S.ButtonContainer>
        <StdButton
          style={{
            width: `${isMobile ? "118px" : "202px"}`,
            height: `${isMobile ? "40px" : "59px"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: `${isMobile ? "8px 15px" : "20px 40px"}`,
            letterSpacing: "1.3px",
            whiteSpace: "nowrap",
          }}
          onClick={handleSwitchParagraph}
        >
          {!isOpen ? "Read More" : "Read Less"}
        </StdButton>
      </S.ButtonContainer>
    </S.Container>
  );
}

export default About;
