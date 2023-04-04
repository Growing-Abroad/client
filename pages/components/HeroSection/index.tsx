import React from 'react';

import {
  Container,
  Content,
  Title,
  Subtitle,
  ButtonsContainer,
  TextsContainer,
  SubtitleContainer,
  Video,
  VideoContainer,
  VideoContent,
  VideoBackgroundOpacity,
} from './styles';
import StdButton from '@/components/generics/StdButton/StdButton';
import useAppContext from '@/hooks/useAppContext';
import MainHeroPhoto from '@/../public/assets/main-hero-photo.webp';

function HeroSection() {
  const { isMobile } = useAppContext();
  return (
    <Container>
      <VideoContainer>
        <VideoContent>
          <Video autoPlay loop muted>
            <source src="assets/videos/header-video.mp4" type="video/mp4" />
          </Video>
        </VideoContent>
        <VideoBackgroundOpacity />
      </VideoContainer>
      <Content>
        <TextsContainer>
          {!isMobile ? (
            <Title.Container>
              <Title.GeneralColor>
                Matching the best International
                {'\xa0'}
                <Title.FirstColor>TALENTS{'\xa0'}</Title.FirstColor>
              </Title.GeneralColor>
              <Title.GeneralColor>
                with your{'\xa0'}
                <Title.SecondColor>COMPANY{'\xa0'}</Title.SecondColor>
              </Title.GeneralColor>
            </Title.Container>
          ) : (
            <Title.Container>
              <Title.GeneralColor>Matching</Title.GeneralColor>
              <Title.GeneralColor>the best</Title.GeneralColor>
              <Title.GeneralColor>International</Title.GeneralColor>
              <Title.GeneralColor>
                <Title.FirstColor>TALENTS{'\xa0'}</Title.FirstColor>
                with
              </Title.GeneralColor>
              <Title.GeneralColor>
                your{'\xa0'}
                <Title.SecondColor>COMPANY</Title.SecondColor>
              </Title.GeneralColor>
            </Title.Container>
          )}
          {!isMobile ? (
            <Subtitle>
              Are you looking for an English Speaking Job in Germany or talents
              for your open positions?
            </Subtitle>
          ) : (
            <SubtitleContainer>
              <Subtitle>Are you looking for an English</Subtitle>
              <Subtitle>Speaking Job in Germany or talents</Subtitle>
              <Subtitle>for your open positions?</Subtitle>
            </SubtitleContainer>
          )}
          <ButtonsContainer>
            <StdButton
              style={{
                width: `${isMobile ? '196px' : '284px'}`,
                height: `${isMobile ? '35px' : '59px'}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: `${isMobile ? '8px 15px' : '20px 40px'}`,
                letterSpacing: '1.3px',
                whiteSpace: 'nowrap',
                fontSize: `${isMobile ? '16px' : '20px'}`,
                marginBottom: `${isMobile ? '19px' : '0px'}`,
              }}
            >
              Find experts now
            </StdButton>
            <StdButton
              style={{
                width: `${isMobile ? '177px' : '284px'}`,
                height: `${isMobile ? '35px' : '59px'}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: `${isMobile ? '8px 15px' : '20px 40px'}`,
                letterSpacing: '1.3px',
                whiteSpace: 'nowrap',
                backgroundColor: '#FFFFFF',
                fontSize: `${isMobile ? '16px' : '20px'}`,
              }}
            >
              Find A Job Now
            </StdButton>
          </ButtonsContainer>
        </TextsContainer>
      </Content>
    </Container>
  );
}

export default HeroSection;
