import * as S from "./styles"
import gaCoaches from '@/../public/assets/main-page/german-coaches.svg';
import heroSectionMask from '@/../public/assets/main-page/hero-section-mask.svg';
import Image from 'next/image'
import { useEffect, useState } from "react"
import { useIntl} from "react-intl";
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { useWindowSize } from "@/hooks/useWindowSize";
import StdButton from "@/components/generics/StdButton/StdButton";

function CallToAction() {
  const [currentName, setCurrentName] = useState<string>(' Germany');
  const [currentComponent, setCurrentComponent] = useState(
    <div key={'first'} className="title-change"> {currentName}</div>
  );
  const intl = useIntl();
  const [size] = useWindowSize()

  const t = (id: string): string => {
    return intl.formatMessage({id})
  };

  useEffect(() => {
    setTimeout(() => {
      const newName = currentName === t("page.home.callToAction.germany") ? t("page.home.callToAction.europe") : t("page.home.callToAction.germany")
      setCurrentName(newName);
      setCurrentComponent(<div key={currentName} className={'title-change'}> {currentName}</div>)
    }, 3000)
  }, [currentComponent])

  return (
    <S.BackgroudCTA>
      <S.Container>
        <section className="left-side" >
          <h1>
            <>
              {t("page.home.callToAction")} 
              {currentComponent}
            </>
          </h1>
          <StdButton icon={faPlay} >
            Watch Free Masterclass
          </StdButton>
        </section>
        <section className="right-side">
          <div className="right-side-img-container">
            <div className="colored-divs">
              <div className="yellow"></div>
              <div className="blue"></div>
            </div>
            <Image src={gaCoaches} alt="growing abroad coaches" width={616} style={{objectFit: 'contain'}} />
          </div>
        </section>
      </S.Container>
      <div className="styled-div" >
        <Image src={heroSectionMask} alt="styled mask" width={size} />
        <div className="white-line"></div>
      </div>
    </S.BackgroudCTA>
  )
}

export default CallToAction