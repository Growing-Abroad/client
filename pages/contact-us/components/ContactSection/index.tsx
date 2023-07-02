import React, { ReactElement, memo, useEffect, useRef, useState } from "react";
import {
  FooterLinks,
  SocialMedia,
} from "../../../../styles/contact-us/components/ContactSection/index.styles";
import styles from "@pages/contact-us/components/ContactSection/index.module.css";
import { Wrapper } from "@/components/Wrapper";
import Image from "next/image";
import LinkedInIcon from "@assets/icons/linkedin-icon.svg";
import DiscordIcon from "@assets/icons/discord-logo.jpg";
import InstagramIcon from "@assets/icons/instagram.svg";
import TikTokIcon from "@assets/icons/tiktok.svg";
import YoutubeIcon from "@assets/icons/youtube-icon.svg";
import StdButton from "@components/generics/StdButton/StdButton";
import useAppContext from "@/hooks/useAppContext";
import Link from "next/link";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import sendContactUsForm from "@/services/contact-us/contact-us.service";
import { IContactUsServerResponse } from "@/models/contact-us.model";
import { Checkbox, FormControlLabel } from "@mui/material";
// import { Checkbox } from "@/components/Form/Checkbox";

export type TContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  concern: string;
  message: string;
  dataPrivacyPolicy: boolean
};



const Error = () => (
  <>
    <span className={styles.app__contact__form__error}>This field is required.</span>
  </>
  )

interface IFormProps {
  errors: any, 
  register: any, 
  handleSubmit: any, 
  onSubmit: any, 
  control: any
}

const PrivacyPolicy = () => (<>
  <div style={{display: 'flex', alignItems: 'center'}}>
    <p style={{margin: 0 }}>
      By clicking my personal data will be processed in accordance with the{' '}
      <Link href={'/data-privacy'}>Privacy Policy</Link>
    </p>
  </div>
</>)

const ContactForm = ({errors, register, handleSubmit, onSubmit, control}: IFormProps) => (
  <form onSubmit={handleSubmit(onSubmit)} className={styles.app__contact__form}>
    <div className={styles.app__contact__form__inputs__wrapper}>
      <input
        type="text"
        key={'firstName'}
        className={styles.app__contact__form__input}
        placeholder="First Name"
        {...register('firstName', {required: true})}
      />
      {errors?.firstName && <Error />}
    </div>
    <div className={styles.app__contact__form__inputs__wrapper}>
      <input
        type="text"
        key={'lastName'}
        className={styles.app__contact__form__input}
        placeholder="Last Name"
        {...register('lastName', {required: true})}
      />
      {errors?.lastName && <Error />}
    </div>
    <div className={styles.app__contact__form__inputs__wrapper}>
      <input
        type="email"
        key={'email'}
        className={styles.app__contact__form__input}
        placeholder="E-Mail Address"
        {...register('email', {required: true})}
      />
      {errors?.email && <Error />}
    </div>
    <div className={styles.app__contact__form__inputs__wrapper}>
      <input
        type="text"
        key={'concern'}
        className={styles.app__contact__form__input}
        placeholder="Concern"
        {...register('concern', {required: true})}
      />
      {errors?.concern && <Error />}
    </div>
    <div className={styles.app__contact__form__inputs__wrapper}>
      <textarea
        id=""
        key={'message'}
        className={styles.app__contact__form__textarea}
        placeholder="Message"
        {...register('message', {required: true})}
        ></textarea>
      {errors?.message && <Error />}
    </div>
    
    <div className={styles.app__contact__form__inputs__wrapper}>
      <Controller
        name="dataPrivacyPolicy"
        control={control}
        defaultValue={false}
        rules={{ required: true }}
        render={({ field }) => (
          <FormControlLabel
            control={<Checkbox {...field} checked={field.value} />}
            label={<PrivacyPolicy/>}
            disableTypography
            style={{marginInline: 0, fontSize: '12px', fontFamily: 'Montserrat !important', marginBottom: '6px'}}
          />
        )}
      />
      {errors?.dataPrivacyPolicy && <Error />}
    </div>
    <StdButton type="submit" style={{paddingInline: '44px', marginTop: 'auto', }}>
      Send Message
    </StdButton>
  </form>
  )

const MsgSent = () => (
  <>
    <div className={styles.app__contact__form__msg_sent}>
      <p className={styles.app__contact__form__msg_sent__paragraph}>
        <span className={styles.app__contact__form__msg_sent_thanks}>THANK YOU</span> for reaching out to us.
      </p>
      
      <p className={styles.app__contact__form__msg_sent__paragraph}>
        We will try to take care of your request as soon as possible. 
      </p>
    </div>
  </>
)

export default function Contact() {
  const { isMobile, loading, setLoading } = useAppContext();
  const [ msgSent, setMsgSent ] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset 
  } = useForm<any>();
  const inputRef = useRef(null);

  const onSubmit: SubmitHandler<TContactFormData> = async (data) => {
    setLoading(true);
    
    const response: IContactUsServerResponse = await sendContactUsForm(data);
    console.log(response)
    
    setMsgSent(true);
    reset();

    setLoading(false);
  }



  return (
    <Wrapper>
      <div className={styles.app__contact__wrapper}>
        <div className="app__contact__header">
          <span className={styles.app__contact__header__color}>Contact</span>
          <span
            className={`${styles.app__contact__header__color} ${styles.diff}`}
          >
            Us
          </span>
        </div>

        <div className={styles.app__contact__form__wrapper}>
          <div className={styles.app__contact__left__form}>
            <span className={styles.app__contact__left__form__header}>
              Get in touch with us
            </span>
            <FooterLinks width="100%" style={{maxWidth: '100%'}} alignItems="start">
              <p style={isMobile 
                ? {fontWeight: 500, fontSize: '1rem'}
                : {fontWeight: 500, fontSize: '1.25rem'}}
              >
                Also check out the section{" "}
                <Link href={'/faq'} className="">"Frequently asked questions"</Link>. <br /> 
                {/* and{" "} <Link href={'/career-blog'}>"Career Blogs"</Link>.  */}
                Maybe your question is already answered there.
              </p>
            </FooterLinks>
            <div className={styles.app__contact__form__social}>
              <span className={styles.app__contact__left__form__header__second}>
                Social Media
              </span>
              <SocialMedia gap={"27px"}>
                <Link href={'https://www.instagram.com/growing.abroad/'} target="_blank">
                  <Image
                    className={styles.app__contact__form__social__icon}
                    src={InstagramIcon}
                    alt="instagram icon"
                    height={60}
                    width={60}
                  />
                </Link>

                <Link href={'https://discord.gg/mYMBQJJaQr'} target="_blank">
                  <Image
                    className={styles.app__contact__form__social__icon}
                    src={DiscordIcon.src}
                    alt="discord icon"
                    height={60}
                    width={60}
                  />
                </Link>

                <Link href={'https://www.tiktok.com/@growing.abroad'} target="_blank">
                  <Image
                    className={styles.app__contact__form__social__icon}
                    src={TikTokIcon}
                    alt="tiktok icon"
                    height={60}
                    width={60}
                  />
                </Link>

                <Link href={'https://www.youtube.com/@growing.abroad'} target="_blank">
                  <Image
                    className={styles.app__contact__form__social__icon}
                    src={YoutubeIcon}
                    alt="youtube icon"
                    height={60}
                    width={60}
                  />
                </Link>

                <Link href={'https://www.linkedin.com/company/growing.abroad/'} target="_blank">
                  <Image
                    className={styles.app__contact__form__social__icon}
                    src={LinkedInIcon}
                    alt="linkedin icon"
                    height={60}
                    width={60}
                  />
                </Link>
              
              </SocialMedia>
            </div>
          </div>
          <div className={styles.app__contact__right__form}>
            {msgSent ? <MsgSent /> : <ContactForm  control={control} errors={errors} handleSubmit={handleSubmit} onSubmit={onSubmit} register={register} />}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
