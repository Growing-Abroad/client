import React, { ReactElement } from 'react';
import { FooterLinks, SocialMedia } from './style';
import styles from '@pages/contact-us/components/ContactSection/index.module.css'
import { Wrapper } from '@/components/Wrapper';
import Image from 'next/image';
import LinkedInIcon from '@assets/icons/linkedin-icon.svg';
import FacebookIcon from '@assets/icons/facebook.svg';
import InstagramIcon from '@assets/icons/instagram.svg';
import TikTokIcon from '@assets/icons/tiktok.svg';
import YoutubeIcon from '@assets/icons/youtube-icon.svg';
import StdButton from '@components/generics/StdButton/StdButton';


export default function Contact() {
    return (
        <Wrapper>
            <div className={styles.app__contact__wrapper}>
                <div className="app__contact__header">
                    <span className={styles.app__contact__header__color}>
                        Contact
                    </span>
                    <span className={`${styles.app__contact__header__color} ${styles.diff}`}>
                        Us
                    </span>
                </div>

                <div className={styles.app__contact__form__wrapper}>
                    <div className={styles.app__contact__left__form}>
                        <span className={styles.app__contact__left__form__header}>
                            Get in touch with us
                        </span>
                        <FooterLinks width="500px" alignItems="start">
                        <p>
                        Also check out the section{' '}
                        <span>"Frequently asked questions"</span> and{' '}
                        <span>"Career Blogs"</span>. Maybe your question is already
                        answered there.
                        </p>
                        </FooterLinks>
                        <div className={styles.app__contact__form__social}>
                            <span className={styles.app__contact__left__form__header}>Social Media</span>
                            <div>
            <SocialMedia>
                <Image className={styles.app__contact__form__social__icon}
                  src={InstagramIcon}
                  alt="instagram icon"
                  height={60}
                  width={60}
                  />
                <Image className={styles.app__contact__form__social__icon}
                  src={FacebookIcon}
                  alt="facebook icon"
                  height={60}
                  width={60}
                />
                <Image className={styles.app__contact__form__social__icon}
                  src={TikTokIcon}
                  alt="tiktok icon"
                  height={60}
                  width={60}
                />
                <Image className={styles.app__contact__form__social__icon}
                  src={YoutubeIcon}
                  alt="youtube icon"
                  height={60}
                  width={60}
                />
                <Image className={styles.app__contact__form__social__icon}
                  src={LinkedInIcon}
                  alt="linkedin icon"
                  height={60}
                  width={60}
                />
              </SocialMedia>
                            </div>
                        </div>
                    </div>
                    <div className={styles.app__contact__right__form}>
                        <input type="text" className={styles.app__contact__form__input} placeholder="First Name" />
                        <input type="text" className={styles.app__contact__form__input} placeholder="Last Name" />
                        <input type="text" className={styles.app__contact__form__input} placeholder="E-Mail Address" />
                        <input type="email" className={styles.app__contact__form__input} placeholder="Concern" />
                        <textarea name="" id="" className={styles.app__contact__form__textarea} placeholder="Message"></textarea>
                        <StdButton style={{
                                      position:'relative',
                                      right: '23%',
                                      }}>
                          Send Message
                        </StdButton>
                     </div>
                </div>
            </div>
        </Wrapper>
    );
}

