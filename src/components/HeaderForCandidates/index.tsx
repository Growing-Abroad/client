import React, { useEffect, useState } from "react";

import GrowingAbroadImage from "@/../public/assets/pages/growing-abroad-images/LOGO-Growing.jpg";
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
  UIButton,
} from "./styles";
import StdButton from "../generics/StdButton/StdButton";
import { useTheme } from "styled-components";
import { DesktopMenuContent } from "./Comopnents/DesktopMenuContent";
import { EPagesNames } from "@/utils/enums/pagesNames.enum";
import { Burger } from "./Comopnents/Burguer";
import { StyledBurgerContainer } from "./Comopnents/Burguer/styles";
import { useRouter } from "@/hooks/useRouter";
import { breakpoints } from "@/utils/constants";
import { useRouter as useNextRouter } from "next/router"

function HeaderForCandidates() {
  const [itsMobileMenuOpen, setItsMobileMenuOpen] = useState(false);
  const [itsDesktopMenuOpen, setItsDesktopMenuOpen] = useState(false);
  const [shouldHaveMobileBehavior, setShouldHaveMobileBehavior] =
    useState(false);
  const [showButtons, setShowButtons] = useState(true);
  const router = useNextRouter()

  const closeMenus = () => {
    setItsDesktopMenuOpen(false)
    setItsMobileMenuOpen(false)
  }

  const { pushTo } = useRouter(closeMenus)

  const {
    colors: { white, blue700, blue400 },
  } = useTheme();


  useEffect(() => {
    function checkShowButtons() {
      if (window.innerWidth < breakpoints.desktop.max) {
        return setShowButtons(false);
      }

      setShowButtons(true);
    }

    function checkIfShouldHaveMobileBehavior() {
      if (window.innerWidth < breakpoints.laptop.max) {
        return setShouldHaveMobileBehavior(true);
      }

      setShouldHaveMobileBehavior(false);
    }

    function checkAll() {
      checkIfShouldHaveMobileBehavior();
      checkShowButtons();
    }


    window.addEventListener("resize", checkAll);

    return () => {
      window.removeEventListener("resize", checkAll);
    };
  }, []);

  return (
    <>
      <Header>
        <LogoContainer>
          <Logo
            src={GrowingAbroadImage.src}
            onClick={pushTo(EPagesNames.DEFAULT)}
          />
        </LogoContainer>
        <IconButton withoutPadding>
          <FontAwesomeIcon
            icon={faGlobe}
            size="2xl"
            style={{ color: blue700 }}
            className="global-icon"
          />
        </IconButton>
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
          backgroundColor: "white",
          display: "flex",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.05)",
          justifyContent: "center",
          position: "fixed",
          zIndex: 500,
        }}
      >
        <Container itsOpen={itsMobileMenuOpen}>
          {!shouldHaveMobileBehavior && (
            <LogoContainer className="desktop">
              <Logo
                src={GrowingAbroadImage.src}
                onClick={pushTo(EPagesNames.DEFAULT)}
              />
            </LogoContainer>
          )}
          <Content>
            <ButtonsContainer>
              { showButtons &&
                (<><Button onClick={pushTo(EPagesNames.ONLINE_COURSE)}>
                Online course
              </Button><Button onClick={pushTo(EPagesNames.COACHING)}>
                  Coaching
                </Button>
                <Button onClick={pushTo(EPagesNames.JOBS)}>
                Talentpool
                </Button>
              <UIButton onClick={() => router.push("https://growingabroad.myelopage.com/s/growingabroad/sign_in")}>login</UIButton></>)
              }
              {shouldHaveMobileBehavior && (
                <>
                  <Button onClick={pushTo(EPagesNames.ONLINE_COURSE)}>
                    Online course
                  </Button>
                  <Button onClick={pushTo(EPagesNames.COACHING)}>
                    Coaching
                  </Button><Button onClick={pushTo(EPagesNames.JOBS)}>Talent Pool</Button>
                  <Button onClick={pushTo(EPagesNames.ABOUT_US)}>
                    About Us
                  </Button>
                 
                  <Button onClick={pushTo(EPagesNames.FAQ)}>FAQ</Button>
                </>
              )}
            </ButtonsContainer>
            {!shouldHaveMobileBehavior && (
              <IconsContainer>
                <>
                  <Burger
                    open={itsDesktopMenuOpen}
                    handleClick={() =>
                      setItsDesktopMenuOpen(!itsDesktopMenuOpen)
                    }
                    isForDesktop
                  />
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
