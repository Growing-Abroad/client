import {
  DiscoverContent,
  DiscoverGaImg,
  DiscoverImagesWrapper,
  DiscoverReadMoreWrapper,
  DiscoverWrapper,
  RIContainer,
  RIImage,
} from './style';
import Uan from '@/../public/assets/Photos-Main-Page/Uan-Business_Canva.webp';
import Manu from '@/../public/assets/Photos-Main-Page/Manu-Business_Canva.webp';
import Hands from '@/../public/assets/Photos-Main-Page/high-five.webp';
import TwoColorTitle from '@components/two-color-title';
import StdParagraqh from '@/components/generics/StdParagraqh/StdParagraqh';
import StdButton from '@/components/generics/StdButton/StdButton';
import useAppContext from '@/hooks/useAppContext';
import Carousel from '@/components/Carousel';
import ImagesList from '@/utils/mock-ups/home-discover-carousel';
import { StaticImageData } from 'next/image';

interface ItemProps {
  image: StaticImageData;
  alt: string;
}

export default function DiscoverGA() {
  const { isMobile } = useAppContext();

  const renderItem = ({ image, alt }: ItemProps) => (
    <RIContainer key={alt}>
      <RIImage src={image.src} alt={alt} />
    </RIContainer>
  );

  return (
    <DiscoverWrapper>
      <TwoColorTitle
        text1="Discover"
        text2="Growing Abroad"
        hasSpaceBtw
        as="h2"
        wrapperStyles={
          isMobile ? { flexDirection: 'column', maxWidth: '100%' } : {}
        }
        styles={isMobile ? { lineHeight: '44px' } : {}}
      />

      <DiscoverContent>
        <DiscoverReadMoreWrapper>
          <StdParagraqh style={{ color: 'white', textAlign: 'justify' }}>
            Our goal is to help skilled people from all of the world to get
            their dream job in Germany or Europe.
            <br />
            <br />
            <br />
            As experts on the German and European market, we know exactly what
            you need to bring in order to have a successful career abroad. We
            will be your mentor, your career advisor, your Coach, your friend
            and motivator.
            <br />
            <br />
            <br />
            We value everyone's experience and personality and help our
            costumers to show their full potential.
          </StdParagraqh>

          <StdButton style={{ fontSize: '20px' }}>Read More</StdButton>
        </DiscoverReadMoreWrapper>
        <Carousel<ItemProps>
          visibleItems={3}
          data={ImagesList}
          renderItem={renderItem}
          itemWidth={205}
        />
      </DiscoverContent>
    </DiscoverWrapper>
  );
}
