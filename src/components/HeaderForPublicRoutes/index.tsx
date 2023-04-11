import React, { useEffect, useRef, useState } from "react";
import GrowingAbroadImage from "@/../public/assets/pages/growing-abroad-images/LOGO-Growing.webp";
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
} from "./styles";
import { useTheme } from "styled-components";
import useAppContext from "@/hooks/useAppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

function HeaderForPublicRoutes() {
  const [itsOpen, setItsOpen] = useState(false);
  const [showSecondaryDesktopMenu, setShowSecondaryDesktopMenu] =
    useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const { isMobile } = useAppContext();

  const {
    colors: { white },
  } = useTheme();

  useEffect(() => {
    const height = containerRef.current?.offsetHeight ?? 0;
    function handleScroll() {
      if (window.scrollY > height) {
        setShowSecondaryDesktopMenu(true);
      } else {
        setShowSecondaryDesktopMenu(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
        ref={containerRef}
        showSecondaryDesktopMenu={showSecondaryDesktopMenu}
        itsOpen={itsOpen}
      >
        <LogoContainer>
          <Logo src={GrowingAbroadImage.src} />
          {isMobile && (
            <IconButton showSecondaryDesktopMenu={showSecondaryDesktopMenu}>
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
            <Button showSecondaryDesktopMenu={showSecondaryDesktopMenu}>
              For companies
            </Button>
            <Button showSecondaryDesktopMenu={showSecondaryDesktopMenu}>
              For candidates
            </Button>
          </ButtonsContainer>
          <IconsContainer>
            {!isMobile && (
              <>
                <IconButton showSecondaryDesktopMenu={showSecondaryDesktopMenu}>
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
