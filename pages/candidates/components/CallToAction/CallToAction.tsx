import * as S from "../../../../styles/candidates/components/CallToAction/index.styles";
import gaCoaches from "@/../public/assets/new-cta-img.webp";
import Image from "next/image";
import { useIntl } from "react-intl";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import StdButton from "@/components/generics/StdButton/StdButton";
import { TextChanger } from "components/TextChanger";

function CallToAction() {
  const intl = useIntl();

  const t = (id: string): string => {
    return intl.formatMessage({ id });
  };

  const texts = [
    "page.home.callToAction.germany",
    "page.home.callToAction.europe",
  ]

  return (
    <S.BackgroudCTA>
      <S.Container>
        <div className="left-side">
          <h1>
            <>
              {t("page.home.callToAction") + " "}
              <TextChanger texts={texts} duration={3000} />
            </>
          </h1>
          <StdButton
            icon={faPlay}
            style={{ textTransform: "uppercase", fontWeight: "800" }}
          >
            Watch Free Masterclass
          </StdButton>
        </div>
        <div className="right-side">
          <div className="right-side-img-container">
            <Image
              src={gaCoaches}
              alt="growing abroad coaches"
              width={616}
              style={{ objectFit: "contain", border: "1px solid transparent", }}
            />
          </div>
        </div>
      </S.Container>
      {/* <div className="cta-mask">
        <Image
          src={isMobile ? ctaMaskMobile : ctaMask}
          alt="styled mask"
          width={width}
        />
        <div className="white-line"></div>
      </div> */}
    </S.BackgroudCTA>
  );
}

export default CallToAction;
