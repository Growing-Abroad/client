import { Container, Row, Col, Image } from 'react-bootstrap';
import classes from './styles.module.css';
import authorPicture from '../../../../public/assets/blog/uanderson.webp';
import borderRight from '../../../../public/assets/blog/right-border.svg';
import useAppContext from '@/hooks/useAppContext';

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
        <Col md="8" className={classes.publisherContainer}>
          <div className={classes.author}>
            <span>Written by</span>
            <span>
              <Image src={authorPicture.src}></Image> Manuel Feneberg
            </span>
          </div>
          <div className={classes.published}>
            <span>Published on: 01.01.2023</span>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default BannerImage;
