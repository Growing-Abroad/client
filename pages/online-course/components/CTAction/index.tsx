import * as S from "../../../../styles/online-course/components/CTActions/styles";
import gaCoaches from "@assets/new-cta-img.jpg";
import goCoachesMobile from "@/../public/assets/image-mainHero-mobile.png";
import Image from "next/image";
import useAppContext from "@/hooks/useAppContext";
import { useIntl } from "react-intl";
import { TextChanger } from "components/TextChanger";

function CTAction() {
  const { isMobile } = useAppContext();

  const imageSource = isMobile ? goCoachesMobile : gaCoaches;

  const intl = useIntl();

  const t = (id: string): string => {
    return intl.formatMessage({ id });
  };

  const texts = [
    "page.home.callToAction.germany",
    "page.home.callToAction.europe",
  ];

  const onlineCourseCTARightSideResponsivity = {
    marginTop: isMobile ? '1.5rem' : '3.5rem'
  }

  return (
    <S.BackgroudCTA isMobile={isMobile}>
      <S.BannerMainContainer>
        <section className="left-side">
          <h1>
            {t("page.sales.callToAction") + " "}
            <TextChanger texts={texts} duration={3000} />
          </h1>
          <S.SubTitle isMobile={isMobile}>
            Build a successful career abroad with this amazing ONLINE COURSE
          </S.SubTitle>
          <S.StdButtonCustom>Buy Online Course Now</S.StdButtonCustom>
        </section>
        <section className="right-side" style={{ marginTop: '1.5rem'}}>
            <Image
              src={imageSource}
              alt="growing abroad coaches"
              width={616}
              style={{ objectFit: "contain", border: "1px solid transparent" }}
              priority
              quality={100}
            />
          {/* </div> */}
        </section>
      </S.BannerMainContainer>
    </S.BackgroudCTA>
  );
}

export default CTAction;
