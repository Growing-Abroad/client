import { theme } from '@styles/theme';
import styled, { css } from 'styled-components';
import { variables } from '@styles/global-variables';
import CountUp from 'react-countup';

export const Social = styled.div`
  width: min-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  img {
    cursor: pointer;
  }

  ${({ theme }) => css`
    @media (max-width: ${theme.sizes.mediaQuery}) {
      width: 70px;
    }
  `}
`;

export const SocialText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  line-height: 2.375rem;
  font-weight: 600;
  text-transform: capitalize;
  white-space: nowrap;
  letter-spacing: 1.3px;

  width: 100%;
  color: white;

  > p {
    font-size: 2.25rem;
  }

  > span {
    font-size: 1.5rem;
    font-weight: 400;
    display: block;
    max-width: 100%;
    white-space: pre-wrap;
  }

  @media (max-width: ${variables.sizes.mediaQuery}) {
    > p {
      font-size: 0.75rem;
      transition: all 0.5;
    }

    p,
    span {
      line-height: 0.75rem;
    }

    > span {
      font-size: 0.75rem;
      font-weight: 300;
    }
  }
`;

export const MyCounter = styled(CountUp).attrs({
  start: 0,
  duration: 2.5,
  delay: 0.5,
})`
  font-size: 2.25rem;

  ${({ theme }) => css`
    @media (max-width: ${theme.sizes.mediaQuery}) {
      font-size: 1.25rem;
      transition: all 0.5;
    }
  `};
`;
