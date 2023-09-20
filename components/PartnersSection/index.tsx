import React, { useMemo } from "react";

import TwoColorTitle from "@/components/two-color-title";

import TodayIcon from "@/../public/assets/partners-icons/today.svg";
import HuuffpostIcon from "@/../public/assets/partners-icons/huffpost.svg";
import TasteOfHomeIcon from "@/../public/assets/partners-icons/taste-of-home.svg";
import ParadeIcon from "@/../public/assets/partners-icons/parade.svg";
import RedBookIcon from "@/../public/assets/partners-icons/red-book.svg";
import SelfIcon from "@/../public/assets/partners-icons/self.svg";
import BuzzFeedIcon from "@/../public/assets/partners-icons/buzz-feed.svg";
import WomansWorldIcon from "@/../public/assets/partners-icons/womans-world.svg";


import Rammlerbau from "@/../public/assets/partners-icons/rammlerbrau_1.jpg";
import AlineCeli from "@/../public/assets/partners-icons/AlineCeliLogo.jpg";
import Eletrovorteil from "@/../public/assets/partners-icons/Elektrovorteil.jpg";
import Flexpress from "@/../public/assets/partners-icons/Flexpress.jpg";
import Kickbase from "@/../public/assets/partners-icons/Kickbase-logo_1.jpg";

import {
  Container,
  Content,
  ImageContainerA,
  ImageContainerB,
  TitleContainer,
} from "@/../styles/components/PartnersSection/index.styles";
import Image from "next/image";
import useAppContext from "@/hooks/useAppContext";

interface ImageSize {
  width: number;
  height: number;
}

interface ImageSizes {
  desktop: ImageSize;
  mobile: ImageSize;
}

type IsMobileType = "mobile" | "desktop";

function PartnersSection() {
  const {
    windowSize: { width },
    isMobile,
    smallDesktopSize,
  } = useAppContext();

  const shouldBreakLine: boolean = width <= smallDesktopSize;

  const imageSizes: ImageSizes = {
    desktop: {
      width: 162,
      height: 78.34,
    },
    mobile: {
      width: 121,
      height: 58,
    },
  };

  const checkIfIsMobile = (isMobile: boolean): IsMobileType => {
    switch (isMobile) {
      case true:
        return "mobile";
      case false:
      default:
        return "desktop";
    }
  };

  return (
    <Container>
      <TitleContainer>
        <TwoColorTitle
          text1="Some of our"
          text2="Partners in Germany"
          hasSpaceBtw={!shouldBreakLine}
          breakingLine={shouldBreakLine}
          as="h2"
          wrapperStyles={{
            width: "100%",
          }}
        />
      </TitleContainer>
      <Content isMobile={isMobile}>
        <ImageContainerA>
          <Image
            width={imageSizes[checkIfIsMobile(isMobile)].width}
            height={imageSizes[checkIfIsMobile(isMobile)].height}
            src={Rammlerbau}
            alt="Rammlerbau"
          />
        </ImageContainerA>
        <ImageContainerA>
          <Image
            width={imageSizes[checkIfIsMobile(isMobile)].width}
            height={imageSizes[checkIfIsMobile(isMobile)].height}
            src={AlineCeli}
            alt="AlineCeli"
          />
        </ImageContainerA>
        <ImageContainerA>
          <Image
            width={imageSizes[checkIfIsMobile(isMobile)].width}
            height={imageSizes[checkIfIsMobile(isMobile)].height}
            src={Eletrovorteil}
            alt="Eletrovorteil"
          />
        </ImageContainerA>
        <ImageContainerA>
          <Image
            width={imageSizes[checkIfIsMobile(isMobile)].width}
            height={imageSizes[checkIfIsMobile(isMobile)].height}
            src={Flexpress}
            alt="Flexpress"
          />
        </ImageContainerA>
        <ImageContainerA>
          <Image
            width={imageSizes[checkIfIsMobile(isMobile)].width}
            height={imageSizes[checkIfIsMobile(isMobile)].height}
            src={Kickbase}
            alt="Kickbase"
          />
        </ImageContainerA>
       
        
        
      </Content>
    </Container>
  );
}

export default PartnersSection;
