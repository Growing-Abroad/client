import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 130px 145px;

  ${({ theme }) => css`
    @media (max-width: ${theme.sizes.mediaQuery}) {
      padding: 60px 40px;
    }
  `}
`;

export const TitlesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 150px;

  ${({ theme }) => css`
    @media (max-width: ${theme.sizes.mediaQuery}) {
      padding: 0;
    }
  `}
`;

export const Subtitle = styled.h3`
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

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1222px;
  margin-top: 60px;
  gap: 51px;

  @media (max-width: 1185px) {
    flex-direction: column;
  }
`;
