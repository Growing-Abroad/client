import {
  DiscoverReadMoreWrapper,
  DiscoverGrowingAbroadSection,
} from "../../../../styles/candidates/components/DiscoverGA/index.styles";
import TwoColorTitle from "@components/two-color-title";
import StdParagraqh from "@/components/generics/StdParagraqh/StdParagraqh";
import StdButton from "@/components/generics/StdButton/StdButton";
import { StaticImageData } from "next/image";
import useAppContext from "@/hooks/useAppContext";
import Link from "next/link";
import BlueSquareWithCarousel from "@/components/BlueSquareWithCaroulsel";
import candidatesDiscoverMockup from "@/utils/mock-ups/candidates-discover-section";


interface ItemProps {
  image: StaticImageData;
  alt: string;
}

export default function DiscoverGA() {
  const { isMobile } = useAppContext();


  return (
    <DiscoverGrowingAbroadSection>
      <TwoColorTitle
        text1="Discover"
        text2="Growing Abroad"
        hasSpaceBtw
        as="h2"
        wrapperClassName="discover-wrapper"
        className="discover-title"
      />
      <BlueSquareWithCarousel carouselData={candidatesDiscoverMockup} changeOnHover>
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

      </BlueSquareWithCarousel>
      
    </DiscoverGrowingAbroadSection>
  );
}
