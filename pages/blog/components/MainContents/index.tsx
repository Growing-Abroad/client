import { Container, Row, Col } from 'react-bootstrap';
import LeftSidePanel from './LeftSidePanel';
import RightSidePanel from './RightSidePanel';
import Publisher from './Publisher';
import classes from './style.module.css';

function MainContents() {
  return (
    <Container className={classes.noPadding}>
      <Publisher />
      <Row className={classes.content}>
      <LeftSidePanel />
      <RightSidePanel />
      </Row>
    </Container>
  );
}
export default MainContents;
