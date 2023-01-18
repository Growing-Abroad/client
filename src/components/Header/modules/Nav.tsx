import { ComponentPropsWithoutRef } from "react";
import { BurguerLogo, StyledUl } from "../Header.style";
import Logo from "@/public/assets/growing-abroad-images/LOGO-Growing-black.webp";
import Link from "next/link";

function Nav(props: NavProps) {
  const { open } = props;
  return (
    <nav>
      <StyledUl open={open}>
        <BurguerLogo src={Logo} alt="growing abroad logo" open={open} />
        <li>Online Course</li>
        <li>Coaching</li>
        <li>Career Blog</li>
        <li>
          <Link href={"/about-us"}>About Us</Link>
        </li>
        <li>Jobs</li>
        <li>FAQ</li>
      </StyledUl>
    </nav>
  );
}

interface NavProps extends ComponentPropsWithoutRef<"nav"> {
  open: boolean;
}

export default Nav;
