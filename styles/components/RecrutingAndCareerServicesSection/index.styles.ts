import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 100px 140px 125px;
  max-width: ${({ theme }) => theme.sizes.maxWidthAll};
  ${({ theme }) => css`
    @media (max-width: ${theme.sizes.mediaQuery}) {
      padding: 73px 40px 114px;
    }

    @media (max-width: 405px) {
      padding-top: 60px;
    }
  `};
`;

export const TitlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1514px;

  ${({ theme }) => css`
    @media (max-width: ${theme.sizes.mediaQuery}) {
    }
  `}
`;

export const SubtitleContainer = styled.div`
  width: 100%;
  margin-top: 12px;
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
  text-align: center;

  color: ${({ theme }) => theme.colors.blue700};

  ${({ theme }) => css`
    @media (max-width: ${theme.sizes.mediaQuery}) {
      font-size: 16px;
    }
  `}
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  max-width: 1514px;

  margin-top: 60px;

  @media (max-width: 1395px) {
    flex-direction: column;

    align-items: center;
  }
`;

export const CardSeparator = styled.div`
  @media (max-width: 1395px) {
    margin-top: 50px;
  }
`;
