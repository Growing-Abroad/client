import * as S from "../../../../styles/online-course/components/CTActions/styles"
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
    <S.BackgroudCTA style={{maxHeight:`${isMobile ?'830px' :''}`}}>
      <S.Container >
        <section className="left-side" style={{gap:'23px', paddingLeft:"60px"}} >
          <h1>Land your Dream Job in <span>Germany</span> or <span>Europe</span>
          </h1>
          <span style={{color:'white', fontSize:`${isMobile ?'16px' :'24px'}`, fontWeight:400, lineHeight:'38px', width:`${isMobile ?'323px' :'523px'}`}}>Build a successful career abroad with this amazing ONLINE COURSE</span>
          <StdButton >
            Buy Online Course Now
          </StdButton>
        </section>
        <section className="right-side">
          <div className="right-side-img-container">
            <Image src={gaCoaches} alt="growing abroad coaches" width={616} style={{objectFit: 'contain'}} />
          </div>
        </section>
      </S.Container>
    </S.BackgroudCTA>
  )
}

export default CTAction;
