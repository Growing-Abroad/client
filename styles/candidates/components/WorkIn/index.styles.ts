import styled from 'styled-components';
import { variables } from '@styles/global-variables';
import { theme } from '@styles/theme';

const {
  sizes: {
    maxWidthAll,
    globalHorizontalPadding,
    globalHorizontalPaddingMobile,
    fontSizes: { h2 },
  },
} = variables;
const {
  colors: { blue700, blue400 },
} = theme;

export const Container = styled.section`
  max-width: ${maxWidthAll};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px ${globalHorizontalPadding};
  margin-top: 20px;
  color: ${theme.colors.blue700};

  @media (max-width: ${variables.sizes.mediaQuery}) {
    padding: 80px 36px;
  }
`;
export const CardSpace = styled.section`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 38px;
  margin-top: 48px;

  @media (max-width: ${variables.sizes.mediaQuery}) {
    flex-direction: column;
  }
`;

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;

  border: 3px solid transparent;
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  transition: 400ms;
  padding: 50px;
  max-width: 450px;
  height: 500px;

  &:hover {
    border: 3px solid ${blue700};
    transform: scale(1.1);
  }

  h3 {
    font-size: 2rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2.438rem;
    letter-spacing: 1.3px;
    text-align: center;

    height: 78px;
    width: 276px;
    margin-top: 24px;
    margin-bottom: 18px;
    text-align: center;

    display: flex;
    align-items: center;
    text-transform: capitalize;
  }

  .workin-description {
    width: 260px;
    text-align: center;
    margin-bottom: 12px;
    font-size: 1rem;
    line-height: 1.5rem;
    color: ${blue700};
    font-weight: 400;

  }

  @media (max-width: ${variables.sizes.mediaQuery}) {
    width: 100%;
    text-align: center;
    padding: 50px;
    height: unset;

    h3 {
      font-size: 1.5rem;
      line-height: 1.875rem;
    }
  }
`;
