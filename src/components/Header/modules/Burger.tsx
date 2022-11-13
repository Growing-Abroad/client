import { useEffect, useState } from "react";
import { StyledBurger } from "@components/Header/Header.style";
import Nav from "./Nav";
import { useWindowSize } from "@/hooks/useWindowSize";
import { variables } from "@/styles/global-variables";

function Burger() {
  const [open, setOpen] = useState(false);
  const [width] = useWindowSize();
  const { sizes: { mediaQuery } } = variables;
  const pxIndex = mediaQuery.indexOf('px');
  const mediaQueryNumber = Number(mediaQuery.slice(0, pxIndex));

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