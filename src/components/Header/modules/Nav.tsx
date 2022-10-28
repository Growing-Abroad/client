import { ComponentPropsWithoutRef } from "react"
import { StyledUl } from "../Header.style"

function Nav(props: NavProps) {
    const {open} = props
    return (
        <nav>
                <StyledUl open={open}>
                    <li>Products</li>
                    <li>Products</li>
                    <li>Products</li>
                    <li>Products</li>
                    <li>Products</li>
                </StyledUl>
            </nav>
    )
}

interface NavProps extends ComponentPropsWithoutRef<"nav"> {
    open: boolean
}

export default Nav