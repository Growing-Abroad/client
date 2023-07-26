import { PageLayout } from "@/components";
import { ReactElement, useState, useRef, useEffect } from "react";
import { ChosenHeader } from "@/components/PageLayout/PageLayout";
import * as S from "../../../styles/masterclass";
import VimeoPlayer from '@vimeo/player';

export default function MasterclassTankYou() {
  const playerRef = useRef<VimeoPlayer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const videoId = 846161349; 

    const vimeoPlayer = new VimeoPlayer('vimeo-player', {
      id: videoId,
      loop: false,
    });
    playerRef.current = vimeoPlayer;
    return () => {
      if (playerRef.current) {
        playerRef.current.destroy().catch((error) => console.error(error));
      }
    };
  }, []);

  const handlePlay = () => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.pause();
        setIsPlaying(false)
      } else {
        playerRef.current.play();
        setIsPlaying(true)
      }
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isPlaying && seconds < 1310) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isPlaying]);



  return (
    <>
      <S.ContainerFunnelPagesContainer style={{justifyContent: "flex-start", minHeight: "calc(100vh - 76px)"}}>
        <S.FreeMasterClassTitle>
          Free Masterclass <br />
          <S.FreeMasterClassTitleSpan>
            "How to land your dream job in <span>Germany</span>"
          </S.FreeMasterClassTitleSpan>
        </S.FreeMasterClassTitle>
        <S.VideoContainer onClick={handlePlay}>
          <S.VideoIframe id="vimeo-player" />
 
        </S.VideoContainer>
        {seconds >= 1310 &&
          <S.UILinkFreeMasterClass href="/masterclass/login">
            <S.UIStdButton>Get Instant Access</S.UIStdButton>
          </S.UILinkFreeMasterClass>
        }

      </S.ContainerFunnelPagesContainer>
    </>
  );
}

MasterclassTankYou.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout
      chosenHeader={ChosenHeader.FOR_MASTERCLASS}
      hideBlueSection={true}
    >
      {page}
    </PageLayout>
  );
};
