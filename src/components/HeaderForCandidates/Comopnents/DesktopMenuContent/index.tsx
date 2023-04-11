import React from 'react';

import LogoImage from '@/../public/assets/pages/growing-abroad-images/white-logo.png';

import { useTheme } from 'styled-components';
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
} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface Props {
  itsOpen: boolean;
  setItsOpen(itsOpen: boolean): void;
}

export function DesktopMenuContent({ itsOpen, setItsOpen }: Props) {
  const {
    colors: { blue400 },
  } = useTheme();

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
            <MenuItemContainer>
              <RSMenuItem>Online Course{'\xa0'}</RSMenuItem>
              <AwesomeIcon />
            </MenuItemContainer>
            <MenuItemContainer>
              <RSMenuItem>Coaching{'\xa0'}</RSMenuItem>
              <AwesomeIcon />
            </MenuItemContainer>
            <MenuItemContainer>
              <RSMenuItem>Jobs{'\xa0'}</RSMenuItem>
              <AwesomeIcon />
            </MenuItemContainer>
          </LeftSideContent>
        </LeftSideContainer>
        <RightSideContainer>
          <RightSideContent>
            <MenuItemContainer>
              <LSMenuItem>About Us{'\xa0'}</LSMenuItem>
              <AwesomeIcon />
            </MenuItemContainer>
            <MenuItemContainer>
              <LSMenuItem>Blog{'\xa0'}</LSMenuItem>
              <AwesomeIcon />
            </MenuItemContainer>
            <MenuItemContainer>
              <LSMenuItem>FAQ{'\xa0'}</LSMenuItem>
              <AwesomeIcon />
            </MenuItemContainer>
            <Divider />
          </RightSideContent>
          <RightSideContent>
            <Description>
              Inquiries, questions or direct contact? Contact us:
            </Description>
            <MenuItemContainer>
              <LSMenuItem isLit>Contact Us{'\xa0'}</LSMenuItem>
              <FontAwesomeIcon icon={faArrowRight} size="lg" color={blue400} />
            </MenuItemContainer>
          </RightSideContent>
        </RightSideContainer>
      </Content>
    </Container>
  );
}
