import { PageLayout } from "@/components";
import { ReactElement } from "react";
import { ChosenHeader } from "@/components/PageLayout/PageLayout";
import * as S from "../../styles/masterclass";
import UanAndManu from "@/../public/assets/masterclassDesktop.png";
import { Item } from "@/utils/mock-ups/masterclass";
import Star from "@assets/pages/masterclass/star.svg";
import Image from "next/image";
import { useRouter } from "next/router"

export default function Masterclass() {
  const router = useRouter()

  return (
    <>
      <S.ContainerFunnelPagesContainer>
        <S.MasterlassTitle>
          How to land your Dream Job In{" "}
          <S.MasterlassSpan>Germany</S.MasterlassSpan> or{" "}
          <S.MasterlassSpan>Europe</S.MasterlassSpan> now
        </S.MasterlassTitle>
        <S.ContentItems>
          <S.Container>
            <S.ContentItem>
              {Item.map((item, idx) => (
                <S.MasterclassItem key={idx}>
                  <Image src={Star} alt="Star Icon" />
                  <S.ItemText>{item.title}</S.ItemText>
                </S.MasterclassItem>
              ))}
            </S.ContentItem>
            <S.UIStdButton onClick={() => router.push("/masterclass/login")}>
              FREE Masterclass - Sign Up Now
            </S.UIStdButton>
          </S.Container>
          <S.ImageUanManu src={UanAndManu} alt="Uan and Manu" />
        </S.ContentItems>
      </S.ContainerFunnelPagesContainer>
    </>
  );
}

Masterclass.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout
      chosenHeader={ChosenHeader.FOR_MASTERCLASS}
      hideBlueSection={true}
    >
      {page}
    </PageLayout>
  );
};
