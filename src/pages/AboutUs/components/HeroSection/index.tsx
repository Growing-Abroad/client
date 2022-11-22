import * as S from './styles'
import Uan from '@assets/Photos-Main-Page/Uan-Business_Canva.webp'
import Manu from '@assets/Photos-Main-Page/Manu-Business_Canva.webp'
import TwoColorTitle from '@/components/two-color-title'
function TeamMembers() {
  return (
    <S.Container>
      <TwoColorTitle text1='Discover' text2='Growing Abroad' hasSpaceBtw/>
      <p>We, Uan from Brazil and Manu from Germany, put together our skills and knowledge to create a unique platform for foreigners to help to make your dream to live and work in Germany or Europe come true.</p>
      <S.ImagesContainer>
        <S.ImagesWrapper>
          <span className="text-left">If you do not believe in yourself, nobody else will.</span>
          <img src={Uan} alt="Uan"/>
        </S.ImagesWrapper>
        <S.ImagesWrapper>
          <span className="text-right">You just have this one life.</span>
          <img src={Manu} alt="Manu"/>
        </S.ImagesWrapper>
      </S.ImagesContainer>
    </S.Container>
  )
}

export default TeamMembers
