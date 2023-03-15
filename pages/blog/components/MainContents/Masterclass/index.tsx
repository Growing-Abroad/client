import TwoColorTitle from "@/components/two-color-title";
import { Image } from "react-bootstrap";
import classes from './styles.module.css'
import image from '../../../../../public/assets/blog/growing-abroad-blog-online-course-canva.webp'
import { Button } from "@/styles/global-styles";

function Masterclass () {
    return (
        <div className={classes.masterclass}>
        <TwoColorTitle text1="Learn how to get your dream job in" text2="Germany" hasSpaceBtw as="h3"
        wrapperStyles={{display: 'block', width: '100%', textAlign: 'center'}} styles={{display: 'contents'}}></TwoColorTitle>

        <Image src={image.src} width="100%"></Image>

        <Button width="auto" className={classes.button}>Watch free Masterclasses</Button>
        </div>
    );
}

export default Masterclass;