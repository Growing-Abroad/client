import { HeaderContent, Logo, StyledHeader } from "./Header.style"
import Burger from "@components/Header/modules/Burger"
import logo from '@assets/growing-abroad-images/LOGO-Growing.webp'
import { Link } from "react-router-dom"; 'react-router-dom';

function Header() {
  return (
    <StyledHeader>
      <HeaderContent>
        <Link to='/'>
          <Logo src={logo} alt='growing abroad logo' />
        </Link>
        <Burger />
      </HeaderContent>
    </StyledHeader>
  )
}

export default Header
