import { useState } from "react";
import { StyledBurger } from "../Header.style";
import Nav from "./Nav";

function Burger() {
    const [open, setOpen] = useState(false)
    return (
        <>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div></div>
                <div></div>
                <div></div>
            </StyledBurger>
            <Nav open={open} />
        </>
    )
}

export default Burger