import { Container, Row, Col } from "react-bootstrap";
import LeftSidePanel from "./LeftSidePanel";
import RightSidePanel from "./RightSidePanel";
import classes from './style.module.css';

function MainContents() {
    return (
        <Container className={classes.noPadding}>
            <Row className={classes.noPadding}>
                <Col md="12" sm="12" className={classes.noPadding}>
                    <LeftSidePanel></LeftSidePanel>
                </Col>
                <Col md="12" sm="12" className={classes.noPadding}>
                    <RightSidePanel></RightSidePanel>
                </Col>
            </Row>
        </Container>
    );
}
export default MainContents;