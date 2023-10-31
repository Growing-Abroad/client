import { Container } from './style';
import useAppContext from '@/hooks/useAppContext';
import { CSSProperties } from 'styled-components';

export interface ContainerHeroParameters{
  backgroundImageDesktop: string,
  backgroundImageMobile: string,
  styles?: CSSProperties,
  children?: React.ReactNode,
}
const ContainerHero:React.FC<ContainerHeroParameters> = ({
  backgroundImageDesktop,
  backgroundImageMobile,
  styles,
  children
})=>{
  const {isMobile} = useAppContext();

  return (
    <Container
      backgroundImage={isMobile ? backgroundImageMobile : backgroundImageDesktop}
      style={{...styles}}>
      {children}
    </Container>
  );
}
export default ContainerHero;
