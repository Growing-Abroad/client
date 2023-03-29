import { Container, Row, Col, Image } from 'react-bootstrap';
import classes from './styles.module.css';
import useAppContext from '@/hooks/useAppContext';
import Publisher from '../MainContents/Publisher';

function BannerImage() {
  const {isMobile} = useAppContext();
  return (
    <Container className={classes.bannerImgContainer} >
      <Row className={classes.bannerRow} >
        <Col className={classes.bannerCol} md="12">
          {/* <div className={classes.arrow}>
                        <div className={classes.arrowLeft}></div>
                    </div> */}
          <svg
            width={`${isMobile ? 53 :188}`}
            height={`${isMobile ? 110 :394}`}
            className={classes.borderRight}
            viewBox="0 0 188 394"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.1333 0H189V394H26.1333L0 197L26.1333 0Z"
              fill="white"
            />
          </svg>
        </Col>
      </Row>
    </Container>
  );
}

export default BannerImage;
