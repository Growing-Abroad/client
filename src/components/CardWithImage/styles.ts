import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 540px;
  height: 653px;
  display: flex;
  flex-direction: column;
  border: 1px solid #ececec;
  border-radius: 10px;
  box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.25);

  @media (max-width: 992px) {
    max-width: 100%;
  }

  ${({ theme }) => css`
    @media (max-width: ${theme.sizes.mediaQuery}) {
      max-width: 350px;
      height: 510px;
    }
  `}
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  padding: 30px;
  height: 100%;
  position: relative;
  text-align: justify;
  color: ${({ theme }) => theme.colors.blue700};

  ${({ theme }) => css`
    @media (max-width: ${theme.sizes.mediaQuery}) {
      max-width: 350px;
      padding: 25px 72px 0px 72px;
      z-index: 10;
    }
  `}

  h3 {
    font-size: 2rem;
    font-weight: 600;
    z-index: 10;
    font-size: 32px;

    ${({ theme }) => css`
      @media (max-width: ${theme.sizes.mediaQuery}) {
        font-size: 24px;
      }
    `}
  }

  p {
    color: ${({ theme }) => theme.colors.blue700};
    font-weight: 500;
    font-size: 16px;

    ${({ theme }) => css`
      @media (max-width: ${theme.sizes.mediaQuery}) {
        font-size: 10px;
        text-align: center;
      }
    `}
  }
`;
