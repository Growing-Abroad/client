import Image from "next/image";
import TwoColorTitle from "@components/two-color-title";
import ContainerHero from "@/components/ContainerHero";
import useAppContext from "@/hooks/useAppContext";

import background from "@/../public/assets/pages/faq/background-desktop.webp";
import backgroundMobile from "@/../public/assets/pages/faq/background-mobile.webp";

import {
  Container,
  ContentHero,
  SubheadingHero,
} from "../../../../styles/faq/FaqHeroSection/style";
import NavHero from "@/components/NavHero";
import Link from "next/link";

export default function FaqHeroSection() {
  const { isMobile } = useAppContext();

  return (
    <Container>
      {isMobile ? (
        <>
          <ContainerHero
            backgroundImageDesktop={background.src}
            backgroundImageMobile={backgroundMobile.src}
            styles={{}}
          >
            <ContentHero>
              <TwoColorTitle
                text1="Frequently"
                text2="Asked Questions"
                hasSpaceBtw
                wrapperStyles={{
                  justifyContent: "flex-start",
                  fontSize: "44px",
                  paddingBottom: 0,
                  lineHeight: "54px",
                  textAlign: "start",
                  maxWidth: "50%",
                }}
              />
            </ContentHero>
          </ContainerHero>
          <SubheadingHero>
            Got a question? We're here to answer ! If you don't see your
            question here, drop us a line on or{" "}
            <Link href="#">contact page.</Link>
          </SubheadingHero>
        </>
      ) : (
        <ContainerHero
          backgroundImageDesktop={background.src}
          backgroundImageMobile={backgroundMobile.src}
          styles={{}}
        >
          <ContentHero>
            <TwoColorTitle
              text1="Frequently"
              text2="Asked Questions"
              hasSpaceBtw
              wrapperStyles={{ justifyContent: "flex-start", maxWidth: "60%" }}
            />
            <SubheadingHero>
              Got a question? We're here to answer ! If you don't see your
              question here, drop us a line on or{" "}
              <Link href={"/contact"}>contact page.</Link>
            </SubheadingHero>
          </ContentHero>
        </ContainerHero>
      )}
      <NavHero />
    </Container>
  );
}
