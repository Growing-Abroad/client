import * as S from "./styles"
import gaCoaches from '@/../public/assets/main-page/cta-img.svg';
import gaCoachesMobile from '@/../public/assets/main-page/cta-img-mobile.svg';
import ctaMask from '@/../public/assets/main-page/hero-section-mask.svg';import ctaMaskMobile from '@/../public/assets/main-page/hero-section-mask.svg';
import Image from 'next/image'
import { useEffect, useState } from "react"
import { useIntl} from "react-intl";
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import StdButton from "@/components/generics/StdButton/StdButton";
import useAppContext from "@/hooks/useAppContext";

function CallToAction() {
  const {isMobile} = useAppContext();
  const [currentName, setCurrentName] = useState<string>(' Germany');
  const [currentComponent, setCurrentComponent] = useState(
    <div key={'first'} className="title-change"> {currentName}</div>
  );
  const intl = useIntl();
  const {windowSize: {width}} = useAppContext()

  const t = (id: string): string => {
    return intl.formatMessage({id})
  };

  useEffect(() => {
    setTimeout(() => {
      const newName = currentName === t("page.home.callToAction.germany") ? t("page.home.callToAction.europe") : t("page.home.callToAction.germany")
      setCurrentName(newName);

      const newComponent = <div key={currentName} className={'title-change'} > {currentName}</div>

      setCurrentComponent(newComponent)
    }, 3000)
  }, [currentComponent])

  return (
    <S.BackgroudCTA>
      <S.Container>
        <section className="left-side" >
          <h1>
            <>
              {t("page.home.callToAction") + " "} 
              {currentComponent}
            </>
          </h1>
          <StdButton icon={faPlay} >
            Watch Free Masterclass
          </StdButton>
        </section>
        <section className="right-side">
          <div className="right-side-img-container">
            <Image src={gaCoaches} alt="growing abroad coaches" width={616} style={{objectFit: 'contain'}} />
          </div>
        </section>
      </S.Container>
      <div className="cta-mask" >
        <Image src={isMobile ? ctaMaskMobile : ctaMask} alt="styled mask" width={width} />
        <div className="white-line"></div>
      </div>
    </S.BackgroudCTA>
  )
}

export default CallToAction