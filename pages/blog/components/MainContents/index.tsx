import { Container, Row, Col } from 'react-bootstrap';
import LeftSidePanel from './LeftSidePanel';
import RightSidePanel from './RightSidePanel';
import classes from './style.module.css';

function MainContents() {
  return (
    <Container className={classes.noPadding}>
      <LeftSidePanel />

      <RightSidePanel />
    </Container>
  );
}
export default MainContents;
