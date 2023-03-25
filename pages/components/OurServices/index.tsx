import * as S from './styles'
import TwoColorTitle from "@components/two-color-title";
import OurServicesSwiper from "@pages/components/OurServices/OurServicesSwiper";
import useAppContext from '@/hooks/useAppContext';

export default function OurServicesSection() {
 const { isMobile } = useAppContext(); 

 return (
    <S.Container>
      <TwoColorTitle 
      text1="Explore our" 
      text2="Services" 
      hasSpaceBtw 
      as="h2" 
      wrapperStyles={isMobile ? {flexDirection: 'column', maxWidth: '100%'} : {}}
      styles={isMobile ? {lineHeight: '44px'} : {}}
      />
      <OurServicesSwiper />
    </S.Container>
  )
}