import FancyCarousel from "@components/Fancy-carousel";
import TwoColorTitle from "@components/two-color-title";
import { successStoriesData } from "@utils/mock-ups/success-stories-mock";
import { Container, Row, Col } from "react-bootstrap";
import * as S from "./styles";
import classes from './style.module.css'

function TeamMembers2() {
  return (
    <S.Container>
      <TwoColorTitle text1="Team" text2="Members" hasSpaceBtw as="h2" />
      <Container>
        <Row>
          <Col lg={8} className={classes.leftCol}>
            <div className={classes.leftPanel}>
              <div className={classes.imgContainer}>
                img
              </div>
            </div>
            <div className={classes.rightPanel}>
              <div className={classes.imgContainer}>img</div>
            </div>
          </Col>
          <Col lg={4} className={classes.rightCol}>
            4

          </Col>
        </Row>
      </Container>
    </S.Container>
  );
}

export default TeamMembers2;
