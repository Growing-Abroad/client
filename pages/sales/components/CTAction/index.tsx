import * as S from "../../../../styles/online-course/components/CTActions/styles";
import gaCoaches from "@assets/new-cta-img.jpg";
import Image from "next/image";
import useAppContext from "@/hooks/useAppContext";
import { TextChanger } from "components/TextChanger";
import { useIntl } from "react-intl";

function CTAction() {
  const { isMobile } = useAppContext();

  const intl = useIntl()

  const t = (id: string): string => {
    return intl.formatMessage({ id });
  };


  const texts = [
    "page.home.callToAction.germany",
    "page.home.callToAction.europe",
  ]

  return (
    <S.BackgroudCTA isMobile={isMobile} style={{ maxHeight: `${isMobile ? "830px" : ""}` }}>
      <S.BannerMainContainer id="">
        <section className="left-side">
          <h1>
            {t("page.sales.callToAction") + " "}
            <TextChanger texts={texts} />
          </h1>
          <S.SubTitle isMobile={isMobile}>
            Build a successful career abroad with this amazing ONLINE COURSE
          </S.SubTitle>
          <S.StdButtonCustom>Buy Online Course Now</S.StdButtonCustom>
        </section>
        <section className="right-side">
          <Image
            src={gaCoaches}
            alt="growing abroad coaches"
            width={616}
            priority
            style={{ objectFit: "contain", border: "1px solid transparent" }}
            quality={100}
          />
        </section>
      </S.BannerMainContainer>
    </S.BackgroudCTA>
  );
}

export default CTAction;
