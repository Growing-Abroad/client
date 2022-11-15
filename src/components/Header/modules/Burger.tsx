import { useEffect, useState } from "react";
import { StyledBurger } from "@components/Header/Header.style";
import Nav from "./Nav";
import { useWindowSize } from "@/hooks/useWindowSize";
import { variables } from "@/styles/global-variables";
import { removePxFromCssValue } from "@/utils/scripts/general-utility";

function Burger() {
  const [open, setOpen] = useState(false);
  const [width] = useWindowSize();
  const { sizes: { mediaQuery } } = variables;
  const mediaQueryNumber = removePxFromCssValue(mediaQuery);

  useEffect(() => {
    if (width < mediaQueryNumber) setOpen(false);
  }, [width])

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