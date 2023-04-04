import styled, { css } from 'styled-components';

export const SupraContainer = styled.div`
  width: 100vw;
  padding: 163px 140px;

  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 15;
  background-color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => css`
    @media (max-width: ${theme.sizes.mediaQuery}) {
      min-height: 100vh;
      padding: 50px 20px 300px 20px;
    }
  `}
`;

export const Container = styled.div`
  max-width: 1514px;
`;

export const TitlesContainer = styled.div`
  width: 100%;
  padding: 0 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Subtitle = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  letter-spacing: 1.3px;
  color: ${({ theme }) => theme.colors.blue700};
  padding: 0 163px;

  ${({ theme }) => css`
    @media (max-width: ${theme.sizes.mediaQuery}) {
      font-size: 16px;
      padding: 0 77px;
      text-align: center;
      margin-top: 30px;
    }
  `}
`;

export const Content = styled.div`
  max-height: 460px;
  display: flex;
  flex-direction: row;
  margin-top: 50px;

  @media (max-width: 1395px) {
    flex-direction: column;
    margin-top: 0;
    padding-bottom: 120%;
    align-items: center;
  }
`;

export const ParagraphsContainer = styled.div`
  padding-top: 32px;
  max-width: 473px;

  ${({ theme }) => css`
    @media (max-width: ${theme.sizes.mediaQuery}) {
      padding: 23px 40px;
    }
  `}
`;

export const Paragraph = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: left;

  color: ${({ theme }) => theme.colors.blue700};
`;

export const CarouselContainer = styled.div`
  display: flex;
  width: 100%;
  max-height: 100%;
  margin-left: 19px;

  ${({ theme }) => css`
    @media (max-width: ${theme.sizes.mediaQuery}) {
      margin: 30px 0 0 0;
    }
  `}
`;
