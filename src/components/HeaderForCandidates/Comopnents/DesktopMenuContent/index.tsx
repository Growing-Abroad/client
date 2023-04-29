import React, { useCallback } from "react";

import LogoImage from "@/../public/assets/pages/growing-abroad-images/white-logo.png";

import { useTheme } from "styled-components";
import {
  Container,
  Header,
  LogoContainer,
  Logo,
  CloseButton,
  Content,
  LeftSideContainer,
  LeftSideContent,
  RSMenuItem,
  RightSideContainer,
  RightSideContent,
  LSMenuItem,
  Description,
  Divider,
  MenuItemContainer,
  AwesomeIcon,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { EPagesNames } from "@/utils/enums/pagesNames.enum";

interface Props {
  itsOpen: boolean;
  setItsOpen(itsOpen: boolean): void;
}

export function DesktopMenuContent({ itsOpen, setItsOpen }: Props) {
  const {
    colors: { blue400 },
  } = useTheme();

  const route = useRouter();

  const onGoToScreen = useCallback(
    (page: EPagesNames) => {
      route.push(`/${page}`);
      setItsOpen(false);
    },
    [route, setItsOpen]
  );

  const handleGoToCourse = () => onGoToScreen(EPagesNames.ONLINE_COURSE);
  const handleGoToCoaching = () => onGoToScreen(EPagesNames.COACHING);
  const handleGoToJobs = () => onGoToScreen(EPagesNames.JOBS);
  const handleGoToAboutUs = () => onGoToScreen(EPagesNames.ABOUT_US);
  const handleGoToBlog = () => onGoToScreen(EPagesNames.BLOG);
  const handleGoToFaq = () => onGoToScreen(EPagesNames.FAQ);
  const handleGotoContactUs = () => onGoToScreen(EPagesNames.CONTACT_US);

  return (
    <Container itsOpen={itsOpen}>
      <Header>
        <LogoContainer>
          <Logo alt="" src={LogoImage.src} width={205} height={71} />
        </LogoContainer>
        <CloseButton onClick={() => setItsOpen(false)}>&times;</CloseButton>
      </Header>
      <Content>
        <LeftSideContainer>
          <LeftSideContent>
            <MenuItemContainer onClick={handleGoToCourse}>
              <RSMenuItem>Online Course{"\xa0"}</RSMenuItem>
              <AwesomeIcon />
            </MenuItemContainer>
            <MenuItemContainer onClick={handleGoToCoaching}>
              <RSMenuItem>Coaching{"\xa0"}</RSMenuItem>
              <AwesomeIcon />
            </MenuItemContainer>
            <MenuItemContainer onClick={handleGoToJobs}>
              <RSMenuItem>Jobs{"\xa0"}</RSMenuItem>
              <AwesomeIcon />
            </MenuItemContainer>
          </LeftSideContent>
        </LeftSideContainer>
        <RightSideContainer>
          <RightSideContent>
            <MenuItemContainer>
              <LSMenuItem onClick={handleGoToAboutUs}>
                About Us{"\xa0"}
              </LSMenuItem>
              <AwesomeIcon />
            </MenuItemContainer>
            <MenuItemContainer>
              <LSMenuItem onClick={handleGoToBlog}>Blog{"\xa0"}</LSMenuItem>
              <AwesomeIcon />
            </MenuItemContainer>
            <MenuItemContainer>
              <LSMenuItem onClick={handleGoToFaq}>FAQ{"\xa0"}</LSMenuItem>
              <AwesomeIcon />
            </MenuItemContainer>
            <Divider />
          </RightSideContent>
          <RightSideContent>
            <Description>
              Inquiries, questions or direct contact? Contact us:
            </Description>
            <MenuItemContainer onClick={handleGotoContactUs}>
              <LSMenuItem isLit>Contact Us{"\xa0"}</LSMenuItem>
              <FontAwesomeIcon icon={faArrowRight} size="lg" color={blue400} />
            </MenuItemContainer>
          </RightSideContent>
        </RightSideContainer>
      </Content>
    </Container>
  );
}
