import { useEffect, useState } from "react";
import { Select, MenuItem } from "@mui/material";
import Nav from "./Nav";
import { NavWrapper, SelectLangLabel, SelectLangWrapper } from "./BurguerStyle";
import { useWindowSize } from "@hooks/useWindowSize";
import { variables } from "@styles/global-variables";
import { removePxFromCssValue } from "@utils/scripts/general-utility";
import { StyledBurger } from "../Header.style";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";


export type TCountryLangDict = Record<string, string>;

function Burger() {
  const { locales } = useRouter();

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
  const [selectedLanguage, setSelectedLanguage] = useState('us');
  const [windowS, setWindow] = useState<Location>();

  const countryLangDict: TCountryLangDict = {
    us: 'en',
    br: 'pt',
    de: 'de',
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

  function getCurrent(lang: string) {
    if (windowS) {
      const { pathname } = windowS;
      console.log({pathname, lang, windowLo: window.location})
      return `${lang}${pathname}`;
    }
    return '';
  }

  useEffect(() => {
    setWindow(window.location)
  }, [])

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
              padding: '4px',
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
            {Object.entries(countryLangDict).map((country) => {
              return (
                <Link
                  key={locales?.find(locale => locale === country[1])}
                  href={getCurrent(countryLangDict[selectedLanguage])}
                  locale={locales?.find(locale => locale === country[1])}
                >
                  <MenuItem key={country[0]} value={country[0]}>
                      <Image
                        src={`countries-flags/${country[0]}.svg`}
                        alt={country[0] + ' flag'}
                        width={25}
                        height={20}
                      />
                  </MenuItem>
                </Link>
              );
            })}
          </Select>
        </SelectLangWrapper>
      </NavWrapper>
    </>
  );
}

export default Burger;
