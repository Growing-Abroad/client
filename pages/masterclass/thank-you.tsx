import { PageLayout } from "@/components";
import { ReactElement, useCallback, useState } from "react";
import { ChosenHeader } from "@/components/PageLayout/PageLayout";
import { useRouter } from "next/router";
import useCountdownTimer from "@/hooks/useCountdownTimer";
import * as S from "../../styles/masterclass";
import UanAndManu from "@assets/pages/masterclass/videoBg.jpg";
import VideoComponent from "@/components/VideoComponent";
import YoutubeplayButton from "public/assets/youtube-play-btn.jpg";
import Image from "next/image";
import closeMail from "@assets/pages/masterclass/icons/closeMail.svg";
import openMail from "@assets/pages/masterclass/icons/openMail.svg";
import clickMail from "@assets/pages/masterclass/icons/clickMail.svg";

export default function MasterclassTankYou() {
  const router = useRouter();
  const timer = useCountdownTimer(10);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const infoData = [
    {
      title: "Check your E Mail Inbox",
      content: "Go to the Inbox of the email Address you used to sign up on the previous page. Also check your SPAM Folder.",
      image: closeMail.src,
      width: 32,
      height: 37,
    },
    {
      title: "Open the confirmation Mail",
      content: "Find the email sent by us. It has the subject line: “Please confirm your Email Address” and is sent from team@growingabroad.de",
      image: openMail.src,
      width: 32,
      height: 37
    },
    {
      title: "Click on the confirmation link",
      content: "Once you click on the link in the email, your address is confirmed and you will be redirected to the workshop immediately.",
      image: clickMail.src,
      width: 20,
      height: 37
    }
  ]
  const handlePause = useCallback(() => {
    if (isVideoPlaying) {
      setIsVideoPlaying(false);
    }
  }, [isVideoPlaying, setIsVideoPlaying]);

  const handlePlay = useCallback(() => {
    setIsVideoPlaying(true);
  }, [setIsVideoPlaying]);


  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return (
      <>
        <S.CountdownTimerContainer>
          <div>
            {minutes.toString().padStart(2, "0")}
            <S.CountdownTimerText>minutes</S.CountdownTimerText>
          </div>
          <div>
            {seconds.toString().padStart(2, "0")}
            <S.CountdownTimerText>seconds</S.CountdownTimerText>
          </div>
        </S.CountdownTimerContainer>
      </>
    );
  };

  return (
    <>
      <S.ContainerFunnelPagesContainer>
        <S.CountdownTimerTitle>
          Please confirm your E-Mail Address
        </S.CountdownTimerTitle>
        <S.CountdownTimerSubTitle>
          Thank you for signing up. Just confirm your E-Mail Address before you
          can watch the free Masterclass "How to land your dream job in Germanyy"
        </S.CountdownTimerSubTitle>
        <S.ImageContainerVideo onClick={handlePause}>
          {!isVideoPlaying ? (
            <S.ImageBackgroundVideo
              width={1128}
              height={628}
              src={UanAndManu}
              alt="uan and manu"
              
            ></S.ImageBackgroundVideo>
          ) : (
            <VideoComponent
              isPlaying={isVideoPlaying}
              src="../assets/videos/Masterclass_video.mp4"
              type="video/mp4"
              controls
            />
          )}
          {!isVideoPlaying && (
            <S.PlayerContainer>
              <S.Player onClick={handlePlay} src={YoutubeplayButton}></S.Player>
            </S.PlayerContainer>
          )}
        </S.ImageContainerVideo>
        <div>{!timer.completed ? (
          <>
            {formatTime(timer.seconds)}
            <S.ThankyouItems>
              {infoData.map((item, idx) => (
                <S.ThankyouItem key={idx}>
                  <S.ContainerIcon>
                    <Image src={item.image} alt="Icon" width={item.width} height={item.height} />
                  </S.ContainerIcon>
                  <S.ThankyouItemsTitle>{item.title}</S.ThankyouItemsTitle>
                  <S.ThankyouItemsText>{item.content}</S.ThankyouItemsText>
                </S.ThankyouItem>
              ))}
            </S.ThankyouItems>
          </>
        ) : (<S.TextEmail>Please check your E Mail Inbox. If you cannot find the Mail also check your SPAM folder.
          If you have trouble finding the mail contact us on team@growingabroad.de</S.TextEmail>)}
        </div>

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
