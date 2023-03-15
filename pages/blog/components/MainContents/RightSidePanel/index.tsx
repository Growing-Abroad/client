import { Image } from 'react-bootstrap';
import classes from './styles.module.css';
import linkedin from '../../../../../public/assets/blog/linkedin-logo.webp';
import fb from '../../../../../public/assets/blog/logo-facebook.webp';
import twitter from '../../../../../public/assets/blog/twitter-logo.webp';
import mail from '../../../../../public/assets/blog/mail-item.webp';
import Masterclass from '../Masterclass';
import PopularArticles from '../PopularArticles';

function RightSidePanel () {
    return (
        <div className={classes.rightPanel}>
            <div className={classes.social}>Share:
                <Image src={linkedin.src}></Image>
                <Image src={fb.src}></Image>
                <Image src={twitter.src}></Image>
                <Image src={mail.src}></Image>
            </div>

            <Masterclass></Masterclass>
            <PopularArticles></PopularArticles>
        </div>
    );
}

export default RightSidePanel;