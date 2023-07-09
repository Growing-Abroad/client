import * as S from "@/styles/pages-styles/candidates/CallToAction/index.styles";
import gaCoaches from "@assets/new-cta-img.jpg";
import Image from "next/image";
// import { useIntl } from "react-intl";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import StdButton from "@/components/generics/StdButton/StdButton";
import { TextChanger } from "components/TextChanger";
import useAppContext from "@/hooks/useAppContext";


function CallToAction() {
  
  const { isMobile } = useAppContext()
  // const intl = useIntl();

  // const t = (id: string): string => {
  //   return intl.formatMessage({ id });
  // };

  const texts = [
    "Germany",
    " Europe",
  ]

  return (
    <S.BackgroudCTA>
      <S.Container>
        <div className="left-side">
          <h1>
            <>
              {'Land your Dream Job in' + " "}
              <TextChanger texts={texts} />
            </>
          </h1>
          <StdButton
            icon={faPlay}
            style={{ textTransform: "uppercase", fontWeight: "800", fontSize: isMobile ? ".875rem" : "" }}
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
    </S.BackgroudCTA>
  );
}

export default CallToAction;
