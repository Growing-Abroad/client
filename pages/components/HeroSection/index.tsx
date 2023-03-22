import React from 'react';

import {
  Container,
  Content,
  Title,
  Subtitle,
  ButtonsContainer,
  TextsContainer,
  ImageBackground,
} from './styles';
import StdButton from '@/components/generics/StdButton/StdButton';
import useAppContext from '@/hooks/useAppContext';
import MainHeroPhoto from '@/../public/assets/main-hero-photo.webp';

function HeroSection() {
  const { isMobile } = useAppContext();
  return (
    <Container>
      <Content>
        <ImageBackground background={MainHeroPhoto.src}>
          <TextsContainer>
            <Title.GeneralColor>
              Matching the best International{'\xa0'}
              <Title.FirstColor>TALENTS{'\xa0'}</Title.FirstColor>
              <Title.GeneralColor>
                with your{'\xa0'}
                <Title.SecondColor>COMPANY{'\xa0'}</Title.SecondColor>
              </Title.GeneralColor>
            </Title.GeneralColor>
            <Subtitle>
              Are you looking for an English Speaking Job in Germany or talents
              for your open positions?
            </Subtitle>
            <ButtonsContainer>
              <StdButton
                style={{
                  width: `${isMobile ? '118px' : '284px'}`,
                  height: `${isMobile ? '40px' : '59px'}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: `${isMobile ? '8px 15px' : '20px 40px;'}`,
                  letterSpacing: '1.3px',
                  whiteSpace: 'nowrap',
                }}
              >
                Find experts now
              </StdButton>
              <StdButton
                style={{
                  width: `${isMobile ? '118px' : '284px'}`,
                  height: `${isMobile ? '40px' : '59px'}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: `${isMobile ? '8px 15px' : '20px 40px;'}`,
                  letterSpacing: '1.3px',
                  whiteSpace: 'nowrap',
                  backgroundColor: '#FFFFFF',
                }}
              >
                Find A Job Now
              </StdButton>
            </ButtonsContainer>
          </TextsContainer>
        </ImageBackground>
      </Content>
    </Container>
  );
}

export default HeroSection;
