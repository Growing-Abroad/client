import TwoColorTitle from '@components/two-color-title';
import background from '@/../public/assets/pages/career-blog/background-hero.webp';
import backgroundMobile from '@/../public/assets/pages/career-blog/background-hero-mobile.webp';

import {
  Container,
  ContentHero,
  SubheadingHero,
} from './style';
import ContainerHero from '@/components/ContainerHero';
import NavHero  from '@/components/NavHero';
import useAppContext from '@/hooks/useAppContext';

export default function CareerHeroSection() {
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
                text1="Career"
                text2="Blogs"
                hasSpaceBtw
                className='title'
                wrapperStyles={{
                  flexDirection: 'column',
                  fontSize: '44px',
                  paddingBottom: 0,
                  lineHeight: '54px',
                  textAlign: 'center',
                }}
              />
            </ContentHero>
          </ContainerHero>
          <SubheadingHero>
            Everything you need to know about your career in Germany or Europe,
            you will find here in blogposts.
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
       <NavHero />
    </Container>
  );
}
