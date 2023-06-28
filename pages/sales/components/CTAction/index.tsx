import * as S from "../../../../styles/online-course/components/CTActions/styles";
import gaCoaches from "@assets/new-cta-img.jpg";
import { TextChanger } from "components/TextChanger";
import { useIntl } from "react-intl";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

interface ICTActionProps {
  pageName: "jobs" | "sales" | "onlineCourses" | "candidates";
  titleIntl: string;
  subTitleIntl: string;
  buttonIntl: string;
}

function CTAction({
  pageName,
  titleIntl,
  subTitleIntl,
  buttonIntl,
}: ICTActionProps) {
  const intl = useIntl();

  const t = (id: string): string => {
    if (id !== "") {
      return intl.formatMessage({ id });
    }
    return "";
  };

  const icon = pageName == "candidates" ? faPlay : "";

  const texts = [
    "page.home.callToAction.germany",
    "page.home.callToAction.europe",
  ];

  const hadleScroll = () => {
    if (pageName === "jobs") {
      const sectionElement = document.getElementById("form-jobs");
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <S.BackgroudCTA pageName={pageName}>
      <S.BannerMainContainer pageName={pageName}>
        <S.LeftSide>
          <S.UIMainTitle pageName={pageName}>
            {t(titleIntl)}
            <TextChanger texts={texts} duration={3000} />
          </S.UIMainTitle>

          <S.SubTitle>{t(subTitleIntl)}</S.SubTitle>

          <S.StdButtonCustom
            onClick={hadleScroll}
            icon={icon}
            pageName={pageName}
          >
            {t(buttonIntl)}
          </S.StdButtonCustom>
        </S.LeftSide>

        <S.RightSide pageName={pageName}>
          <S.MainImage
            src={gaCoaches}
            alt="growing abroad banner"
            width={616}
            priority
            quality={100}
          />
        </S.RightSide>
      </S.BannerMainContainer>
    </S.BackgroudCTA>
  );
}

export default CTAction;
