import { HeaderContent, StyledHeader } from "./Header.style"
import Burger from "./modules/Burger"
import { SiYourtraveldottv } from 'react-icons/Si'


function Header() {
    return (
        <StyledHeader>
            <HeaderContent>
                //TODO: Não encontrei a logo do cliente
                <SiYourtraveldottv size={50}/>
                <Burger/>
            </HeaderContent>
        </StyledHeader>
    )
}

export default Header