import styled, { css } from 'styled-components';

export const Card = styled.div`
  width: 100%;
  max-width: 540px;
  height: 653px;
  display: flex;
  flex-direction: column;
  border: 1px solid #ececec;
  border-radius: 10px;
  transition: all 0.5s ease;
  box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.25);

  @media (max-width: 992px) {
    max-width: 100%;
  }
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

  h3 {
    font-size: 2rem;
    font-weight: 600;
    z-index: 10;
    font-size: 32px;
  }

  > p {
    color: ${({ theme }) => theme.colors.blue700};
    font-weight: 500;
    font-size: 16px;
  }

  ${({ theme }) => css`
    @media (min-width: ${theme.sizes.mediaQuery}) {
      z-index: 10;
    }
  `}
`;
