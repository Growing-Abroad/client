import { HeaderContent, StyledHeader } from "./Header.style"
import Burger from "./modules/Burger"

function Header() {
    return (
        <StyledHeader>
            <HeaderContent>
                <div className="logo">
                    Logo Aqui
                </div>
                <Burger/>
            </HeaderContent>
        </StyledHeader>
    )
}

export default Header