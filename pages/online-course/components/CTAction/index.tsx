import * as S from "./styles"
import gaCoaches from '@/../public/assets/cta-img.svg';
import border from '@/../public/assets/border-bottom.webp';
import ctaMaskMobile from '@/../public/assets/pages/main-page/hero-section-mask.svg';
import Image from 'next/image'
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import StdButton from "@/components/generics/StdButton/StdButton";
import useAppContext from "@/hooks/useAppContext";

function CTAction() {
  const {isMobile} = useAppContext();

  const {windowSize: {width}} = useAppContext()



  return (
    <S.BackgroudCTA>
      <S.Container>
        <section className="left-side" >
          <h1>Land your Dream Job in <span>Germany</span> or <span>Europe</span>
          </h1>
          <StdButton icon={faPlay} >
            Buy Online Course Now
          </StdButton>
        </section>
        <section className="right-side">
          <div className="right-side-img-container">
            <Image src={gaCoaches} alt="growing abroad coaches" width={616} style={{objectFit: 'contain'}} />
          </div>
        </section>
      </S.Container>
      <div className="cta-mask" >
        <Image src={isMobile ? border : border} alt="styled mask" width={width} />
        <div className="white-line"></div>
      </div>
    </S.BackgroudCTA>
  )
}

export default CTAction;
