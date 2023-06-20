import * as S from "../../../../styles/online-course/components/CTActions/styles";
import gaCoaches from "@assets/new-cta-img.jpg";
import Image from "next/image";
import useAppContext from "@/hooks/useAppContext";
import { TextChanger } from "components/TextChanger";
import { useIntl } from "react-intl";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

interface ICTActionProps {
  isCandidates?: boolean
  hasSubtitle?: boolean
}

function CTAction({isCandidates=false, hasSubtitle=true}: ICTActionProps) {
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
    <S.BackgroudCTA className={`${isCandidates && 'candidate'}`} isMobile={isMobile} style={{ maxHeight: `${isMobile && !isCandidates ? "830px" : ""}` }}>
      <S.BannerMainContainer id="" className={`${isCandidates ? "candidates" : ""}`}>
        <section className="left-side">
          <h1>
            {t(isCandidates ? "page.home.callToAction" : "page.sales.callToAction") + " "}
            <TextChanger texts={texts} duration={3000} />
          </h1>
          {hasSubtitle &&
            <S.SubTitle isMobile={isMobile}>
              Build a successful career abroad with this amazing ONLINE COURSE
            </S.SubTitle>
          }

          {isCandidates ?
          <S.StdVideoCustom icon={faPlay}>Watch Free Masterclass</S.StdVideoCustom> :
          <S.StdButtonCustom>Buy Online Course Now</S.StdButtonCustom>
          }

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
