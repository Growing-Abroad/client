import React from 'react';

import GrowingAbroadImage from '@/../public/assets/pages/growing-abroad-images/LOGO-Growing.webp';
import GlobeIcon from '@/../public/assets/globe-icon.svg';
import BurgerIcon from '@/../public/assets/burger-icon.svg';

import {
  Container,
  LogoContainer,
  Logo,
  Content,
  ButtonsContainer,
  Button,
  IconsContainer,
  IconButton,
  Icon,
} from './styles';
import StdButton from '../generics/StdButton/StdButton';
import { useTheme } from 'styled-components';

export function HeaderForCandidates() {
  const {
    colors: { white, primaryBlue },
  } = useTheme();

  return (
    <Container>
      <LogoContainer>
        <Logo src={GrowingAbroadImage.src} />
      </LogoContainer>
      <Content>
        <ButtonsContainer>
          <Button>
            <Button>Online course</Button>
          </Button>
          <Button>
            <Button>Coaching</Button>
          </Button>
          <Button>
            <Button>Jobs</Button>
          </Button>
          <Button>
            <Button>Login</Button>
          </Button>
        </ButtonsContainer>
        <IconsContainer>
          <IconButton>
            <Icon src={GlobeIcon} />
          </IconButton>
          <IconButton>
            <Icon src={BurgerIcon} />
          </IconButton>
          <StdButton
            style={{
              width: 195,
              height: 32,
              fontSize: 18,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 8,
              backgroundColor: primaryBlue,
              color: white,
            }}
          >
            For Companies
          </StdButton>
        </IconsContainer>
      </Content>
    </Container>
  );
}
