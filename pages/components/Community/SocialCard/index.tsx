import useAppContext from '@/hooks/useAppContext';
import { ISocial } from '@/utils/socials';
import Image from 'next/image';
import { MyCounter, Social, SocialText } from './styles';
import {
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
  useCallback,
} from 'react';
import ScrollTrigger from 'react-scroll-trigger';

export default function SocialCard(social: ISocial) {
  const [counterOn, setCounterOn] = useState(false);

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
            width={isMobile ? 60 : 120}
            height={isMobile ? 60 : 120}
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
