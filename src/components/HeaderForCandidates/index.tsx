import React, { useCallback, useState } from 'react';

import GrowingAbroadImage from '@/../public/assets/pages/growing-abroad-images/LOGO-Growing.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

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
} from './styles';
import StdButton from '../generics/StdButton/StdButton';
import { useTheme } from 'styled-components';
import useAppContext from '@/hooks/useAppContext';
import { DesktopMenuContent } from './Comopnents/DesktopMenuContent';
import { useRouter } from 'next/router';

enum CandidatesMenuPages {
  ONLINE_COURSE = 'online-course',
  COACHING = 'coaching',
  JOBS = 'jobs',
  LOGIN = 'login',
  FOR_COMPANIES = 'for-companies',
}

function HeaderForCandidates() {
  const [itsMobileMenuOpen, setItsMobileMenuOpen] = useState(false);
  const [itsDesktopMenuOpen, setItsDesktopMenuOpen] = useState(false);

  const router = useRouter();

  const {
    colors: { white, blue700, blue400 },
  } = useTheme();

  const { isMobile } = useAppContext();

  const onGoToNextScreen = useCallback(
    (page: CandidatesMenuPages) => {
      router.push(`/${page}`);
    },
    [router],
  );

  const handleGoToOnlineCourse = () =>
    onGoToNextScreen(CandidatesMenuPages.ONLINE_COURSE);

  const handleGoToCoaching = () =>
    onGoToNextScreen(CandidatesMenuPages.COACHING);

  const handleGoToJobs = () => onGoToNextScreen(CandidatesMenuPages.JOBS);

  const handleGoToLogin = () => onGoToNextScreen(CandidatesMenuPages.LOGIN);

  const handleGoToForCompanies = () =>
    onGoToNextScreen(CandidatesMenuPages.FOR_COMPANIES);

  return (
    <>
      <Header>
        <LogoContainer>
          <Logo src={GrowingAbroadImage.src} />
        </LogoContainer>
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
      </Header>
      <Container itsOpen={itsMobileMenuOpen}>
        <LogoContainer>
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
                <Button onClick={handleGoToLogin}>Login</Button>
                <Button onClick={handleGoToForCompanies}>For Companies</Button>
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
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 8,
                    boxShadow: 'none',
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
