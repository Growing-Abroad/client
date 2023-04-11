import { Container, Row, Col, Image } from 'react-bootstrap'
import classes from './styles.module.css'
import authorPicture from '../../../../public/assets/blog/uanderson.webp'; 

function BannerImage() {
    return (
        <Container className={classes.bannerImgContainer}>
            <Row className={classes.bannerRow}>
                <Col className={classes.bannerCol} md="12">
                    {/* <div className={classes.arrow}>
                        <div className={classes.arrowLeft}></div>
                    </div> */}
                </Col>
                <Col md="12" className={classes.publisherContainer}>
                    <div className={classes.author}>
                        <span>Written by</span>
                        <span><Image src={authorPicture.src} alt='author picture'></Image> Manuel Feneberg</span>
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