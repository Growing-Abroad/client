import * as S from "./styles"
import uanHappy from '../../../../assets/Photos Main Page/Growing Abroad Uan happy_Canva.png'
import manuHappy from '../../../../assets/Photos Main Page/Growing Abroad Manu happy_Canva.png'

function CallToAction() {
  return (
    <S.BackgroudCTA>
      <S.Container>
        <section className="left-side" >
          <h1>Get your dream job in
            <span className="verde"> Germany </span>
            or
            <span className="azul"> Europe</span>
          </h1>
          <S.CtaButton>Watch free masterclass</S.CtaButton>
        </section>
        <section className="right-side">
          <div className="right-side-img-container">
            <img src={uanHappy} alt="" />
            <img className="to-right" src={manuHappy} alt="" />
          </div>
        </section>
      </S.Container>
    </S.BackgroudCTA>
  )
}

export default CallToAction