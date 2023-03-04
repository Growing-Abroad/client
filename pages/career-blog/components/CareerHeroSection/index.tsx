import TwoColorTitle from '@components/two-color-title';
import Image from 'next/image';
import background from '@/../public/assets/career-blog/background-hero.png'
import border from '@/../public/assets/career-blog/border-bottom.png';
import search from '@/../public/assets/career-blog/search.svg';
import {
  ContainerHero,
  ContentHero,
  line,
  SubheadingHero,
  NavHero,
  NavList,
  NavItem,
  SearchButton,
} from './style';
export default function CareerHeroSection() {
  return (
    <ContainerHero backgroundImage={background.src}>
      <ContentHero>
        <TwoColorTitle text1="Career" text2="Blogs" hasSpaceBtw styles={{textAlign:'start'}} />
        <SubheadingHero>
          Everything you need to know about your career in Germany or Europe,
          you will find here in blogposts.
        </SubheadingHero>
      </ContentHero>
      <Image src={border} className="border-image"  alt="white border" />
      <NavHero>
        <NavList>
          <NavItem>APPLICATION</NavItem>
          <NavItem>JOB SEARCH</NavItem>
          <NavItem>JOB INTERVIEW</NavItem>
          <NavItem>GERMANY</NavItem>
          <NavItem>VISA</NavItem>
        </NavList>
        <SearchButton>
          <Image src={search} alt="serch-icon"/>
        </SearchButton>
      </NavHero>
    </ContainerHero>
  );
}
