import * as S from "./styles"
import gaCoaches from '@/../public/assets/main-page/german-coaches.svg';
import heroSectionMask from '@/../public/assets/main-page/hero-section-mask.svg';
import Image from 'next/image'
import { useEffect, useState } from "react"
import { useIntl} from "react-intl";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

function CallToAction() {
  const [currentName, setCurrentName] = useState<string>(' Germany');
  const [currentComponent, setCurrentComponent] = useState(
    <div key={'first'} className="title-change"> {currentName}</div>
  );
  const intl = useIntl();

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
          <S.CtaButton>
            <FontAwesomeIcon icon={faPlay} size='lg' />
           <span>Watch Free Masterclass</span>
          </S.CtaButton>
        </section>
        <section className="right-side">
          <div className="right-side-img-container">
            <div className="colored-divs">
              <div className="yellow"></div>
              <div className="blue"></div>
            </div>
            <Image src={gaCoaches} alt="growing abroad coaches" height={500} />
          </div>
        </section>
      </S.Container>
      <Image className="styled-div" src={heroSectionMask} alt="styled div" />
      <div className="white-line"></div>
    </S.BackgroudCTA>
  )
}

export default CallToAction