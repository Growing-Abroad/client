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
  width: min(100%, ${maxWidthAll});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px ${globalHorizontalPadding};
  margin-top: 20px;
  color: ${theme.colors.blue700};

  @media (max-width: ${variables.sizes.mediaQuery}) {
    padding: 80px ${globalHorizontalPaddingMobile};
  }
`;
export const CardSpace = styled.section`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: row;
  justify-content: center;
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
  box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  transition: 500ms;
  padding: 77px 50px;

  &:hover {
    border: 3px solid ${blue700};
    transform: translateY(-20px);
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
  }

  @media (max-width: ${variables.sizes.mediaQuery}) {
    width: 100%;
    text-align: center;
  }
`;
