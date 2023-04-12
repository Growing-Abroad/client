import React, { useCallback, useState } from "react";

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
  StyledBurger,
  AwesomeIcon,
  Header,
  StyledBurgerContainer,
} from "./styles";
import StdButton from "../generics/StdButton/StdButton";
import { useTheme } from "styled-components";
import useAppContext from "@/hooks/useAppContext";
import { DesktopMenuContent } from "./Comopnents/DesktopMenuContent";
import { useRouter } from "next/router";
import { PagesNamesEnum } from "@/utils/enums/pagesNames.enum";

function HeaderForCandidates() {
  const [itsMobileMenuOpen, setItsMobileMenuOpen] = useState(false);
  const [itsDesktopMenuOpen, setItsDesktopMenuOpen] = useState(false);

  const router = useRouter();

  const {
    colors: { white, blue700, blue400 },
  } = useTheme();

  const { isMobile } = useAppContext();

  const onGoToScreen = useCallback(
    (page: PagesNamesEnum) => {
      router.push(`/${page}`);
    },
    [router]
  );

  const handleGoToOnlineCourse = () =>
    onGoToScreen(PagesNamesEnum.ONLINE_COURSE);

  const handleGoToCoaching = () => onGoToScreen(PagesNamesEnum.COACHING);

  const handleGoToJobs = () => onGoToScreen(PagesNamesEnum.JOBS);

  const handleGoToLogin = () => onGoToScreen(PagesNamesEnum.LOGIN);

  const handleGoToForCompanies = () => onGoToScreen(PagesNamesEnum.COMPANIES);

  const handleGoToMain = () => onGoToScreen(PagesNamesEnum.DEFAULT);

  const handleGoAboutUs = () => onGoToScreen(PagesNamesEnum.ABOUT_US);

  const handleGoToCareer = () => onGoToScreen(PagesNamesEnum.CAREER_BLOG);

  const handleGoToFaq = () => onGoToScreen(PagesNamesEnum.FAQ);

  return (
    <>
      <Header>
        <LogoContainer>
          <Logo src={GrowingAbroadImage.src} />
        </LogoContainer>
        <StyledBurgerContainer open={itsMobileMenuOpen}>
          <StyledBurger
            open={itsMobileMenuOpen}
            onClick={() => setItsMobileMenuOpen(!itsMobileMenuOpen)}
            hasALitBackground
            bg={blue700}
          >
            <div></div>
            <div></div>
            <div></div>
          </StyledBurger>
        </StyledBurgerContainer>
      </Header>
      <Container itsOpen={itsMobileMenuOpen}>
        <LogoContainer onClick={handleGoToMain}>
          <Logo src={GrowingAbroadImage.src} />
          {isMobile && (
            <IconButton>
              <FontAwesomeIcon
                icon={faGlobe}
                size="2xl"
                style={{ color: blue700 }}
              />
            </IconButton>
          )}
        </LogoContainer>
        <Content>
          <ButtonsContainer>
            <Button onClick={handleGoToOnlineCourse}>Online course</Button>
            <Button onClick={handleGoToCoaching}>Coaching</Button>
            <Button onClick={handleGoToJobs}>Jobs</Button>
            {isMobile && (
              <>
                <Button onClick={handleGoAboutUs}>About Us</Button>
                <Button onClick={handleGoToCareer}>Career Blog</Button>
                <Button onClick={handleGoToFaq}>FAQ</Button>
              </>
            )}
          </ButtonsContainer>
          <IconsContainer>
            {!isMobile && (
              <>
                <Button onClick={handleGoToLogin}>Login</Button>
                <IconButton>
                  <AwesomeIcon icon={faGlobe} size="2xl" />
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
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 8,
                    boxShadow: "none",
                  }}
                  onClick={handleGoToForCompanies}
                  backgroundColor={!isMobile ? blue700 : white}
                  color={!isMobile ? white : blue700}
                  hover={{
                    backgroundColor: blue400,
                    color: white,
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
