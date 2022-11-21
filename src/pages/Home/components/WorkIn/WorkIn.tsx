import * as S from './styles'
import studentHat from '@assets/Photos-Main-Page/Growing Abroad Education_Canva.png'
import worldPicture from '@assets/Photos-Main-Page/Growing Abroad Earth_Canva.png'
import expertPicture from '@assets/Photos-Main-Page/Growing Abroad Experts_Canva.png'

import WorkInCard from './WorkInCard'

function WorkIn() {
  return (
    <S.Container>

      <h2 className="title">
        Work in <span>EUROPE</span> or <span>GERMANY</span>
      </h2>

      <S.CardSpace>
        <WorkInCard
          title='Student or professional'
          photo={studentHat}
          description="No matter if you have a higher education degree or you are still studying , we will make it possible for you to get your dream job."
        />
        <WorkInCard
          title='Start your new life in Europe'
          photo={worldPicture}
          description="For people who are already in Germany or Europe and also for people who are not and want to relocate."
        />
        <WorkInCard
          title='High qualified experts'
          photo={expertPicture}
          description="As German experts with over 10 years experience on the European market, we guide you through the whole application process."
        />
      </S.CardSpace>
    </ S.Container>
  )

}

export default WorkIn