import React from 'react';

import TwoColorTitle from '@/components/two-color-title';

import TodayIcon from '@/../public/assets/partners-icons/today.svg';
import HuuffpostIcon from '@/../public/assets/partners-icons/huffpost.svg';
import TasteOfHomeIcon from '@/../public/assets/partners-icons/taste-of-home.svg';
import ParadeIcon from '@/../public/assets/partners-icons/parade.svg';
import RedBookIcon from '@/../public/assets/partners-icons/red-book.svg';
import SelfIcon from '@/../public/assets/partners-icons/self.svg';
import BuzzFeedIcon from '@/../public/assets/partners-icons/buzz-feed.svg';
import WomansWorldIcon from '@/../public/assets/partners-icons/womans-world.svg';

import {
  Container,
  Content,
  ImageContainerA,
  ImageContainerB,
  TitleContainer,
} from './styles';
import Image from 'next/image';
import useAppContext from '@/hooks/useAppContext';

function PartnersSection() {
  const {
    windowSize: { width },
    isMobile,
    smallDesktopSize,
  } = useAppContext();

  const shouldBreakLine: boolean = width <= smallDesktopSize;

  return (
    <Container>
      <TitleContainer>
        <TwoColorTitle
          text1="Some of our"
          text2="Partners in Germany"
          hasSpaceBtw={!shouldBreakLine}
          breakingLine={shouldBreakLine}
        />
      </TitleContainer>
      <Content isMobile={isMobile}>
        <ImageContainerA>
          <Image
            width={!isMobile ? 162 : 121}
            height={!isMobile ? 78.34 : 58}
            src={TodayIcon}
            alt="Today"
          />
        </ImageContainerA>
        <ImageContainerA>
          <Image
            width={!isMobile ? 162 : 121}
            height={!isMobile ? 78.34 : 58}
            src={HuuffpostIcon}
            alt="Huffpost"
          />
        </ImageContainerA>
        <ImageContainerA>
          <Image
            width={!isMobile ? 162 : 121}
            height={!isMobile ? 78.34 : 58}
            src={TasteOfHomeIcon}
            alt="Taste of Home"
          />
        </ImageContainerA>
        <ImageContainerA>
          <Image
            width={!isMobile ? 162 : 121}
            height={!isMobile ? 78.34 : 58}
            src={ParadeIcon}
            alt="Parade"
          />
        </ImageContainerA>
        <ImageContainerA>
          <Image
            width={!isMobile ? 162 : 121}
            height={!isMobile ? 78.34 : 58}
            src={RedBookIcon}
            alt="Redbook"
          />
        </ImageContainerA>
        <ImageContainerB>
          <Image
            width={!isMobile ? 162 : 121}
            height={!isMobile ? 78.34 : 58}
            src={SelfIcon}
            alt="Self"
          />
        </ImageContainerB>
        <ImageContainerB>
          <Image
            width={!isMobile ? 162 : 121}
            height={!isMobile ? 78.34 : 58}
            src={ParadeIcon}
            alt="Parade"
          />
        </ImageContainerB>
        <ImageContainerB>
          <Image
            width={!isMobile ? 162 : 121}
            height={!isMobile ? 78.34 : 58}
            src={BuzzFeedIcon}
            alt="Buzz Feed"
          />
        </ImageContainerB>
        <ImageContainerB>
          <Image
            width={!isMobile ? 162 : 121}
            height={!isMobile ? 78.34 : 58}
            src={WomansWorldIcon}
            alt="Woman's World"
          />
        </ImageContainerB>
        <ImageContainerB>
          <Image
            width={!isMobile ? 162 : 121}
            height={!isMobile ? 78.34 : 58}
            src={HuuffpostIcon}
            alt="Huffpost"
          />
        </ImageContainerB>
      </Content>
    </Container>
  );
}

export default PartnersSection;
