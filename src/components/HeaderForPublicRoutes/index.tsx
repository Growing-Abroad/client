import React, { useEffect, useRef, useState } from "react";
import GrowingAbroadImage from "@/../public/assets/pages/growing-abroad-images/LOGO-Growing.webp";
import GrowingAbroadBWImage from "@/../public/assets/pages/growing-abroad-images/white-logo.png";
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
import { useRouter } from "next/router";

function HeaderForPublicRoutes() {
  const [itsOpen, setItsOpen] = useState(false);
  const [showSecondaryDesktopMenu, setShowSecondaryDesktopMenu] =
    useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const { isMobile } = useAppContext();

  const router = useRouter();

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

  const handleGoToCompaniesScreen = () => router.push("/companies");

  const handleGoToCandidatesScreen = () => router.push("/candidates");

  const handleGoToMain = () => router.push("/");

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
        <LogoContainer onClick={handleGoToMain}>
          {showSecondaryDesktopMenu ? (
            <Logo src={GrowingAbroadImage.src} />
          ) : (
            <Logo src={GrowingAbroadBWImage.src} />
          )}
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
            <Button
              onClick={handleGoToCompaniesScreen}
              showSecondaryDesktopMenu={showSecondaryDesktopMenu}
            >
              For companies
            </Button>
            <Button
              onClick={handleGoToCandidatesScreen}
              showSecondaryDesktopMenu={showSecondaryDesktopMenu}
            >
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
