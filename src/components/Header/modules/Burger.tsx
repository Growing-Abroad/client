import 'react-select-search-nextjs/style.css'
import { HTMLAttributes, ReactNode, RefObject, useEffect, useRef, useState } from "react";
import { Select, MenuItem, dividerClasses, SelectClassKey, SelectProps } from "@mui/material";
import Nav from "./Nav";
import { NavWrapper, SelectLangLabel, SelectLangWrapper } from "./BurguerStyle";
import { useWindowSize } from "@hooks/useWindowSize";
import { variables } from "@styles/global-variables";
import { removePxFromCssValue } from "@utils/scripts/general-utility";
import { StyledBurger } from "../Header.style";
import Link from "next/link";
import Image from "next/image";
import BrFlag from "public/countries-flags/br.svg"
import DeFlag from "public/countries-flags/de.svg"
import UsFlag from "public/countries-flags/us.svg"
import SelectSearch from 'react-select-search-nextjs';

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
  const [selectedLanguage, setSelectedLanguage] = useState('us');
  const [flag, setFlag] = useState(UsFlag);
  const [selectImg, setSelectImage] = useState<ReactNode>(<Image src={UsFlag} alt={'us flag'} width={25} height={20} />);

  const countryLangDict: TCountryLangDict = {
    us: 'en',
    br: 'pt',
    de: 'de',
  };

  const LangToFlag: TCountryLangDict = {
    us: UsFlag,
    br: BrFlag,
    de: DeFlag
  }

  const options = [
    {
      name: 'Deutch', 
      value: 'de'
    },
    {
      name: 'English', 
      value: 'us',
    },
    {
      name: 'Portuguese', 
      value: 'br',
    },
  ];

  const handleClose = () => {
    setOpenLang(false);
  };

  const handleOpen = () => {
    setOpenLang(true);
  };

  const handleChange = (lang: string) => {
    setSelectedLanguage(lang);
    setFlag(LangToFlag[lang])
    setSelectImage(
      <Image
        src={LangToFlag[lang]}
        alt={lang +' flag'}
        width={25}
        height={20}
      />
    )
    setOpen(false);
    // changeLanguage(countryLangDict[lang.toLowerCase()]);
  };

  function getKeyByValue(object: Record<string, string>, value: string) {
    return Object.keys(object).find((key) => object[key] === value);
  }

  useEffect(() => {
    const lang = window.location.pathname.slice(1,3)
    const flag = getKeyByValue(countryLangDict, lang)
    if (flag) {
      setSelectedLanguage(flag);
      setFlag(LangToFlag[flag])
      setSelectImage(
            <Image
              src={LangToFlag[flag]}
              alt={lang +' flag'}
              width={25}
              height={20}
            />
      )
    }
    console.log({loca: window.location, flag, lang})
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
            {selectImg}
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
            <Link
              key={'br'}
              href={''}
              locale={'pt'}
              onClick={() => handleChange('br')}
            >
              <MenuItem key={'br'} value={'br'}>
                  <Image
                    src={BrFlag}
                    alt={'br flag'}
                    width={25}
                    height={20}
                  />
              </MenuItem>
            </Link>
            <Link
              key={'us'}
              href={''}
              locale={'en'}
              onClick={() => handleChange('us')}
            >
              <MenuItem key={'us'} value={'us'}>
                  <Image
                    src={UsFlag}
                    alt={'Us flag'}
                    width={25}
                    height={20}
                  />
              </MenuItem>
            </Link>
            <Link
              key={'de'}
              href={''}
              locale={'de'}
              onClick={() => handleChange('de')}
            >
              <MenuItem key={'de'} value={'de'}>
                  <Image
                    src={DeFlag}
                    alt={'de flag'}
                    width={25}
                    height={20}
                  />
              </MenuItem>
            </Link>


          </Select>
        </SelectLangWrapper>
      </NavWrapper>
    </>
  );
}

export default Burger;
