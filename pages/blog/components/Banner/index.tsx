import StdButton from "@/components/generics/StdButton/StdButton";
import TwoColorTitle from "@/components/two-color-title";
import useAppContext from "@/hooks/useAppContext";
import { Container, Row, Col } from "react-bootstrap";
import classes from './styles.module.css';

function Banner() {
  const {isMobile} = useAppContext();

    return (
        <Container className={classes.bannerContainer}>
            <Row>
                <Col className={classes.topBanner}>
                    <TwoColorTitle text1="How to write a CV in" text2="German Standards" hasSpaceBtw styles={{ textAlign: 'left' }}
                        wrapperStyles={{ display: 'block', textAlign: 'left', maxWidth: '870px', width: '100%' }} />
                    <p className={classes.para}>
                        Having an optimized CV is the absolute basis to get a job in Germany.
                        So the first thing always in the entire application process should be to
                        take your current CV and optimize it the best way possible and only after
                        that start applying. for you don't do that, you will loose your chances.
                    </p>
                    <div className={classes.buttons}>
                    <StdButton style={{padding:`${isMobile?"8px 15px":"20px 40px"}`,fontSize:`${isMobile?"14px":"20px"}`}} className={classes.button}>CV</StdButton>
                    <StdButton style={{padding:`${isMobile?"8px 15px":"20px 40px"}`,fontSize:`${isMobile?"14px":"20px"}`}} className={classes.button}>Ats Friendly</StdButton>
                    <StdButton style={{padding:`${isMobile?"8px 15px":"20px 40px"}`,fontSize:`${isMobile?"14px":"20px"}`}} className={classes.button}>Job Application</StdButton>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Banner;
