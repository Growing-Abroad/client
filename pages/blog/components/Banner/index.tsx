import TwoColorTitle from "@/components/two-color-title";
import { Button } from "@/styles/global-styles";
import { Container, Row, Col } from "react-bootstrap";
import classes from './styles.module.css';

function Banner() {
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

                    <Button padding="20px 40px" fontSize="20px" width="auto" className={classes.button}>CV</Button>
                    <Button padding="20px 40px" fontSize="20px" width="auto" className={classes.button}>Ats Friendly</Button>
                    <Button padding="20px 40px" fontSize="20px" width="auto" className={classes.button}>Job Application</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Banner;