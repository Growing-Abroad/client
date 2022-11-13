import TwoColorTitle from '@/components/two-color-title'
import OurServicesSwiper from '@pages/Home/components/OurServices/OurServicesSwiper'
import * as S from './styles'

export default function OurServicesSection (){
  return (
    <S.Container>
      <TwoColorTitle text1="Explore" text2="our services" hasSpaceBtw/>
      <OurServicesSwiper />
    </S.Container>
  )
}