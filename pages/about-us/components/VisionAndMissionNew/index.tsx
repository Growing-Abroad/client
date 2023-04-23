import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./style.module.css";
import useAppContext from "@/hooks/useAppContext";

export interface IText {
  heading: string;
  description: string;
}
export interface IVisionAndMission {
  text1: IText;
  text2: IText;
  backgroundSrc: {
    desktop: string;
    mobile: string;
  };
}

function VisionAndMissionNew({
  backgroundSrc,
  text1,
  text2,
}: IVisionAndMission) {
  const [backgroundImg, setBackgroundImg] = useState<string>("");

  const { isMobile } = useAppContext();

  useEffect(() => {
    if (isMobile) {
      setBackgroundImg(backgroundSrc.mobile);
      return;
    }
    setBackgroundImg(backgroundSrc.desktop);
  }, [isMobile]);

  return (
    <>
      <Container className={classes.sectionContainer}>
        <Row className={classes.section}>
          <Col
            lg="6"
            className={classes.missionBg}
            style={{
              backgroundImage: "url(" + backgroundImg + ")",
            }}
          >
            <div className={classes.missionContainer}>
              <div className={classes.missionInner}>
                <h3>{text1.heading}</h3>
                <p>{text1.description}</p>
              </div>
            </div>
          </Col>
          <Col lg="6" className={classes.visionCol}>
            <div className={classes.visionContainer}>
              <h3>{text2.heading}</h3>
              <p>{text2.description}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default VisionAndMissionNew;
