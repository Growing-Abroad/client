import * as S from "./styles"
import gaCoaches from '@assets/Photos-Main-Page/ga-coaches.png'
import Image from 'next/image'

function CallToAction() {
  // const { t } = useTranslation();

  return (
    <S.BackgroudCTA>
      <S.Container>
        <section className="left-side" >
          <h1>
            Get your Dream Job in
            <span className="verde"> Germany</span>
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