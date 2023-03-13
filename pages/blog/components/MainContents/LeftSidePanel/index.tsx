import TwoColorTitle from "@/components/two-color-title";
import { FormSelect, Image } from "react-bootstrap";
import classes from './styles.module.css'
import blogImage from '../../../../../public/assets/blog/growing-abroad-blog-article-canva.webp';

function LeftSidePanel() {
    return (
        <>
            <div className={classes.leftPanel}>
                <FormSelect className={classes.selectOption}>
                    <option value="0" selected>What you are going to learn</option>
                    <option>Option One</option>
                    <option>Option Two</option>
                    <option>Option Three</option>
                </FormSelect>

                <TwoColorTitle text1="How to write a CV in German" text2="Standards" hasSpaceBtw wrapperStyles={{ display: 'initial' }}
                    styles={{ display: 'flex' }}></TwoColorTitle>

                <p className={classes.para}>
                    Growing abroad helps qualified people that dream to live and work abroad, but have no clue on where to start in order to achieve that.
                    These are people who speak English, have either a University degree or a completed vocational training and don’t see many
                    opportunities in their home country. We will be with you   the whole application process and help you to optimize your CV and
                    application documents into German standards, help you to look for adequate jobs, help you to rock your job interview to get the
                    job you admire.
                </p>

                <Image src={blogImage.src} width="100%" height="auto"></Image>

                <p className={classes.para}>
                    Growing abroad helps qualified people that dream to live andwork abroad, but have no clue on where to start in order to achieve that.
                    These are people who speak English, have either a University degree or a completed vocational training and don’t see many opportunities
                    in their home country. We will be with you through the whole application process and help you to optimize your CV and application documents
                    into German standards, help you to look for adequate jobs, help you to rock your job interview to get the job you admire.
                </p>
                <p className={classes.para}>
                    Growing abroad helps qualified people that dream to live andwork abroad, but have no clue on where to start in order to achieve that. 
                    These are people who speak English, have either a University degree or a completed vocational training and don’t see many opportunities 
                    in their home country. We will be with you through the whole application process and help you to optimize your CV and application 
                    documents into German standards, help you to look for adequate jobs, help you to rock your job interview to get the job you admire.
                </p>
            </div>
        </>
    );
}

export default LeftSidePanel;