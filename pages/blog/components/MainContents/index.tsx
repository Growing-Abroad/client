import { Container, Row, Col } from "react-bootstrap";
import LeftSidePanel from "./LeftSidePanel";
import RightSidePanel from "./RightSidePanel";
import classes from './style.module.css';

function MainContents() {
    return (
        <Container className={classes.noPadding}>
            <Row>
                <Col md="8" sm="12">
                    <LeftSidePanel />
                </Col>
                <Col md="4" sm="12">
                    <RightSidePanel />
                </Col>
            </Row>
        </Container>
    );
}
export default MainContents;
