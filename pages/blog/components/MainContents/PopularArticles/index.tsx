import TwoColorTitle from "@/components/two-color-title";
import { Image } from "react-bootstrap";
import classes from './styles.module.css';
import img1 from '../../../../../public/assets/blog/growing-abroad-blog-interview-canva.jpg';
import img2 from '../../../../../public/assets/blog/job-platforms.jpg';

function PopularArticles() {
    return (
        <div className={classes.popularArticles}>
            <TwoColorTitle text1="Popular" text2="Articles:" hasSpaceBtw as="h3"
                wrapperStyles={{ display: 'block', width: '100%', textAlign: 'center',paddingBottom: '28px' }}
                styles={{ display: 'contents' }}></TwoColorTitle>

            <div className={classes.article}>
                <Image src={img1.src} />

                <h3>Practical Marketing Tips for Black Friday </h3>
            </div>

            <div className={classes.article}>
                <Image src={img2.src} />

                <h3>How to answer the viva question perfectly </h3>
            </div>
        </div>
    );
}

export default PopularArticles;
