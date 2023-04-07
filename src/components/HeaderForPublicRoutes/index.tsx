import React, { useEffect, useState } from 'react';
import GrowingAbroadImage from '@/../public/assets/pages/growing-abroad-images/LOGO-Growing.webp';
import GrowingAbroadBW from '@/../public/assets/pages/growing-abroad-images/white-logo.png';

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
  SupraContainer,
} from './styles';
import { useTheme } from 'styled-components';
import useAppContext from '@/hooks/useAppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

function HeaderForPublicRoutes() {
  const [itsOpen, setItsOpen] = useState(false);
  const [showAlternativeHeader, setShowAlternativeHeader] = useState(false);

  const {
    colors: { blue700, white },
  } = useTheme();

  const { isMobile } = useAppContext();

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= 100) {
        setShowAlternativeHeader(true);
      } else {
        setShowAlternativeHeader(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <StyledBurger open={itsOpen} onClick={() => setItsOpen(!itsOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </StyledBurger>
      <Container
        className={showAlternativeHeader ? 'animated-header' : ''}
        showAlternativeHeader={showAlternativeHeader}
        itsOpen={itsOpen}
      >
        <LogoContainer>
          <Logo
            src={GrowingAbroadImage.src}
            showAlternativeHeader={!showAlternativeHeader}
          />
          <Logo
            src={GrowingAbroadBW.src}
            showAlternativeHeader={showAlternativeHeader}
          />
          {isMobile && (
            <IconButton>
              <FontAwesomeIcon
                icon={faGlobe}
                size="2xl"
                style={{ color: white }}
              />
            </IconButton>
          )}
        </LogoContainer>
        <Content>
          <ButtonsContainer>
            <Button showAlternativeHeader={showAlternativeHeader}>
              For companies
            </Button>
            <Button showAlternativeHeader={showAlternativeHeader}>
              For candidates
            </Button>
          </ButtonsContainer>
          <IconsContainer>
            {!isMobile && (
              <>
                <IconButton showAlternativeHeader={showAlternativeHeader}>
                  <FontAwesomeIcon
                    className="icon"
                    icon={faGlobe}
                    size="2xl"
                    // style={{ color: white }}
                  />
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
