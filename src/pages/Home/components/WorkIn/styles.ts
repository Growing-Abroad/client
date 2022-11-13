import styled from "styled-components";
import { theme } from "@/styles/theme";
import { variables } from "@/styles/global-variables";

export const Container = styled.section`
    width: min( 100%, ${variables.sizes.maxWidthAll});
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 26px;
    margin-top: 60px;

    .title {
        font-size: 2.5rem;
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
      .title {
        font-size: 2rem;
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
    margin-top: 16px;

    @media(max-width: ${variables.sizes.mediaQuery}) {
        flex-direction: column;
    }
`

export const Card = styled.article`
    width: 260px;
    display: flex;
    flex-direction: column;
    padding: 16px;
    align-items: center;
    border-radius: 8px;

    h3 {
        font-size: 1.5rem;
        line-height: 2rem;
        margin-bottom: 16px;
        text-align: center;
        font-weight: 600;
    }
    
    img {
        width: 200px;
        margin-bottom: 24px;
    }

    article {
        width: 260px;
        text-align: center;
        margin-bottom: 12px;
        font-size: 1rem;
        line-height: 20px;
    }

    @media(max-width: ${variables.sizes.mediaQuery}) {
        width: 100%;
        text-align: center;

        h3 {
            font-size: 1.250rem;
        }
    }
`