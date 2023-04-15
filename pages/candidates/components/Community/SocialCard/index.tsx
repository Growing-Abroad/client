import { useCallback, useEffect, useState } from "react";
import useAppContext from "@/hooks/useAppContext";
import { ISocial } from "@/utils/socials";
import Image from "next/image";
import {
  Social,
  SocialText,
  MyCounter,
} from "@/../styles/candidates/components/Community/SocialCard/index.styles";

interface ImageSizeProps {
  mobile: number;
  desktop: number;
}

interface Props extends ISocial {
  counterOn: boolean;
}

export default function SocialCard(props: Props) {
  const imageSize: ImageSizeProps = {
    desktop: 120,
    mobile: 30,
  };

  const { isMobile } = useAppContext();

  return (
    <Social>
      <a href={props.socialLink} target="_blank" rel="noreferrer">
        <Image
          src={props.source}
          alt={props.name}
          width={imageSize[isMobile ? "mobile" : "desktop"]}
          height={imageSize[isMobile ? "mobile" : "desktop"]}
        />
      </a>
      <SocialText>
        <p>+{props.counterOn ? <MyCounter end={props.followNumber} /> : "0"}</p>
        <span>{props.followType}</span>
      </SocialText>
    </Social>
  );
}
