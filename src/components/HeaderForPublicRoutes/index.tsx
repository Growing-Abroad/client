import React, { useState } from 'react';
import GrowingAbroadImage from '@/../public/assets/pages/growing-abroad-images/LOGO-Growing.webp';
import GlobeIcon from '@/../public/assets/globe-icon.svg';
import GrowingAbroadImageBW from '@/../public/assets/pages/growing-abroad-images/LOGO-Growing-black.webp';
import GrowingAbroadImageWhite from '@/../public/assets/pages/growing-abroad-images/white-logo.png';
import GrowingAbroadImageSubWhite from '@/../public/assets/pages/growing-abroad-images/sub-white-logo.png';
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
import { useTheme } from 'styled-components';
import useAppContext from '@/hooks/useAppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

function HeaderForPublicRoutes() {
  const [itsOpen, setItsOpen] = useState(false);

  const {
    colors: { primaryBlue },
  } = useTheme();

  const { isMobile } = useAppContext();
  console.log({isMobile})
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
              <FontAwesomeIcon icon={faGlobe}  />
            </IconButton>
          )}
        </LogoContainer>
        <Content>
          <ButtonsContainer>
              <Button>For companies</Button>
              <Button>For candidates</Button>
          </ButtonsContainer>
          <IconsContainer>
            {!isMobile && (
              <>
                <IconButton>
                  <FontAwesomeIcon icon={faGlobe}  />
                </IconButton>
              </>
            )}
          </IconsContainer>
        </Content>
      </Container>
    </>
  );
}

export default HeaderForPublicRoutes;
