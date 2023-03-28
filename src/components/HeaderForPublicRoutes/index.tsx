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

function HeaderForPublicRoutes() {
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
              <Icon src={GlobeIcon} />
            </IconButton>
          )}
        </LogoContainer>
        <Content>
          <ButtonsContainer>
            <Button>
              <Button>For companies</Button>
            </Button>
            <Button>
              <Button>For candidates</Button>
            </Button>
          </ButtonsContainer>
          <IconsContainer>
            {!isMobile && (
              <>
                <IconButton>
                  <Icon src={GlobeIcon} color={primaryBlue} />
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
