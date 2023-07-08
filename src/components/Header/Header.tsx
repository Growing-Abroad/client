import { HeaderContent, StyledHeader } from "./Header.style";
import Burger from "@components/Header/modules/Burger";
import logo from "@/../public/assets/pages/growing-abroad-images/LOGO-Growing.jpg";
import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <StyledHeader>
      <HeaderContent>
        <Link href={"/"}>
          <Image src={logo} alt="growing abroad logo" height={42} />
        </Link>
        <Burger />
      </HeaderContent>
    </StyledHeader>
  );
}

export default Header;
