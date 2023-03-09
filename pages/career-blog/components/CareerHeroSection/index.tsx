import TwoColorTitle from '@components/two-color-title';
import Image from 'next/image';
import search from '@/../public/assets/search.svg';
import background from '@/../public/assets/pages/career-blog/background-hero.webp';
import backgroundMobile from '@/../public/assets/pages/career-blog/background-hero-mobile.webp';

import {
  ContentHero,
  SubheadingHero,
  NavHero,
  NavList,
  NavItem,
  SearchButton,
} from './style';
import ContainerHero from '@/components/ContainerHero';
import useAppContext from '@/hooks/useAppContext';
import { Wrapper } from '@/components/Wrapper';

export default function CareerHeroSection() {
  const { isMobile } = useAppContext();

  return (
    <Wrapper>
      {isMobile ? (
        <>
          <ContainerHero
            backgroundImageDesktop={background.src}
            backgroundImageMobile={backgroundMobile.src}
            styles={{}}
          >
            <ContentHero>
              <TwoColorTitle
                text1="Career"
                text2="Blogs"
                hasSpaceBtw
                wrapperStyles={{ justifyContent: 'flex-start' , fontSize:'44px', paddingBottom:0, lineHeight:'54px', textAlign:'center'}}
                />
            </ContentHero>
          </ContainerHero>
          <SubheadingHero>
            Everything you need to know about your career in Germany or Europe,
            you will find here in blogposts.
          </SubheadingHero>
        </>
      ):(
        <ContainerHero
        backgroundImageDesktop={background.src}
        backgroundImageMobile={backgroundMobile.src}
        styles={{}}
        >
          <ContentHero>
            <TwoColorTitle
              text1="Career"
              text2="Blogs"
              hasSpaceBtw
              wrapperStyles={{ justifyContent: 'flex-start' }}
              />
            <SubheadingHero>
              Everything you need to know about your career in Germany or
              Europe, you will find here in blogposts.
            </SubheadingHero>
          </ContentHero>
        </ContainerHero>
      )}
      <NavHero>
        <NavList>
          <NavItem>APPLICATION</NavItem>
          <NavItem>JOB SEARCH</NavItem>
          <NavItem>JOB INTERVIEW</NavItem>
          <NavItem>GERMANY</NavItem>
          <NavItem>VISA</NavItem>
          <NavItem>
            <SearchButton>
              <Image src={search} alt="serch-icon" />
            </SearchButton>
          </NavItem>
        </NavList>
      </NavHero>
    </Wrapper>
  );
}
