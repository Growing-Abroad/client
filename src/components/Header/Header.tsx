import { HeaderContent, Logo, StyledHeader } from "./Header.style";
import Burger from "@components/Header/modules/Burger";
import logo from '@assets/growing-abroad-images/LOGO-Growing.webp';
import Link from 'next/link';

function Header() {
  return (
    <StyledHeader>
      <HeaderContent>
        <Link href={'/'}>
          <Logo src={logo} alt='growing abroad logo' />
        </Link>
        <Burger />
      </HeaderContent>
    </StyledHeader>
  )
}

export default Header
