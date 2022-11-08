import { ComponentPropsWithoutRef } from "react"
import { StyledUl } from "../Header.style"

function Nav(props: NavProps) {
    const {open} = props
    return (
        <nav>
                <StyledUl open={open}>
                    <li>Products</li>
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