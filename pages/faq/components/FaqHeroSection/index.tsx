import Image from "next/image";
import TwoColorTitle from "@components/two-color-title";
import useAppContext from "@/hooks/useAppContext";

import background from "@/../public/assets/pages/faq/background-desktop.jpg";
import backgroundMobile from "@/../public/assets/pages/faq/background-mobile.jpg";

import {
  FaqContainerHero,
  ContentHero,
  SubheadingHero,
} from "@/../styles/faq/FaqHeroSection/index.styles";
import NavHero from "@/components/NavHero";
import Link from "next/link";

export default function FaqHeroSection() {
  const { isMobile } = useAppContext();

  return (
    <FaqContainerHero
      // backgroundImageDesktop={background.src}
      // backgroundImageMobile={backgroundMobile.src}
      backgroundImage={isMobile ? backgroundMobile.src : background.src}
    >
      <ContentHero>
        <TwoColorTitle
          text1="Frequently"
          text2="Asked Questions"
          hasSpaceBtw
          wrapperStyles={{ justifyContent: "flex-start", marginTop: isMobile ? '20px':'70px',  }}
          styles={{textAlign: 'start'}}
        />
        {
          !isMobile 
          &&
          <SubheadingHero>
            Got a question? We're here to answer ! If you don't see your
            question here, drop us a line on our{" "}
            <Link href={"/contact"}>contact page.</Link>
          </SubheadingHero>
        }
        
      </ContentHero>
    </FaqContainerHero>
  );
}
