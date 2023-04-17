import { theme } from "@styles/theme";
import styled, { css } from "styled-components";
import { variables } from "@styles/global-variables";
import CountUp from "react-countup";
import Image from "next/image";

export const Social = styled.div`
  /* width: min-content; */
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
      max-width: 100px;
      gap: 0;
      justify-content: flex-start;
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
  /* height: 100%; */
  color: white;

  > p {
    font-size: 2.25rem;
  }

  > span {
    font-size: 1.5rem;
    font-weight: 400;
  }

  @media (min-width: ${variables.sizes.mediaQuery}) and (max-width: 1280px) {
    p {
      font-size: calc(0.75rem + ((1vw - 0.26875rem) * 2.214));
      font-weight: 300;
    }

    p,
    span {
      line-height: 1.5rem;
    }

    > span {
      font-size: calc(0.75rem + ((1vw - 0.26875rem) * 0.738));
      font-weight: 300;
      white-space: pre-wrap;
    }
  }

  @media (max-width: ${variables.sizes.mediaQuery}) {
    p {
      font-size: 0.75rem;
      font-weight: 300;
    }

    p,
    span {
      line-height: 1.5rem;
    }

    > span {
      font-size: 0.75rem;
      font-weight: 300;
      white-space: pre-wrap;
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
    @media (min-width: ${theme.sizes.mediaQuery}) {
      font-size: calc(1.25rem + ((1vw - 0.26875rem) * 1.476));
    }
  `}

  ${({ theme }) => css`
    @media (max-width: ${theme.sizes.mediaQuery}) {
      font-size: 1.25rem;
      transition: all 0.5;
    }
  `};
`;

export const IconImage = styled(Image).attrs({
  width: 120,
  height: 120,
})`
  /* width: 120px;
  height: 120px; */

  ${({ theme }) => css`
    @media (min-width: ${theme.sizes.mediaQuery}) and (max-width: 1280px) {
      width: calc(1.875rem + ((1vw - 4.3px) * 8.3026));
      height: calc(1.875rem + ((1vw - 4.3px) * 8.3026));
    }
  `}

  ${({ theme }) => css`
    @media (max-width: ${theme.sizes.mediaQuery}) {
      width: 30px;
      height: 30px;
    }
  `}
`;
