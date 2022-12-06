import TwoColorTitle from '@/components/two-color-title'
import OurServicesSwiper from '@pages/components/OurServices/OurServicesSwiper'
import * as S from './styles'

export default function OurServicesSection() {
  return (
    <S.Container>
      <TwoColorTitle text1="Explore our" text2="SERVICES" hasSpaceBtw />
      <OurServicesSwiper />
    </S.Container>
  )
}