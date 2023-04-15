import { theme } from "@styles/theme";
import styled, { css } from "styled-components";
import { variables } from "@styles/global-variables";
import CountUp from "react-countup";

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
  }

  @media (max-width: ${variables.sizes.mediaQuery}) {
    > p {
      font-size: 1.25rem;
    }

    p,
    span {
      line-height: 1.5rem;
    }

    > span {
      font-size: 1.25rem;
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
