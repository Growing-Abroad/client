import * as S from './styles'
import Uan from '@assets/Photos-Main-Page/Uan-Business_Canva.webp'
import Manu from '@assets/Photos-Main-Page/Manu-Business_Canva.webp'
import TwoColorTitle from '@/components/two-color-title'
import Image from 'next/image'
import HeroBackground from '@../../../public/assets/aboutus/hero-background.webp'

function TeamMembers() {
  return (
    <S.Container backgroundImg={HeroBackground.src}>
      <S.ContentWrapper>
        <TwoColorTitle text1='Discover' text2='Growing Abroad' hasSpaceBtw />
        <p>We, Uan from Brazil and Manu from Germany, put together our skills and knowledge to create a unique platform for foreigners to help to make your dream to live and work in Germany or Europe come true.</p>
        <S.ImagesContainer>

          <S.ImagesWrapper background={Uan.src} >
            <S.BlueSquare />
            <span className="text-left">If you do not believe in yourself, nobody else will.</span>
          </S.ImagesWrapper>

          <S.ImagesWrapper className='right-wrapper' background={Manu.src}>
            <S.BlueSquare className='right-image' />
            <span className="text-right">You just have this one life.</span>
          </S.ImagesWrapper>
        </S.ImagesContainer>
      </S.ContentWrapper>

    </S.Container>
  )
}

export default TeamMembers
