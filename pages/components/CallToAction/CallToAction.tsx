import * as S from "./styles"
import gaCoaches from '@assets/Photos-Main-Page/ga-coaches.png'
import Image from 'next/image'
import { useEffect, useState } from "react"


function CallToAction() {
  // const { t } = useTranslation();
  const [currentName, setCurrentName] = useState<string>(' Germany');
  const [currentComponent, setCurrentComponent] = useState(
    <span key={'first'} className="verde"> {currentName}</span>
  );

  useEffect(() => {
    setTimeout(() => {
      const newName = currentName === ' Germany' ? ' Europe' : ' Germany'
      setCurrentName(newName);
      setCurrentComponent(<span key={currentName} className={'verde'}> {currentName}</span>)
    }, 3000)
  }, [currentComponent])

  return (
    <S.BackgroudCTA>
      <S.Container>
        <section className="left-side" >
          <h1>
            Get your Dream Job in 
            {currentComponent}
          </h1>
          <S.CtaButton>Watch free masterclass</S.CtaButton>
        </section>
        <section className="right-side">
          <div className="right-side-img-container">
            <Image src={gaCoaches} alt="growing abroad coaches" height={500} />
          </div>
        </section>
      </S.Container>
    </S.BackgroudCTA>
  )
}

export default CallToAction