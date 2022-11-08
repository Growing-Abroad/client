import { HeaderContent, StyledHeader } from "./Header.style"
import Burger from "./modules/Burger"
import { SiYourtraveldottv } from 'react-icons/Si'

//TODO: Não encontrei a logo do cliente
function Header() {
    return (
        <StyledHeader>
            <HeaderContent>
                <SiYourtraveldottv size={50}/>
                <Burger/>
            </HeaderContent>
        </StyledHeader>
    )
}

export default Header
