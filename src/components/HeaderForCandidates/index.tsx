import React, { useEffect, useState } from "react";

import GrowingAbroadImage from "@/../public/assets/pages/growing-abroad-images/LOGO-Growing.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

import {
  Container,
  LogoContainer,
  Logo,
  Content,
  ButtonsContainer,
  Button,
  IconsContainer,
  IconButton,
  AwesomeIcon,
  Header,
} from "./styles";
import StdButton from "../generics/StdButton/StdButton";
import { useTheme } from "styled-components";
import { DesktopMenuContent } from "./Comopnents/DesktopMenuContent";
import { useRouter } from "next/router";
import { PagesNamesEnum } from "@/utils/enums/pagesNames.enum";
import { Burger } from "./Comopnents/Burguer";
import { StyledBurgerContainer } from "./Comopnents/Burguer/styles";

function HeaderForCandidates() {
  const [itsMobileMenuOpen, setItsMobileMenuOpen] = useState(false);
  const [itsDesktopMenuOpen, setItsDesktopMenuOpen] = useState(false);
  const localMobileSize = 1160;
  const [shouldHaveMobileBehavior, setShouldHaveMobileBehavior] =
    useState(false);

  const router = useRouter();

  const {
    colors: { white, blue700, blue400 },
  } = useTheme();

  const pushTo = (page: PagesNamesEnum) => () => router.push(`/${page}`);

  useEffect(() => {
    function checkIfShouldHaveMobileBehavior() {
      if (window.innerWidth < localMobileSize) {
        setShouldHaveMobileBehavior(true);
      } else {
        setShouldHaveMobileBehavior(false);
      }
    }

    checkIfShouldHaveMobileBehavior();

    window.addEventListener("resize", checkIfShouldHaveMobileBehavior);

    return () => {
      window.removeEventListener("resize", checkIfShouldHaveMobileBehavior);
    };
  }, []);

  return (
    <>
      <Header>
        <LogoContainer>
          <Logo
            src={GrowingAbroadImage.src}
            onClick={pushTo(PagesNamesEnum.DEFAULT)}
          />
          <IconButton withoutPadding>
            <FontAwesomeIcon
              icon={faGlobe}
              size="2xl"
              style={{ color: blue700 }}
              className="global-icon"
            />
          </IconButton>
        </LogoContainer>
        <StyledBurgerContainer open={itsMobileMenuOpen}>
          <Burger
            bgColor={blue700}
            open={itsMobileMenuOpen}
            handleClick={() => setItsMobileMenuOpen(!itsMobileMenuOpen)}
          />
        </StyledBurgerContainer>
      </Header>
      <div
        style={{
          width: "100%",
          height: shouldHaveMobileBehavior ? "60px" : "90px",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          position: "fixed",
          zIndex: 122,
        }}
      >
        <Container itsOpen={itsMobileMenuOpen}>
          {!shouldHaveMobileBehavior && (
            <LogoContainer>
              <Logo
                src={GrowingAbroadImage.src}
                onClick={pushTo(PagesNamesEnum.DEFAULT)}
              />
            </LogoContainer>
          )}
          <Content>
            <ButtonsContainer>
              <Button onClick={pushTo(PagesNamesEnum.ONLINE_COURSE)}>
                Online course
              </Button>
              <Button onClick={pushTo(PagesNamesEnum.COACHING)}>
                Coaching
              </Button>
              <Button onClick={pushTo(PagesNamesEnum.JOBS)}>Jobs</Button>
              {shouldHaveMobileBehavior && (
                <>
                  <Button onClick={pushTo(PagesNamesEnum.ABOUT_US)}>
                    About Us
                  </Button>
                  <Button onClick={pushTo(PagesNamesEnum.CAREER_BLOG)}>
                    Career Blog
                  </Button>
                  <Button onClick={pushTo(PagesNamesEnum.FAQ)}>FAQ</Button>
                </>
              )}
            </ButtonsContainer>
            {!shouldHaveMobileBehavior && (
              <IconsContainer>
                <>
                  <Button onClick={pushTo(PagesNamesEnum.LOGIN)}>Login</Button>
                  <IconButton>
                    <AwesomeIcon icon={faGlobe} size="2xl" />
                  </IconButton>
                  <Burger
                    open={itsDesktopMenuOpen}
                    handleClick={() =>
                      setItsDesktopMenuOpen(!itsDesktopMenuOpen)
                    }
                    isForDesktop
                  />
                  <StdButton
                    style={{
                      width: 195,
                      height: 32,
                      fontSize: 18,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 8,
                      boxShadow: "none",
                    }}
                    onClick={pushTo(PagesNamesEnum.COMPANIES)}
                    backgroundColor={
                      !shouldHaveMobileBehavior ? blue700 : white
                    }
                    color={!shouldHaveMobileBehavior ? white : blue700}
                    hover={{
                      backgroundColor: blue400,
                      color: white,
                    }}
                  >
                    For Companies
                  </StdButton>
                </>
              </IconsContainer>
            )}
          </Content>
          <DesktopMenuContent
            itsOpen={itsDesktopMenuOpen}
            setItsOpen={setItsDesktopMenuOpen}
          />
        </Container>
      </div>
    </>
  );
}

export default HeaderForCandidates;
