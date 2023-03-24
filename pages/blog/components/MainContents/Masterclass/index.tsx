import TwoColorTitle from "@/components/two-color-title";
import { Image } from "react-bootstrap";
import classes from './styles.module.css'
import image from '../../../../../public/assets/blog/growing-abroad-blog-online-course-canva.webp'
import { Button } from "@/styles/global-styles";
import useAppContext from "@/hooks/useAppContext";
import StdButton from "@/components/generics/StdButton/StdButton";

function Masterclass () {
  const {isMobile}= useAppContext();
    return (
        <div className={classes.masterclass}>
        <TwoColorTitle text1="Learn how to get your dream job in" text2="Germany" hasSpaceBtw as="h3"
        wrapperStyles={{display: 'block', width: '100%', textAlign: 'center'}}  className={classes.mobileTitle}styles={{display: 'contents'}}></TwoColorTitle>

        <Image src={image.src} width="100%"></Image>

        <StdButton  className={classes.button}>Watch free Masterclasses</StdButton>
        </div>
    );
}

export default Masterclass;
