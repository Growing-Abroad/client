import * as S from "../../../../styles/online-course/components/CTActions/styles";
import gaCoaches from "@assets/new-cta-img.jpg";
import { TextChanger } from "components/TextChanger";
import { useRouter } from "next/router"
import { faPlay } from "@fortawesome/free-solid-svg-icons";

interface ICTActionProps {
  pageName: "jobs" | "sales" | "onlineCourses" | "candidates";
  titleIntl: string;
  subTitleIntl: string;
  buttonIntl: string;
  buttonURL?: string;
}

function CTAction({
  pageName,
  titleIntl,
  subTitleIntl,
  buttonIntl,
  buttonURL = "",
}: ICTActionProps) {

  const icon = pageName == "candidates" ? faPlay : "";
  const router = useRouter()

  const texts = [
    " Germany", //"page.home.callToAction.germany",
    " Europe", //"page.home.callToAction.europe",
  ];

  const hadleScroll = () => {
    if (pageName === "jobs" || buttonURL === "") {
      const sectionElement = document.getElementById("scroll-id");
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      }
    }else {
      router.push("https://growingabroad.myelopage.com/s/growingabroad/dream-job/payment")
    }
  };

  return (
    <S.BackgroudCTA pageName={pageName}>
      <S.BannerMainContainer pageName={pageName}>
        <S.LeftSide>
          <S.UIMainTitle pageName={pageName}>
            {titleIntl}{" "}
            <TextChanger texts={texts} duration={3000} />
          </S.UIMainTitle>

          <S.SubTitle>{subTitleIntl}</S.SubTitle>

          {/* <S.StdButtonCustom
            onClick={hadleScroll}
            icon={icon}
            pageName={pageName}
          >
            {buttonIntl}
          </S.StdButtonCustom> */}
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
