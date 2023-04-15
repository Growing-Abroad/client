import {
  DiscoverContent,
  RIContainer,
  RIImage,
  DiscoverReadMoreWrapper,
  DiscoverWrapper,
  CarouselContainer,
} from "../../../../styles/candidates/components/DiscoverGA/index.styles";
import TwoColorTitle from "@components/two-color-title";
import StdParagraqh from "@/components/generics/StdParagraqh/StdParagraqh";
import ImagesList from "@/utils/mock-ups/home-discover-carousel";
import StdButton from "@/components/generics/StdButton/StdButton";
import Carousel from "@/components/Carousel";
import { StaticImageData } from "next/image";
import useAppContext from "@/hooks/useAppContext";
import Link from "next/link";
import KeenSlider from "@/components/KeenSlider";

interface ItemProps {
  image: StaticImageData;
  alt: string;
}

export default function DiscoverGA() {
  const { isMobile } = useAppContext();

  const renderItem = ({ image, alt }: ItemProps) => (
    <RIContainer key={alt}>
      <RIImage src={image.src} />
    </RIContainer>
  );

  return (
    <DiscoverWrapper>
      <TwoColorTitle
        text1="Discover"
        text2="Growing Abroad"
        hasSpaceBtw
        as="h2"
        wrapperClassName="discover-wrapper"
        className="discover-title"
      />

      <DiscoverContent>
        <DiscoverReadMoreWrapper>
          <StdParagraqh className="discover-text">
            Our goal is to help skilled people from all of the world to get
            their dream job in Germany or Europe.
            <br />
            <br />
            {!isMobile && <br />}
            As experts on the German and European market, we know exactly what
            you need to bring in order to have a successful career abroad. We
            will be your mentor, your career advisor, your Coach, your friend
            and motivator.
            <br />
            <br />
            {!isMobile && <br />}
            We value everyone's experience and personality and help our
            costumers to show their full potential.
          </StdParagraqh>

          <StdButton className="read-more-btn">
            <Link href="/about-us" style={{ all: "unset" }}>
              Read More
            </Link>
          </StdButton>
        </DiscoverReadMoreWrapper>
        <CarouselContainer>
          <Carousel<ItemProps>
            visibleItems={3}
            data={ImagesList}
            renderItem={renderItem}
            itemWidth={205}
          />
        </CarouselContainer>
      </DiscoverContent>
    </DiscoverWrapper>
  );
}
