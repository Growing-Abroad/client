import { Container, Row, Col } from "react-bootstrap";
import LeftSidePanel from "./LeftSidePanel";
import RightSidePanel from "./RightSidePanel";

function MainContents() {
    return (
        <Container>
            <Row>
                <Col md="8" sm="12">
                    <LeftSidePanel></LeftSidePanel>
                </Col>
                <Col md="4" sm="12">
                    <RightSidePanel></RightSidePanel>
                </Col>
            </Row>
        </Container>
    );
}
export default MainContents;