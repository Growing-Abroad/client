import { StyledHeader } from "./Header.style"
import Burger from "./modules/Burger"

function Header() {
    return (
        <StyledHeader>
            <div className="logo">
                Logo Aqui
            </div>
            <Burger/>
        </StyledHeader>
    )
}

export default Header