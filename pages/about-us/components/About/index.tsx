
import React, { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import * as S from "./styles";
import { aboutUs } from "@utils/mock-ups/about-us.mock";
import { Button, Col, Container, Row } from "react-bootstrap";
import classes from './style.module.css';

function About() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <S.Container>
      <S.TextContainer>
        {aboutUs.map((section) => (
          <S.Text key={section.title}>
            <h3>{section.title}</h3>
            <div className={classes.embarmain+' '+classes.tcenter}>
              <div className={classes.embar + ' ' + classes.embarbig}></div>
            </div>
            <h4>{section.subtitle}</h4>
            {isOpen && section.paragraphs.map((p, i) => <p className="more-text" key={i}>{p}</p>)}
          </S.Text>
        ))}

      </S.TextContainer>
      <Container>
        <Row>
          {aboutUs.map((section) => (
            <Col className="text-center" key={section.title}>
              {isOpen && section.paragraphs.map((p, i) => <p className="more-text" key={i}>{p}</p>)}
              <Button variant="warning" className="read-more-btn">Read More</Button>
            </Col>
          ))}
        </Row>
      </Container>
      <S.More >
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <AiOutlineUp /> : <AiOutlineDown />}
        </button>
      </S.More>
    </S.Container>
  );
}

export default About;
