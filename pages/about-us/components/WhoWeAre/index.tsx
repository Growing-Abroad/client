import TwoColorTitle from "@components/two-color-title";
import { socials } from "@utils/socials";
import React from "react";
import UanAndManu from '@assets/about-us/about-us-coaches.webp';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { theme } from "@styles/theme";
import YoutubeplayButton from '@assets/about-us/youtube-play-btn.png'
import { Col, Container, Row } from "react-bootstrap";
import classes from './style.module.css';
import { Montserrat } from '@next/font/google'

const font = Montserrat({
  subsets: ['latin']
})

function WhoWeAre() {
  const youtube = socials.find((social) => social.name === "youtube");
  const { colors: { secondaryBlue } } = theme;

  return (
    <Container className={classes.whoWrAre}>
      <Row>
        <Col className={classes.centerContents}>
          <div className={classes.imageContainer}>
            <Image src={UanAndManu} alt="uan and manu" className={classes.youtubeImage}></Image>
            <div className={classes.ripplesContainer}>
              <Image src={YoutubeplayButton} alt="youtube play button" className={classes.youtubePlayButton + ' ' + classes.blurbRippleOut}></Image>
            </div>
          </div>
        </Col>
        <Col style={{ paddingLeft: "10px" }}>
          <TwoColorTitle text1="Who" text2="we are" hasSpaceBtw fontSize="50px" wrapperStyles={{ justifyContent: "left" }} />
          <div className={classes.embarmain}>
            <div className={classes.embar +' '+classes.embarbig}></div>
          </div>
          <p style={{fontFamily: font.style.fontFamily}}>
            Growing abroad helps qualified people that dream to live and work abroad, but have
            no clue on where to start in order to achieve that. These are people who
            </p>
            <ul style={{fontFamily: font.style.fontFamily}}>
              <li><FontAwesomeIcon icon={faCheck} style={{ color: secondaryBlue, fontWeight: '600', paddingRight: '10px' }} /> Speak English</li>
              <li><FontAwesomeIcon icon={faCheck} style={{ color: secondaryBlue, fontWeight: '600', paddingRight: '10px' }} /> Have either a University degree or a completed vocational training</li>
              <li><FontAwesomeIcon icon={faCheck} style={{ color: secondaryBlue, fontWeight: '600', paddingRight: '10px' }} /> Don’t see many opportunities in their home country</li>
            </ul>
          <p style={{fontFamily: font.style.fontFamily}}>
            We will be with you through the whole application process and help you to optimize
            your CV and application documents into German standards, help you to look for adequate
            jobs, help you to rock your job interview to get the job you admire.</p>
          <p style={{fontFamily: font.style.fontFamily}}>
            We provide a life-changing experience where you will learn a different language, get to
            know a new culture and have a different perspective in your life.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default WhoWeAre;
