import {
  DiscoverContent,
  DiscoverGaImg,
  DiscoverImagesWrapper,
  DiscoverReadMoreButton,
  DiscoverReadMoreText,
  DiscoverReadMoreWrapper,
  DiscoverWrapper,
} from './style';
import Uan from '@/public/assets/Photos-Main-Page/Uan-Business_Canva.webp'
import Manu from '@/public/assets/Photos-Main-Page/Manu-Business_Canva.webp'
import Hands from '@/public/assets/Photos-Main-Page/high-five.webp'
import TwoColorTitle from "@/src/components/two-color-title";

export default function DiscoverGA() {
  return (
    <DiscoverWrapper>
      <TwoColorTitle
        text1="Discover"
        text2="GROWING ABROAD"
        hasSpaceBtw
      />

      <DiscoverContent>
        <DiscoverReadMoreWrapper>
          <DiscoverReadMoreText>
            Our goal is to help skilled people from all of the world to get
            their dream job in Germany or Europe.
            <br />
            <br />
            As experts on the German and European market, we know exactly what
            you need to bring in order to have a successful career abroad. We
            will be your mentor, your career advisor, your Coach, your friend
            and motivator.
            <br />
            <br />
            We value everyone's experience and personality and help our
            costumers to show their full potential.
          </DiscoverReadMoreText>

          <DiscoverReadMoreButton>Read More</DiscoverReadMoreButton>
        </DiscoverReadMoreWrapper>

        <DiscoverImagesWrapper>
          <DiscoverGaImg url={Uan.src} />
          <DiscoverGaImg url={Hands.src} />
          <DiscoverGaImg url={Manu.src} />
        </DiscoverImagesWrapper>
      </DiscoverContent>
    </DiscoverWrapper>
  );
}
