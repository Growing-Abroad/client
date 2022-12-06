import styled from "styled-components";
import { theme } from "@/styles/theme";
import { variables } from "@/styles/global-variables";

const { sizes: { maxWidthAll, globalHorizontalPadding, globalHoriznalPaddingMobile } } = variables;

export const Container = styled.section`
  width: min( 100%, ${maxWidthAll});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px ${globalHorizontalPadding};
  margin-top: 20px;
  color: ${theme.colors.primaryBlue};

  .title {
    font-size: 3.25rem;
    font-weight: 600;
    margin: 16px 0px;
    display: flex;
    justify-content: center;
    gap: 8px;
    flex-wrap: wrap;

    span {
        color: ${theme.colors.secondaryBlue}
    }
  }

  @media(max-width: ${variables.sizes.mediaQuery}) {
    padding: 80px ${globalHoriznalPaddingMobile};
    .title {
      font-size: 2.5rem;

    }
  }
`
export const CardSpace = styled.section`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 60px;
  margin-top: 48px;

  @media(max-width: ${variables.sizes.mediaQuery}) {
      flex-direction: column;
  }
`

export const Card = styled.article`
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;

  h3 {
    font-size: 1.75rem;
    line-height: 2.25rem;
    margin-bottom: 16px;
    text-align: center;
    font-weight: 600;
    height: 70px;
    width: 250px;

  }
  
  img {
    width: 250px;
    margin-bottom: 24px;
  }

  article {
    width: 260px;
    text-align: center;
    margin-bottom: 12px;
    font-size: 1.125rem;
    line-height: 1.5rem;
    color: ${theme.colors.primaryBlue}
  }

  @media(max-width: ${variables.sizes.mediaQuery}) {
    width: 100%;
    text-align: center;
  }
`