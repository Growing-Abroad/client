import TwoColorTitle from '@/components/two-color-title';
import {
  DiscoverContent,
  DiscoverImagesWrapper,
  DiscoverReadMoreButton,
  DiscoverReadMoreText,
  DiscoverReadMoreWrapper,
  DiscoverWrapper,
} from './style';

export default function DiscoverGA() {
  return (
    <DiscoverWrapper>
      <TwoColorTitle
        text1="Discover"
        text2="GROWING ABROAD"
        hasSpaceBtw
        fontSize="2.5rem"
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

        <DiscoverImagesWrapper></DiscoverImagesWrapper>
      </DiscoverContent>
    </DiscoverWrapper>
  );
}
