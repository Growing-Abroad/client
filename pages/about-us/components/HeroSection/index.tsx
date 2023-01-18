import React from "react";
import * as S from "./styles";
import Uan from "@../../../public/assets/Photos-Main-Page/Uan-Business_Canva.webp";
import Manu from "@../../../public/assets/Photos-Main-Page/Manu-Business_Canva.webp";
import HeroBackground from "@../../../public/assets/aboutus/hero-background.webp";
import TwoColorTitle from "@/src/components/two-color-title";
import Image from 'next/image';

function HeroSection() {
  return (
      <S.Container backgroundImg={HeroBackground.src}>
        <S.ContentWrapper>
          <TwoColorTitle text1='Discover' text2='Growing Abroad' hasSpaceBtw/>
          <p>We, Uan from Brazil and Manu from Germany, put together our skills and knowledge to create a unique
            platform for foreigners to help to make your dream to live and work in Germany or Europe come true.</p>

          <S.ImagesContainer>

            <S.ImagesWrapper background={Uan.src}>
              <S.BlueSquare/>

              <S.TextsWrapper>
                <Image src={Quote} alt='quotes' height={28} width={40}></Image>
                <S.TextLeft className="text-left">If you don't believe in yourself, nobody else will.</S.TextLeft>
              </S.TextsWrapper>

            </S.ImagesWrapper>

            <S.ImagesWrapper className='right-wrapper' background={Manu.src}>
              <S.BlueSquare className='right-image'/>

              <S.TextsWrapper className='reverse'>
                <Image src={Quote} alt='quotes' height={28} width={40}></Image>
                <S.TextRight className="text-right">
                  You just have this one life.
                </S.TextRight>
              </S.TextsWrapper>

            </S.ImagesWrapper>

          </S.ImagesContainer>
        </S.ContentWrapper>

      </S.Container>
  )
}

export default HeroSection
