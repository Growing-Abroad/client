import {
  DiscoverReadMoreWrapper,
  DiscoverGrowingAbroadSection,
} from "../../../../styles/candidates/components/DiscoverGA/index.styles";
import TwoColorTitle from "@components/two-color-title";
import StdParagraqh from "@/components/generics/StdParagraqh/StdParagraqh";
// import StdButton from "@/components/generics/StdButton/StdButton";
import { StaticImageData } from "next/image";
// import useAppContext from "@/hooks/useAppContext";
// import Link from "next/link";
import BlueSquareWithCarousel from "@/components/BlueSquareWithCaroulsel";
import candidatesDiscoverMockup from "@/utils/mock-ups/candidates-discover-section";
import { useState } from "react";
import useAppContext from "@/hooks/useAppContext";


interface ItemProps {
  image: StaticImageData;
  alt: string;
}

export default function DiscoverGA() {
  const [activeIndex, setActiveIndex] = useState<number>(1)

  const { isMobile } = useAppContext()

  function onHoverChangeBoxText(index: number) {
    setActiveIndex(index)
  }

  return (
    <DiscoverGrowingAbroadSection className="sales">
      <TwoColorTitle
        text1="We are Uan & Manu"
        text2="your Career Experts"
        breakingLine
        hasSpaceBtw
        as="h2"
        wrapperClassName="discover-wrapper"
        className="discover-title"
      />
      <BlueSquareWithCarousel carouselData={candidatesDiscoverMockup} changeOnHover columnReversed onSlideChangeCallback={(index) => onHoverChangeBoxText(index)}>
        <DiscoverReadMoreWrapper className="sales">
          <StdParagraqh className="discover-text" style={{ fontSize: isMobile ? '.875rem' : '', fontWeight: 600 }}>
            {activeIndex > 0 ? (
              <>
                <span style={{ fontSize: '2rem' }}>MANU</span>{" "}
                brings the German perspective and mentality. As a professional Coach, Trainer and Actor, he knows exactly how to present yourself from your best side.<br /><br /> He has been coaching and training executives of international companies how to present themselves in a charismatic way and how to gain confidence and personal development.Besides that he is a professor for various Universities in Germany training students how to prepare and present themselves for job interviews and how to impact at the first impression.<br /><br /> With his knowledge and expertise he will guide you through the job application process and teach you the best techniques and tricks you can have in the German market.
              </>
            )
              : (
                <>
                  <span style={{ fontSize: '2rem' }}>UAN</span>{" "}
                  is the perfect example of a successful foreigner who was able to build an outstanding life and career in Germany. Growing up in a small village in Brazil, not coming from a rich family, life and job perspective were very limited. More than 10 years later he turned his life around graduated from a top university in Germany, having his German passport and having a management position. <br /><br /> Uan has done multiple interviews in his life, managed and recruited many people by himself and knows exactly what is needed and expected in order to fulfill the European standard.<br /><br /> In this Online Course he will show you all the steps he took to have a successful career in Europe.
                </>
              )
            }
          </StdParagraqh>
        </DiscoverReadMoreWrapper>

      </BlueSquareWithCarousel>

    </DiscoverGrowingAbroadSection>
  );
}
