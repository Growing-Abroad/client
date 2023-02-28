import * as S from './styles'
import TwoColorTitle from "@components/two-color-title";
import OurServicesSwiper from "@pages/components/OurServices/OurServicesSwiper";

export default function OurServicesSection() {
  return (
    <S.Container>
      <TwoColorTitle text1="Explore our" text2="Services" hasSpaceBtw />
      <OurServicesSwiper />
    </S.Container>
  )
}