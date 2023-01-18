import { useEffect, useState } from "react";
import { Select, MenuItem } from "@mui/material";
import Nav from "./Nav";
import { NavWrapper, SelectLangLabel, SelectLangWrapper } from "./BurguerStyle";
import { useWindowSize } from "@/src/hooks/useWindowSize";
import { variables } from "@/src/styles/global-variables";
import { removePxFromCssValue } from "@/src/utils/scripts/general-utility";
import { StyledBurger } from "../Header.style";
export type TCountryLangDict = Record<string, string>;

function Burger() {
  const [open, setOpen] = useState(false);
  const [width] = useWindowSize();
  const {
    sizes: { mediaQuery },
  } = variables;
  const mediaQueryNumber = removePxFromCssValue(mediaQuery);

  useEffect(() => {
    if (width < mediaQueryNumber) setOpen(false);
  }, [width]);

  const [openLang, setOpenLang] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("us");

  const countryLangDict: TCountryLangDict = {
    us: "en",
    br: "pt",
    de: "de",
  };

  const handleClose = () => {
    setOpenLang(false);
  };

  const handleOpen = () => {
    setOpenLang(true);
  };

  const handleChange = (lang: string) => {
    setSelectedLanguage(lang);
    // changeLanguage(countryLangDict[lang.toLowerCase()]);
  };

  function getKeyByValue(object: Record<string, string>, value: string) {
    return Object.keys(object).find((key) => object[key] === value);
  }

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </StyledBurger>
      <NavWrapper>
        <Nav open={open} />
        <SelectLangWrapper>
          <SelectLangLabel
            id="demo-controlled-open-select-label"
            className="lang-label"
            onClick={handleOpen}
            style={{
              padding: "4px",
            }}
          >
            <img src={`countries-flags/${selectedLanguage}.svg`} alt="" />
          </SelectLangLabel>
          <Select
            className="hide"
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={openLang}
            value={selectedLanguage}
            onClose={handleClose}
            onOpen={handleOpen}
            onChange={(e) => handleChange(e.target.value)}
            inputProps={{ MenuProps: { disableScrollLock: true } }}
          >
            {Object.keys(countryLangDict).map((country) => {
              return (
                <MenuItem key={country} value={country}>
                  <img
                    src={`countries-flags/${country}.svg`}
                    alt={country + " flag"}
                  />
                </MenuItem>
              );
            })}
          </Select>
        </SelectLangWrapper>
      </NavWrapper>
    </>
  );
}

export default Burger;
