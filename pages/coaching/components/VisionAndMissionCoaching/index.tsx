import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import VisionAndMissionBackground from "../../../../public/assets/pages/coaching/manuel-uan.png"
import classes from "./style.module.css"


function VisionAndMissionCoaching() {
  return (
    <>
      <Container className={classes.sectionContainer}>
        <Row className={classes.section}>
          <Col lg="6" className={classes.missionBg} style={{ backgroundImage: 'url(' + VisionAndMissionBackground.src + ')' }}>
            <div className={classes.missionContainer}>
              <div className={classes.missionInner}>
                <h3>Mission</h3>
                <p>
                  Our Mission is to show people how to grow and rise up to their full potential to make their dreams come true.
                </p>
              </div>
            </div>
          </Col>
          <Col lg="5" className={classes.visionCol}>
            <div className={classes.visionContainer}>
              <h3>Vision</h3>
              <p>
                Our Vision is to create a platform that brings people together as a community with similar goals, where people can share their stories and inspire others.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default VisionAndMissionCoaching
