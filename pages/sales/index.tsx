import React, { ReactElement } from 'react';
import PageLayout from '../../src/components/PageLayout';
import { Wrapper } from '@/components/Wrapper';
import styles from './index.module.css'
import Image from "next/image";
import main__logo from '../../public/assets/cta-img.svg'
import bottom__svg from '../../public/assets/border-bottom.webp'
import img1 from '../../public/assets/img1.png'
import img2 from '../../public/assets/img2.png'
import img3 from '../../public/assets/img3.png'
import sad from '../../public/assets/sad.png'
import officeman from '../../public/assets/pages/sales/officeman.png'
import rectangle from '../../public/assets/pages/sales/rectangle.png'
import correct from '../../public/assets/pages/sales/correct.png'
import discuss from '../../public/assets/pages/sales/discuss.png'
import uan from '../../public/assets/pages/sales/uan.png'
import manu from '../../public/assets/pages/sales/manu.png'
import mens from '../../public/assets/pages/sales/mens.png'
import point from '../../public/assets/pages/sales/point.png'
import germany from '../../public/assets/pages/sales/Germany.png'
import img2a from '../../public/assets/pages/sales/img2.png'
import img3a from '../../public/assets/pages/sales/img3.png'
import img4 from '../../public/assets/pages/sales/img4.png'
import img5 from '../../public/assets/pages/sales/img5.png'
import img6 from '../../public/assets/pages/sales/img6.png'

export default function Sales() {
    return (
        <Wrapper>
            <div className={styles.app__sales__top__wrapper}>

                <div className={styles.app__sales__top__left__wrapper}>
                    <span className={styles.app__sales__top__left__header}>
                        Land your Dream Job in <span className={styles.yellow__text}>
                            Germany</span> or <span className={styles.yellow__text}>Europe</span>
                    </span>

                    <span className={styles.app__sales__top__left__body}>
                        Build a successful career abroad with this
                        amazing ONLINE COURSE
                    </span>

                    <button className={styles.app__sales__top__left__button}>
                        Buy Online Course Now
                    </button>
                </div>

                <Image alt="" className={styles.app__sales__top__right__image} src={main__logo}></Image>

                <Image className={styles.app__sales__bottom__svg} src={bottom__svg} alt="" />
            </div>

            <div className={styles.app__sales__wrapper}>
                <span className={styles.app__sales__header}>
                    Does this sound <span className={styles.blue__text}>
                        Familiar ...?
                    </span>
                </span>
                <div className={styles.app__sales__body__wrapper}>
                    <div className={styles.app__sales__body__image__wrapper}>
                        <Image src={img3} className={`${styles.app__sales__body__image} ${styles.image__1}`} alt=""></Image>
                        <Image src={img2} className={`${styles.app__sales__body__image} ${styles.image__2}`} alt=""></Image>
                        <Image src={img1} className={`${styles.app__sales__body__image} ${styles.image__3}`} alt=""></Image>
                    </div>
                    <div className={styles.app__sales__body__points__wrapper}>
                        <div className={styles.app__sales__point}>
                            <Image className={styles.app__sales__point__icon} src={sad} alt=""></Image>
                            <span className={styles.app__sales__point__body}>You feel like that there is more you can achieve in your life?</span>
                        </div>
                        <div className={styles.app__sales__point}>
                            <Image className={styles.app__sales__point__icon} src={sad} alt=""></Image>
                            <span className={styles.app__sales__point__body}>You have no idea how and where to start to build a career?</span>
                        </div>
                        <div className={styles.app__sales__point}>
                            <Image className={styles.app__sales__point__icon} src={sad} alt=""></Image>
                            <span className={styles.app__sales__point__body}>You are very qualified but still don't earn enough money?</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${styles.app__sales__wrapper} ${styles.app__diff__back}`}>
                <span className={styles.app__sales__header} id={styles.app__sales__header__exm}>
                    ... Then join our Online
                    Course for <span className={styles.blue__text}>
                        Successful
                        Motivated Foreigners to ...
                    </span>
                </span>

                <div className={styles.app__sales__body__wrapper}>
                    <div className={styles.app__sales__body__image__wrapper__small}>
                        <Image src={officeman} className={`${styles.app__sales__body__image__extra}`} alt=""></Image>
                        <Image src={rectangle} className={`${styles.app__sales__body__image__extra} ${styles.app__sales__body__image__rectangle}`} alt=""></Image>
                    </div>
                    <div className={styles.app__sales__body__points__wrapper}>
                        <div className={styles.app__sales__point}>
                            <Image className={styles.app__sales__point__icon__extra} src={correct} alt=""></Image>
                            <span className={styles.app__sales__point__body}>Learn all the steps you have to take to land your DREAM JOB in GERMANY or Europe</span>
                        </div>
                        <div className={styles.app__sales__point}>
                            <Image className={styles.app__sales__point__icon__extra} src={correct} alt=""></Image>
                            <span className={styles.app__sales__point__body}>Discover SECRET METHODS and strategies to get multiple job interviews</span>
                        </div>
                        <div className={styles.app__sales__point}>
                            <Image className={styles.app__sales__point__icon__extra} src={correct} alt=""></Image>
                            <span className={styles.app__sales__point__body}>Create a UNIQUE APPLICATION which stands out of all the other candidates in the market</span>
                        </div>
                        <div className={styles.app__sales__point}>
                            <Image className={styles.app__sales__point__icon__extra} src={correct} alt=""></Image>
                            <span className={styles.app__sales__point__body}>Create your own life full of CONFIDENCE COMMITMENT and SUCCESS</span>
                        </div>
                        <div className={styles.app__sales__point}>
                            <Image className={styles.app__sales__point__icon__extra} src={correct} alt=""></Image>
                            <span className={styles.app__sales__point__body}>CONVINCE in every single JOB INTERVIEW with your unique personality and land your dream job in Germany or Europe</span>
                        </div>
                        <div className={styles.app__sales__point}>
                            <Image className={styles.app__sales__point__icon__extra} src={correct} alt=""></Image>
                            <span className={styles.app__sales__point__body}>Create a professional Business Profile to ATTRACT RECRUITERS and CEOs from Germany and Europe</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.app__sales__wrapper}>
                <span className={styles.app__sales__header}>
                    ... It is time to start
                    your journey and
                    <span className={styles.blue__text}>
                        &nbsp;Follow your dream! ...
                    </span>
                </span>

                <div className={styles.app__sales__body__wrapper__exm}>
                    <div className={styles.app__sales__body__image__wrapper__exm}>
                        <Image src={discuss} className={`${styles.app__sales__body__image__extra}`} alt=""></Image>
                    </div>

                    <span className={styles.exm__text}>In this life changing Online Course we included all our
                        insights, strategies and methods for you to successfully
                        get a job in Germany or Europe.
                    </span>
                </div>
            </div>

            <div className={`${styles.app__sales__wrapper} ${styles.app__diff__back}`}>
                <span className={styles.app__sales__header} >
                    ... We are Uan & Manu
                    <span className={styles.blue__text}>
                        &nbsp;your Career Experts ...
                    </span>
                </span>

                <div className={styles.app__sales__body__wrapper}>
                    <div className={styles.app__sales__left__text}>
                        <span className={styles.capitalize}>UAN</span> is the perfect example of a successful foreigner who was able to build an outstanding life and career in Germany. Growing up in a small village in Brazil, not coming from a rich family, life and job perspective were very limited. More than 10 years later he turned his life around graduated from a top university in Germany, having his German passport and having a management position.
                        <br />
                        <br />
                        Uan has done multiple interviews in his life, managed and recruited many people by himself and knows exactly what is needed and expected in order to fulfill the European standard.
                        <br />
                        <br />
                        In this Online Course he will show you all the steps he took to have a successful career in Europe.
                    </div>
                    <div className={styles.app__sales__image__uan__wrapper}>
                        <Image src={uan} className={styles.app__sales__image__uan} alt=""></Image>
                        <Image src={manu} className={styles.app__sales__image__manu} alt=""></Image>
                    </div>
                </div>
            </div>

            <div className={`${styles.app__sales__wrapper}`}>
                <span className={styles.app__sales__header} id={styles.app__sales__header__exm}>
                    ... Then join our Online
                    Course for <span className={styles.blue__text}>
                        Successful
                        Motivated Foreigners to ...
                    </span>
                </span>

                <div className={styles.app__sales__body__wrapper}>
                    <div className={styles.app__sales__body__points__wrapper}>
                        <div className={styles.app__sales__point}>
                            <Image className={styles.app__sales__point__icon__extra} src={correct} alt=""></Image>
                            <span className={styles.app__sales__point__body}>50+ video sessions to learn step by step how to land your dream job in Germany or Europe</span>
                        </div>
                        <div className={styles.app__sales__point}>
                            <Image className={styles.app__sales__point__icon__extra} src={correct} alt=""></Image>
                            <span className={styles.app__sales__point__body}>Discover SECRET METHODS and strategies to get multiple job interviews</span>
                        </div>
                        <div className={styles.app__sales__point}>
                            <Image className={styles.app__sales__point__icon__extra} src={correct} alt=""></Image>
                            <span className={styles.app__sales__point__body}>Create a UNIQUE APPLICATION which stands out of all the other candidates in the market</span>
                        </div>
                        <div className={styles.app__sales__point}>
                            <Image className={styles.app__sales__point__icon__extra} src={correct} alt=""></Image>
                            <span className={styles.app__sales__point__body}>Create your own life full of CONFIDENCE COMMITMENT and SUCCESS</span>
                        </div>
                        <div className={styles.app__sales__point}>
                            <Image className={styles.app__sales__point__icon__extra} src={correct} alt=""></Image>
                            <span className={styles.app__sales__point__body}>CONVINCE in every single JOB INTERVIEW with your unique personality and land your dream job in Germany or Europe</span>
                        </div>
                        <div className={styles.app__sales__point}>
                            <Image className={styles.app__sales__point__icon__extra} src={correct} alt=""></Image>
                            <span className={styles.app__sales__point__body}>Create a professional Business Profile to ATTRACT RECRUITERS and CEOs from Germany and Europe</span>
                        </div>
                    </div>
                    <div className={styles.app__sales__body__image__wrapper__2}>
                        <Image src={mens} className={`${styles.app__sales__body__image__extra}`} alt=""></Image>
                        <Image src={rectangle} className={`${styles.app__sales__body__image__extra} ${styles.app__sales__body__image__rectangle__2}`} alt=""></Image>
                    </div>
                </div>
            </div>

            <div className={`${styles.app__sales__wrapper} ${styles.app__diff__back}`}>
                <span className={styles.app__sales__header} >
                    ... What you can expect
                    <span className={styles.blue__text}>
                        &nbsp;in this course ...
                    </span>
                </span>

                <div className={styles.app__sales__body__wrapper}>
                    <div className={styles.app__sales__chapter__wrapper}>
                        <span className={styles.chapter__label}>Chapter</span>
                        <div className={styles.chapter__boxes}>1</div>
                        <div className={styles.chapter__boxes}>2</div>
                        <div className={styles.chapter__boxes}>3</div>
                        <div className={styles.chapter__boxes}>4</div>
                        <div className={styles.chapter__boxes}>5</div>
                        <div className={styles.chapter__boxes}>6</div>
                        <div className={styles.chapter__boxes}>7</div>
                        <div className={styles.chapter__points}>
                            <span className={styles.chapter__header}>Germany the land of
                                possibilities</span>
                            <div className={styles.points__wrapper}>
                                <div className={styles.point}>
                                    <Image src={point} alt="" className={styles.point__icon}></Image>
                                    <span className={styles.point__body}>
                                        Learn how to earn money in Germany
                                    </span>
                                </div>
                                <div className={styles.point}>
                                    <Image src={point} alt="" className={styles.point__icon}></Image>
                                    <span className={styles.point__body}>
                                        Discover the benefits of the German system
                                    </span>
                                </div>
                                <div className={styles.point}>
                                    <Image src={point} alt="" className={styles.point__icon}></Image>
                                    <span className={styles.point__body}>
                                        Understand the German laws for foreigners to enter Germany
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.chapter__images} id={styles.pimage__1}>
                            <Image src={germany} alt="" className={styles.point__images}></Image>
                        </div>
                        <div className={styles.chapter__images} id={styles.pimage__2}>
                            <Image src={img2a} alt="" className={styles.point__images}></Image>
                        </div>
                        <div className={styles.chapter__points} id={styles.point__2}>
                            <span className={styles.chapter__header}>Process of getting a VISA</span>
                            <div className={styles.points__wrapper}>
                                <div className={styles.point}>
                                    <Image src={point} alt="" className={styles.point__icon}></Image>
                                    <span className={styles.point__body}>
                                        Learn about the requirements of getting a VISA
                                    </span>
                                </div>
                                <div className={styles.point}>
                                    <Image src={point} alt="" className={styles.point__icon}></Image>
                                    <span className={styles.point__body}>
                                        Learn the steps you have to take to get a VISA for Germany
                                    </span>
                                </div>
                                <div className={styles.point}>
                                    <Image src={point} alt="" className={styles.point__icon}></Image>
                                    <span className={styles.point__body}>
                                        Discover the different VISA possibilites
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.chapter__images} id={styles.pimage__3}>
                            <Image src={img3a} alt="" className={styles.point__images}></Image>
                        </div>
                        <div className={styles.chapter__points} id={styles.point__3}>
                            <span className={styles.chapter__header}>Optimizing your application
                                documents</span>
                            <div className={styles.points__wrapper}>
                                <div className={styles.point}>
                                    <Image src={point} alt="" className={styles.point__icon}></Image>
                                    <span className={styles.point__body}>
                                        Learn step by step to optimize your CV, Cover letter, LinkedIn Profile and other relevant documents into German standards
                                    </span>
                                </div>
                                <div className={styles.point}>
                                    <Image src={point} alt="" className={styles.point__icon}></Image>
                                    <span className={styles.point__body}>
                                        Develop your Business appearance to the next level to be ahead of your competition
                                    </span>
                                </div>
                                <div className={styles.point}>
                                    <Image src={point} alt="" className={styles.point__icon}></Image>
                                    <span className={styles.point__body}>
                                        Learn about the Growing Abroad method to get tons of job interviews
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.chapter__images} id={styles.pimage__4}>
                            <Image src={img4} alt="" className={styles.point__images}></Image>
                        </div>
                        <div className={styles.chapter__points} id={styles.point__4}>
                            <span className={styles.chapter__header}>Job Search Strategy to find
                                the right jobs in Germany</span>
                            <div className={styles.points__wrapper}>
                                <div className={styles.point}>
                                    <Image src={point} alt="" className={styles.point__icon}></Image>
                                    <span className={styles.point__body}>
                                        Discover the secret methods to find English speaking jobs in Germany
                                    </span>
                                </div>
                                <div className={styles.point}>
                                    <Image src={point} alt="" className={styles.point__icon}></Image>
                                    <span className={styles.point__body}>
                                        Learn all the insights about the most effective job portals for foreigners in Germany
                                    </span>
                                </div>
                                <div className={styles.point}>
                                    <Image src={point} alt="" className={styles.point__icon}></Image>
                                    <span className={styles.point__body}>
                                        Learn how to write outstanding E-Mails to communicate with recruiters in Germany
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.chapter__images} id={styles.pimage__5}>
                            <Image src={img5} alt="" className={styles.point__images}></Image>
                        </div>
                        <div className={styles.chapter__points} id={styles.point__5}>
                            <span className={styles.chapter__header}>Preparation Process for
                                your job interview</span>
                            <div className={styles.points__wrapper}>
                                <div className={styles.point}>
                                    <Image src={point} alt="" className={styles.point__icon}></Image>
                                    <span className={styles.point__body}>
                                        Learn effective strategies to answer the most important interview questions
                                    </span>
                                </div>
                                <div className={styles.point}>
                                    <Image src={point} alt="" className={styles.point__icon}></Image>
                                    <span className={styles.point__body}>
                                        Learn about the proven Growing Abroad Storytelling method to show credibility in the interview
                                    </span>
                                </div>
                                <div className={styles.point}>
                                    <Image src={point} alt="" className={styles.point__icon}></Image>
                                    <span className={styles.point__body}>
                                        Learn about different strategies to impress the interviewer
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.chapter__images} id={styles.pimage__6}>
                            <Image src={img6} alt="" className={styles.point__images}></Image>
                        </div>
                        <div className={styles.chapter__points} id={styles.point__6}>
                            <span className={styles.chapter__header}>Rock your job interview and land your dream job</span>
                            <div className={styles.points__wrapper}>
                                <div className={styles.point}>
                                    <Image src={point} alt="" className={styles.point__icon}></Image>
                                    <span className={styles.point__body}>
                                        Learn effective methods to deal with nervousness and anxiety
                                    </span>
                                </div>
                                <div className={styles.point}>
                                    <Image src={point} alt="" className={styles.point__icon}></Image>
                                    <span className={styles.point__body}>
                                        Learn how to impress in all the 6 phases of a job interview with psychological hacks
                                    </span>
                                </div>
                                <div className={styles.point}>
                                    <Image src={point} alt="" className={styles.point__icon}></Image>
                                    <span className={styles.point__body}>
                                        Learn about different strategies to impress the interviewer
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

Sales.getLayout = function getLayout(page: ReactElement) {
    return <PageLayout>{page}</PageLayout>;
};
