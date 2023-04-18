import React, { RefObject, useEffect, useRef } from "react";

import { StyledVideo } from "./styles";
import { DefaultTheme, ThemedStyledFunction } from "styled-components";

interface Props
  extends React.DetailedHTMLProps<
    React.VideoHTMLAttributes<HTMLVideoElement>,
    HTMLVideoElement
  > {
  src: string;
  type: string;
  isPlaying: boolean;
  // ref: RefObject<HTMLVideoElement>;
}

function VideoComponent({ src, type, isPlaying, ...rest }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current?.play();
      return;
    }

    videoRef.current?.pause();
  }, [isPlaying]);

  return (
    <StyledVideo {...rest} ref={videoRef}>
      <source src={src} type={type} />
    </StyledVideo>
  );
}

export default VideoComponent;
