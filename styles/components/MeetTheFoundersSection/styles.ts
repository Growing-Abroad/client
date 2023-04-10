import styled, { css } from 'styled-components';

export const Container = styled.div`
  padding: 90px 140px;

  ${({ theme }) => css`
    @media (max-width: ${theme.sizes.mediaQuery}) {
      padding: 90px 14px;
    }
  `}
`;

export const TitlesContainer = styled.div`
  width: 100%;
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

  ${({ theme }) => css`
    @media (max-width: ${theme.sizes.mediaQuery}) {
      font-size: 16px;
      line-height: 27px;
      text-align: center;
    }
  `}
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 50px;

  @media (max-width: 1395px) {
    flex-direction: column;
  }
`;

export const TextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${({ theme }) => css`
    @media (max-width: ${theme.sizes.mediaQuery}) {
      padding: 30px 26px;
    }
  `}
`;

export const ContentTitle = styled.h4`
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  letter-spacing: 1.3px;
  color: ${({ theme }) => theme.colors.blue700};

  ${({ theme }) => css`
    @media (max-width: ${theme.sizes.mediaQuery}) {
      font-size: 24px;
      line-height: 29.26px;
    }
  `}
`;

export const ContentDescription = styled.p`
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 20px;
  line-height: 24.26px;
  letter-spacing: 1.3px;
  color: ${({ theme }) => theme.colors.blue700};
  margin-top: 20px;
  text-align: left;

  ${({ theme }) => css`
    @media (max-width: ${theme.sizes.mediaQuery}) {
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
    }
  `}
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.colors.blue400};

  ${({ theme }) => css`
    @media (max-width: ${theme.sizes.mediaQuery}) {
      color: ${({ theme }) => theme.colors.blue700};
    }
  `}
`;

export const CallToAction = styled.div`
  margin-top: 60px;

  ${({ theme }) => css`
    @media (max-width: ${theme.sizes.mediaQuery}) {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
    }
  `}
`;
