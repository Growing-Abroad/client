import 'react-select-search-nextjs/style.css';
import { ReactNode, useEffect, useState } from 'react';
import { Select, MenuItem } from '@mui/material';
import Nav from './Nav';
import { NavWrapper, SelectLangLabel, SelectLangWrapper } from './BurguerStyle';
import { variables } from '@styles/global-variables';
import { removePxFromCssValue } from '@utils/scripts/general-utility';
import { StyledBurger } from '../Header.style';
import Link from 'next/link';
import Image from 'next/image';
import BrFlag from 'public/countries-flags/br.svg';
import DeFlag from 'public/countries-flags/de.svg';
import UsFlag from 'public/countries-flags/us.svg';
import useAppContext from '@/hooks/useAppContext';

export type TCountryLangDict = Record<string, string>;

export enum ECountryToLang {
  us = 'en',
  br = 'pt',
  de = 'de',
}

export const countryToFlag: {
  [key in ECountryToLang]: string;
} = {
  [ECountryToLang.us]: UsFlag,
  [ECountryToLang.br]: BrFlag,
  [ECountryToLang.de]: DeFlag,
};

function Burger() {
  const [open, setOpen] = useState(false);
  const {
    windowSize: { width },
  } = useAppContext();
  const {
    sizes: { mediaQuery },
  } = variables;
  const mediaQueryNumber = removePxFromCssValue(mediaQuery);

  useEffect(() => {
    if (width < mediaQueryNumber) setOpen(false);
  }, [width]);

  const [openLang, setOpenLang] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('us');
  const [flag, setFlag] = useState(UsFlag);
  const [selectImg, setSelectImage] = useState<ReactNode>(
    <Image src={UsFlag} alt={'us flag'} width={25} height={20} />,
  );

  const countryLangDict: TCountryLangDict = {
    us: 'en',
    br: 'pt',
    de: 'de',
  };

  const LangToFlag: TCountryLangDict = {
    us: UsFlag,
    br: BrFlag,
    de: DeFlag,
  };

  const handleClose = () => {
    setOpenLang(false);
  };

  const handleOpen = () => {
    setOpenLang(true);
  };

  const handleChange = (lang: string) => {
    setSelectedCountry(lang);
    setFlag(LangToFlag[lang]);
    setSelectImage(
      <Image
        src={LangToFlag[lang]}
        alt={lang + ' flag'}
        width={25}
        height={20}
      />,
    );
    setOpen(false);
    // changeLanguage(countryLangDict[lang.toLowerCase()]);
  };

  function getKeyByValue(object: Record<string, string>, value: string) {
    return Object.keys(object).find((key) => object[key] === value);
  }

  useEffect(() => {
    const lang = window.location.pathname.slice(1, 3);

    const initialFlag = countryToFlag[lang as ECountryToLang] 
    
    if (initialFlag) {
      setSelectedCountry(getKeyByValue(countryLangDict, lang)!);
      setFlag(initialFlag);
      setSelectImage(
        <Image src={initialFlag} alt={lang + ' flag'} width={25} height={20} />,
      );
    }
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
            value={selectedCountry}
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
                <Image src={BrFlag} alt={'br flag'} width={25} height={20} />
              </MenuItem>
            </Link>
            <Link
              key={'us'}
              href={''}
              locale={'en'}
              onClick={() => handleChange('us')}
            >
              <MenuItem key={'us'} value={'us'}>
                <Image src={UsFlag} alt={'Us flag'} width={25} height={20} />
              </MenuItem>
            </Link>
            <Link
              key={'de'}
              href={''}
              locale={'de'}
              onClick={() => handleChange('de')}
            >
              <MenuItem key={'de'} value={'de'}>
                <Image src={DeFlag} alt={'de flag'} width={25} height={20} />
              </MenuItem>
            </Link>
          </Select>
        </SelectLangWrapper>
      </NavWrapper>
    </>
  );
}

export default Burger;
