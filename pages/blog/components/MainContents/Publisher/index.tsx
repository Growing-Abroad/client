import { Container, Row, Col, Image } from 'react-bootstrap';
import authorPicture from '../../../../../public/assets/blog/uanderson.webp';
import classes from './styles.module.css';


export default function Publisher(){

  return(
    <Col md="12"className={classes.publisherContainer}>
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
  )

}
