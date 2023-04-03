import Image from 'next/image';
import { Container } from './style';
import border from '@/../public/assets/border-bottom.webp';
import borderMobile from '@/../public/assets/border-mobile.svg';
import useAppContext from '@/hooks/useAppContext';
import { CSSProperties } from 'styled-components';

export interface ContainerHeroParameters{
  backgroundImageDesktop: string,
  backgroundImageMobile: string,
  styles?: CSSProperties,
  children: React.ReactNode,
}
const ContainerHero:React.FC<ContainerHeroParameters> = ({backgroundImageDesktop, backgroundImageMobile,styles, children})=>{
  const {isMobile} = useAppContext();
  return (
    <Container
      backgroundImage={isMobile ? backgroundImageMobile : backgroundImageDesktop}
     style={{...styles}}>
      <Image
        src={isMobile ? borderMobile : border}
        className="border-image"
        alt="white border"
      />
      {children}
    </Container>
  );
}
export default ContainerHero;
