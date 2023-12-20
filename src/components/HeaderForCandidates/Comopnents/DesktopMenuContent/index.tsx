import React from "react";

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
import { EPagesNames } from "@/utils/enums/pagesNames.enum";
import { useRouter } from "@/hooks/useRouter";

interface Props {
  itsOpen: boolean;
  setItsOpen(itsOpen: boolean): void;
}

export function DesktopMenuContent({ itsOpen, setItsOpen }: Props) {
  const {
    colors: { blue400 },
  } = useTheme();

  const closeMenu = () => setItsOpen(false)

  const { pushTo } = useRouter(closeMenu)

  return (
    <Container itsOpen={itsOpen}>
      <Header>
        <LogoContainer>
          <Logo alt="" src={LogoImage.src} width={205} height={71} />
        </LogoContainer>
        <CloseButton onClick={closeMenu}>&times;</CloseButton>
      </Header>
      <Content>
        <LeftSideContainer>
          <LeftSideContent>
            {/* <MenuItemContainer onClick={pushTo(EPagesNames.ONLINE_COURSE)}>
              <RSMenuItem>Online Course{"\xa0"}</RSMenuItem>
              <AwesomeIcon />
            </MenuItemContainer> */}
            {/* <MenuItemContainer onClick={pushTo(EPagesNames.COACHING)}>
              <RSMenuItem>Coaching{"\xa0"}</RSMenuItem>
              <AwesomeIcon />
            </MenuItemContainer> */}
                        <MenuItemContainer onClick={pushTo(EPagesNames.ABOUT_US)}>
              <RSMenuItem>About Us{"\xa0"}</RSMenuItem>
              <AwesomeIcon />
            </MenuItemContainer>
            <MenuItemContainer onClick={pushTo(EPagesNames.JOBS)}>
              <RSMenuItem>Talent Pool{"\xa0"}</RSMenuItem>
              <AwesomeIcon />
            </MenuItemContainer>
          </LeftSideContent>
        </LeftSideContainer>
        <RightSideContainer>
          <RightSideContent>
            {/* <MenuItemContainer>
              <LSMenuItem onClick={pushTo(EPagesNames.ABOUT_US)}>
                About Us{"\xa0"}
              </LSMenuItem>
              <AwesomeIcon />
            </MenuItemContainer> */}
            {/* <MenuItemContainer>
              <LSMenuItem onClick={pushTo(EPagesNames.BLOG)}>Blog{"\xa0"}</LSMenuItem>
              <AwesomeIcon />
            </MenuItemContainer> */}
            <MenuItemContainer>
              <LSMenuItem onClick={pushTo(EPagesNames.FAQ)}>FAQ{"\xa0"}</LSMenuItem>
              <AwesomeIcon />
            </MenuItemContainer>
            <Divider />
          </RightSideContent>
          <RightSideContent>
            <Description>
              Inquiries, questions or direct contact? Contact us:
            </Description>
            <MenuItemContainer onClick={pushTo(EPagesNames.CONTACT_US)}>
              <LSMenuItem isLit>Contact Us{"\xa0"}</LSMenuItem>
              <FontAwesomeIcon icon={faArrowRight} size="lg" color={blue400} />
            </MenuItemContainer>
          </RightSideContent>
        </RightSideContainer>
      </Content>
    </Container>
  );
}
