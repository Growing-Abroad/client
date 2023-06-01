import * as S from "../../../../styles/online-course/components/CTActions/styles"
import gaCoaches from '@/../public/assets/new-cta-img.webp';
import goCoachesMobile from '@/../public/assets/image-mainHero-mobile.png'
import Image from 'next/image'
import StdButton from "@/components/generics/StdButton/StdButton";
import useAppContext from "@/hooks/useAppContext";

function CTAction() {

  const { isMobile } = useAppContext()

  const imageSource = isMobile ? goCoachesMobile : gaCoaches

  return (
    <S.BackgroudCTA >
      <S.BannerMainContainer>
        <section className="left-side" >
          <h1>Land your Dream Job in <span>Germany</span> or <span>Europe</span>
          </h1>
          <StdButton >
            Buy Online Course Now
          </StdButton>
        </section>
        <section className="right-side">
          <div className="right-side-img-container">
            <Image
              src={imageSource}
              alt="growing abroad coaches"
              width={616}
              style={{objectFit: 'contain', border: "1px solid transparent"}}
              priority
              quality={100}
            />
          </div>
        </section>
      </S.BannerMainContainer>
    </S.BackgroudCTA>
  )
}

export default CTAction;
