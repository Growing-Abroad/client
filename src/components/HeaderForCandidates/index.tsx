import React, { useState } from 'react';

import GrowingAbroadImage from '@/../public/assets/pages/growing-abroad-images/LOGO-Growing.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

import {
  Container,
  LogoContainer,
  Logo,
  Content,
  ButtonsContainer,
  Button,
  IconsContainer,
  IconButton,
  StyledBurger,
} from './styles';
import StdButton from '../generics/StdButton/StdButton';
import { useTheme } from 'styled-components';
import useAppContext from '@/hooks/useAppContext';
import { DesktopMenuContent } from './Comopnents/DesktopMenuContent';

function HeaderForCandidates() {
  const [itsMobileMenuOpen, setItsMobileMenuOpen] = useState(false);
  const [itsDesktopMenuOpen, setItsDesktopMenuOpen] = useState(false);

  const {
    colors: { white, primaryBlue, yellow400 },
  } = useTheme();

  const { isMobile } = useAppContext();

  return (
    <>
      <StyledBurger
        open={itsMobileMenuOpen}
        onClick={() => setItsMobileMenuOpen(!itsMobileMenuOpen)}
      >
        <div></div>
        <div></div>
        <div></div>
      </StyledBurger>
      <Container itsOpen={itsMobileMenuOpen}>
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
            <Button>Online course</Button>
            <Button>Coaching</Button>
            <Button>Jobs</Button>
            {isMobile && (
              <>
                <Button>Login</Button>
                <Button>For Companies</Button>
              </>
            )}
          </ButtonsContainer>
          <IconsContainer>
            {!isMobile && (
              <>
                <Button>Login</Button>
                <IconButton>
                  <FontAwesomeIcon
                    icon={faGlobe}
                    size="2xl"
                    style={{ color: primaryBlue }}
                  />
                </IconButton>
                <StyledBurger
                  open={itsDesktopMenuOpen}
                  onClick={() => setItsDesktopMenuOpen(!itsDesktopMenuOpen)}
                  isForDesktop
                >
                  <div></div>
                  <div></div>
                  <div></div>
                </StyledBurger>
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
                  For Companies
                </StdButton>
              </>
            )}
          </IconsContainer>
        </Content>
        <DesktopMenuContent
          itsOpen={itsDesktopMenuOpen}
          setItsOpen={setItsDesktopMenuOpen}
        />
      </Container>
    </>
  );
}

export default HeaderForCandidates;
