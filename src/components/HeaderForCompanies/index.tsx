import React, { useState } from 'react';

import GrowingAbroadImage from '@/../public/assets/pages/growing-abroad-images/LOGO-Growing.webp';
import GrowingAbroadImageBW from '@/../public/assets/pages/growing-abroad-images/LOGO-Growing-black.webp';
import GrowingAbroadImageWhite from '@/../public/assets/pages/growing-abroad-images/white-logo.png';
import GrowingAbroadImageSubWhite from '@/../public/assets/pages/growing-abroad-images/sub-white-logo.png';
import GlobeIcon from '@/../public/assets/globe-icon.svg';
import GlobeIconWhite from '@/../public/assets/globe-icon-white.svg';
import BurgerIcon from '@/../public/assets/burger-icon.svg';

import {
  Container,
  LogoContainer,
  Logo,
  Content,
  ButtonsContainer,
  Button,
  IconsContainer,
  IconButton,
  Icon,
  StyledBurger,
} from './styles';
import StdButton from '../generics/StdButton/StdButton';
import { useTheme } from 'styled-components';
import useAppContext from '@/hooks/useAppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

function HeaderForCompanies() {
  const [itsOpen, setItsOpen] = useState(false);

  const {
    colors: { white, primaryBlue, yellow400 },
  } = useTheme();

  const { isMobile } = useAppContext();

  return (
    <>
      <StyledBurger open={itsOpen} onClick={() => setItsOpen(!itsOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </StyledBurger>
      <Container itsOpen={itsOpen}>
        <LogoContainer>
          <Logo src={GrowingAbroadImage.src} />
          {isMobile && (
            <IconButton>
              <FontAwesomeIcon
                icon={faGlobe}
                size="2xl"
                style={{ color: primaryBlue }}
              />
            </IconButton>
          )}
        </LogoContainer>
        <Content>
          <ButtonsContainer>
            <Button>our services</Button>
            <Button>about us</Button>
            {isMobile && <Button>For Candidates</Button>}
          </ButtonsContainer>
          <IconsContainer>
            {!isMobile && (
              <>
                <IconButton>
                  <FontAwesomeIcon
                    icon={faGlobe}
                    size="2xl"
                    style={{ color: primaryBlue }}
                  />
                </IconButton>
                <StdButton
                  style={{
                    width: 195,
                    height: 32,
                    fontSize: 18,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 8,
                    backgroundColor: !isMobile ? primaryBlue : white,
                    color: !isMobile ? white : primaryBlue,
                  }}
                >
                  For Candidates
                </StdButton>
              </>
            )}
          </IconsContainer>
        </Content>
      </Container>
    </>
  );
}

export default HeaderForCompanies;