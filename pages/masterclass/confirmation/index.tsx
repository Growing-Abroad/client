import FunnelPagesContainer from "components/FunnelPagesContainer";
import notebooimg from "@/../public/assets/images/notebook-img.png";
import * as S from "../../../styles/masterclass";
import mousePointer from "@assets/pages/masterclass/icons/mousePointer.svg";
import Image from "next/image";
import { PageLayout } from "@/components";
import { ChosenHeader } from "@/components/PageLayout/PageLayout";
import { ReactElement } from "react";


export default function MasterclassConfirmation({ canAccess }: any) {
  return (
    <>
      {canAccess !== null ? (
        <FunnelPagesContainer>
          <S.WhiteTitle style={{ marginTop: 0 }}>
            You did it! You have successfully <br /> confirmed your E-mail.
          </S.WhiteTitle>
          <S.UIParagraph>
            Click the button below to watch the free Masterclass on <br /> "How
            to land your dream job in Germany"
          </S.UIParagraph>
          <S.UILink href="/masterclass/free-masterclass">
            <S.UIStdButton>
              <Image src={mousePointer} alt="Icon Mouse" height={19} />
              Watch the Masterclass Now
            </S.UIStdButton>
          </S.UILink>
          <S.UIImage
            src={notebooimg.src}
            alt="two guys cheering"
            height={400}
            width={718}
          />
        </FunnelPagesContainer>
      ) : (
        <S.WhiteTitle>You need to register first.!</S.WhiteTitle>
      )}
    </>
  );
}


MasterclassConfirmation.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout
      chosenHeader={ChosenHeader.FOR_MASTERCLASS}
      hideBlueSection={true}
    >
      {page}
    </PageLayout>
  );
};
