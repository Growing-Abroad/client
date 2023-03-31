import useAppContext from '@/hooks/useAppContext';
import { ISocial } from '@/utils/socials';
import Image from 'next/image';
import { MyCounter, Social, SocialText } from './styles';
import { useState, useCallback } from 'react';
import ScrollTrigger from 'react-scroll-trigger';

interface ImageSizeProps {
  mobile: number;
  desktop: number;
}

export default function SocialCard(social: ISocial) {
  const [counterOn, setCounterOn] = useState(false);

  const imageSize: ImageSizeProps = {
    desktop: 120,
    mobile: 30,
  };

  const { isMobile } = useAppContext();

  const onEnter = useCallback(() => {
    setCounterOn(true);
  }, [setCounterOn]);

  const onExit = useCallback(() => {
    setCounterOn(false);
  }, [setCounterOn]);

  return (
    <ScrollTrigger onEnter={onEnter} onExit={onExit}>
      <Social>
        <a href={social.socialLink} target="_blank" rel="noreferrer">
          <Image
            src={social.source}
            alt={social.name}
            width={imageSize[isMobile ? 'mobile' : 'desktop']}
            height={imageSize[isMobile ? 'mobile' : 'desktop']}
          />
        </a>
        <SocialText>
          <p>+ {counterOn ? <MyCounter end={social.followNumber} /> : '0'}</p>
          <span>{social.followType}</span>
        </SocialText>
      </Social>
    </ScrollTrigger>
  );
}
