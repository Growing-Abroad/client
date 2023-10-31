import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 540px;
  height: 653px;
  display: flex;
  flex-direction: column;
  border: 1px solid #ececec;
  border-radius: 10px;
  box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.25);
  padding: 0;
  margin: 0;

  @media (max-width: 992px) {
    max-width: 100%;
  }

  ${({ theme }) => css`
    @media (max-width: ${theme.sizes.mediaQuery}) {
      max-width: 350px;
      height: 482px;
    }
  `}
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  padding: 30px 70px 0 70px;
  height: 100%;
  position: relative;
  text-align: justify;
  color: ${({ theme }) => theme.colors.blue700};

  ${({ theme }) => css`
    @media (max-width: ${theme.sizes.mediaQuery}) {
      max-width: 350px;
      padding: 25px 50px 0px 50px;
      z-index: 10;
      justify-content: flex-start;
    }
  `}

  @media (max-width: 420px) {
    padding: 25px 5px 0 5px;
  }

  h3 {
    font-size: 2rem;
    font-weight: 600;
    z-index: 10;
    font-size: 32px;
    margin: 0;
    ${({ theme }) => css`
      @media (max-width: ${theme.sizes.mediaQuery}) {
        font-size: 24px;
      }
    `};
  }

  p {
    color: ${({ theme }) => theme.colors.blue700};
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    margin: 0;
    padding: 0;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* specify the maximum number of lines here */
    -webkit-box-orient: vertical;
    /* overflow: hidden; */

    ${({ theme }) => css`
      @media (max-width: ${theme.sizes.mediaQuery}) {
        font-size: 14px;
      }
    `};
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 25px;
`;
