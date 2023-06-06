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
        text1="We are Uan & Manu"
        text2="your Career Experts"
        breakingLine
        hasSpaceBtw
        as="h2"
        wrapperClassName="discover-wrapper"
        className="discover-title"
      />
      <BlueSquareWithCarousel carouselData={candidatesDiscoverMockup} changeOnHover columnReversed>
        <DiscoverReadMoreWrapper>
          <StdParagraqh className="discover-text">
            {isMobile ? "We help skilled foreigners from all over the world secure and land their dream job in Germany and Europe. As experts in the German and European job markets, we know what it takes to succeed.We provide comprehensive support and guidance in every step of the way. Our team will be your mentor, career advisor, coach, and motivator, helping you to navigate the complex job market in Germany and Europe. Whether you need help with building a CV on European standards, a cover letter or getting confidence and convincing the recruiters in the job interview, we're here to help.We value your unique experiences and personality, and we're committed to helping you showcase your full potential. We understand that moving to a new country can be overwhelming, which is why we're here to provide the support and guidance you need to make a successful career transition." : "Our goal is to help skilled people from all of the world to get their dream job in Germany or Europe. As experts on the German and European market, we know exactly what you need to bring in order to have a successful career abroad. We will be your mentor, your career advisor, your Coach, your friend and motivator."}
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
