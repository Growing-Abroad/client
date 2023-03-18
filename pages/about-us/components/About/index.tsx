
import React, { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import * as S from "./styles";
import { aboutUs } from "@utils/mock-ups/about-us.mock";
import StdButton from "@/components/generics/StdButton/StdButton";
import useAppContext from "@/hooks/useAppContext";

function About() {
  const {isMobile} = useAppContext()
  const [isOpen, setIsOpen] = useState(false);
  return (
    <S.Container>
      <S.TextContainer>
        {aboutUs.map((section) => (
          <S.Text key={section.title}>
            <h3>{section.title}</h3>
            <h4>{section.subtitle}</h4>
            <StdButton style={{width:'202px', height:'59px', display:'flex', padding:"20px 40px", letterSpacing:'1.3px',whiteSpace:'nowrap'}}>
              Read More
            </StdButton>
            {isOpen && section.paragraphs.map((p, i) => <p className="more-text" key={i}>{p}</p>)}
          </S.Text>
        ))}
      </S.TextContainer>
    </S.Container>
  );
}

export default About;
