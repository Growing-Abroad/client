import React, { useState } from "react";
import GrowingAbroadImage from "@/../public/assets/pages/growing-abroad-images/LOGO-Growing.jpg";
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
} from "./styles";
import StdButton from "../generics/StdButton/StdButton";
import { useTheme } from "styled-components";
import useAppContext from "@/hooks/useAppContext";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

enum PageName {
  DEFAULT = "",
  OUR_SERVICES = "our-services",
  ABOUT_US = "about-us",
  FOR_CANDIDATES = "candidates",
}

function HeaderForCompanies() {
  const [itsOpen, setItsOpen] = useState(false);

  const {
    colors: { white, blue700, blue400 },
  } = useTheme();

  const { isMobile } = useAppContext();

  const route = useRouter();

  const pushTo = (page: PageName) => () => route.push(`/${page}`);

  return (
    <>
      <StyledBurger open={itsOpen} onClick={() => setItsOpen(!itsOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </StyledBurger>
      <Container itsOpen={itsOpen}>
        <LogoContainer onClick={pushTo(PageName.DEFAULT)}>
          <Logo src={GrowingAbroadImage.src} />
          {isMobile && (
            <IconButton>
              <AwesomeIcon icon={faGlobe} />
            </IconButton>
          )}
        </LogoContainer>
        <Content>
          <ButtonsContainer>
            <Button onClick={pushTo(PageName.OUR_SERVICES)}>our services</Button>
            <Button onClick={pushTo(PageName.ABOUT_US)}>about us</Button>
            {isMobile && (
              <Button onClick={pushTo(PageName.FOR_CANDIDATES)}>For Candidates</Button>
            )}
          </ButtonsContainer>
          <IconsContainer>
            {!isMobile && (
              <>
                <IconButton>
                  <AwesomeIcon icon={faGlobe} />
                </IconButton>
                <StdButton
                  style={{
                    width: 195,
                    height: 32,
                    fontSize: 18,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 8,
                    color: !isMobile ? white : blue700,
                  }}
                  backgroundColor={!isMobile ? blue700 : white}
                  hover={{
                    backgroundColor: blue400,
                    color: white,
                  }}
                >
                  For Candidates
                </StdButton>
              </>
            )}
          </IconsContainer>
        </Content>
      </Container>
    </>
  );
}

export default HeaderForCompanies;
