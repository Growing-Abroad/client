import * as S from "./styles"
import uanHappy from '../../../../assets/Photos Main Page/Growing Abroad Uan happy_Canva.png'
import manuHappy from '../../../../assets/Photos Main Page/Growing Abroad Manu happy_Canva.png'

function CallToAction() {
    return(
        <S.Container>
            <section className="left-side">
                <h1>Get your dream job in 
                <span className="verde"> Germany </span>
                or 
                <span className="azul"> Europe</span>
                </h1>
                <button>Watch free masterclass</button>
            </section>
            <section className="right-side">
                <img src={uanHappy} alt="" />
                <img className="to-right" src={manuHappy} alt="" />
            </section>
        </S.Container>
    )
}

export default CallToAction