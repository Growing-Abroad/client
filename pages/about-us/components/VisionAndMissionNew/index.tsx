import React from "react"
import { Container, Row, Col } from "react-bootstrap"
// import VisionAndMissionBackground from "../../../../public/assets/puzzle.webp"
import VisionAndMissionBackground from "../../../../public/assets/pages/coaching/career-coaches.webp"

import classes from "./style.module.css"

function VisionAndMissionNew() {
  return (
    <>
      <Container className={classes.sectionContainer}>
        <Row className={classes.section}>
          <Col lg="6" className={classes.missionBg} style={{ backgroundImage: 'url(' + VisionAndMissionBackground.src + ')', backgroundPosition: 'left' }}>
            <div className={classes.missionContainer}>
              <div className={classes.missionInner}>
                <h3>Goal</h3>
                <p>
                  With our Coaching session you will be perfectly prepared for the german market and will have the best chances to land your dream job
                </p>
              </div>
            </div>
          </Col>
          <Col lg="6" className={classes.visionCol}>
            <div className={classes.visionContainer}>
              <h3>Experts</h3>
              <p>
                All your Coaches are proven experts from Germany and will guide you through every step of your journey to land your dream job abraod.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default VisionAndMissionNew
