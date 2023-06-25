import * as S from "../../../../styles/online-course/components/CTActions/styles";
import backgroundJobs from "@assets/background-jobs.png";
import backgroundJobsMobile from "@assets/pages/jobs/jobs-hero-bg-mobile.png";
import backgroundJobsUltra from "@assets/pages/jobs/jobs-hero-bg-ultra-wide.png";
import gaCoaches from "@assets/new-cta-img.jpg";
import Image from "next/image";
import useAppContext from "@/hooks/useAppContext";
import { TextChanger } from "components/TextChanger";
import { useIntl } from "react-intl";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

interface ICTActionProps {
  isCandidates?: boolean;
  hasSubtitle?: boolean;
  callActionText?: string;
  isJobpage?: boolean;
}

function CTAction({
  isCandidates = false,
  hasSubtitle = true,
  callActionText = "Buy Online Course Now",
  isJobpage = false,
}: ICTActionProps) {
  const { isMobile } = useAppContext();

  const intl = useIntl();

  const t = (id: string): string => {
    return intl.formatMessage({ id });
  };

  const texts = [
    "page.home.callToAction.germany",
    "page.home.callToAction.europe",
  ];

  function getBgImg() {
  
    if (isJobpage) {
      return isMobile ? backgroundJobsMobile.src : backgroundJobsUltra.src
    }
    return '';
  }

  return (
    <S.BackgroudCTA
      className={`${isCandidates && "candidate"} ${isJobpage && "job-page"}`}
      isMobile={isMobile}
      style={!isCandidates ? { maxHeight: `${isMobile ? "380px" : "600px"}` }:{}}
      backgroundImg={getBgImg()}
    >
      <S.BannerMainContainer
        isJobpage={isJobpage}
        id=""
        className={`${isCandidates ? "candidates" : ""}`}
      >
        <section className="left-side">
          <h1 className={isJobpage ? "job-page" : ""}>
            {t(
              isCandidates
                ? "page.home.callToAction"
                : "page.sales.callToAction"
            ) + " "}
            <TextChanger texts={texts} duration={3000} />
          </h1>
          {hasSubtitle && (
            <S.SubTitle isMobile={isMobile}>
              Build a successful career abroad with this amazing ONLINE COURSE
            </S.SubTitle>
          )}

          {isCandidates ? (
            <S.StdVideoCustom icon={faPlay}>
              Watch Free Masterclass
            </S.StdVideoCustom>
          ) : (
            <S.StdButtonCustom>{callActionText}</S.StdButtonCustom>
          )}
        </section>
        {isCandidates && (
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
        )}
      </S.BannerMainContainer>
    </S.BackgroudCTA>
  );
}

export default CTAction;
