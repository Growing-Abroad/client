import { PageLayout } from "@/components";
import { ReactElement } from "react";
import { ChosenHeader } from "@/components/PageLayout/PageLayout";
import * as S from "../../styles/masterclass";
import UanAndManu from "@/../public/assets/masterclassDesktop.png";
import { Item } from "@/utils/mock-ups/masterclass";
import Star from "@assets/pages/masterclass/star.svg";
import Image from "next/image";
import Link from "next/link";

export default function Masterclass() {

  return (
    <>
      <S.ContainerFunnelPagesContainer>
        <S.MasterlassTitle>
          How to land your Dream Job In{" "}
          <S.MasterlassSpan2>Germany</S.MasterlassSpan2> or{" "}
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

            <Link href="/masterclass/login">
              <S.UIStdButton>FREE Masterclass - Sign Up Now</S.UIStdButton>
            </Link>
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
