import React, {
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import * as S from "../../../../styles/about-us/components/About/index.styles";
import { aboutUs } from "@utils/mock-ups/about-us.mock";
import StdButton from "@/components/generics/StdButton/StdButton";
import useAppContext from "@/hooks/useAppContext";

function About() {
  const { isMobile } = useAppContext();
  const [isOpen, setIsOpen] = useState(false);
  const [textHeight, setTextHeight] = useState(0);

  const handleSwitchParagraph = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, [setIsOpen]);

  const getTextHeight = (height: number, multiply = 2): number => {
    return (height * multiply) / (2 * Number(`0.${height}`));
  };

  const handleGetTextHeight = (height: number, width: number): number => {
    if (width > 1180) {
      return getTextHeight(height);
    }
    if (width > 495 && width <= 1180) {
      return getTextHeight(height, 3);
    }
    if (width > 450 && width <= 495) {
      return getTextHeight(height, 3.5);
    }
    if (width > 430 && width <= 450) {
      getTextHeight(height, 4.5);
    }
    return getTextHeight(height, 5);
  };

  useEffect(() => {
    const handleResize = () => {
      setTextHeight(handleGetTextHeight(window.innerHeight, window.innerWidth));
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <S.Container isOpen={isOpen}>
      <S.TextContainer>
        {aboutUs.map((section, i) => (
          <S.Text
            textHeight={textHeight}
            isOpen={isOpen}
            key={section.title}
            id={"box" + i}
          >
            <h3>{section.title}</h3>
            <p>{section.subtitle}</p>

            <div className="paragraph-container">
              {section.paragraphs.map((p, i) => (
                <p
                  onClick={handleSwitchParagraph}
                  className="more-text"
                  key={i}
                >
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
