import { PageLayout } from "@/components";
import { ReactElement } from "react";
import { ChosenHeader } from "@/components/PageLayout/PageLayout";
import * as S from "../../../styles/masterclass";

export default function MasterclassTankYou() {
  return (
    <>
      <S.ContainerFunnelPagesContainer style={{justifyContent: "flex-start", minHeight: "calc(100vh - 76px)"}}>
        <S.FreeMasterClassTitle>
          Free Masterclass <br />
          <S.FreeMasterClassTitleSpan>
            "How to land your dream job in <span>Germany</span>"
          </S.FreeMasterClassTitleSpan>
        </S.FreeMasterClassTitle>
        <S.VideoContainer>
          <S.VideoIframe
            src="https://player.vimeo.com/video/846161349?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            allow="autoplay; fullscreen; picture-in-picture"
            title='Free Masterclass "How to land your dream job in Germany or Europe"'
            width="100%"
            height="438px"
          ></S.VideoIframe>
        </S.VideoContainer>
        <S.UILinkFreeMasterClass href="/masterclass/login">
          <S.UIStdButton>Get Instant Access</S.UIStdButton>
        </S.UILinkFreeMasterClass>
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
