import React, { useState } from 'react';
import GrowingAbroadImage from '@/../public/assets/pages/growing-abroad-images/LOGO-Growing.webp';
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
import { useTheme } from 'styled-components';
import useAppContext from '@/hooks/useAppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

function HeaderForPublicRoutes() {
  const [itsOpen, setItsOpen] = useState(false);
  const { isMobile } = useAppContext();

  const {
    colors: { white },
  } = useTheme();

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
                style={{ color: white }}
              />
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
