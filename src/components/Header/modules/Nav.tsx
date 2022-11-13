import { ComponentPropsWithoutRef } from "react"
import { BurguerLogo, StyledUl } from "../Header.style"
import Logo from '@assets/growing-abroad-images/LOGO-Growing-black.webp'

function Nav(props: NavProps) {
  const { open } = props
  return (
    <nav>
      <StyledUl open={open}>
        <BurguerLogo src={Logo} alt="growing abroad logo" />
        <li>Online Course</li>
        <li>Coaching</li>
        <li>Career Blog</li>
        <li>About Us</li>
        <li>Jobs</li>
        <li>FAQ</li>
      </StyledUl>
    </nav>
  )
}

interface NavProps extends ComponentPropsWithoutRef<"nav"> {
  open: boolean
}

export default Nav