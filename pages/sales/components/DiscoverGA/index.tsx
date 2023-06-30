import * as S  from "../../../../styles/candidates/components/DiscoverGA/index.styles";
import TwoColorTitle from "@components/two-color-title";
import StdParagraqh from "@/components/generics/StdParagraqh/StdParagraqh";
import { StaticImageData } from "next/image";
import BlueSquareWithCarousel from "@/components/BlueSquareWithCaroulsel";
import candidatesDiscoverMockup from "@/utils/mock-ups/candidates-discover-section";
import { useState } from "react";
import useAppContext from "@/hooks/useAppContext";


interface ItemProps {
  image: StaticImageData;
  alt: string;
}

interface DiscoverGAProps {
  text1?: string
  text2?: string
  manuContent?: string
  uanContent?: string
  typePages?: 'cadidates' | 'sales' | 'online-course' 
}


export default function DiscoverGA(
  {
    text1= "We are Uan & Manu",
    text2= "your Career Experts",
    typePages
  }: DiscoverGAProps) {
  const [activeIndex, setActiveIndex] = useState<number>(1)

  const { isMobile } = useAppContext()

  function onHoverChangeBoxText(index: number) {
    setActiveIndex(index)
  }



  return (
    <S.DiscoverGrowingAbroadSection className="sales">
      <TwoColorTitle
        text1={text1}
        text2={text2}
        breakingLine={typePages !== "cadidates"}
        hasSpaceBtw
        as="h2"
        wrapperClassName="discover-wrapper"
        className="discover-title"
      />
      <BlueSquareWithCarousel carouselData={candidatesDiscoverMockup} changeOnHover columnReversed onSlideChangeCallback={(index) => onHoverChangeBoxText(index)}>
        <S.DiscoverReadMoreWrapper className={`${typePages === 'cadidates' && 'cadidates'} sales`}>
          {typePages === 'cadidates' ? (
            <StdParagraqh className="discover-text" style={{ fontSize: isMobile ? '.875rem' : '', fontWeight: 600 }}>
              <>
                We help <b>skilled foreigners</b> from all over the world secure and <b>land their dream job in Germany and Europe</b>. As experts in the German and European job markets, we know what it takes to succeed.
                <br />
                <br />
                We provide <b>comprehensive support and guidance</b> in every step of the way. Our team will be your mentor, career advisor, coach, and motivator, helping you to navigate the complex job market in Germany and Europe. Whether you need help with <b>building a CV</b> on European standards, a <b>cover letter</b> or getting <b>confidence</b> and convincing the recruiters in the job interview, we're here to help.
                <br />
                <br />
                We value your <b>unique experiences and personality</b>, and we're committed to helping you showcase your full potential. We understand that moving to a new country can be overwhelming, which is why we're here to <b>provide the support and guidance</b> you need to make a successful career transition.
                <S.UILink href="/about-us">
                  Read More
                </S.UILink>
              </>
          </StdParagraqh>
          ) : (
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
        )}
          
        </S.DiscoverReadMoreWrapper>

      </BlueSquareWithCarousel>

    </S.DiscoverGrowingAbroadSection>
  );
}
