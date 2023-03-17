import Image from 'next/image';
import search from '@/../public/assets/search.svg';

import {
  Line,
  NavContainer,
  NavList,
  NavItem,
  SearchButton,
} from './style';
export default function NavHero() {
  return (
    <>
      <NavContainer>
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
      </NavContainer>
      <Line />
    </>
  );
}

