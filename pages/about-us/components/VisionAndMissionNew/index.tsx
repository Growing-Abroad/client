import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import classes from "./style.module.css"

export interface IText {
  heading: string,
  description: string
}
export interface IVisionAndMission {
  text1: IText,
  text2: IText,
  backgroundSrc: string
}

function VisionAndMissionNew({backgroundSrc, text1, text2}: IVisionAndMission) {
  return (
    <>
      <Container className={classes.sectionContainer}>
        <Row className={classes.section}>
          <Col lg="6" className={classes.missionBg} style={{ backgroundImage: 'url(' + backgroundSrc + ')' }}>
            <div className={classes.missionContainer}>
              <div className={classes.missionInner}>
                <h3>{text1.heading}</h3>
                <p>
                  {text1.description}
                </p>
              </div>
            </div>
          </Col>
          <Col lg="6" className={classes.visionCol}>
            <div className={classes.visionContainer}>
              <h3>{text2.heading}</h3>
              <p>
                {text2.description}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default VisionAndMissionNew
