import { useEffect, useState } from "react";
import { StyledBurger } from "@components/Header/Header.style";
import Nav from "./Nav";
import { useWindowSize } from "@/hooks/useWindowSize";
import { variables } from "@/styles/global-variables";
import { removePxFromCssValue } from "@/utils/scripts/general-utility";
import { useTranslation } from "react-i18next";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { NavWrapper, SelectLangLabel, SelectLangWrapper } from "./BurguerStyle";
export type TCountryLangDict = Record<string, string>;

function Burger() {
  const [open, setOpen] = useState(false);
  // const [width] = useWindowSize();
  // const { sizes: { mediaQuery } } = variables;
  // const mediaQueryNumber = removePxFromCssValue(mediaQuery);

  // useEffect(() => {
  //   if (width < mediaQueryNumber) setOpen(false);
  // }, [width])

  // const [openLang, setOpenLang] = useState(false);
  // const [selectedLanguage, setSelectedLanguage] = useState("us");
  // const {
  //   t,
  //   i18n: { changeLanguage, language },
  // } = useTranslation();

  // const countryLangDict: TCountryLangDict = {
  //   us: "en",
  //   br: "pt",
  //   de: "de"
  // };

  // const handleClose = () => {
  //   setOpenLang(false);
  // };

  // const handleOpen = () => {
  //   setOpenLang(true);
  // };

  // const handleChange = (lang: string) => {
  //   setSelectedLanguage(lang);
  //   changeLanguage(countryLangDict[lang.toLowerCase()]);

  //   console.log("handleChangeEvent", lang);
  //   console.log(
  //     "handleChange changeLang value",
  //     countryLangDict[lang.toLowerCase()]
  //   );
  // };

  // function getKeyByValue(object: Record<string, string>, value: string) {
  //   return Object.keys(object).find((key) => object[key] === value);
  // }


  useEffect(() => {
    // console.log("user laanguage", language);
    // const userLangExists = getKeyByValue(countryLangDict, language.slice(0, 2));
    // console.log("dictresult", userLangExists);
    // if (userLangExists) {
    //   setSelectedLanguage(userLangExists);
    // }

    // Object.keys(countryLangDict).forEach((country) => console.log(country));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </StyledBurger>
      <NavWrapper>
        <Nav open={open} />
        {/* <SelectLangWrapper>
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
        </SelectLangWrapper> */}
      </NavWrapper>

    </>
  )
}

export default Burger