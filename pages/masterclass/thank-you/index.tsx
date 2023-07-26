import { PageLayout } from "@/components";
import { ReactElement, useState } from "react";
import { ChosenHeader } from "@/components/PageLayout/PageLayout";
import useCountdownTimer from "@/hooks/useCountdownTimer";
import * as S from "../../../styles/masterclass";
import Image from "next/image";
import closeMail from "@assets/pages/masterclass/icons/closeMail.svg";
import openMail from "@assets/pages/masterclass/icons/openMail.svg";
import clickMail from "@assets/pages/masterclass/icons/clickMail.svg";

export default function MasterclassTankYou() {
  const timer = useCountdownTimer(10);
  const infoData = [
    {
      title: "Check your E Mail Inbox",
      content:
        "Go to the Inbox of the email Address you used to sign up on the previous page. Also check your SPAM Folder.",
      image: closeMail.src,
      width: 32,
      height: 37,
    },
    {
      title: "Open the confirmation Mail",
      content:
        "Find the email sent by us. It has the subject line: “Please confirm your Email Address” and is sent from team@growingabroad.de",
      image: openMail.src,
      width: 32,
      height: 37,
    },
    {
      title: "Click on the confirmation link",
      content:
        "Once you click on the link in the email, your address is confirmed and you will be redirected to the workshop immediately.",
      image: clickMail.src,
      width: 20,
      height: 37,
    },
  ];


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
        <S.WhiteTitle>Please confirm your E-Mail Address</S.WhiteTitle>
        <S.CountdownTimerSubTitle>
          Thank you for signing up. Just confirm your E-Mail Address before you
          can watch the free Masterclass "How to land your dream job in
          Germanyy"
        </S.CountdownTimerSubTitle>
        <S.VideoContainer>
          <S.VideoIframe2
            src="https://player.vimeo.com/video/846655227?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            allow="autoplay; fullscreen; picture-in-picture"
            title="Masterclass TYV"
            width="100%" height="438px" 
          ></S.VideoIframe2>
        </S.VideoContainer>

       
        <div>
          {!timer.completed ? (
            <>
              {formatTime(timer.seconds)}
              <S.ThankyouItems>
                {infoData.map((item, idx) => (
                  <S.ThankyouItem key={idx}>
                    <S.ContainerIcon>
                      <Image
                        src={item.image}
                        alt="Icon"
                        width={item.width}
                        height={item.height}
                      />
                    </S.ContainerIcon>
                    <S.ThankyouItemsTitle>{item.title}</S.ThankyouItemsTitle>
                    <S.ThankyouItemsText>{item.content}</S.ThankyouItemsText>
                  </S.ThankyouItem>
                ))}
              </S.ThankyouItems>
            </>
          ) : (
            <S.TextEmail>
              Please check your E Mail Inbox. If you cannot find the Mail also
              check your SPAM folder. If you have trouble finding the mail
              contact us on team@growingabroad.de
            </S.TextEmail>
          )}
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
